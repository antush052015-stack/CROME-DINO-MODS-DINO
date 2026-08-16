const cnv = document.querySelector(".runner-canvas");
const ctx = cnv.getContext("2d");
const cont = cnv.parentElement;
cont.style.position = "relative";
let state = "MENU"; let page = 1; let tool = "block"; let scX = 0; let cY = 100; let cYSp = 0; let cJmp = false; let levelBlocks = [];

if (!window.originalGameOverBackup && window.Runner && Runner.instance_) { window.originalGameOverBackup = Runner.instance_.gameOver; }
if (!window.originalUpdateObstaclesBackup && window.Runner && Runner.instance_?.horizon) { window.originalUpdateObstaclesBackup = Runner.instance_.horizon.updateObstacles; }
if (!window.originalCheckCollisionBackup && window.Runner && Runner.instance_) { window.originalCheckCollisionBackup = Runner.instance_.checkForCollision; }

let bCont = document.getElementById("custom-level-container"); if (bCont) bCont.remove();
bCont = document.createElement("div"); bCont.id = "custom-level-container";
bCont.style.position = "absolute"; bCont.style.left = cnv.offsetLeft + "px"; bCont.style.top = cnv.offsetTop + "px"; bCont.style.width = cnv.width + "px"; bCont.style.height = cnv.height + "px"; bCont.style.overflow = "hidden"; bCont.style.pointerEvents = "none"; cont.appendChild(bCont);

let menu = document.getElementById("d-men"); if (menu) menu.remove();
menu = document.createElement("div"); menu.id = "d-men";
menu.style.position = "absolute"; menu.style.left = cnv.offsetLeft + "px"; menu.style.top = cnv.offsetTop + "px"; menu.style.width = cnv.width + "px"; menu.style.height = cnv.height + "px"; menu.style.background = "#f7f7f7"; menu.style.display = "flex"; menu.style.flexDirection = "column"; menu.style.alignItems = "center"; menu.style.justifyContent = "center"; menu.style.zIndex = "20000"; menu.style.fontFamily = "monospace"; menu.style.border = "1px solid #999"; menu.style.borderRadius = "5px"; cont.appendChild(menu);
function renderMenu() {
menu.style.display = "flex";
if (page === 1) {
menu.innerHTML = '<h1 style="margin:0 0 15px 0;color:#535353;font-size:20px;">DINO MAKER OS (1/2)</h1><div style="display:flex;gap:10px;align-items:center;"><button id="p-cl" style="padding:10px;cursor:pointer;font-weight:bold;background:#535353;color:white;border:none;border-radius:4px;">▶ КЛАССИКА</button><button id="p-ed" style="padding:10px;background:#d35400;color:white;cursor:pointer;font-weight:bold;border:none;border-radius:4px;"> MI LEVEL EDITOR</button><button id="m-nxt" style="padding:10px;cursor:pointer;background:#ccc;border:none;border-radius:4px;">▶▶</button></div>';
} else {
menu.innerHTML = '<h1 style="margin:0 0 15px 0;color:#8e44ad;font-size:18px;"> ТЕСТЫ КАСТОМА (2/2)</h1><div style="display:flex;gap:6px;align-items:center;"><button id="m-prv" style="padding:10px;cursor:pointer;background:#ccc;border:none;border-radius:4px;">◀◀</button><button id="p-pl" style="padding:8px;background:#8e44ad;color:white;cursor:pointer;font-weight:bold;border:none;border-radius:4px;font-size:11px;"> СТАРЫЙ ПЛАТФОРМЕР</button><button id="p-or" style="padding:8px;background:#2ecc71;color:white;cursor:pointer;font-weight:bold;border:none;border-radius:4px;font-size:11px;">🌵 ОРИГИНАЛЬНЫЙ ТЕСТ</button></div>';
}
attachMenuEvents();
}

function attachMenuEvents() {
const cl = document.getElementById("p-cl"); const ed = document.getElementById("p-ed"); const pl = document.getElementById("p-pl"); const or = document.getElementById("p-or"); const nxt = document.getElementById("m-nxt"); const prv = document.getElementById("m-prv");
if (cl) cl.onclick = () => {
state = "CLASSIC"; menu.style.display = "none"; btnB.style.display = "block"; bCont.innerHTML = "";
if (Runner.instance_) {
Runner.config.ACCELERATION = 0.001; Runner.config.SPEED = 6; Runner.instance_.currentSpeed = 6; Runner.instance_.playing = true; Runner.instance_.activated = true;
if (window.originalUpdateObstaclesBackup && Runner.instance_.horizon) { Runner.instance_.horizon.updateObstacles = window.originalUpdateObstaclesBackup; }
if (window.originalCheckCollisionBackup) { Runner.instance_.checkForCollision = window.originalCheckCollisionBackup; } // Возврат коллизий для Классики
if (Runner.instance_.tRex) { Runner.instance_.tRex.yPos = 100; delete Runner.instance_.tRex.startJump; }
if (window.originalGameOverBackup) { Runner.instance_.gameOver = window.originalGameOverBackup; }
}
};
if (ed) ed.onclick = () => { state = "EDIT"; menu.style.display = "none"; btnB.style.display = "block"; pan.style.display = "flex"; cnv.style.cursor = "crosshair"; freezeEngine(); renderLevel(); };
if (pl) pl.onclick = () => { state = "PLATFORMER"; menu.style.display = "none"; btnB.style.display = "block"; cY = 100; cYSp = 0; scX = 0; cJmp = false; freezeEngine(); renderLevel(); };
if (or) or.onclick = () => {
state = "ORIGINAL_TEST"; menu.style.display = "none"; btnB.style.display = "block";
if (Runner.instance_) {
Runner.config.ACCELERATION = 0; Runner.config.SPEED = 6; Runner.instance_.currentSpeed = 6; Runner.instance_.playing = true; Runner.instance_.activated = true;
if (Runner.instance_.tRex) { Runner.instance_.tRex.yPos = 100; delete Runner.instance_.tRex.startJump; }
if (window.originalGameOverBackup) { 
Runner.instance_.gameOver = function() { 
state = "ORIGINAL_TEST"; window.originalGameOverBackup.apply(this, arguments); 
scX = 0; if (Runner.instance_) { Runner.instance_.distanceRan = 0; Runner.config.SPEED = 6; Runner.instance_.currentSpeed = 6; } renderLevel(); 
}; 
}
}
renderLevel();
};
if (nxt) nxt.onclick = () => { page = 2; renderMenu(); }; if (prv) prv.onclick = () => { page = 1; renderMenu(); };
}

function freezeEngine() {
if (Runner.instance_) {
Runner.config.ACCELERATION = 0; Runner.config.SPEED = 0; Runner.instance_.currentSpeed = 0;
Runner.instance_.setSpeed = function() { this.currentSpeed = 0; }; Runner.instance_.gameOver = function() {}; Runner.instance_.tRex.startJump = function() {};
}
}

let pan = document.getElementById("d-pan"); if (pan) pan.remove();
pan = document.createElement("div"); pan.id = "d-pan";
pan.style.position = "absolute"; pan.style.left = cnv.offsetLeft + "px"; pan.style.top = (cnv.offsetTop - 45) + "px"; pan.style.width = cnv.width + "px"; pan.style.height = "35px"; pan.style.background = "#222"; pan.style.display = "none"; pan.style.alignItems = "center"; pan.style.justifyContent = "space-around"; pan.style.fontFamily = "monospace"; pan.style.color = "white"; pan.style.zIndex = "15000"; pan.style.borderRadius = "4px";
pan.innerHTML = '<b style="color:gold;"> СТУДИЯ</b><div><button id="t-bl" style="background:white;color:black;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;"> Блок</button><button id="t-ca" style="background:#555;color:white;border:none;padding:3px 8px;cursor:pointer;margin:0 4px;border-radius:3px;"> Кактус</button><button id="t-er" style="background:#555;color:white;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;"> Ластик</button></div><button id="c-all" style="background:#c0392b;color:white;border:none;padding:3px 8px;cursor:pointer;border-radius:3px;"> Очистить</button>';
cont.appendChild(pan);
let btnB = document.getElementById("d-bak"); if (btnB) btnB.remove();
btnB = document.createElement("button"); btnB.id = "d-bak"; btnB.innerText = "↩ НАЗАД В МЕНЮ";
btnB.style.position = "absolute"; btnB.style.left = (cnv.offsetLeft + 6) + "px"; btnB.style.top = (cnv.offsetTop + 6) + "px"; btnB.style.zIndex = "25005"; btnB.style.background = "#535353"; btnB.style.color = "white"; btnB.style.border = "none"; btnB.style.padding = "5px 10px"; btnB.style.fontFamily = "monospace"; btnB.style.fontWeight = "bold"; btnB.style.cursor = "pointer"; btnB.style.borderRadius = "3px"; btnB.style.display = "none";
cont.appendChild(btnB);

btnB.onclick = (e) => {
e.stopPropagation(); state = "MENU"; page = 1; renderMenu(); btnB.style.display = "none"; pan.style.display = "none"; cnv.style.cursor = "default"; scX = 0; cY = 100; cYSp = 0; cJmp = false;
if (Runner.instance_) { Runner.config.SPEED = 0; Runner.instance_.currentSpeed = 0; Runner.instance_.horizon.obstacles = []; if (Runner.instance_.tRex) Runner.instance_.tRex.yPos = 100; }
if (window.originalUpdateObstaclesBackup && Runner.instance_?.horizon) { Runner.instance_.horizon.updateObstacles = window.originalUpdateObstaclesBackup; }
if (window.originalCheckCollisionBackup && Runner.instance_) { Runner.instance_.checkForCollision = window.originalCheckCollisionBackup; }
ctx.clearRect(0, 0, cnv.width, cnv.height); renderLevel();
};

function renderLevel() {
bCont.innerHTML = ""; if (state === "CLASSIC") return;
levelBlocks.forEach((b, i) => {
let screenX = b.x - scX;
if (screenX + b.w > 0 && screenX < 600) {
const e = document.createElement("div"); e.style.position = "absolute"; e.style.left = screenX + "px"; e.style.top = b.y + "px"; e.style.width = b.w + "px"; e.style.height = b.h + "px"; e.style.boxSizing = "border-box";
if (b.type === "block") { e.style.background = "#535353"; e.style.border = "2px solid #333"; } else {
let img = document.getElementById("1x-obstacle-large") || document.getElementById("2x-obstacle-large") || document.getElementById("1x-obstacle-small");
if (img && img.src) { e.style.backgroundImage = "url('" + img.src + "')"; e.style.backgroundSize = "contain"; e.style.backgroundRepeat = "no-repeat"; e.style.backgroundPosition = "bottom"; } else { e.style.background = "#535353"; e.style.borderLeft = "4px solid #333"; e.style.borderRadius = "3px 3px 0 0"; }
}
if (state === "EDIT" && tool === "erase") { e.style.pointerEvents = "auto"; e.style.cursor = "pointer"; e.onmousedown = (ev) => { ev.stopPropagation(); levelBlocks.splice(i, 1); renderLevel(); }; }
bCont.appendChild(e);
}
});
}

const bB = document.getElementById("t-bl"); const bCa = document.getElementById("t-ca"); const bE = document.getElementById("t-er");
bB.onclick = () => { tool = "block"; bB.style.background = "white"; bB.style.color = "black"; bCa.style.background = "#555"; bCa.style.color = "white"; bE.style.background = "#555"; bE.style.color = "white"; renderLevel(); };
bCa.onclick = () => { tool = "cactus"; bCa.style.background = "white"; bCa.style.color = "black"; bB.style.background = "#555"; bB.style.color = "white"; bE.style.background = "#555"; bE.style.color = "white"; renderLevel(); };
bE.onclick = () => { tool = "erase"; bE.style.background = "white"; bE.style.color = "black"; bB.style.background = "#555"; bB.style.color = "white"; bCa.style.background = "#555"; bCa.style.color = "white"; renderLevel(); };
document.getElementById("c-all").onclick = () => { levelBlocks = []; renderLevel(); };

cnv.addEventListener("mousedown", (e) => {
const r = cnv.getBoundingClientRect(); const cX = e.clientX - r.left; const cY_cl = e.clientY - r.top; const gX = cX + scX;
if (state !== "EDIT" || tool === "erase") return;
if (tool === "block") { levelBlocks.push({ x: Math.max(0, gX - 25), y: cY_cl - 6, w: 50, h: 12, type: "block" }); renderLevel(); }
else if (tool === "cactus") { levelBlocks.push({ x: Math.max(0, gX - 12), y: 88, w: 25, h: 50, type: "cactus" }); renderLevel(); }
});

document.addEventListener("keydown", (e) => {
if (state === "MENU" || state === "CLASSIC") return;
if (state === "EDIT" && e.keyCode === 72) {
state = "OWN_DINO"; pan.style.display = "none"; cnv.style.cursor = "default"; cY = 100; cYSp = 0; scX = 0; cJmp = false; levelBlocks = [];
for (let i = 1; i <= 25; i++) { levelBlocks.push({ x: i * 320 + Math.random() * 120, y: 88, w: 25, h: 50, type: "cactus" }); }
renderLevel(); return;
}
if (e.keyCode === 39) { scX += 20; if (state !== "EDIT" && state !== "PLATFORMER") return; if (Runner.instance_) Runner.instance_.distanceRan += 4; renderLevel(); }
if (e.keyCode === 37) { if (state !== "EDIT" && state !== "PLATFORMER") return; scX = Math.max(0, scX - 20); if (Runner.instance_) Runner.instance_.distanceRan = Math.max(0, Runner.instance_.distanceRan - 4); renderLevel(); }
if ((e.keyCode === 32 || e.keyCode === 38) && state === "PLATFORMER" && !cJmp) { cYSp = -6.5; cJmp = true; }
});

setInterval(() => {
// ОФИЦИАЛЬНАЯ СТРОЧКА NOCLIP: 3, 2, 1 — Включаем полный сквозной пролет для всех режимов кроме классики!
if (window.Runner && Runner.instance_) { Runner.instance_.checkForCollision = (state === "CLASSIC") ? window.originalCheckCollisionBackup : function() { return false; }; }
if (state !== "CLASSIC" && Runner.instance_?.horizon) { Runner.instance_.horizon.obstacles.forEach(o => { if(o) o.draw = function() {}; }); }

if (state === "MENU" || state === "CLASSIC") return;
const t = Runner.instance_ ? Runner.instance_.tRex : null; if (!t) return;
if (state === "EDIT") { t.yPos = -500; return; }

ctx.clearRect(0, 0, cnv.width, cnv.height);
if (state === "OWN_DINO" || state === "ORIGINAL_TEST") scX += 4.5;

if (state === "PLATFORMER" || state === "OWN_DINO") {
if (cY < 100) cYSp += 0.3; cY += cYSp; let onP = false; let tX = 20; let tW = 40;
levelBlocks.forEach(b => {
let sX = b.x - scX;
if (tX + tW > sX && tX < sX + b.w) {
if (b.type === "block") { if (cY + 40 >= b.y && cY + 20 <= b.y && cYSp > 0) { cY = b.y - 40; cYSp = 0; cJmp = false; onP = true; } }
else { if (cY + 38 > b.y) { if (state === "OWN_DINO") { cY = 100; cYSp = 0; cJmp = false; } else { cY = 100; cYSp = 0; scX = 0; cJmp = false; renderLevel(); } } }
}
});
if (cY >= 100) { cY = 100; cYSp = 0; cJmp = false; } if (onP) cJmp = false; t.yPos = cY; t.jumping = cJmp;
if (state === "OWN_DINO") { ctx.fillStyle = "#535353"; ctx.fillRect(50, cY, 20, 35); ctx.fillRect(50 + 12, cY - 4, 12, 12); }
} else if (state === "ORIGINAL_TEST") {
levelBlocks.forEach(b => {
let sX = b.x - scX; if (20 + 40 > sX && 20 < sX + b.w) {
if (b.type === "block") { if (t.yPos + 40 >= b.y && t.yPos + 20 <= b.y) { t.yPos = b.y - 40; } }
else { if (t.yPos + 38 > b.y) { if (window.originalGameOverBackup) { window.originalGameOverBackup.apply(Runner.instance_); } } }
}
});
renderLevel();
}
}, 15);
renderMenu();
