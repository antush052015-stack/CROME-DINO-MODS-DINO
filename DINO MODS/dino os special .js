const cnv = document.querySelector(".runner-canvas");
const ctx = cnv.getContext("2d");
const cont = cnv.parentElement;
cont.style.position = "relative";
let state = "MENU"; let page = 1; let tool = "block"; let scX = 0; let cY = 100; let cYSp = 0; let cJmp = false; let levelBlocks = [];
let savedLevels = [];
let selectedBlock = null;
let resizeMode = false;
let animationsEnabled = true;
let specialBlocksEnabled = true;
let coinCount = 0;
let coinDisplayEnabled = false;
let debugMode = false;

const blockTypes = {
    block: { name: 'Блок', css: 'background:#535353;border:2px solid #333;', solid: true },
    cactus: { name: 'Кактус', css: '', solid: false, deadly: true, useSprite: true },
    gold: { name: 'Золото', css: 'background:linear-gradient(45deg,#FFD700,#FFA500);border:2px solid #DAA520;', solid: true, animated: true },
    ice: { name: 'Лёд', css: 'background:linear-gradient(180deg,#E0F7FF,#87CEEB);border:2px solid #4682B4;', solid: true, animated: true },
    batut: { name: 'Батут', css: 'background:linear-gradient(180deg,#FF69B4,#FF1493);border:3px solid #CC0066;border-radius:50% 50% 0 0;', solid: false, bouncy: true, animated: true },
    lava: { name: 'Лава', css: 'background:linear-gradient(180deg,#FF6600,#FF0000);border:2px solid #990000;', solid: false, deadly: true, animated: true },
    water: { name: 'Вода', css: 'background:linear-gradient(180deg,#00CCFF,#0066CC);border:2px solid #004499;', solid: false, animated: true },
    cloud: { name: 'Облако', css: 'background:#FFF;border:2px solid #CCC;border-radius:20px;', solid: true, animated: true },
    portal: { name: 'Портал', css: 'background:radial-gradient(circle,#AA00FF,#440088);border:3px solid #220044;border-radius:50%;', solid: false, teleport: true, animated: true },
    mover: { name: 'Движ.блок', css: 'background:linear-gradient(90deg,#FF6600,#FF9900);border:2px solid #CC4400;', solid: true, moving: true, animated: true },
    wood: { name: 'Дерево', css: 'background:linear-gradient(90deg,#8B4513,#6B3410);border:2px solid #4A2200;', solid: true },
    stone: { name: 'Камень', css: 'background:linear-gradient(135deg,#999,#666);border:2px solid #444;', solid: true },
    sand: { name: 'Песок', css: 'background:#F4E4C1;border:2px solid #D4B896;', solid: false },
    metal: { name: 'Металл', css: 'background:linear-gradient(180deg,#E0E0E0,#A0A0A0);border:2px solid #707070;', solid: true },
    glass: { name: 'Стекло', css: 'background:rgba(200,220,255,0.4);border:2px solid #AACCFF;', solid: true },
    diamond: { name: 'Алмаз', css: 'background:linear-gradient(135deg,#E0FFFF,#00CCCC);border:2px solid #009999;clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);', solid: true, animated: true },
    emerald: { name: 'Изумруд', css: 'background:linear-gradient(135deg,#90FF90,#00CC66);border:2px solid #009944;clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);', solid: true, animated: true },
    ruby: { name: 'Рубин', css: 'background:linear-gradient(135deg,#FF9999,#CC0000);border:2px solid #990000;clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);', solid: true, animated: true },
    spike: { name: 'Шип', css: 'background:#CCC;border:1px solid #999;clip-path:polygon(50% 0%,0% 100%,100% 100%);', solid: false, deadly: true },
    spring: { name: 'Пружина', css: 'background:repeating-linear-gradient(90deg,#FFA500,#FFA500 5px,#CC7700 5px,#CC7700 10px);border:2px solid #995500;', solid: false, bouncy: true, animated: true },
    mushroom: { name: 'Гриб', css: 'background:radial-gradient(circle at 50% 30%,#FF0000,#990000);border:2px solid #660000;border-radius:50% 50% 0 0;', solid: true, animated: true },
    star: { name: 'Звезда', css: 'background:#FFFF00;border:2px solid #CCAA00;clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);', solid: false, animated: true },
    heart: { name: 'Сердце', css: 'background:#FF0000;', solid: false, animated: true },
    bomb: { name: 'Бомба', css: 'background:radial-gradient(circle at 40% 40%,#555,#111);border:2px solid #000;border-radius:50%;', solid: false, deadly: true, animated: true },
    clock: { name: 'Часы', css: 'background:#FFF;border:3px solid #333;border-radius:50%;', solid: false, animated: true },
    key: { name: 'Ключ', css: 'background:#FFD700;border:2px solid #AA8800;border-radius:50%;', solid: false, animated: true },
    chest: { name: 'Сундук', css: 'background:linear-gradient(180deg,#A07020,#6B4200);border:3px solid #442200;', solid: true },
    grass: { name: 'Трава', css: 'background:linear-gradient(180deg,#33DD33,#228B22);border:2px solid #117711;', solid: false },
    snow: { name: 'Снег', css: 'background:linear-gradient(180deg,#FFFFFF,#E0F0FF);border:2px solid #CCE5FF;', solid: false },
    mud: { name: 'Грязь', css: 'background:radial-gradient(ellipse,#8B6914,#5C4200);border:2px solid #3A2500;', solid: false },
    fire: { name: 'Огонь', css: 'background:linear-gradient(180deg,#FFFF00,#FF6600,#FF0000);border:2px solid #990000;clip-path:polygon(50% 0%,65% 20%,75% 40%,50% 30%,45% 50%,70% 60%,50% 100%,30% 70%,20% 50%,30% 30%,40% 15%);', solid: false, deadly: true, animated: true }
};

if (!window.originalGameOverBackup && window.Runner && Runner.instance_) { window.originalGameOverBackup = Runner.instance_.gameOver; }
if (!window.originalUpdateObstaclesBackup && window.Runner && Runner.instance_?.horizon) { window.originalUpdateObstaclesBackup = Runner.instance_.horizon.updateObstacles; }
if (!window.originalCheckCollisionBackup && window.Runner && Runner.instance_) { window.originalCheckCollisionBackup = Runner.instance_.checkForCollision; }
if (!window.originalTrexStartJump && window.Runner && Runner.instance_?.tRex) { window.originalTrexStartJump = Runner.instance_.tRex.startJump; }

let bCont = document.getElementById("custom-level-container"); if (bCont) bCont.remove();
bCont = document.createElement("div"); bCont.id = "custom-level-container";
bCont.style.position = "absolute"; bCont.style.left = cnv.offsetLeft + "px"; bCont.style.top = cnv.offsetTop + "px"; bCont.style.width = cnv.width + "px"; bCont.style.height = cnv.height + "px"; bCont.style.overflow = "hidden"; bCont.style.pointerEvents = "none"; cont.appendChild(bCont);

const coinCounterEl = document.createElement('div');
coinCounterEl.id = 'coin-counter';
coinCounterEl.style.cssText = 'position:fixed; top:10px; left:50%; transform:translateX(-50%); color:gold; font-size:16px; font-weight:bold; z-index:99999; background:rgba(0,0,0,0.8); padding:5px 15px; border-radius:10px; display:' + (coinDisplayEnabled ? 'block' : 'none') + ';';
document.body.appendChild(coinCounterEl);

function updateCoinCounter() {
    coinCounterEl.style.display = coinDisplayEnabled ? 'block' : 'none';
    coinCounterEl.textContent = '🪙 ' + coinCount;
}

let menu = document.getElementById("d-men"); if (menu) menu.remove();
menu = document.createElement("div"); menu.id = "d-men";
menu.style.cssText = 'position:absolute; left:' + cnv.offsetLeft + 'px; top:' + cnv.offsetTop + 'px; width:' + cnv.width + 'px; height:' + cnv.height + 'px; background:#f7f7f7; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:20000; font-family:monospace;';
cont.appendChild(menu);

function renderMenu() {
    menu.style.display = "flex";
    if (page === 1) {
        menu.innerHTML = '<h1 style="color:#535353;font-size:20px;margin-bottom:15px;">DINO MAKER OS SPECIAL</h1><div style="display:flex;gap:10px;margin-bottom:10px;"><button id="p-cl" style="padding:10px;background:#535353;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">КЛАССИКА</button><button id="p-ed" style="padding:10px;background:#d35400;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">РЕДАКТОР</button></div><button id="m-nxt" style="padding:8px 20px;background:#ccc;border:none;border-radius:4px;cursor:pointer;">▶▶ ТЕСТЫ</button><button id="m-settings" style="position:absolute;top:10px;right:10px;padding:5px 10px;background:#ccc;border:none;border-radius:4px;cursor:pointer;">⚙️</button>';
    } else if (page === 2) {
        menu.innerHTML = '<h1 style="color:#8e44ad;font-size:18px;margin-bottom:15px;">ТЕСТЫ</h1><div style="display:flex;gap:10px;margin-bottom:10px;"><button id="p-pl" style="padding:8px;background:#8e44ad;color:white;border:none;border-radius:4px;cursor:pointer;">ПЛАТФОРМЕР</button><button id="p-or" style="padding:8px;background:#2ecc71;color:white;border:none;border-radius:4px;cursor:pointer;">ОРИГИНАЛ ТЕСТ</button></div><button id="m-prv" style="padding:8px 20px;background:#ccc;border:none;border-radius:4px;cursor:pointer;">◀◀ НАЗАД</button>';
    } else if (page === 3) {
        menu.innerHTML = '<h1 style="color:#ff6600;font-size:18px;margin-bottom:15px;">⚙️ НАСТРОЙКИ</h1><div style="margin-bottom:10px;"><label style="cursor:pointer;font-size:14px;"><input type="checkbox" id="anim-toggle" ' + (animationsEnabled ? 'checked' : '') + '> ✨ Анимации</label></div><div style="margin-bottom:10px;"><label style="cursor:pointer;font-size:14px;"><input type="checkbox" id="special-toggle" ' + (specialBlocksEnabled ? 'checked' : '') + '> 🎮 Доп. блоки</label></div><div style="margin-bottom:10px;"><label style="cursor:pointer;font-size:14px;"><input type="checkbox" id="debug-toggle" ' + (debugMode ? 'checked' : '') + '> 🐛 Режим отладки</label></div><div style="margin-bottom:15px;"><button id="rand-btn" style="padding:8px 15px;background:#f39c12;color:white;border:none;border-radius:4px;cursor:pointer;">🎲 Рандомная генерация</button></div><button id="m-back-settings" style="padding:8px 20px;background:#ccc;border:none;border-radius:4px;cursor:pointer;">◀◀ НАЗАД</button>';
    } else if (page === 4) {
        menu.innerHTML = '<h1 style="color:#f39c12;font-size:18px;margin-bottom:15px;">🎲 РАНДОМНАЯ ГЕНЕРАЦИЯ</h1><p style="margin-bottom:10px;font-size:12px;">Настройки случайного уровня:</p><div style="margin-bottom:10px;"><label style="font-size:12px;">Количество блоков: <input type="number" id="rand-count" value="15" min="5" max="50" style="width:60px;"></label></div><div style="margin-bottom:15px;"><label style="font-size:12px;">Сложность: <select id="rand-diff"><option value="easy">Лёгкая</option><option value="medium" selected>Средняя</option><option value="hard">Сложная</option></select></label></div><button id="rand-generate" style="padding:10px 30px;background:#f39c12;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">🎲 СГЕНЕРИРОВАТЬ</button><button id="m-back-rand" style="margin-top:10px;padding:8px 20px;background:#ccc;border:none;border-radius:4px;cursor:pointer;">◀◀ НАЗАД</button>';
    }
    attachMenuEvents();
}

function attachMenuEvents() {
    document.getElementById("p-cl")?.addEventListener('click', () => { 
        state = "CLASSIC"; menu.style.display = "none"; btnB.style.display = "block"; bCont.innerHTML = ""; 
        if (Runner.instance_) {
            Runner.config.ACCELERATION = 0.001; Runner.config.SPEED = 6; Runner.instance_.currentSpeed = 6; Runner.instance_.playing = true; Runner.instance_.activated = true;
            if (window.originalUpdateObstaclesBackup && Runner.instance_.horizon) Runner.instance_.horizon.updateObstacles = window.originalUpdateObstaclesBackup;
            if (window.originalCheckCollisionBackup) Runner.instance_.checkForCollision = window.originalCheckCollisionBackup;
            if (Runner.instance_.tRex) { Runner.instance_.tRex.yPos = Runner.instance_.tRex.groundYPos; if (window.originalTrexStartJump) Runner.instance_.tRex.startJump = window.originalTrexStartJump; else delete Runner.instance_.tRex.startJump; }
            if (window.originalGameOverBackup) Runner.instance_.gameOver = window.originalGameOverBackup;
        }
    });
    document.getElementById("p-ed")?.addEventListener('click', () => { state = "EDIT"; menu.style.display = "none"; btnB.style.display = "block"; pan.style.display = "flex"; savePanel.style.display = "flex"; cnv.style.cursor = "crosshair"; freezeEngine(); renderLevel(); });
    document.getElementById("p-pl")?.addEventListener('click', () => { state = "PLATFORMER"; menu.style.display = "none"; btnB.style.display = "block"; cY = 100; cYSp = 0; scX = 0; cJmp = false; freezeEngine(); renderLevel(); });
    document.getElementById("p-or")?.addEventListener('click', () => { 
        state = "ORIGINAL_TEST"; menu.style.display = "none"; btnB.style.display = "block"; 
        if (Runner.instance_) { Runner.config.SPEED = 6; Runner.instance_.currentSpeed = 6; Runner.instance_.activated = true; if (Runner.instance_.tRex) Runner.instance_.tRex.yPos = Runner.instance_.tRex.groundYPos; }
        renderLevel(); 
    });
    document.getElementById("m-nxt")?.addEventListener('click', () => { page = 2; renderMenu(); });
    document.getElementById("m-prv")?.addEventListener('click', () => { page = 1; renderMenu(); });
    document.getElementById("m-settings")?.addEventListener('click', () => { page = 3; renderMenu(); });
    document.getElementById("m-back-settings")?.addEventListener('click', () => { page = 1; renderMenu(); });
    document.getElementById("m-back-rand")?.addEventListener('click', () => { page = 3; renderMenu(); });
    document.getElementById("anim-toggle")?.addEventListener('change', (e) => { animationsEnabled = e.target.checked; });
    document.getElementById("special-toggle")?.addEventListener('change', (e) => { specialBlocksEnabled = e.target.checked; buildToolButtons(); renderLevel(); });
    document.getElementById("debug-toggle")?.addEventListener('change', (e) => { debugMode = e.target.checked; console.log('🐛 Отладка: ' + (debugMode ? 'ВКЛ' : 'ВЫКЛ')); });
    document.getElementById("rand-btn")?.addEventListener('click', () => { page = 4; renderMenu(); });
    document.getElementById("rand-generate")?.addEventListener('click', () => {
        const count = parseInt(document.getElementById('rand-count').value) || 15;
        const difficulty = document.getElementById('rand-diff').value;
        
        levelBlocks = [];
        const types = Object.keys(blockTypes);
        
        for (let i = 0; i < count; i++) {
            let type;
            if (difficulty === 'easy') {
                const safeTypes = ['block', 'gold', 'ice', 'cloud', 'wood', 'stone', 'metal', 'glass', 'mushroom', 'chest'];
                type = safeTypes[Math.floor(Math.random() * safeTypes.length)];
            } else if (difficulty === 'hard') {
                const hardTypes = ['cactus', 'lava', 'spike', 'bomb', 'fire', 'portal', 'mover', 'batut', 'spring'];
                type = hardTypes[Math.floor(Math.random() * hardTypes.length)];
            } else {
                type = types[Math.floor(Math.random() * types.length)];
            }
            
            levelBlocks.push({
                x: i * 80 + Math.random() * 40,
                y: 30 + Math.random() * 70,
                w: 50,
                h: 12,
                type: type
            });
        }
        
        state = "EDIT"; menu.style.display = "none"; btnB.style.display = "block"; 
        pan.style.display = "flex"; savePanel.style.display = "flex"; freezeEngine(); renderLevel();
    });
}

function freezeEngine() {
    if (Runner.instance_) {
        Runner.config.ACCELERATION = 0; 
        Runner.config.SPEED = 0; 
        Runner.instance_.currentSpeed = 0;
        Runner.instance_.gameOver = function() {};
        if (Runner.instance_.tRex) Runner.instance_.tRex.startJump = function() {};
    }
}

// Режим отладки — секретные комбинации
const debugKeys = [];
document.addEventListener('keydown', function(e) {
    debugKeys.push(e.key);
    if (debugKeys.length > 10) debugKeys.shift();
    
    // Секретная комбинация: D-E-B-U-G
    const combo = debugKeys.join('').toUpperCase();
    if (combo.includes('DEBUG')) {
        debugMode = !debugMode;
        console.log('🐛 СЕКРЕТНАЯ КОМБИНАЦИЯ! Отладка: ' + (debugMode ? 'ВКЛ' : 'ВЫКЛ'));
        debugKeys.length = 0;
        
        if (debugMode) {
            // Показать отладочную информацию
            console.log('📊 levelBlocks:', levelBlocks.length);
            console.log('📍 state:', state);
            console.log('🔧 tool:', tool);
            console.log('📷 scX:', scX);
        }
    }
});

let pan = document.getElementById("d-pan"); if (pan) pan.remove();
pan = document.createElement("div"); pan.id = "d-pan";
pan.style.cssText = 'position:absolute; left:' + cnv.offsetLeft + 'px; top:' + (cnv.offsetTop - 60) + 'px; width:' + cnv.width + 'px; height:50px; background:#222; display:none; align-items:center; justify-content:center; gap:2px; z-index:15000; border-radius:4px; overflow-y:auto; flex-wrap:wrap; padding:2px;';
cont.appendChild(pan);

function buildToolButtons() {
    pan.innerHTML = '<b style="color:gold;font-size:10px;margin-right:5px;">БЛОКИ:</b>';
    Object.keys(blockTypes).forEach(key => {
        const bt = blockTypes[key];
        if (!specialBlocksEnabled && key !== 'block' && key !== 'cactus') return;
        const btn = document.createElement('button');
        btn.innerText = bt.name;
        btn.style.cssText = 'background:' + (tool === key ? 'white' : '#555') + ';color:' + (tool === key ? 'black' : 'white') + ';border:none;padding:2px 5px;cursor:pointer;border-radius:3px;font-size:9px;margin:1px;';
        btn.onclick = () => { tool = key; buildToolButtons(); renderLevel(); };
        pan.appendChild(btn);
    });
    const separator = document.createElement('div');
    separator.style.cssText = 'width:2px;height:25px;background:#444;margin:0 5px;';
    pan.appendChild(separator);
    const eraseBtn = document.createElement('button');
    eraseBtn.innerText = 'ЛАСТИК';
    eraseBtn.style.cssText = 'background:' + (tool === 'erase' ? 'white' : '#c0392b') + ';color:' + (tool === 'erase' ? 'black' : 'white') + ';border:none;padding:3px 8px;cursor:pointer;border-radius:3px;font-size:9px;';
    eraseBtn.onclick = () => { tool = 'erase'; buildToolButtons(); renderLevel(); };
    pan.appendChild(eraseBtn);
    const clearBtn = document.createElement('button');
    clearBtn.innerText = 'ВСЁ';
    clearBtn.style.cssText = 'background:#8B0000;color:white;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;font-size:9px;';
    clearBtn.onclick = () => { levelBlocks = []; renderLevel(); };
    pan.appendChild(clearBtn);
    if (!specialBlocksEnabled && tool !== 'block' && tool !== 'cactus' && tool !== 'erase') { tool = 'block'; }
}

let savePanel = document.createElement("div");
savePanel.id = "d-save-panel";
savePanel.style.cssText = 'position:absolute; left:' + cnv.offsetLeft + 'px; top:' + (cnv.offsetTop + cnv.height + 5) + 'px; width:' + cnv.width + 'px; height:30px; background:#222; display:none; align-items:center; justify-content:center; gap:5px; z-index:15000; border-radius:4px;';
savePanel.innerHTML = '<button id="sp-save" style="background:#00ffaa;color:black;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;font-size:10px;">💾</button><button id="sp-load" style="background:#00bfff;color:white;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;font-size:10px;">📂</button><button id="sp-dl" style="background:#ffaa00;color:black;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;font-size:10px;">⬇️</button><button id="sp-ul" style="background:#ff00ff;color:white;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;font-size:10px;">⬆️</button><input type="file" id="sp-file" accept=".dmos,.json" style="display:none;">';
cont.appendChild(savePanel);

let btnB = document.createElement("button");
btnB.id = "d-bak"; btnB.innerText = "↩ МЕНЮ";
btnB.style.cssText = 'position:absolute; left:' + (cnv.offsetLeft + 6) + 'px; top:' + (cnv.offsetTop + 6) + 'px; z-index:25005; background:#535353; color:white; border:none; padding:5px 10px; cursor:pointer; border-radius:3px; display:none;';
cont.appendChild(btnB);

btnB.onclick = () => {
    state = "MENU"; page = 1; renderMenu();
    btnB.style.display = "none"; pan.style.display = "none"; savePanel.style.display = "none";
    scX = 0; cY = 100;
    if (Runner.instance_) { Runner.config.SPEED = 0; Runner.instance_.currentSpeed = 0; Runner.instance_.horizon.obstacles = []; if (Runner.instance_.tRex) Runner.instance_.tRex.yPos = Runner.instance_.tRex.groundYPos; }
    if (window.originalUpdateObstaclesBackup && Runner.instance_?.horizon) Runner.instance_.horizon.updateObstacles = window.originalUpdateObstaclesBackup;
    if (window.originalCheckCollisionBackup && Runner.instance_) Runner.instance_.checkForCollision = window.originalCheckCollisionBackup;
    if (window.originalGameOverBackup && Runner.instance_) Runner.instance_.gameOver = window.originalGameOverBackup;
    if (window.originalTrexStartJump && Runner.instance_?.tRex) Runner.instance_.tRex.startJump = window.originalTrexStartJump;
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    renderLevel();
};

function renderLevel() {
    bCont.innerHTML = "";
    if (state === "CLASSIC") return;
    levelBlocks.forEach((b, i) => {
        let screenX = b.x - scX;
        if (screenX + b.w > 0 && screenX < 600) {
            const e = document.createElement("div");
            e.style.position = "absolute";
            e.style.left = screenX + "px";
            e.style.top = b.y + "px";
            e.style.width = b.w + "px";
            e.style.height = b.h + "px";
            e.style.boxSizing = "border-box";
            const bt = blockTypes[b.type];
            if (b.type === 'cactus') {
                const img = document.getElementById('1x-obstacle-large') || document.getElementById('2x-obstacle-large');
                if (img && img.src) {
                    e.style.backgroundImage = "url('" + img.src + "')";
                    e.style.backgroundSize = 'contain';
                    e.style.backgroundRepeat = 'no-repeat';
                    e.style.backgroundPosition = 'bottom';
                }
            } else if (bt && bt.css) {
                e.setAttribute('style', e.getAttribute('style') + ';' + bt.css);
                if (animationsEnabled && bt.animated) {
                    const type = b.type;
                    if (['water','lava','fire'].includes(type)) e.style.animation = 'pulse 0.8s infinite';
                    if (['gold','diamond','emerald','ruby','star','key'].includes(type)) e.style.animation = 'shine 1.5s infinite';
                    if (type === 'portal') e.style.animation = 'spin 2s infinite linear';
                    if (type === 'mover') e.style.animation = 'moverMove 1s infinite alternate';
                    if (['batut','spring'].includes(type)) e.style.animation = 'bounce 0.5s infinite';
                    if (['heart','mushroom'].includes(type)) e.style.animation = 'pulse 1s infinite';
                    if (type === 'bomb') e.style.animation = 'shake 0.3s infinite';
                    if (type === 'cloud') e.style.animation = 'float 2s infinite';
                    if (['ice','snow'].includes(type)) e.style.animation = 'glow 1s infinite';
                }
            }
            if (i === selectedBlock && resizeMode) e.style.outline = '3px dashed #00ffaa';
            if (state === "EDIT" && tool === "erase") {
                e.style.pointerEvents = "auto";
                e.style.cursor = "pointer";
                e.onmousedown = (ev) => { ev.stopPropagation(); levelBlocks.splice(i, 1); renderLevel(); };
            }
            // Отладочная информация на блоках
            if (debugMode) {
                e.setAttribute('title', '#' + i + ' ' + b.type + ' (' + b.x + ', ' + b.y + ')');
            }
            bCont.appendChild(e);
        }
    });
}

const styleSheet = document.createElement('style');
styleSheet.textContent = '@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}@keyframes shine{0%,100%{filter:brightness(1)}50%{filter:brightness(1.6)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-2px)}75%{transform:translateX(2px)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}@keyframes glow{0%,100%{box-shadow:0 0 5px rgba(255,255,255,.3)}50%{box-shadow:0 0 15px rgba(255,255,255,.8)}}@keyframes moverMove{0%{transform:translateX(0)}100%{transform:translateX(80px)}}';
document.head.appendChild(styleSheet);

document.addEventListener('contextmenu', function(e) {
    if (state !== 'EDIT') return;
    const target = e.target;
    if (target.parentElement === bCont) {
        e.preventDefault();
        const index = Array.from(bCont.children).indexOf(target);
        if (index >= 0 && index < levelBlocks.length) { selectedBlock = index; resizeMode = true; }
    }
});

document.addEventListener('keydown', function(e) {
    if (!resizeMode || selectedBlock === null || state !== 'EDIT') return;
    const block = levelBlocks[selectedBlock];
    if (!block) return;
    if (e.key === 'q') { block.w += 10; renderLevel(); }
    if (e.key === 'e') { block.w = Math.max(10, block.w - 10); renderLevel(); }
    if (e.key === 'r') { block.h += 10; renderLevel(); }
    if (e.key === 'f') { block.h = Math.max(10, block.h - 10); renderLevel(); }
    if (e.key === 'Escape') { resizeMode = false; selectedBlock = null; renderLevel(); }
});

cnv.addEventListener("mousedown", (e) => {
    const r = cnv.getBoundingClientRect();
    const cX = e.clientX - r.left;
    const cY_cl = e.clientY - r.top;
    const gX = cX + scX;
    if (state !== "EDIT") return;
    if (tool === "erase") return;
    const w = (tool === 'cactus') ? 25 : (tool === 'batut' || tool === 'spring') ? 40 : 50;
    const h = (tool === 'cactus') ? 50 : (tool === 'batut' || tool === 'spring') ? 10 : 12;
    levelBlocks.push({ x: Math.max(0, gX - w/2), y: (tool === 'cactus') ? 88 : cY_cl - h/2, w: w, h: h, type: tool });
    renderLevel();
});

document.addEventListener("keydown", (e) => {
    if (state === "MENU" || state === "CLASSIC") return;
    if (e.keyCode === 39) { scX += 20; if (state !== "EDIT" && state !== "PLATFORMER") return; renderLevel(); }
    if (e.keyCode === 37) { if (state !== "EDIT" && state !== "PLATFORMER") return; scX = Math.max(0, scX - 20); renderLevel(); }
    if ((e.keyCode === 32 || e.keyCode === 38) && state === "PLATFORMER" && !cJmp) { cYSp = -6.5; cJmp = true; }
});

setInterval(() => {
    if (window.Runner && Runner.instance_) Runner.instance_.checkForCollision = (state === "CLASSIC") ? window.originalCheckCollisionBackup : function() { return false; };
    if (state !== "CLASSIC" && Runner.instance_?.horizon) Runner.instance_.horizon.obstacles.forEach(o => { if(o) o.draw = function() {}; });
    if (state === "MENU" || state === "CLASSIC") return;
    const t = Runner.instance_ ? Runner.instance_.tRex : null;
    if (!t) return;
    if (state === "EDIT") { t.yPos = -500; return; }
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    if (state === "OWN_DINO" || state === "ORIGINAL_TEST") scX += 4.5;
    if (state === "PLATFORMER" || state === "OWN_DINO") {
        if (cY < 100) cYSp += 0.3; cY += cYSp;
        let onP = false;
        levelBlocks.forEach(b => {
            let sX = b.x - scX;
            if (20 + 40 > sX && 20 < sX + b.w) {
                const bt = blockTypes[b.type];
                if (bt && bt.solid) { if (cY + 40 >= b.y && cY + 20 <= b.y && cYSp > 0) { cY = b.y - 40; cYSp = 0; cJmp = false; onP = true; } }
                else if (bt && bt.bouncy) { if (cY + 40 >= b.y && cYSp > 0) { cYSp = -12; cJmp = true; } }
                else if (bt && bt.deadly) { if (cY + 38 > b.y) { cY = 100; cYSp = 0; scX = 0; cJmp = false; renderLevel(); } }
                else if (bt && bt.teleport) { if (cY + 38 > b.y) { scX += 200; renderLevel(); } }
            }
        });
        if (cY >= 100) { cY = 100; cYSp = 0; cJmp = false; }
        t.yPos = cY; t.jumping = cJmp;
    } else if (state === "ORIGINAL_TEST") {
        levelBlocks.forEach(b => {
            let sX = b.x - scX;
            if (20 + 40 > sX && 20 < sX + b.w) {
                if (b.type === "block") { if (t.yPos + 40 >= b.y && t.yPos + 20 <= b.y) { t.yPos = b.y - 40; } }
                else { if (t.yPos + 38 > b.y) { if (window.originalGameOverBackup) window.originalGameOverBackup.apply(Runner.instance_); } }
            }
        });
        renderLevel();
    }
}, 15);

document.getElementById('sp-save').onclick = () => {
    if (levelBlocks.length === 0) { alert("Нет блоков!"); return; }
    let name = prompt("Название:", "Уровень " + (savedLevels.length + 1));
    if (!name || name === 'y') name = "Уровень " + (savedLevels.length + 1);
    savedLevels.push({ name, blocks: JSON.parse(JSON.stringify(levelBlocks)) });
    alert('✅ Сохранено!');
};
document.getElementById('sp-load').onclick = () => {
    if (savedLevels.length === 0) { alert("Нет сохранений!"); return; }
    let text = "Выберите:\n";
    savedLevels.forEach((l, i) => text += (i+1) + ". " + l.name + "\n");
    const choice = prompt(text, "1");
    if (!choice || choice === 'y') return;
    const idx = parseInt(choice) - 1;
    if (idx < 0 || idx >= savedLevels.length) return;
    levelBlocks = JSON.parse(JSON.stringify(savedLevels[idx].blocks));
    renderLevel();
    alert('✅ Загружен!');
};
document.getElementById('sp-dl').onclick = () => {
    if (levelBlocks.length === 0) { alert("Нет блоков!"); return; }
    const blob = new Blob([JSON.stringify({format:"DMOS-SPECIAL", blocks: levelBlocks})], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'level.dmos';
    a.click();
};
document.getElementById('sp-ul').onclick = () => document.getElementById('sp-file').click();
document.getElementById('sp-file').onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const data = JSON.parse(ev.target.result);
            if (data.blocks) levelBlocks = data.blocks;
            else if (Array.isArray(data)) levelBlocks = data;
            renderLevel();
            alert('✅ Загружено!');
        } catch(err) { alert("❌ Ошибка!"); }
    };
    reader.readAsText(file);
    e.target.value = '';
};

buildToolButtons();
renderMenu();
console.log('🎮 SPECIAL + Рандом (стр.4) + Отладка (DEBUG комбинация)!');






















// ========== ПРОДОЛЖЕНИЕ: МОНЕТКИ И НОВЫЕ БЛОКИ ==========
(function(){
    console.log('🔄 Загружаю продолжение...');
    
    // Проверяем наличие Dino Maker OS по другим признакам
    const hasDinoMaker = document.getElementById('d-pan') || 
                         document.getElementById('d-men') || 
                         document.getElementById('custom-level-container') ||
                         (typeof levelBlocks !== 'undefined') ||
                         (typeof renderLevel === 'function');
    
    if (!hasDinoMaker) {
        console.error('❌ Dino Maker OS не найден!');
        return;
    }
    
    console.log('✅ Dino Maker OS найден!');
    
    // Монетки и новые блоки добавляем через глобальные переменные
    let coinCount = 0;
    
    // Добавляем новые типы в blockTypes напрямую
    blockTypes.coin = { 
        name: '🪙 Монета', 
        css: 'background:radial-gradient(circle,#FFD700,#AA8800);border:2px solid #775500;border-radius:50%;', 
        solid: false, 
        coin: true, 
        animated: true 
    };
    
    blockTypes.speed = { 
        name: '⚡ Ускорение', 
        css: 'background:linear-gradient(90deg,#FFFF00,#FFAA00);border:2px solid #CC8800;', 
        solid: false, 
        speedBoost: true, 
        animated: true 
    };
    
    blockTypes.slow = { 
        name: '🐌 Замедление', 
        css: 'background:linear-gradient(90deg,#8866CC,#553388);border:2px solid #332255;', 
        solid: false, 
        slowDown: true 
    };
    
    blockTypes.heal = { 
        name: '💚 Лечение', 
        css: 'background:radial-gradient(circle,#90FF90,#00AA00);border:2px solid #006600;border-radius:50%;', 
        solid: false, 
        heal: true, 
        animated: true 
    };
    
    blockTypes.shield = { 
        name: '🛡️ Щит', 
        css: 'background:radial-gradient(circle,#AACCFF,#3366CC);border:2px solid #113366;border-radius:50%;', 
        solid: false, 
        shield: true, 
        animated: true 
    };
    
    blockTypes.trampoline = { 
        name: '🤸 Трамплин', 
        css: 'background:linear-gradient(180deg,#00FFAA,#008855);border:2px solid #004422;border-radius:50% 50% 0 0;', 
        solid: false, 
        superBounce: true, 
        animated: true 
    };
    
    // Перестраиваем панель
    if (typeof buildToolButtons === 'function') {
        buildToolButtons();
    }
    
    // Сбор монет
    setInterval(() => {
        if (state === 'PLATFORMER' || state === 'ORIGINAL_TEST') {
            levelBlocks.forEach((b, i) => {
                if (b.type === 'coin') {
                    let sX = b.x - scX;
                    if (20 + 40 > sX && 20 < sX + b.w && cY + 40 > b.y && cY < b.y + b.h) {
                        levelBlocks.splice(i, 1);
                        coinCount++;
                        renderLevel();
                    }
                }
            });
        }
    }, 100);
    
    // Счётчик монет
    setInterval(() => {
        let coinDisplay = document.getElementById('coin-counter');
        if (!coinDisplay) {
            coinDisplay = document.createElement('div');
            coinDisplay.id = 'coin-counter';
            coinDisplay.style.cssText = 'position:absolute; top:10px; left:50%; transform:translateX(-50%); color:gold; font-size:16px; font-weight:bold; z-index:16000;';
            document.body.appendChild(coinDisplay);
        }
        if (state !== 'MENU' && state !== 'CLASSIC') {
            coinDisplay.style.display = 'block';
            coinDisplay.innerText = '🪙 ' + coinCount;
        } else {
            coinDisplay.style.display = 'none';
        }
    }, 100);
    
    console.log('✅ ПРОДОЛЖЕНИЕ УСТАНОВЛЕНО!');
    console.log('🪙 Монетки + Новые блоки добавлены');
})();










// ========== ПРОДОЛЖЕНИЕ: КРУГЛЫЕ МОНЕТКИ + СКЛОН ==========
(function(){
    console.log('🔄 Загружаю продолжение...');
    
    const hasDinoMaker = document.getElementById('d-pan') || 
                         document.getElementById('d-men') || 
                         document.getElementById('custom-level-container');
    
    if (!hasDinoMaker) {
        console.error('❌ Dino Maker OS не найден!');
        return;
    }
    
    console.log('✅ Dino Maker OS найден!');
    
    let coinCount = 0;
    
    // Монетка — ИДЕАЛЬНО КРУГЛАЯ через width=height и border-radius:50%
    blockTypes.coin = { 
        name: '🪙', 
        css: 'background:radial-gradient(circle at 40% 40%,#FFF8AA,#FFD700,#AA8800);border:2px solid #775500;border-radius:50%;width:16px;height:16px;', 
        solid: false, 
        coin: true, 
        animated: true,
        round: true  // Специальный флаг для круглых блоков
    };
    
    // Склон — наклонная поверхность
    blockTypes.slope = { 
        name: '📐 Склон', 
        css: 'background:linear-gradient(135deg,#888888 50%,transparent 50%);border:none;clip-path:polygon(0% 100%,100% 0%,100% 100%);', 
        solid: true, 
        slope: true 
    };
    
    // Перестраиваем панель
    if (typeof buildToolButtons === 'function') {
        buildToolButtons();
    }
    
    // Обновляем renderLevel для круглых блоков
    const originalRenderLevel = renderLevel;
    renderLevel = function() {
        bCont.innerHTML = "";
        if (state === "CLASSIC") return;
        
        levelBlocks.forEach((b, i) => {
            let screenX = b.x - scX;
            if (screenX + b.w > 0 && screenX < 600) {
                const e = document.createElement("div");
                e.style.position = "absolute";
                e.style.left = screenX + "px";
                e.style.top = b.y + "px";
                
                const bt = blockTypes[b.type];
                
                // Для круглых блоков — width = height
                if (bt && bt.round) {
                    e.style.width = b.h + "px";
                    e.style.height = b.h + "px";
                } else {
                    e.style.width = b.w + "px";
                    e.style.height = b.h + "px";
                }
                
                e.style.boxSizing = "border-box";
                
                if (bt && bt.css) {
                    e.setAttribute('style', e.getAttribute('style') + ';' + bt.css);
                }
                
                if (animationsEnabled && bt && bt.animated) {
                    if (b.type === 'coin') e.style.animation = 'shine 1.5s infinite';
                }
                
                if (state === "EDIT" && tool === "erase") {
                    e.style.pointerEvents = "auto";
                    e.style.cursor = "pointer";
                    e.onmousedown = (ev) => { ev.stopPropagation(); levelBlocks.splice(i, 1); renderLevel(); };
                }
                
                bCont.appendChild(e);
            }
        });
    };
    
    // Обновляем установку блоков для круглых
    const originalMousedown = cnv.onmousedown;
    cnv.addEventListener("mousedown", (e) => {
        if (state !== "EDIT") return;
        if (tool === "erase") return;
        
        const bt = blockTypes[tool];
        if (bt && bt.round) {
            // Круглый блок: w = h = 16
            const r = cnv.getBoundingClientRect();
            const cX = e.clientX - r.left;
            const cY_cl = e.clientY - r.top;
            const gX = cX + scX;
            levelBlocks.push({ x: gX - 8, y: cY_cl - 8, w: 16, h: 16, type: tool });
            renderLevel();
        }
    }, true);
    
    // Сбор монет
    setInterval(() => {
        if (state === 'PLATFORMER' || state === 'ORIGINAL_TEST') {
            levelBlocks.forEach((b, i) => {
                if (b.type === 'coin') {
                    let sX = b.x - scX;
                    if (20 + 40 > sX && 20 < sX + b.w && cY + 40 > b.y && cY < b.y + b.h) {
                        levelBlocks.splice(i, 1);
                        coinCount++;
                        renderLevel();
                    }
                }
            });
        }
    }, 100);
    
    // Счётчик монет
    setInterval(() => {
        let coinDisplay = document.getElementById('coin-counter');
        if (!coinDisplay) {
            coinDisplay = document.createElement('div');
            coinDisplay.id = 'coin-counter';
            coinDisplay.style.cssText = 'position:absolute; top:10px; left:50%; transform:translateX(-50%); color:gold; font-size:16px; font-weight:bold; z-index:16000;';
            document.body.appendChild(coinDisplay);
        }
        if (state !== 'MENU' && state !== 'CLASSIC') {
            coinDisplay.style.display = 'block';
            coinDisplay.innerText = '🪙 ' + coinCount;
        } else {
            coinDisplay.style.display = 'none';
        }
    }, 100);
    
    console.log('✅ Монетки КРУГЛЫЕ + Склон добавлены!');
})();















// ========== ИСПРАВЛЕНИЕ: РОВНЫЕ СКЛОНЫ + СЧЁТЧИК ==========
(function(){
    console.log('🔄 Загружаю исправление...');
    
    const hasDinoMaker = document.getElementById('d-pan');
    if (!hasDinoMaker) {
        console.error('❌ Dino Maker OS не найден!');
        return;
    }
    
    // ===== ИСПРАВЛЕНИЕ СКЛОНА =====
    blockTypes.slope = { 
        name: '📐 Склон', 
        css: 'background:#888888;border:2px solid #666;clip-path:polygon(0% 100%,100% 0%,100% 100%);', 
        solid: true, 
        slope: true 
    };
    
    // ===== ИСПРАВЛЕНИЕ СЧЁТЧИКА МОНЕТ =====
    let coinCount = 0;
    
    // Удаляем старый счётчик если есть
    const oldCounter = document.getElementById('coin-counter');
    if (oldCounter) oldCounter.remove();
    
    // Создаём стабильный счётчик
    const coinDisplay = document.createElement('div');
    coinDisplay.id = 'coin-counter';
    coinDisplay.style.cssText = 'position:absolute; top:10px; left:50%; transform:translateX(-50%); color:gold; font-size:16px; font-weight:bold; z-index:16000; background:rgba(0,0,0,0.5); padding:5px 10px; border-radius:10px; display:none;';
    document.body.appendChild(coinDisplay);
    
    // Обновляем счётчик ТОЛЬКО при изменении
    let lastCoinCount = -1;
    setInterval(() => {
        if (state !== 'MENU' && state !== 'CLASSIC') {
            coinDisplay.style.display = 'block';
            if (coinCount !== lastCoinCount) {
                coinDisplay.innerText = '🪙 ' + coinCount;
                lastCoinCount = coinCount;
            }
        } else {
            coinDisplay.style.display = 'none';
            lastCoinCount = -1;
        }
    }, 200); // Медленное обновление — не прыгает
    
    // ===== ДИНОЗАВРИК ЛАЗИТ ПО СКЛОНАМ =====
    // Обновляем физику платформера
    const originalPhysics = setInterval(() => {}, 15);
    
    // Перехватываем setInterval для физики
    const physicsInterval = setInterval(() => {
        if (state === 'PLATFORMER') {
            levelBlocks.forEach(b => {
                if (b.type === 'slope') {
                    let sX = b.x - scX;
                    // Если динозаврик на склоне
                    if (20 + 40 > sX && 20 < sX + b.w) {
                        // Вычисляем высоту склона в точке X динозаврика
                        const progress = (20 - sX) / b.w; // 0-1
                        const slopeY = b.y + b.h - (b.h * progress); // Высота склона
                        
                        // Если динозаврик падает на склон
                        if (cY + 40 >= slopeY && cYSp > 0) {
                            cY = slopeY - 40;
                            cYSp = 0;
                            cJmp = false;
                        }
                    }
                }
            });
        }
    }, 16);
    
    console.log('✅ Склоны ровные, счётчик стабильный!');
})();














// ========== ИСПРАВЛЕНИЕ: СЧЁТЧИК + СКЛОНЫ v2 ==========
(function(){
    console.log('🔄 Загружаю исправление v2...');
    
    const hasDinoMaker = document.getElementById('d-pan');
    if (!hasDinoMaker) {
        console.error('❌ Dino Maker OS не найден!');
        return;
    }
    
    let coinCount = 0;
    
    // ===== СЧЁТЧИК — ОБНОВЛЯЕТСЯ ПОСТОЯННО =====
    const oldCounter = document.getElementById('coin-counter');
    if (oldCounter) oldCounter.remove();
    
    const coinDisplay = document.createElement('div');
    coinDisplay.id = 'coin-counter';
    coinDisplay.style.cssText = 'position:absolute; top:10px; left:50%; transform:translateX(-50%); color:gold; font-size:16px; font-weight:bold; z-index:16000; background:rgba(0,0,0,0.7); padding:5px 15px; border-radius:10px; display:none;';
    document.body.appendChild(coinDisplay);
    
    // Постоянное обновление каждые 16мс
    setInterval(() => {
        if (state !== 'MENU' && state !== 'CLASSIC') {
            coinDisplay.style.display = 'block';
            coinDisplay.innerText = '🪙 ' + coinCount;
        } else {
            coinDisplay.style.display = 'none';
        }
    }, 16);
    
    // ===== СКЛОНЫ — ДИНОЗАВРИК ПОДНИМАЕТСЯ =====
    // Удаляем старый обработчик физики и создаём новый
    const slopePhysics = setInterval(() => {
        if (state === 'PLATFORMER' || state === 'ADVENTURE') {
            const playerX = 20; // X позиция динозаврика
            const playerW = 40;
            
            levelBlocks.forEach(b => {
                if (b.type === 'slope') {
                    let sX = b.x - scX;
                    
                    // Проверяем пересечение с склоном
                    if (playerX + playerW > sX && playerX < sX + b.w) {
                        // Вычисляем Y склона в точке X динозаврика
                        const relativeX = playerX - sX;
                        const progress = relativeX / b.w;
                        const slopeY = b.y + b.h - (b.h * progress);
                        
                        // Если динозаврик касается склона сверху
                        if (cY + 40 >= slopeY && cY + 40 <= slopeY + 10 && cYSp >= 0) {
                            cY = slopeY - 40;
                            cYSp = 0;
                            cJmp = false;
                        }
                    }
                }
            });
        }
    }, 16);
    
    // Сбор монет
    setInterval(() => {
        if (state === 'PLATFORMER' || state === 'ORIGINAL_TEST') {
            levelBlocks.forEach((b, i) => {
                if (b.type === 'coin') {
                    let sX = b.x - scX;
                    if (20 + 40 > sX && 20 < sX + b.w && cY + 40 > b.y && cY < b.y + b.h) {
                        levelBlocks.splice(i, 1);
                        coinCount++;
                        renderLevel();
                    }
                }
            });
        }
    }, 50);
    
    console.log('✅ Счётчик обновляется постоянно, склоны работают!');
})();


























// ========== ИСПРАВЛЕНИЕ: СЧЁТЧИК ВСЕГДА ОБНОВЛЯЕТСЯ ==========
(function(){
    console.log('🔄 Исправляю счётчик...');
    
    let coinCount = 0;
    
    const oldCounter = document.getElementById('coin-counter');
    if (oldCounter) oldCounter.remove();
    
    const coinDisplay = document.createElement('div');
    coinDisplay.id = 'coin-counter';
    coinDisplay.style.cssText = 'position:absolute; top:10px; left:50%; transform:translateX(-50%); color:gold; font-size:16px; font-weight:bold; z-index:16000; background:rgba(0,0,0,0.7); padding:5px 15px; border-radius:10px;';
    document.body.appendChild(coinDisplay);
    
    // Обновление КАЖДЫЙ кадр без условий
    setInterval(() => {
        coinDisplay.innerText = '🪙 ' + coinCount;
    }, 16);
    
    // Сбор монет
    setInterval(() => {
        if (typeof state !== 'undefined' && (state === 'PLATFORMER' || state === 'ORIGINAL_TEST')) {
            if (typeof levelBlocks !== 'undefined') {
                levelBlocks.forEach((b, i) => {
                    if (b.type === 'coin') {
                        let sX = b.x - scX;
                        if (20 + 40 > sX && 20 < sX + b.w && cY + 40 > b.y && cY < b.y + b.h) {
                            levelBlocks.splice(i, 1);
                            coinCount++;
                            if (typeof renderLevel === 'function') renderLevel();
                        }
                    }
                });
            }
        }
    }, 50);
    
    console.log('✅ Счётчик обновляется ВСЕГДА!');
})();







































// ========== ИСПРАВЛЕНИЕ: СБРОС МОНЕТ + ТУМБЛЕРЫ ==========
(function(){
    console.log('🔄 Загружаю исправление...');
    
    let coinCount = 0;
    let coinsEnabled = true; // Тумблер монеток
    
    // ===== СБРОС МОНЕТ ПРИ ВОЗВРАТЕ В МЕНЮ =====
    const originalBackClick = document.getElementById('d-bak')?.onclick;
    document.getElementById('d-bak').onclick = (e) => {
        coinCount = 0; // Сброс счётчика
        if (originalBackClick) originalBackClick(e);
    };
    
    // ===== НОРМАЛЬНЫЕ ТУМБЛЕРЫ С ИНДИКАЦИЕЙ =====
    function createToggle(id, label, checked, onChange) {
        const container = document.createElement('div');
        container.style.cssText = 'display:flex;align-items:center;justify-content:space-between;width:200px;margin:5px 0;';
        
        const text = document.createElement('span');
        text.innerText = label;
        text.style.cssText = 'font-size:14px;';
        
        const toggle = document.createElement('div');
        toggle.style.cssText = 'width:50px;height:25px;background:' + (checked ? '#00ff44' : '#555') + ';border-radius:15px;cursor:pointer;position:relative;transition:all 0.3s;';
        
        const knob = document.createElement('div');
        knob.style.cssText = 'width:21px;height:21px;background:white;border-radius:50%;position:absolute;top:2px;left:' + (checked ? '27px' : '2px') + ';transition:all 0.3s;';
        toggle.appendChild(knob);
        
        const status = document.createElement('span');
        status.innerText = checked ? ' [ON]' : ' [OFF]';
        status.style.cssText = 'font-size:12px;color:' + (checked ? '#00ff44' : '#ff0055') + ';font-weight:bold;';
        
        toggle.onclick = () => {
            const newState = !toggle.dataset.on;
            toggle.dataset.on = newState;
            toggle.style.background = newState ? '#00ff44' : '#555';
            knob.style.left = newState ? '27px' : '2px';
            status.innerText = newState ? ' [ON]' : ' [OFF]';
            status.style.color = newState ? '#00ff44' : '#ff0055';
            onChange(newState);
        };
        toggle.dataset.on = checked;
        
        container.appendChild(text);
        container.appendChild(toggle);
        container.appendChild(status);
        return container;
    }
    
    // ===== ДОБАВЛЯЕМ ТУМБЛЕРЫ В НАСТРОЙКИ =====
    const settingsPage = page === 3;
    if (settingsPage && document.getElementById('d-men')) {
        const menuEl = document.getElementById('d-men');
        
        // Перерисовываем настройки с нормальными тумблерами
        const originalRenderMenu = renderMenu;
        renderMenu = function() {
            if (page === 3) {
                menuEl.innerHTML = '<h1 style="color:#ff6600;font-size:18px;margin-bottom:15px;">⚙️ НАСТРОЙКИ</h1>';
                
                const animToggle = createToggle('anim', '✨ Анимации', animationsEnabled, (state) => { animationsEnabled = state; });
                const specToggle = createToggle('spec', '🎮 Доп. блоки', specialBlocksEnabled, (state) => { specialBlocksEnabled = state; buildToolButtons(); renderLevel(); });
                const coinToggle = createToggle('coins', '🪙 Монетки', coinsEnabled, (state) => { coinsEnabled = state; });
                const debugToggle = createToggle('debug', '🐛 Отладка', debugMode, (state) => { debugMode = state; });
                
                menuEl.appendChild(animToggle);
                menuEl.appendChild(specToggle);
                menuEl.appendChild(coinToggle);
                menuEl.appendChild(debugToggle);
                
                const backBtn = document.createElement('button');
                backBtn.innerText = '◀◀ НАЗАД';
                backBtn.style.cssText = 'margin-top:15px;padding:8px 20px;background:#ccc;border:none;border-radius:4px;cursor:pointer;';
                backBtn.onclick = () => { page = 1; renderMenu(); };
                menuEl.appendChild(backBtn);
            } else {
                originalRenderMenu();
            }
        };
        
        if (page === 3) renderMenu();
    }
    
    // ===== СБОР МОНЕТ ТОЛЬКО ЕСЛИ ВКЛЮЧЕНЫ =====
    setInterval(() => {
        if (coinsEnabled && typeof state !== 'undefined' && (state === 'PLATFORMER' || state === 'ORIGINAL_TEST')) {
            if (typeof levelBlocks !== 'undefined') {
                levelBlocks.forEach((b, i) => {
                    if (b.type === 'coin') {
                        let sX = b.x - scX;
                        if (20 + 40 > sX && 20 < sX + b.w && cY + 40 > b.y && cY < b.y + b.h) {
                            levelBlocks.splice(i, 1);
                            coinCount++;
                            if (typeof renderLevel === 'function') renderLevel();
                        }
                    }
                });
            }
        }
    }, 50);
    
    console.log('✅ Монетки сбрасываются, тумблеры с ON/OFF, монетки можно отключить!');
})();




















(function() {
    // Удаляем старые счётчики и тумблеры, если они остались
    document.querySelectorAll('#coin-counter, #coin-toggle-box').forEach(el => el.remove());

    // Переменные
    window.coinCount = 0;
    window.coinDisplayEnabled = false; // по умолчанию счётчик скрыт

    // Создаём счётчик монет (скрыт за экраном)
    const counter = document.createElement('div');
    counter.id = 'coin-counter';
    counter.style.cssText = 'position:fixed; top:-9999px; left:-9999px; color:gold; font-size:16px; font-weight:bold; z-index:99999; background:rgba(0,0,0,0.8); padding:5px 15px; border-radius:10px;';
    document.body.appendChild(counter);

    // Функция показа/скрытия счётчика
    function updateCounter() {
        if (window.coinDisplayEnabled) {
            counter.style.top = '10px';
            counter.style.left = '50%';
            counter.style.transform = 'translateX(-50%)';
        } else {
            counter.style.top = '-9999px';
            counter.style.left = '-9999px';
            counter.style.transform = '';
        }
        counter.textContent = '🪙 ' + window.coinCount;
    }

    // Создаём тумблер (чекбокс) — он будет показываться только в настройках
    const toggleBox = document.createElement('div');
    toggleBox.id = 'coin-toggle-box';
    toggleBox.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:99999; display:none; align-items:center; gap:8px; background:rgba(0,0,0,0.8); padding:8px 12px; border-radius:8px;';
    const label = document.createElement('label');
    label.textContent = '🪙 Счётчик монет';
    label.style.cssText = 'font-size:13px; cursor:pointer; color:white;';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = window.coinDisplayEnabled;
    checkbox.addEventListener('change', function() {
        window.coinDisplayEnabled = checkbox.checked;
        updateCounter();
    });
    label.appendChild(checkbox);
    toggleBox.appendChild(label);
    document.body.appendChild(toggleBox);

    // Показываем тумблер только когда открыты настройки (страница 3)
    setInterval(function() {
        if (typeof page !== 'undefined' && page === 3) {
            toggleBox.style.display = 'flex';
            checkbox.checked = window.coinDisplayEnabled;
        } else {
            toggleBox.style.display = 'none';
        }
    }, 100);

    // Обновляем текст счётчика (каждые 100 мс)
    setInterval(function() {
        counter.textContent = '🪙 ' + window.coinCount;
    }, 100);

    // Сброс монет при возврате в меню
    const backBtn = document.getElementById('d-bak');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.coinCount = 0;
            updateCounter();
        });
    }

    // Сбор монет
    setInterval(function() {
        if (typeof state === 'undefined' || typeof levelBlocks === 'undefined') return;
        if (state !== 'PLATFORMER' && state !== 'ORIGINAL_TEST') return;
        for (let i = levelBlocks.length - 1; i >= 0; i--) {
            const b = levelBlocks[i];
            if (b.type === 'coin') {
                const sX = b.x - scX;
                if (20 + 40 > sX && 20 < sX + b.w && cY + 40 > b.y && cY < b.y + b.h) {
                    levelBlocks.splice(i, 1);
                    window.coinCount++;
                    updateCounter();
                    if (typeof renderLevel === 'function') renderLevel();
                }
            }
        }
    }, 50);

    updateCounter();
    console.log('✅ Готово: тумблер в настройках, счётчик скрыт по умолчанию.');
})();
