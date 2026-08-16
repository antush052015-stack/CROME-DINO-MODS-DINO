// 1. Полная заморозка оригинальной игры и включение бессмертия
Runner.instance_.gameOver = function(){};
Runner.config.ACCELERATION = 0;
Runner.config.SPEED = 0;
Runner.instance_.currentSpeed = 0;
Runner.instance_.setSpeed = function() { this.currentSpeed = 0; };

// 2. Создаем контейнер для кастомных блоков
const gameCanvas = document.querySelector('.runner-canvas');
let blockContainer = document.getElementById('custom-level-container');
if (blockContainer) blockContainer.remove();
blockContainer = document.createElement('div');
blockContainer.id = 'custom-level-container';
blockContainer.style.position = 'absolute';
blockContainer.style.left = gameCanvas.offsetLeft + 'px';
blockContainer.style.top = gameCanvas.offsetTop + 'px';
blockContainer.style.width = gameCanvas.width + 'px';
blockContainer.style.height = gameCanvas.height + 'px';
blockContainer.style.overflow = 'hidden';
blockContainer.style.pointerEvents = 'none'; // Чтобы клики сквозь него шли на холст
gameCanvas.parentElement.appendChild(blockContainer);

// 3. Динамическая база данных нашего уровня (изначально пустая)
let levelBlocks = [];
let worldScrollX = 0; // Насколько мы ушли вправо от старта

// Функция отрисовки блоков
function renderLevel() {
    blockContainer.innerHTML = '';
    levelBlocks.forEach(b => {
        let screenX = b.x - worldScrollX;
        // Показываем блок, только если он в поле зрения экрана (ширина 600)
        if (screenX + b.w > 0 && screenX < 600) {
            const blockEl = document.createElement('div');
            blockEl.style.position = 'absolute';
            blockEl.style.left = screenX + 'px';
            blockEl.style.top = b.y + 'px';
            blockEl.style.width = b.w + 'px';
            blockEl.style.height = '15px';
            blockEl.style.backgroundColor = '#a0522d'; // Кирпичный цвет для редактора
            blockEl.style.border = '2px solid #5c2e16';
            blockEl.style.borderRadius = '2px';
            blockContainer.appendChild(blockEl);
        }
    });
}

// 4. МЫШКА-РЕДАКТОР: Строим блоки по клику!
gameCanvas.style.cursor = 'crosshair'; // Меняем курсор на прицел-крестик
gameCanvas.addEventListener('mousedown', (event) => {
    // Получаем точные координаты клика относительно игрового поля
    const rect = gameCanvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Вычисляем глобальную координату X с учетом прокрутки мира
    const globalX = clickX + worldScrollX - 40; // -40 чтобы блок строился по центру мышки

    // Добавляем созданный блок в массив уровня
    levelBlocks.push({
        x: globalX,
        y: clickY,
        w: 80 // Стандартная ширина блока
    });

    renderLevel();
    console.log(`🧱 Блок построен на позиции: X=${Math.round(globalX)}, Y=${Math.round(clickY)}`);
});

// 5. Стабильная физика прыжков и платформ
let customY = 100;
let customYSpeed = 0;
let isCustomJumping = false;
Runner.instance_.tRex.startJump = function() {};

setInterval(() => {
    const tRex = Runner.instance_.tRex;
    if (!tRex) return;

    if (customY < 100) customYSpeed += 0.35; // Гравитация
    customY += customYSpeed;

    let onPlatform = false;
    const trexX = 20;
    const trexWidth = 40;

    levelBlocks.forEach(b => {
        let screenX = b.x - worldScrollX;
        // Проверка коллизии с кастомными блоками
        if (trexX + trexWidth > screenX && trexX < screenX + b.w) {
            if (customY + 40 >= b.y && customY + 20 <= b.y && customYSpeed > 0) {
                customY = b.y - 40;
                customYSpeed = 0;
                isCustomJumping = false;
                onPlatform = true;
            }
        }
    });

    if (customY >= 100) {
        customY = 100;
        customYSpeed = 0;
        isCustomJumping = false;
    }

    tRex.yPos = customY;
    tRex.jumping = isCustomJumping;
}, 15);

// 6. Управление (Стрелочки + Пробел)
document.addEventListener('keydown', (event) => {
    const inst = Runner.instance_;
    if (!inst) return;

    if (event.keyCode === 39) { // Вправо
        worldScrollX += 20;
        inst.horizon.obstacles.forEach(obs => obs.xPos -= 20);
        inst.distanceRan += 4;
        renderLevel();
    }
    if (event.keyCode === 37) { // Влево
        worldScrollX = Math.max(0, worldScrollX - 20);
        inst.horizon.obstacles.forEach(obs => obs.xPos += 20);
        inst.distanceRan = Math.max(0, inst.distanceRan - 4);
        renderLevel();
    }
    if ((event.keyCode === 32 || event.keyCode === 38) && !isCustomJumping) {
        customYSpeed = -6.8; // Высота прыжка
        isCustomJumping = true;
    }
});

console.log("🏗️ РЕДАКТОР УРОВНЕЙ АКТИВИРОВАН!");
console.log("👉 Кликайте МЫШКОЙ по экрану игры, чтобы ставить блоки где угодно!");
console.log("👉 Стрелки ВЛЕВО/ВПРАВО — ходить по миру, ПРОБЕЛ — прыгать.");
