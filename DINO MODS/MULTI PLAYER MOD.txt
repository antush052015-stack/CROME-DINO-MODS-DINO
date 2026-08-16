(function(){
    if (!window.Runner || !window.Runner.instance_) {
        console.error("Нажмите Пробел чтобы начать игру!");
        return;
    }

    const dino = window.Runner.instance_;
    const canvas = dino.canvas;
    const ctx = canvas.getContext('2d');

    const P2_JUMP_VELOCITY = -9;
    const P2_GRAVITY = 0.45;
    const P2_MOVE_SPEED = 3;
    const P2_START_X = 150;
    const P2_START_Y = 100;
    const DEATH_TIMER = 300;
    const PHYSICS_DELAY_MS = 25;

    if (!window._mpOG) window._mpOG = dino.gameOver.bind(dino);
    if (!window._mpOU) window._mpOU = dino.update.bind(dino);

    const mp = {
        active: false,
        p2: {
            x: P2_START_X,
            y: P2_START_Y,
            vy: 0,
            jumping: false,
            alive: true,
            deathTimer: 0,
            frame: 0,
            lastPhysicsUpdate: performance.now()
        },
        p1Alive: true,
        p1DeathTimer: 0,
        p1ShiftX: 0,
        keys: { jump: 'KeyW', left: 'KeyA', right: 'KeyD' },
        isBinding: null
    };
    window.dinoMP = mp;

    const sprite = document.getElementById('1x-trex') || document.getElementById('2x-trex') || dino.tRex.image;
    const originalDraw = dino.tRex.draw.bind(dino.tRex);

    let menu = document.getElementById('mp-menu');
    if (menu) menu.remove();
    menu = document.createElement('div');
    menu.id = 'mp-menu';
    menu.style.cssText = 'position:absolute;left:' + canvas.offsetLeft + 'px;top:' + canvas.offsetTop + 'px;width:' + canvas.width + 'px;height:' + canvas.height + 'px;background:rgba(0,0,0,0.9);display:none;flex-direction:column;align-items:center;justify-content:center;z-index:99999;font-family:monospace;color:white;';
    canvas.parentElement.appendChild(menu);

    function getKeyName(code) {
        const names = {
            'KeyW': 'W', 'KeyA': 'A', 'KeyS': 'S', 'KeyD': 'D',
            'Space': 'ПРОБЕЛ', 'ArrowUp': '↑', 'ArrowDown': '↓',
            'ArrowLeft': '←', 'ArrowRight': '→',
            'ShiftLeft': 'SHIFT', 'ShiftRight': 'SHIFT'
        };
        return names[code] || code;
    }

    function showMenu() {
        if (!mp.active) {
            menu.innerHTML = `
                <h1 style="color:#ff0055;margin-bottom:20px;">МУЛЬТИПЛЕЕР</h1>
                <p style="margin-bottom:15px;">Игрок 1: Стрелочки + Пробел<br>Игрок 2: кастомные клавиши</p>
                <div style="margin-bottom:15px;text-align:center;">
                    <p style="margin:5px;">Прыжок: <b style="color:#00ff44;">${getKeyName(mp.keys.jump)}</b></p>
                    <p style="margin:5px;">Влево: <b style="color:#00ff44;">${getKeyName(mp.keys.left)}</b></p>
                    <p style="margin:5px;">Вправо: <b style="color:#00ff44;">${getKeyName(mp.keys.right)}</b></p>
                </div>
                <button id="mp-bind-jump" style="padding:8px 20px;background:#333;color:white;border:none;border-radius:4px;cursor:pointer;margin:3px;">Назначить ПРЫЖОК</button>
                <button id="mp-bind-left" style="padding:8px 20px;background:#333;color:white;border:none;border-radius:4px;cursor:pointer;margin:3px;">Назначить ВЛЕВО</button>
                <button id="mp-bind-right" style="padding:8px 20px;background:#333;color:white;border:none;border-radius:4px;cursor:pointer;margin:3px;">Назначить ВПРАВО</button>
                <br>
                <button id="mp-start-btn" style="padding:15px 40px;background:#ff0055;color:white;border:none;border-radius:8px;font-size:18px;cursor:pointer;margin-top:15px;">НАЧАТЬ</button>
            `;
        } else {
            menu.innerHTML = `
                <h1 style="color:#00ff44;margin-bottom:20px;">ПАУЗА</h1>
                <button id="mp-resume-btn" style="padding:15px 40px;background:#00ff44;color:black;border:none;border-radius:8px;font-size:18px;cursor:pointer;margin-bottom:10px;">ПРОДОЛЖИТЬ</button>
                <button id="mp-quit-btn" style="padding:10px 30px;background:#ff0055;color:white;border:none;border-radius:6px;cursor:pointer;">ВЫКЛЮЧИТЬ</button>
            `;
        }
        
        document.getElementById('mp-start-btn')?.addEventListener('click', () => {
            mp.active = true;
            mp.p2.alive = true;
            mp.p2.y = P2_START_Y;
            mp.p2.vy = 0;
            mp.p2.x = P2_START_X;
            mp.p2.deathTimer = 0;
            mp.p2.jumping = false;
            mp.p2.lastPhysicsUpdate = performance.now();
            mp.p1Alive = true;
            mp.p1DeathTimer = 0;
            mp.p1ShiftX = 0;
            dino.tRex.draw = originalDraw;
            menu.style.display = 'none';
        });
        
        document.getElementById('mp-resume-btn')?.addEventListener('click', () => {
            mp.active = true;
            menu.style.display = 'none';
        });
        
        document.getElementById('mp-quit-btn')?.addEventListener('click', () => {
            mp.active = false;
            dino.tRex.draw = originalDraw;
            dino.gameOver = window._mpOG;
            menu.style.display = 'none';
            dino.restart();
        });

        document.getElementById('mp-bind-jump')?.addEventListener('click', () => {
            mp.isBinding = 'jump';
            menu.innerHTML = '<h1 style="color:#ffff00;">НАЖМИТЕ КЛАВИШУ ДЛЯ ПРЫЖКА</h1>';
        });
        document.getElementById('mp-bind-left')?.addEventListener('click', () => {
            mp.isBinding = 'left';
            menu.innerHTML = '<h1 style="color:#ffff00;">НАЖМИТЕ КЛАВИШУ ВЛЕВО</h1>';
        });
        document.getElementById('mp-bind-right')?.addEventListener('click', () => {
            mp.isBinding = 'right';
            menu.innerHTML = '<h1 style="color:#ffff00;">НАЖМИТЕ КЛАВИШУ ВПРАВО</h1>';
        });
    }

    const keys = {};
    
    document.addEventListener('keydown', function(e) {
        if (e.code === 'F1') {
            e.preventDefault();
            if (menu.style.display === 'none') {
                showMenu();
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
                mp.isBinding = null;
            }
            return;
        }
        
        if (mp.isBinding) {
            e.preventDefault();
            e.stopPropagation();
            mp.keys[mp.isBinding] = e.code;
            mp.isBinding = null;
            showMenu();
            return;
        }
        
        if (mp.active) {
            keys[e.code] = true;
            
            if (e.code === 'ArrowLeft') {
                e.preventDefault();
                mp.p1ShiftX -= 20;
                if (mp.p1ShiftX < -15) mp.p1ShiftX = -15;
            }
            if (e.code === 'ArrowRight') {
                e.preventDefault();
                mp.p1ShiftX += 20;
                if (mp.p1ShiftX > canvas.width - 80) mp.p1ShiftX = canvas.width - 80;
            }
        }
    });
    
    document.addEventListener('keyup', function(e) {
        keys[e.code] = false;
    });

    function drawP2() {
        if (!mp.active || !mp.p2.alive) return;
        
        mp.p2.frame++;
        if (mp.p2.frame > 6) mp.p2.frame = 0;
        const srcX = mp.p2.frame < 3 ? 88 : 132;
        
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.drawImage(sprite, srcX, 0, 44, 47, mp.p2.x, mp.p2.y, 44, 47);
        ctx.restore();
    }

    function updateP2() {
        if (!mp.active) return;
        
        if (!mp.p2.alive) {
            mp.p2.deathTimer--;
            if (mp.p2.deathTimer <= 0) {
                mp.p2.alive = true;
                mp.p2.y = P2_START_Y;
                mp.p2.x = P2_START_X;
                mp.p2.vy = 0;
                mp.p2.jumping = false;
                mp.p2.deathTimer = 0;
                mp.p2.lastPhysicsUpdate = performance.now();
            }
            return;
        }
        
        if (keys[mp.keys.left]) mp.p2.x -= P2_MOVE_SPEED;
        if (keys[mp.keys.right]) mp.p2.x += P2_MOVE_SPEED;
        if (mp.p2.x < 10) mp.p2.x = 10;
        if (mp.p2.x > canvas.width - 50) mp.p2.x = canvas.width - 50;
        
        if (keys[mp.keys.jump] && !mp.p2.jumping) {
            mp.p2.vy = P2_JUMP_VELOCITY;
            mp.p2.jumping = true;
            mp.p2.lastPhysicsUpdate = performance.now();
        }
        
        const now = performance.now();
        if (mp.p2.jumping && now - mp.p2.lastPhysicsUpdate >= PHYSICS_DELAY_MS) {
            mp.p2.lastPhysicsUpdate = now;
            mp.p2.vy += P2_GRAVITY;
            mp.p2.y += mp.p2.vy;
            
            if (mp.p2.y >= P2_START_Y) {
                mp.p2.y = P2_START_Y;
                mp.p2.vy = 0;
                mp.p2.jumping = false;
            }
        }
    }

    // ПРОВЕРЯЕМ КОЛЛИЗИЮ ПЕРВОГО ИГРОКА ВРУЧНУЮ
    function checkP1Collision() {
        if (!dino.horizon || !dino.horizon.obstacles || !dino.tRex) return false;
        
        for (let obs of dino.horizon.obstacles) {
            if (!obs || obs.remove) continue;
            
            const p1x = dino.tRex.xPos;
            const p1y = dino.tRex.yPos;
            
            if (p1x + 30 > obs.xPos && p1x < obs.xPos + obs.width &&
                p1y + 40 > obs.yPos && p1y < obs.yPos + obs.height) {
                return true;
            }
        }
        return false;
    }

    function checkCollision() {
        if (!dino.horizon) return;
        
        const obstacles = dino.horizon.obstacles;
        if (!obstacles || obstacles.length === 0) return;
        
        for (let i = 0; i < obstacles.length; i++) {
            const obs = obstacles[i];
            if (!obs || obs.remove) continue;
            
            const obsX = obs.xPos;
            const obsY = obs.yPos;
            const obsW = obs.width || 25;
            const obsH = obs.height || 50;
            
            if (mp.p2.alive) {
                if (mp.p2.x < obsX + obsW &&
                    mp.p2.x + 44 > obsX &&
                    mp.p2.y + 47 > obsY &&
                    mp.p2.y < obsY + obsH) {
                    mp.p2.alive = false;
                    mp.p2.deathTimer = DEATH_TIMER;
                }
            }
        }
        
        // ПРОВЕРКА ПЕРВОГО ИГРОКА
        if (mp.p1Alive && checkP1Collision()) {
            mp.p1Alive = false;
            mp.p1DeathTimer = DEATH_TIMER;
            dino.tRex.draw = function() {};
            
            // Сбрасываем crashed
            dino.crashed = false;
            dino.activated = true;
        }
    }

    // ПЕРЕХВАТ: НЕ ДАЁМ ОРИГИНАЛЬНОМУ gameOver ВЫЗВАТЬСЯ ДЛЯ ПЕРВОГО ИГРОКА
    dino.gameOver = function() {
        if (mp.active) {
            // Проверяем кто умер
            if (mp.p1Alive) {
                // Первый умер - исчезает
                mp.p1Alive = false;
                mp.p1DeathTimer = DEATH_TIMER;
                dino.tRex.draw = function() {};
                dino.crashed = false;
                dino.activated = true;
                dino.paused = false;
            }
            
            // Если оба мертвы - настоящий Game Over
            if (!mp.p1Alive && !mp.p2.alive) {
                window._mpOG();
            }
            return;
        }
        window._mpOG();
    };

    dino.update = function() {
        window._mpOU();
        
        if (mp.active) {
            // Стрелочки для первого
            if (dino.tRex && mp.p1Alive) {
                dino.tRex.xPos = 50 + mp.p1ShiftX;
            }
            
            // Скрываем если мёртв
            if (!mp.p1Alive && dino.tRex) {
                dino.tRex.draw = function() {};
            } else if (mp.p1Alive && dino.tRex) {
                dino.tRex.draw = originalDraw;
            }
            
            updateP2();
            drawP2();
            checkCollision();
            
            // Возрождение первого
            if (!mp.p1Alive) {
                mp.p1DeathTimer--;
                if (mp.p1DeathTimer <= 0) {
                    mp.p1Alive = true;
                    mp.p1DeathTimer = 0;
                    dino.tRex.draw = originalDraw;
                    dino.crashed = false;
                    dino.activated = true;
                    dino.tRex.reset();
                }
            }
            
            ctx.save();
            ctx.font = 'bold 14px monospace';
            if (!mp.p1Alive) {
                ctx.fillStyle = '#ffaa00';
                ctx.fillText('Игрок 1: ' + Math.ceil(mp.p1DeathTimer / 60) + ' сек', 10, 30);
            }
            if (!mp.p2.alive) {
                ctx.fillStyle = '#ff0055';
                ctx.fillText('Игрок 2: ' + Math.ceil(mp.p2.deathTimer / 60) + ' сек', canvas.width - 120, 30);
            }
            ctx.restore();
        }
    };

    console.log('Мультиплеер загружен! F1 - меню');
})();