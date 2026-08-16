// 1. Полная заморозка оригинальной игры и включение бессмертия
Runner.instance_.gameOver = function(){};
Runner.config.ACCELERATION = 0;
Runner.config.SPEED = 0;
Runner.instance_.currentSpeed = 0;
Runner.instance_.setSpeed = function() { this.currentSpeed = 0; };

// 2. Создаем контейнер для блоков уровня
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
blockContainer.style.pointerEvents = 'none';
gameCanvas.parentElement.appendChild(blockContainer);

// 3. Карта уровня (X, Y, Ширина)
let levelBlocks = [
    { x: 250, y: 95, w: 90 },  
    { x: 400, y: 65, w: 100 }, 
    { x: 580, y: 65, w: 70 },  
    { x: 720, y: 95, w: 120 }
];
let worldScrollX = 0;

function renderLevel() {
    blockContainer.innerHTML = '';
    levelBlocks.forEach(b => {
        let screenX = b.x - worldScrollX;
        if (screenX + b.w > 0 && screenX < 600) {
            const blockEl = document.createElement('div');
            blockEl.style.position = 'absolute';
            blockEl.style.left = screenX + 'px';
            blockEl.style.top = b.y + 'px';
            blockEl.style.width = b.w + 'px';
            blockEl.style.height = '12px';
            blockEl.style.backgroundColor = '#535353';
            blockEl.style.border = '2px solid #333';
            blockContainer.appendChild(blockEl);
        }
    });
}

// 4. СВОЯ КАСТОМНАЯ ФИЗИКА (БЕЗ ИГРОВЫХ БАГОВ)
let customY = 100;        // Наша высота (100 — это земля)
let customYSpeed = 0;     // Скорость падения/взлета
let isCustomJumping = false; 

// Полностью ломаем стандартный прыжок игры, чтобы он не мешал нам
Runner.instance_.tRex.startJump = function() {};

setInterval(() => {
    const tRex = Runner.instance_.tRex;
    if (!tRex) return;

    // Применяем гравитацию, если мы в воздухе
    if (customY < 100) {
        customYSpeed += 0.3; // Сила тяжести
    }

    customY += customYSpeed;

    // Проверка приземления на новые блоки
    let onPlatform = false;
    const trexX = 20;
    const trexWidth = 40;

    levelBlocks.forEach(b => {
        let screenX = b.x - worldScrollX;
        // Если мы находимся над платформой
        if (trexX + trexWidth > screenX && trexX < screenX + b.w) {
            // Если ноги падают прямо на платформу
            if (customY + 40 >= b.y && customY + 20 <= b.y && customYSpeed > 0) {
                customY = b.y - 40; // Встаем на платформу
                customYSpeed = 0;
                isCustomJumping = false;
                onPlatform = true;
            }
        }
    });

    // Защита: жесткое приземление на землю
    if (customY >= 100) {
        customY = 100;
        customYSpeed = 0;
        isCustomJumping = false;
    }

    // Принудительно передаем наши идеальные координаты динозаврику
    tRex.yPos = customY;
    tRex.jumping = isCustomJumping; // Обманываем анимацию ног
}, 15);

// 5. Управление
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
    // ПРЫЖОК (Пробел или Стрелка Вверх) — теперь сработает ВСЕГДА
    if ((event.keyCode === 32 || event.keyCode === 38) && !isCustomJumping) {
        customYSpeed = -6.5; // Сила толчка вверх
        isCustomJumping = true;
    }
});

renderLevel();
console.log("🚀 НОВАЯ СУПЕР-СТАБИЛЬНАЯ ФИЗИКА ЗАГРУЖЕНА!");
console.log("👉 Нажмите Пробел один раз для старта, а затем прыгайте и ходите стрелками!");