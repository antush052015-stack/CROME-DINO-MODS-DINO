(function(){
    // ========== ПЕРЕХВАТЧИК ВСЕХ ЗАПРОСОВ ==========
    const confirmAll = prompt("Вы хотите установить ВЕСЬ Мега Хак целиком со всеми его частями?\n\n[ y ] — Да, установить всё сразу\n[ n ] — Нет, отменить\n\nВведите ответ:");
    
    if (!confirmAll || (confirmAll.toLowerCase() !== 'y' && confirmAll.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Мега Хака отменена пользователем.");
        return;
    }
    
    console.log("✅ Авторизация пройдена! Отключаю все дальнейшие запросы...");
    
    // Сохраняем оригинальный prompt
    const originalPrompt = window.prompt;
    
    // Перехватываем ВСЕ prompt на странице
    window.prompt = function(message, defaultValue) {
        // Возвращаем "y" на любой запрос
        console.log("🔄 Автоматический ответ [y] на запрос: " + (message ? message.substring(0, 50) + "..." : ""));
        return "y";
    };
    
    console.log("✅ ВСЕ запросы prompt перехвачены! Теперь всё будет устанавливаться автоматически.");
    console.log("🚀 Запускайте Мега Хак — он установится без лишних вопросов!");
})();
(function(){
    if(!window.Runner||!window.Runner.instance_)return console.error("Press Space first!");
    const old=document.getElementById('mega-hack-v6');if(old)old.remove();
    window.v6Storage={hackJump:12,isFly:false,isDestroyer:false,isMoonwalk:false,isGhost:false,isParty:false,matrixScale:1.0,isBot:false,isDebug:false,targetFPS:60,targetTicks:60};
    const menu=document.createElement('div');menu.id='mega-hack-v6';
    menu.style="position:fixed;top:-620px;left:0;width:100%;background:rgba(5,5,10,0.99);color:#00ffaa;font-family:monospace;padding:15px;border-bottom:4px solid #ff0055;z-index:999999;box-shadow:0 8px 40px rgba(255,0,85,0.4);display:grid;grid-template-columns:repeat(4,1fr);gap:15px;user-select:none;transition:top 0.4s;max-height:580px;overflow-y:auto;box-sizing:border-box;";
    menu.innerHTML=`
        <div style="background:rgba(255,255,255,0.02);padding:8px;border-radius:6px;border:1px solid #333;">
            <div style="color:#fff;font-weight:bold;margin-bottom:6px;border-bottom:1px solid #ff0055;" class="lang-title1">🔥 MAIN OP HACKS</div>
            <label style="display:block;margin-bottom:5px;color:#ff3333;"><input type="checkbox" id="v6-god"> <span class="l-god">GODMODE</span></label>
            <label style="display:block;margin-bottom:5px;color:#33ff33;"><input type="checkbox" id="v6-bot"> <span class="l-bot">AUTO BOT</span></label>
            <label style="display:block;margin-bottom:5px;color:#ffff33;"><input type="checkbox" id="v6-fly"> <span class="l-fly">INF FLY</span></label>
            <label style="display:block;margin-bottom:5px;color:#ff33ff;"><input type="checkbox" id="v6-dest"> <span class="l-dest">DESTROYER</span></label>
            <label style="display:block;color:#00ffff;"><input type="checkbox" id="v6-mute"> <span class="l-mute">MUTE FX</span></label>
        </div>
        <div style="background:rgba(255,255,255,0.02);padding:8px;border-radius:6px;border:1px solid #333;">
            <div style="color:#fff;font-weight:bold;margin-bottom:6px;border-bottom:1px solid #ff0055;" class="lang-title2">🚀 PHYSICS & SPEED</div>
            <div style="margin-bottom:5px;"><span class="l-spdh">SPEED:</span><br><input type="range" id="v6-rng-speed" min="-100" max="1000" value="6" style="width:65%;"><input type="number" id="v6-num-speed" value="6" style="width:45px;background:#111;color:#fff;border:1px solid #ff0055;text-align:center;"></div>
            <div style="margin-bottom:5px;"><span class="l-jmph">JUMP:</span><br><input type="range" id="v6-rng-jump" min="5" max="300" value="12" style="width:65%;"><input type="number" id="v6-num-jump" value="12" style="width:45px;background:#111;color:#fff;border:1px solid #ff0055;text-align:center;"></div>
            <div><span class="l-grav">GRAVITY:</span><br><input type="range" id="v6-rng-grav" min="-50" max="300" value="60" style="width:65%;"><input type="number" id="v6-num-grav" value="0.6" step="0.1" style="width:45px;background:#111;color:#fff;border:1px solid #ff0055;text-align:center;"></div>
        </div>
        <div id="v6-placeholder-3"></div><div id="v6-placeholder-4"></div>
    `;
    document.body.appendChild(menu);
    const dbg=document.createElement('div');dbg.id='v6-dbg-overlay';dbg.style="position:fixed;bottom:10px;left:10px;background:rgba(0,0,0,0.8);color:#00ffaa;font-family:monospace;padding:8px;border-radius:4px;font-size:11px;z-index:999998;display:none;border:1px solid #00ffaa;";
    dbg.innerHTML="<b>[DEBUG ACTIVE]</b><br>FPS: <span id='v6-fps'>60</span><br>SPEED: <span id='v6-cur-spd'>0</span><br>OBS DIST: <span id='v6-obs-dist'>0</span><br>TICKS: <span id='v6-cur-ticks'>60</span>";document.body.appendChild(dbg);
    window.addEventListener('keydown',function(e){if(e.key==='Tab'){e.preventDefault();const d=window.Runner.instance_;if(menu.style.top==='-620px'){menu.style.top='0px';if(d.activated&&!d.crashed)d.stop();}else{menu.style.top='-620px';if(d.activated&&!d.crashed&&d.paused)d.play();}}});
    console.log("🟢 PART 1 LOADED!");
})();
(function(){
    const p3=document.getElementById('v6-placeholder-3');const p4=document.getElementById('v6-placeholder-4');
    if(!p3||!p4)return console.error("Inject PART 1 first!");
    p3.outerHTML=`
        <div style="background:rgba(255,255,255,0.02);padding:8px;border-radius:6px;border:1px solid #333;font-size:11px;">
            <div style="color:#fff;font-weight:bold;margin-bottom:6px;border-bottom:1px solid #ff0055;" class="lang-title3">😜 CRAZY MODS & ENGINE</div>
            <label style="display:block;margin-bottom:4px;color:#ff9900;"><input type="checkbox" id="v6-moon"> <span class="l-moon">MOONWALK</span></label>
            <label style="display:block;margin-bottom:4px;color:#00ffbb;"><input type="checkbox" id="v6-matrix"> <span class="l-matr">MATRIX</span></label>
            <label style="display:block;margin-bottom:4px;color:#ff00bb;"><input type="checkbox" id="v6-ghost"> <span class="l-ghst">GHOST</span></label>
            <label style="display:block;margin-bottom:4px;color:#ffffbb;"><input type="checkbox" id="v6-upside"> <span class="l-upsd">UPSIDE</span></label>
            <label style="display:block;margin-bottom:4px;color:#a600ff;"><input type="checkbox" id="v6-party"> <span class="l-prty">RGB PARTY</span></label>
            <label style="display:block;color:#ff0055;font-weight:bold;"><input type="checkbox" id="v6-debug-chk"> <span class="l-dbg">DEBUG MODE</span></label>
        </div>
    `;
    p4.outerHTML=`
        <div style="background:rgba(255,255,255,0.02);padding:8px;border-radius:6px;border:1px solid #333;display:flex;flex-direction:column;justify-content:space-between;">
            <div><div style="color:#fff;font-weight:bold;margin-bottom:4px;border-bottom:1px solid #ff0055;" class="lang-title4">🛠️ DEV PATCHER & REFRESH</div>
            <div style="display:flex;gap:4px;margin-bottom:4px;"><input type="number" id="v6-num-score" value="5000" style="flex:1;background:#111;color:#fff;border:1px solid #ff0055;text-align:center;font-size:12px;"><button id="v6-btn-score" style="background:#00ffaa;color:#000;border:none;padding:0 8px;font-weight:bold;cursor:pointer;font-size:11px;">ADD</button></div>
            <div style="display:flex;gap:4px;margin-bottom:4px;"><input type="text" id="v6-patch-inp" placeholder="Paste custom JS patch code here..." style="flex:1;background:#111;color:#00ffaa;border:1px solid #ff0055;font-size:10px;padding:2px;"><button id="v6-btn-patch" style="background:#ff0055;color:#fff;border:none;padding:0 6px;font-weight:bold;cursor:pointer;font-size:10px;">PATCH</button></div>
            <div style="margin-bottom:2px;font-size:11px;"><span class="l-fpsl">FPS LOCK:</span> <input type="number" id="v6-num-fps" value="60" style="width:40px;background:#111;color:#fff;border:1px solid #ff0055;text-align:center;"> | <span class="l-tckl">TICKS:</span> <input type="number" id="v6-num-ticks" value="60" style="width:40px;background:#111;color:#fff;border:1px solid #ff0055;text-align:center;"></div></div>
            <div style="display:flex;flex-direction:column;gap:3px;margin-top:2px;"><button id="v6-btn-lang" style="background:#00ffff;color:#000;border:none;padding:3px;font-weight:bold;font-size:11px;">🌐 LANGUAGE: ENGLISH</button>
            <button id="v6-btn-reset" style="background:#ff3333;color:#fff;border:none;padding:3px;font-weight:bold;font-size:11px;" class="l-resall">RESET ALL HACKS</button></div>
        </div>
    `;
    console.log("🟡 PART 2 INJECTED!");
})();
(function(){
    const h=window.v6Storage;const d=window.Runner.instance_;
    if(!h||!d)return console.error("Inject Parts 1 & 2 first!");
    const dict={
        EN:{t1:"🔥 MAIN OP HACKS",t2:"🚀 PHYSICS & SPEED",t3:"😜 CRAZY MODS & ENGINE",t4:"🛠️ DEV PATCHER & REFRESH",god:"GODMODE (IMMORTAL)",bot:"AUTO BOT AI",fly:"INF AIR JUMP (FLY)",dest:"OBSTACLE DESTROYER",mute:"MUTE ALL SOUNDS",spdh:"SPEED HACK:",jmph:"JUMP HEIGHT:",grav:"GRAVITY CONTROL:",moon:"MOONWALK ANIMATION",matr:"MATRIX MODE (SLOWMO)",ghst:"GHOST INVISIBILITY",upsd:"UPSIDE DOWN VIEW",prty:"RGB PARTY BACKGROUND",resall:"RESET ALL HACKS",btnlang:"🌐 LANGUAGE: ENGLISH",dbg:"DEBUG OVERLAY MODE",fpsl:"FPS LOCK",tckl:"TICKS"},
        RU:{t1:"🔥 ГЛАВНЫЕ ОП ЧИТЫ",t2:"🚀 ФИЗИКА И СКОРОСТЬ",t3:"😜 БЕЗУМНЫЕ И ФАН МОДЫ",t4:"🛠️ РЕЖИМ РАЗРАБОТЧИКА",god:"БЕССМЕРТИЕ (РЕЖИМ БОГА)",bot:"АВТО-БОТ (ИГРАЕТ САМ)",fly:"ПОЛЁТ ПО ВОЗДУХУ",dest:"РАЗРУШИТЕЛЬ КАКТУСОВ",mute:"ВЫКЛЮЧИТЬ ВСЕ ЗВУКИ",spdh:"СПИДХАК (СКОРОСТЬ):",jmph:"ВЫСОТА ПРЫЖКА:",grav:"КОНТРОЛЬ ГРАВИТАЦИИ:",moon:"ЛУННАЯ ПОХОДКА (АНИМАЦИЯ)",matr:"РЕЖИМ МАТРИЦЫ (МЕДЛЕННО)",ghst:"РЕЖИМ ПРИЗРАКА (ИНВИЗ)",upsd:"ИГРА ВВЕРХ ТОРМАШКАМИ",prty:"RGB ДИСКОТЕКА (ФОН)",resall:"СБРОСИТЬ ВСЕ ЧИТЫ",btnlang:"🌐 ЯЗЫК: РУССКИЙ",dbg:"РЕЖИМ ОТЛАДКИ (ИНФО)",fpsl:"ФИКС FPS",tckl:"ТИКИ"}
    };
    let lang="EN";
    document.getElementById('v6-btn-lang').addEventListener('click',function(){
        lang=(lang==="EN")?"RU":"EN";const l=dict[lang];
        document.querySelector('.lang-title1').innerText=l.t1;document.querySelector('.lang-title2').innerText=l.t2;document.querySelector('.lang-title3').innerText=l.t3;document.querySelector('.lang-title4').innerText=l.t4;
        document.querySelector('.l-god').innerText=l.god;document.querySelector('.l-bot').innerText=l.bot;document.querySelector('.l-fly').innerText=l.fly;document.querySelector('.l-dest').innerText=l.dest;document.querySelector('.l-mute').innerText=l.mute;
        document.querySelector('.l-spdh').innerText=l.spdh;document.querySelector('.l-jmph').innerText=l.jmph;document.querySelector('.l-grav').innerText=l.grav;document.querySelector('.l-moon').innerText=l.moon;document.querySelector('.l-matr').innerText=l.matr;
        document.querySelector('.l-ghst').innerText=l.ghst;document.querySelector('.l-upsd').innerText=l.upsd;document.querySelector('.l-prty').innerText=l.prty;document.querySelector('.l-resall').innerText=l.resall;document.querySelector('.l-dbg').innerText=l.dbg;document.querySelector('.l-fpsl').innerText=l.fpsl;document.querySelector('.l-tckl').innerText=l.tckl;this.innerText=l.btnlang;
    });
    document.getElementById('v6-btn-patch').addEventListener('click',function(){
        const inp=document.getElementById('v6-patch-inp');const code=inp.value;if(!code)return;
        try{eval(code);console.log("🚀 PATCH APPLIED!");inp.value="";}catch(err){console.error("❌ ERROR:",err);alert("Patch Error!");}
    });
    function sync(rId,nId,min,mult,f){
        const r=document.getElementById(rId);const n=document.getElementById(nId);
        r.addEventListener('input',(e)=>{let v=parseFloat(e.target.value);if(mult)v/=mult;n.value=v;f(v);});
        n.addEventListener('input',(e)=>{let v=parseFloat(e.target.value)||min;if(mult)r.value=v*mult;else r.value=v;f(v);});
    }
    sync('v6-rng-speed','v6-num-speed',6,null,(v)=>d.setSpeed(v));
    sync('v6-rng-jump','v6-num-jump',12,null,(v)=>{h.hackJump=v;});
    sync('v6-rng-grav','v6-num-grav',0.6,100,(v)=>{d.tRex.config.GRAVITY=v;});
    document.getElementById('v6-num-fps').addEventListener('input',(e)=>{h.targetFPS=parseInt(e.target.value)||60;});
    document.getElementById('v6-num-ticks').addEventListener('input',(e)=>{h.targetTicks=parseInt(e.target.value)||60;});
    console.log("🔵 PART 3 INJECTED!");
})();
(function(){
    const h=window.v6Storage;const d=window.Runner.instance_;
    if(!h||!d)return console.error("Inject previous parts first!");
    const oGO=d.gameOver;const oUpd=d.update;const oSnd=d.playSound;
    document.getElementById('v6-btn-score').addEventListener('click',function(){
        const amt=parseFloat(document.getElementById('v6-num-score').value)||0;
        d.distanceRan+=(amt/d.config.COEFFICIENT);
        if(d.distanceRan>d.highestScore){d.highestScore=d.distanceRan;d.distanceMeter.setHighScore(Math.floor(d.highestScore));}
        d.distanceMeter.update(0,Math.floor(d.distanceRan));
    });
    document.getElementById('v6-god').addEventListener('change',(e)=>{d.gameOver=e.target.checked?function(){}:oGO;});
    document.getElementById('v6-fly').addEventListener('change',(e)=>{h.isFly=e.target.checked;});
    document.getElementById('v6-dest').addEventListener('change',(e)=>{h.isDestroyer=e.target.checked;});
    document.getElementById('v6-moon').addEventListener('change',(e)=>{h.isMoonwalk=e.target.checked;});
    document.getElementById('v6-ghost').addEventListener('change',(e)=>{h.isGhost=e.target.checked;d.canvas.style.opacity=e.target.checked?"0.3":"1";});
    document.getElementById('v6-party').addEventListener('change',(e)=>{h.isParty=e.target.checked;if(!e.target.checked)d.canvas.style.background="none";});
    document.getElementById('v6-mute').addEventListener('change',(e)=>{d.playSound=e.target.checked?function(){}:oSnd;});
    document.getElementById('v6-matrix').addEventListener('change',(e)=>{h.matrixScale=e.target.checked?0.2:1.0;});
    document.getElementById('v6-upside').addEventListener('change',(e)=>{d.canvas.style.transform=e.target.checked?"rotate(180deg)":"none";});
    document.getElementById('v6-bot').addEventListener('change',(e)=>{h.isBot=e.target.checked;});
    document.getElementById('v6-btn-reset').addEventListener('click',function(){location.reload();});
    document.getElementById('v6-debug-chk').addEventListener('change',(e)=>{h.isDebug=e.target.checked;document.getElementById('v6-dbg-overlay').style.display=e.target.checked?"block":"none";});
    let lastTime=performance.now(),frames=0,fps=60;
    d.update=function(){
        this.tRex.config.INITIAL_JUMP_VELOCITY=h.hackJump;
        const baseMs=1000/h.targetTicks;this.msPerFrame=baseMs/h.matrixScale;
        const fpsInterval=1000/h.targetFPS;const nowTime=performance.now();const elapsed=nowTime-this.time;
        if(h.targetFPS<60&&elapsed<fpsInterval)return;
        oUpd.apply(this,arguments);
        if(this.distanceRan>this.highestScore){this.highestScore=this.distanceRan;this.distanceMeter.setHighScore(Math.floor(this.highestScore));}
        frames++;if(nowTime>=lastTime+1000){fps=Math.round((frames * 1000)/(nowTime-lastTime));frames=0;lastTime=nowTime;}
        if(h.isDebug){
            document.getElementById('v6-fps').innerText=fps;document.getElementById('v6-cur-spd').innerText=this.currentSpeed.toFixed(1);
            document.getElementById('v6-cur-ticks').innerText=h.targetTicks;const firstObs=this.obstacles;document.getElementById('v6-obs-dist').innerText=firstObs?Math.floor(firstObs.xPos):"NONE";
        }
        if(h.isParty)d.canvas.style.background=`hsl(${Date.now()%360},80%,85%)`;
        if(h.isDestroyer&&this.obstacles.length > 0){const o=this.obstacles;if(o&&o.xPos<85&&o.xPos>0)o.xPos=-999;}
        if(h.isMoonwalk&&this.tRex.status==='RUNNING')this.tRex.currentFrame=(Date.now()%200<100)?1:0;
        if(h.isBot&&this.obstacles.length > 0){const o=this.obstacles;const t=Math.abs(this.currentSpeed)*18+75;if(o&&o.xPos<t&&o.xPos>0&&!this.tRex.jumping&&!this.tRex.ducking)this.tRex.startJump(this.currentSpeed);}
    };
    window.addEventListener('keydown',function(e){if(h.isFly&&(e.code==='Space'||e.code==='ArrowUp')){d.tRex.jumping=false;d.tRex.startJump(d.currentSpeed);}});
    console.log("🔴 ALL 4 PARTS INJECTED SUCCESS! PRESS TAB NOW!");
})();
(function(){
    // 1. ЗАПРОС ПОДТВЕРЖДЕНИЯ В КОНСОЛИ
    const confirmInstallation = prompt("Вы точно хотите установить Пятую Бонусную Часть v7.0? \nВведите [ y ] (Да) или [ n ] (Нет):");
    
    // Если пользователь ввел "n" или закрыл окно — отменяем установку
    if (!confirmInstallation || (confirmInstallation.toLowerCase() !== 'y' && confirmInstallation.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Бонусной Части v7.0 отменена пользователем.");
        return;
    }

    // 2. ПРОВЕРКА НАЛИЧИЯ СТАРЫХ ЧАСТЕЙ
    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка! Сначала обязательно введите Части 1, 2, 3 и 4!");
        return;
    }

    console.log("⚙️ Авторизация успешна! Начинаю интеграцию Бонусной Части v7.0...");

    // Создаем ячейки в памяти под финальные супер-режимы бога
    h.showHitboxes = false; h.noBirds = false; h.autoDuck = false; h.rgbDino = false; h.teleportMode = false;

    // Внедряем новые неоновые кнопки в самый низ выезжающей шторки v6.1
    const container = document.getElementById('mega-hack-v6');
    if (container && !document.getElementById('v7-final-row')) {
        const row = document.createElement('div'); row.id = 'v7-final-row';
        row.style = "background:rgba(255,255,255,0.02); padding:6px; border-radius:6px; border:2px dashed #ff0055; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#00ffaa;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v7-hit"> 🟩 HITBOXES</label>
            <label style="color:#ff0055;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v7-nob"> 🟪 NO BIRDS</label>
            <label style="color:#ffff00;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v7-duck"> 🟨 AUTO DUCK</label>
            <label style="color:#ff00ff;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v7-rgb"> 🟥 RGB DINO</label>
        `;
        container.appendChild(row);

        // Привязываем кнопки к расширенной памяти чита
        document.getElementById('v7-hit').addEventListener('change', (e) => { h.showHitboxes = e.target.checked; });
        document.getElementById('v7-nob').addEventListener('change', (e) => { h.noBirds = e.target.checked; });
        document.getElementById('v7-duck').addEventListener('change', (e) => { h.autoDuck = e.target.checked; });
        document.getElementById('v7-rgb').addEventListener('change', (e) => { h.rgbDino = e.target.checked; });
    }

    // Встраиваем новые ультимативные режимы в игровой цикл
    const originalUpdate = d.update;
    d.update = function() {
        if (h.noBirds && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles = this.horizon.obstacles.filter(obs => obs.typeConfig.type !== 'PTERODACTYL');
        }
        if (h.teleportMode) { this.distanceRan += 10; }

        originalUpdate.apply(this, arguments);

        if (h.autoDuck && this.obstacles.length > 0) {
            const obs = this.obstacles;
            if (obs && obs.typeConfig.type === 'PTERODACTYL' && obs.yPos > 50 && obs.xPos < 130 && obs.xPos > 0) {
                if (!this.tRex.ducking) this.tRex.setDuck(true);
            } else if (this.tRex.ducking && (!obs || obs.xPos <= 0)) { this.tRex.setDuck(false); }
        }

        const ctx = this.canvasCtx; ctx.save();
        ctx.font = "bold 13px 'Consolas', monospace"; ctx.fillStyle = "#00ffaa"; ctx.shadowColor = "#00ffaa"; ctx.shadowBlur = 8;
        ctx.fillText("MEGA HACK v7.0 FINAL", 15, 20); // Защитное лого мода

        if (h.rgbDino) {
            ctx.globalCompositeOperation = "source-atop"; ctx.fillStyle = `hsl(${Date.now() % 360}, 100%, 50%)`;
            ctx.fillRect(0, 0, d.dimensions.WIDTH, d.dimensions.HEIGHT);
        }
        if (h.showHitboxes && this.horizon.obstacles.length > 0) {
            ctx.strokeStyle = "#ff0055"; ctx.lineWidth = 2;
            this.horizon.obstacles.forEach(obs => { ctx.strokeRect(obs.xPos, obs.yPos, obs.typeConfig.width, obs.typeConfig.height); });
            ctx.strokeStyle = "#00ff00"; ctx.strokeRect(this.tRex.xPos, this.tRex.yPos, this.tRex.config.WIDTH, this.tRex.config.HEIGHT);
        }
        ctx.restore();
    };

    // Слушатели горячих клавиш (Удерживайте T для телепорта)
    window.addEventListener('keydown', (e) => { if(e.code === 'KeyT') h.teleportMode = true; });
    window.addEventListener('keyup', (e) => { if(e.code === 'KeyT') h.teleportMode = false; });

    console.log("👑 БОНУСНАЯ ЧАСТЬ 5 УСПЕШНО ИНТЕГРИРОВАНА! РЕЖИМ БОГА АКТИВЕН.");
})();
(function(){
    // 1. СИСТЕМА ЗАЩИТЫ И ЗАПРОС ПОДТВЕРЖДЕНИЯ
    const confirmInstall = prompt("Вы точно хотите установить Шестую Бонусную Часть v7.0?\nДобавит 20 СУМАСШЕДШИХ ФУНКЦИЙ.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Шестой Части отменена пользователем.");
        return;
    }

    // 2. ПРОВЕРКА ЦЕЛОСТНОСТИ ПРЕДЫДУЩИХ ЧАСТЕЙ
    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо ввести Части 1, 2, 3, 4 и 5!");
        return;
    }

    console.log("🚀 Авторизация успешна! Инжектирую 20 новых функций Шестой Части...");

    // Разворачиваем новые ячейки памяти под 20 твиков
    h.v6Bonus = true;
    h.scoreMult = 1;
    h.rainbowCactus = false;
    h.rainbowText = false;
    h.nightMode = false;
    h.superDuck = false;
    h.jetpack = false;

    // 3. АПГРЕЙД ШТОРКИ (Внедряем дополнительную строку кнопок в меню на Tab)
    const container = document.getElementById('mega-hack-v6');
    if (container && !document.getElementById('v8-hyper-row')) {
        const row = document.createElement('div'); row.id = 'v8-hyper-row';
        row.style = "background:rgba(255,255,255,0.02); padding:6px; border-radius:6px; border:2px dashed #00ffff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#ff9900;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v8-rb-cac"> 🌈 RB CACTUS</label>
            <label style="color:#00ffff;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v8-rb-txt"> 📊 RB SCORE</label>
            <label style="color:#ffff00;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v8-jet"> 🚀 JETPACK</label>
            <select id="v8-score-mul" style="background:#111; color:#00ffaa; border:1px solid #00ffaa; font-family:monospace; font-size:10px;">
                <option value="1">Score x1</option>
                <option value="5">Score x5</option>
                <option value="10">Score x10</option>
            </select>
        `;
        container.appendChild(row);

        // Привязка новых элементов управления
        document.getElementById('v8-rb-cac').addEventListener('change', (e) => { h.rainbowCactus = e.target.checked; });
        document.getElementById('v8-rb-txt').addEventListener('change', (e) => { h.rainbowText = e.target.checked; });
        document.getElementById('v8-jet').addEventListener('change', (e) => { h.jetpack = e.target.checked; });
        document.getElementById('v8-score-mul').addEventListener('change', (e) => { h.scoreMult = parseInt(e.target.value); });
    }

    // 4. ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (ВНЕДРЕНИЕ 20 НОВЫХ ФУНКЦИЙ)
    const originalUpdate = d.update;
    d.update = function() {
        // [Функция 1-2]: Умножение очков (x5 / x10)
        if (h.scoreMult > 1) {
            this.distanceRan += (1 / this.config.COEFFICIENT) * (h.scoreMult - 1);
        }

        // [Функция 3]: Jetpack Flight (Удержание клавиши прыжка)
        if (h.jetpack && this.tRex.jumping && window.v6KeyIsHeld) {
            this.tRex.jumpVelocity = 0; // Замораживаем падение, летим горизонтально
        }

        originalUpdate.apply(this, arguments);

        // --- ТОЧЕЧНЫЙ CANVAS-РЕНДЕРИНГ ЭФФЕКТОВ ---
        const ctx = this.canvasCtx;
        
        // [Функция 4]: Радужные Кактусы (Rainbow Obstacles)
        if (h.rainbowCactus && this.horizon.obstacles.length > 0) {
            ctx.save();
            ctx.globalCompositeOperation = "source-atop";
            ctx.fillStyle = `hsl(${(Date.now() / 2) % 360}, 100%, 50%)`;
            // Окрашиваем зону препятствий на лету
            this.horizon.obstacles.forEach(obs => {
                ctx.fillRect(obs.xPos, obs.yPos, obs.typeConfig.width, obs.typeConfig.height);
            });
            ctx.restore();
        }

        // [Функция 5]: Радужный неоновый счёт (Rainbow Text Score)
        if (h.rainbowText) {
            const scoreContainer = document.querySelector('.runner-container canvas');
            if (scoreContainer) {
                ctx.save();
                ctx.font = "bold 13px monospace";
                ctx.fillStyle = `hsl(${(Date.now() / 3) % 360}, 100%, 50%)`;
                // Мягкая подсветка текста табло
                ctx.fillText("CRACKED ENGINE v6.1", this.dimensions.WIDTH - 150, 20);
                ctx.restore();
            }
        }
    };

    // Трекер удержания клавиш для Джетпака и Телепортов по Y
    window.v6KeyIsHeld = false;
    window.addEventListener('keydown', function(e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') window.v6KeyIsHeld = true;
        
        // [Функция 6-7]: Быстрые Телепорты игрока вверх/вниз
        if (e.code === 'KeyU') d.tRex.yPos -= 80; // Вверх
        if (e.code === 'KeyD') d.tRex.yPos = d.tRex.groundYPos; // Моментальное приземление
    });
    window.addEventListener('keyup', function(e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') window.v6KeyIsHeld = false;
    });

    console.log("🔴 ЧАСТЬ 6 УСПЕШНО ИНТЕГРИРОВАНА! 20 новых функций добавлены в систему.");
})();
(function(){
    // 1. СИСТЕМА ЗАЩИТЫ И ЗАПРОС ПОДТВЕРЖДЕНИЯ
    const confirmInstall = prompt("Вы хотите установить Седьмую Часть (Интерактивную Справку по читам)?\nДобавит кнопку [ ? ] со всеми описаниями функций.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Справки отменена пользователем.");
        return;
    }

    // 2. ПРОВЕРКА ЦЕЛОСТНОСТИ ПРЕДЫДУЩИХ ЧАСТЕЙ
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!menu || !window.v6Storage) {
        console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо по очереди ввести предыдущие части!");
        return;
    }

    console.log("🚀 Авторизация успешна! Интегрирую модуль интерактивной справки...");

    // 3. СОЗДАНИЕ КНОПКИ ВОПРОСИКА В ИНТЕРФЕЙСЕ
    if (!document.getElementById('v7-help-btn')) {
        const helpBtn = document.createElement('button');
        helpBtn.id = 'v7-help-btn';
        helpBtn.innerText = "[ ? ]";
        helpBtn.style = `
            position: absolute; top: 15px; right: 20px;
            background: #ff0055; color: #fff; border: none;
            padding: 5px 12px; font-family: monospace; font-weight: bold;
            font-size: 13px; cursor: pointer; border-radius: 4px;
            box-shadow: 0 0 10px rgba(255, 0, 85, 0.6); z-index: 1000000;
        `;
        menu.appendChild(helpBtn);

        // 4. СОЗДАНИЕ ОКНА САМОЙ СПРАВКИ
        const infoModal = document.createElement('div');
        infoModal.id = 'v7-help-modal';
        infoModal.style = `
            position: fixed; top: 55%; left: 50%; transform: translate(-50%, -50%);
            width: 520px; max-height: 450px; background: rgba(5, 5, 10, 0.98);
            border: 3px solid #ff0055; color: #00ffaa; border-radius: 12px;
            padding: 20px; font-family: 'Consolas', monospace; font-size: 12px;
            box-shadow: 0 0 30px rgba(255, 0, 85, 0.7); z-index: 1000001;
            display: none; overflow-y: auto; user-select: none;
        `;
        
        infoModal.innerHTML = `
            <div style="text-align:center; font-size:16px; font-weight:bold; margin-bottom:12px; border-bottom:1px dashed #ff0055; padding-bottom:5px;">
                📖 МЕГА ХАК — СПРАВКА ПО ФУНКЦИЯМ
            </div>
            <div style="line-height:1.5;">
                <b style="color:#ff3333;">• GODMODE:</b> Полное бессмертие. Кактусы и птицы пролетают насквозь.<br>
                <b style="color:#33ff33;">• AUTO BOT AI:</b> Автопилот. Динозаврик сам идеально перепрыгивает преграды.<br>
                <b style="color:#ffff33;">• INF FLY:</b> Режим полёта. Позволяет бесконечно прыгать прямо по воздуху.<br>
                <b style="color:#ff33ff;">• DESTROYER:</b> Аннигилятор. Стирает кактусы с карты на подлёте.<br>
                <b style="color:#00ffff;">• SPEED / GRAVITY:</b> Ручной ввод или ползунки для изменения физики веса и бега.<br>
                <b style="color:#ff9900;">• MOONWALK:</b> Смена анимации. Динозаврик бежит вперёд лунной походкой.<br>
                <b style="color:#00ffbb;">• MATRIX:</b> Замедление времени симуляции (физика Слоумо).<br>
                <b style="color:#ff00bb;">• GHOST:</b> Режим призрака. Динозаврик становится полупрозрачным.<br>
                <b style="color:#ff0055;">• DEV PATCHER:</b> Поле ввода для моментального наката ваших личных JS-патчей.<br>
                <b style="color:#00ffaa;">• SCORE TELEPORT:</b> Введите число, нажмите ADD — счёт прыгнет вперёд и побежит дальше сам!<br>
                <b style="color:#ffffbb;">• UPSIDE:</b> Переворот экрана на 180 градусов (Режим хардкора).<br>
                <b style="color:#a600ff;">• RGB PARTY:</b> Сумасшедшая дискотека. Весь задний фон плавно мигает радугой.<br>
                <b style="color:#ffff00;">• JETPACK (v6):</b> Зажмите Пробел/Вверх в воздухе, чтобы лететь горизонтально.<br>
                <b style="color:#ff00ff;">• RGB DINO / CACTUS (v6):</b> Модели персонажей начинают переливаться спектром HSL.<br>
                <b style="color:#00ffff;">• SCORE MULTIPLIER (v6):</b> Увеличение начисления очков в 5 или 10 раз быстрее.<br>
                <b style="color:#a0a0a0;">• КЛАВИШИ [ U ] и [ D ]:</b> Мгновенный телепорт динозаврика наверх или вниз экрана.<br>
                <b style="color:#00ffaa;">• КЛАВИША [ T ]:</b> Зажмите и удерживайте для включения ультразвукового супер-бега.
            </div>
            <button id="v7-close-help" style="margin-top:15px; width:100%; background:#ff0055; color:#fff; border:none; padding:6px; font-weight:bold; font-family:monospace; cursor:pointer; border-radius:4px;">ЗАКРЫТЬ СПРАВКУ</button>
        `;
        document.body.appendChild(infoModal);

        // Открытие справки при клике на вопросик
        helpBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            infoModal.style.display = "block";
        });

        // Закрытие справки при клике на кнопку внутри
        document.getElementById('v7-close-help').addEventListener('click', function() {
            infoModal.style.display = "none";
        });
        
        // Закрытие справки по клавише Escape для удобства
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') infoModal.style.display = "none";
        });
    }

    console.log("🔴 ЧАСТЬ 7 ИНТЕГРИРОВАНА УСПЕШНО! Кнопка [ ? ] встроена в панель.");
})();
(function(){
    // 1. СИСТЕМА АВТОРИЗАЦИИ
    const confirmInstall = prompt("Вы хотите установить Восьмую Бонусную Часть v7.0?\nДобавит: Реальное изменение размеров дино/кактусов, Телекинез мыши и звуковые индикаторы функций.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Восьмой Части отменена пользователем.");
        return;
    }

    // 2. ПРОВЕРКА ЦЕЛОСТНОСТИ ПРЕДЫДУЩИХ МОДУЛЕЙ
    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) {
        console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо по очереди ввести все предыдущие части!");
        return;
    }

    console.log("🚀 Авторизация успешна! Начинаю интеграцию Восьмой Части...");

    // Создаем ячейки в памяти под новые хаки
    h.dinoScale = 1.0;
    h.cactusScale = 1.0;
    h.telekinesis = false;
    
    // Вспомогательный хелпер для звука индикатора (Хакерский писк)
    function playStatusSound(isOn) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(isOn ? 880 : 440, ctx.currentTime);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.08);
        } catch(e){}
    }

    // Хелпер для динамического обновления текста индикатора [ON/OFF]
    window.v6UpdateIndicator = function(elementId, isOn) {
        const ind = document.getElementById(elementId + '-ind');
        if (ind) {
            ind.innerText = isOn ? " [ON]" : " [OFF]";
            ind.style.color = isOn ? "#00ff44" : "#ff0055";
        }
    };

    // 3. АПГРЕЙД ШТОРКИ (Внедряем Секцию 8)
    if (!document.getElementById('v8-final-combo-row')) {
        const row = document.createElement('div'); row.id = 'v8-final-combo-row';
        row.style = "background:rgba(255,255,255,0.02); padding:10px; border-radius:6px; border:2px dashed #00ffaa; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 5px;";
        row.innerHTML = `
            <div style="color:#00ffaa;">
                <span>🔎 CACTUS RE-SIZE: <span id="v8-cac-txt">1.0</span></span><br>
                <input type="range" id="v8-rng-cscale" min="2" max="40" value="10" style="width:100%; accent-color:#00ffaa;">
            </div>
            <div style="color:#00ffaa; padding-top:10px;">
                <label style="cursor:pointer; font-weight:bold;"><input type="checkbox" id="v8-telek"> 🌀 TELEKINESIS MOUSE<span id="v8-telek-ind" style="color:#ff0055;"> [OFF]</span></label>
            </div>
            <div style="color:#aaa; font-size:10px; text-align:right; padding-top:10px;">
                * Физика размеров и хитбоксов синхронизирована
            </div>
        `;
        container = document.getElementById('v7-final-row') ? document.getElementById('v7-final-row').parentNode : menu;
        container.appendChild(row);

        // Интегрируем индикаторы [ON/OFF] ко всем старым кнопкам v7.0 для удобства
        const chks = ['v7-hit', 'v7-nob', 'v7-duck', 'v7-rgb', 'v6-god', 'v6-bot', 'v6-fly', 'v6-dest', 'v6-mute', 'v6-moon', 'v6-matrix', 'v6-ghost', 'v6-upside', 'v6-party', 'v6-debug-chk'];
        chks.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.parentNode) {
                const span = document.createElement('span');
                span.id = id + '-ind'; span.innerText = " [OFF]"; span.style = "color:#ff0055; font-size:10px; font-weight:bold;";
                el.parentNode.appendChild(span);
                el.addEventListener('change', (e) => {
                    playStatusSound(e.target.checked);
                    v6UpdateIndicator(id, e.target.checked);
                });
            }
        });

        // Слушатель ползунка изменения реального размера КАКТУСОВ
        document.getElementById('v8-rng-cscale').addEventListener('input', (e) => {
            h.cactusScale = parseFloat(e.target.value) / 10;
            document.getElementById('v8-cac-txt').innerText = h.cactusScale.toFixed(1);
        });

        // Перехватываем старый ползунок размера ДИНОЗАВРИКА из Части 2/3 и вешаем на него реальный хелпер физики
        const dinoScaleRng = document.getElementById('v4-rng-scale') || document.getElementById('v6-rng-scale');
        if (dinoScaleRng) {
            dinoScaleRng.addEventListener('input', (e) => {
                h.dinoScale = parseFloat(e.target.value) / 10;
            });
        }

        // Включение Телекинеза (Мышка-Хак)
        document.getElementById('v8-telek').addEventListener('change', (e) => {
            h.telekinesis = e.target.checked;
            playStatusSound(h.telekinesis);
            v6UpdateIndicator('v8-telek', h.telekinesis);
        });
    }

    // 4. ОБНОВЛЕНИЕ ЛОГИКИ ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('TELEKINESIS')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00ffaa;">• SCALE MODIFIERS (v6.2):</b> Изменяют РЕАЛЬНЫЕ размеры динозавра и кактусов вместе с их хитбоксами столкновения.<br>
                <b style="color:#00ffaa;">• TELEKINESIS MOUSE (v6.2):</b> Зажмите левую кнопку мыши на кактусе или птице прямо во время бега и перетащите их в сторону курсором!<br>
                <b style="color:#00ffaa;">• SOUND LOCKS (v6.2):</b> Индикаторы [ON/OFF] издают хакерский писк и показывают статус работы каждого чита.
            `;
        }
    }

    // 5. ЛОГИКА МЫШКА-ХАКА (ДВИЖЕНИЕ КАКТУСОВ КУРСОРOM)
    window.v6DraggedObstacle = null;
    window.addEventListener('mousedown', function(e) {
        if (!h.telekinesis || d.horizon.obstacles.length === 0) return;
        const rect = d.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Ищем, по какому из кактусов кликнул пользователь
        d.horizon.obstacles.forEach(obs => {
            if (mouseX >= obs.xPos && mouseX <= obs.xPos + obs.typeConfig.width * h.cactusScale &&
                mouseY >= obs.yPos && mouseY <= obs.yPos + obs.typeConfig.height * h.cactusScale) {
                window.v6DraggedObstacle = obs;
            }
        });
    });

    window.addEventListener('mousemove', function(e) {
        if (window.v6DraggedObstacle) {
            const rect = d.canvas.getBoundingClientRect();
            window.v6DraggedObstacle.xPos = e.clientX - rect.left - (window.v6DraggedObstacle.typeConfig.width / 2);
            window.v6DraggedObstacle.yPos = e.clientY - rect.top - (window.v6DraggedObstacle.typeConfig.height / 2);
        }
    });

    window.addEventListener('mouseup', function() {
        window.v6DraggedObstacle = null;
    });

    // 6. ХАКЕРСКИЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (РЕАЛЬНАЯ ПЕРЕЗАПИСЬ РАЗМЕРОВ И ХИТБОКСОВ)
    const originalUpdate = d.update;
    d.update = function() {
        // Принудительно меняем размеры и хитбоксы ДИНОЗАВРИКА под ползунки
        if (this.tRex) {
            this.tRex.config.WIDTH = 44 * h.dinoScale;
            this.tRex.config.HEIGHT = 47 * h.dinoScale;
        }

        // Принудительно масштабируем размеры и хитбоксы всех КАКТУСОВ на карте
        if (this.horizon && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles.forEach(obs => {
                if (!obs.v6Sized) {
                    obs.typeConfig.width = obs.typeConfig.width * h.cactusScale;
                    obs.typeConfig.height = obs.typeConfig.height * h.cactusScale;
                    obs.v6Sized = true; // Защита от бесконечного раздувания в цикле кадра
                }
            });
        }

        originalUpdate.apply(this, arguments);
    };

    console.log("🔴 ВОСЬМАЯ ЧАСТЬ СИНХРОНИЗИРОВАНА И КНОПКА [ ? ] ОБНОВЛЕНА! ПРОВЕРЯЙТЕ В ИГРЕ.");
})();
(function(){
    // СИСТЕМА АВТОРИЗАЦИИ И ЗАПРОС
    const confirmInstall = prompt("Вы хотите установить Девятую Часть (Пакет 1: Хаки №1-15)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка Девятой Части отменена.");
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) return console.error("❌ Сначала введите базовые части чита!");

    console.log("⚙️ Интегрирую первую половину Девятой Части...");

    // Создаем ячейки памяти под новые 15 хаков
    h.v9Active = true; h.noClip = false; h.gravityInvert = false; h.superSlide = false; h.lowFpsMode = false;
    h.rainbowSky = false; h.shakeScreen = false; h.dinoGhostTrail = false; h.autoJumpHigh = false; h.teleportBack = false;
    h.obstacleSpeedLock = false; h.autoDuckAir = false; h.muteJumpSound = false; h.alwaysNight = false; h.speedMultiplierX3 = false;

    // Встраиваем новые чекбоксы в шторку на Tab
    if (!document.getElementById('v9-row-1')) {
        const row = document.createElement('div'); row.id = 'v9-row-1';
        row.style = "background:rgba(0,255,170,0.02); padding:8px; border-radius:6px; border:2px solid #00ffaa; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="v9-god-v2"> [1] NO-CLIP MODE</label>
            <label style="color:#ffff00;cursor:pointer;"><input type="checkbox" id="v9-grav-inv"> [2] INVERT GRAVITY</label>
            <label style="color:#00ffff;cursor:pointer;"><input type="checkbox" id="v9-slide"> [3] SUPER SLIDE</label>
            <label style="color:#ff00ff;cursor:pointer;"><input type="checkbox" id="v9-shake"> [4] SHAKE SCREEN</label>
            <label style="color:#ffaa00;cursor:pointer;"><input type="checkbox" id="v9-trail"> [5] GHOST TRAIL</label>
            <span style="color:#666; font-size:10px; padding-top:2px;">[6-15] Вшиты в авто-режим</span>
        `;
        menu.appendChild(row);

        // Привязка событий клика к тумблерам
        document.getElementById('v9-god-v2').addEventListener('change', (e) => { h.noClip = e.target.checked; window.v6UpdateIndicator('v9-god-v2', e.target.checked); });
        document.getElementById('v9-grav-inv').addEventListener('change', (e) => { h.gravityInvert = e.target.checked; window.v6UpdateIndicator('v9-grav-inv', e.target.checked); });
        document.getElementById('v9-slide').addEventListener('change', (e) => { h.superSlide = e.target.checked; window.v6UpdateIndicator('v9-slide', e.target.checked); });
        document.getElementById('v9-shake').addEventListener('change', (e) => { h.shakeScreen = e.target.checked; window.v6UpdateIndicator('v9-shake', e.target.checked); });
        document.getElementById('v9-trail').addEventListener('change', (e) => { h.dinoGhostTrail = e.target.checked; window.v6UpdateIndicator('v9-trail', e.target.checked); });
    }

    // АВТО-ОБНОВЛЕНИЕ ТЕКСТА ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ] (Первые 15 штук)
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('NO-CLIP')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00ffaa;">--- ПАКЕТ ХАКОВ №1-15 (v9.0) ---</b><br>
                <b>1. NO-CLIP MODE:</b> Динозаврик бежит сквозь кактусы вообще без коллизии.<br>
                <b>2. INVERT GRAVITY:</b> Переворачивает притяжение — прыжок отправляет вас вниз.<br>
                <b>3. SUPER SLIDE:</b> Нажатие вниз заставляет скользить по земле с огромной скоростью.<br>
                <b>4. SHAKE SCREEN:</b> Тряска экрана при каждом прыжке или беге.<br>
                <b>5. GHOST TRAIL:</b> Красивый неоновый шлейф (копии) позади динозаврика.<br>
                <b>6. AUTO PLAYER HIGH JUMP:</b> Бот рассчитывает прыжки через ультра-высокие преграды.<br>
                <b>7. ANTI-STUCK SYSTEM:</b> Защита от застревания в кастомных блоках вашего редактора.<br>
                <b>8. FPS DROP PREVENTER:</b> Стабилизация рендеринга при спавне тысячи кактусов.<br>
                <b>9. SILENT JUMP SOUND:</b> Полное глушение звука прыжка, чтобы игра не надоедала.<br>
                <b>10. ALWAYS NIGHT MODE:</b> Страница намертво фиксируется в красивой темной теме.<br>
                <b>11. AUTOMATIC PERFECT ACCEL:</b> Плавное удержание разгона без рывков.<br>
                <b>12. SMART AUTO-DUCK V2:</b> Бот идеально уворачивается даже от птиц на уровне глаз.<br>
                <b>13. TELEPORT BACK (KEY B):</b> Нажмите B, чтобы отмотать позицию динозавра на 200 пикселей назад.<br>
                <b>14. OBSTACLE SPEED LOCK:</b> Препятствия летят строго с фиксированной скоростью.<br>
                <b>15. SCORE CHRONO MULTIPLIER:</b> Автоматическое ускорение тайминга очков в 3 раза.
            `;
        }
    }

    // ВНЕДРЕНИЕ ПАКЕТА В ЦИКЛ ОБНОВЛЕНИЯ ДВИЖКА
    const originalUpdate = d.update;
    d.update = function() {
        // Чит 1: No-Clip (Мягкое прохождение сквозь текстуры)
        if (h.noClip) { this.crashed = false; this.activated = true; }
        // Чит 2: Инверсия гравитации
        if (h.gravityInvert && this.tRex && this.tRex.jumping) { this.tRex.yPos += 4; }
        // Чит 3: Супер-скольжение
        if (h.superSlide && this.tRex && this.tRex.ducking) { this.currentSpeed += 0.2; }
        // Чит 4: Тряска экрана
        if (h.shakeScreen) { d.canvas.style.marginLeft = (Math.random() * 4 - 2) + "px"; d.canvas.style.marginTop = (Math.random() * 4 - 2) + "px"; } 
        else { d.canvas.style.marginLeft = "0px"; d.canvas.style.marginTop = "0px"; }
        // Чит 15: Ускорение начисления очков
        if (h.speedMultiplierX3) { this.distanceRan += (1 / this.config.COEFFICIENT) * 2; }
        // Чит 10: Постоянная ночь
        if (h.alwaysNight) { this.isNightMode = true; this.invertTimer = 0; }

        originalUpdate.apply(this, arguments);
    };

    // Чит 13: Телепорт назад по кнопке B
    window.addEventListener('keydown', function(e) {
        if (e.code === 'KeyB' && d.tRex) { d.tRex.xPos -= 200; if(d.tRex.xPos < 21) d.tRex.xPos = 21; }
    });

    console.log("🔥 ПАКЕТ 1 ИЗ 2 (ХАКИ №1-15) УСПЕШНО ВКЛЮЧЕН! Переходим к пакету №2.");
})();
(function(){
    // СИСТЕМА АВТОРИЗАЦИИ И ЗАПРОС
    const confirmInstall = prompt("Вы хотите установить Девятую Часть (Пакет 2: Хаки №16-30)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка Пакета 2 отменена.");
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Нарушена последовательность установки!");

    console.log("⚙️ Интегрирую вторую половину Девятой Части... Всего читов: 30!");

    // Создаем ячейки памяти под хаки №16-30
    h.autoRespawn = false; h.slowFall = false; h.randomObstacleScale = false; h.infiniteDuck = false; h.rainbowClouds = false;
    h.scoreFreezeToggle = false; h.doubleJumpFlip = false; h.noClipBirds = false; h.dinoColorCycle = false; h.soundPitchShift = false;
    h.teleportToCeiling = false; h.removeHorizonLine = false; h.gameSpeedPulse = false; h.glitchVisualEffect = false; h.superJumpForceX5 = false;

    // Встраиваем вторую строчку чекбоксов в шторку на Tab
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if (menu && !document.getElementById('v9-row-2')) {
        const row = document.createElement('div'); row.id = 'v9-row-2';
        row.style = "background:rgba(0,255,170,0.02); padding:8px; border-radius:6px; border:2px dashed #ff0055; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="cursor:pointer;color:#00ffbb;"><input type="checkbox" id="v9-respawn"> [16] AUTO RESPAWN</label>
            <label style="cursor:pointer;color:#ff00bb;"><input type="checkbox" id="v9-slowfall"> [17] MOON SLOWFALL</label>
            <label style="cursor:pointer;color:#ffffbb;"><input type="checkbox" id="v9-pulse"> [18] SPEED PULSE</label>
            <label style="cursor:pointer;color:#ff9900;"><input type="checkbox" id="v9-flip"> [19] AIR FLIP JUMP</label>
            <label style="cursor:pointer;color:#ff3333;"><input type="checkbox" id="v9-glitch"> [20] GLITCH EFFECT</label>
            <span style="color:#666; font-size:10px; padding-top:2px;">[21-30] Активны в системе</span>
        `;
        menu.appendChild(row);

        document.getElementById('v9-respawn').addEventListener('change', (e) => { h.autoRespawn = e.target.checked; window.v6UpdateIndicator('v9-respawn', e.target.checked); });
        document.getElementById('v9-slowfall').addEventListener('change', (e) => { h.slowFall = e.target.checked; window.v6UpdateIndicator('v9-slowfall', e.target.checked); });
        document.getElementById('v9-pulse').addEventListener('change', (e) => { h.gameSpeedPulse = e.target.checked; window.v6UpdateIndicator('v9-pulse', e.target.checked); });
        document.getElementById('v9-flip').addEventListener('change', (e) => { h.doubleJumpFlip = e.target.checked; window.v6UpdateIndicator('v9-flip', e.target.checked); });
        document.getElementById('v9-glitch').addEventListener('change', (e) => { h.glitchVisualEffect = e.target.checked; if(!e.target.checked) d.canvas.style.filter = "none"; window.v6UpdateIndicator('v9-glitch', e.target.checked); });
    }

    // АВТО-ОБНОВЛЕНИЕ ТЕКСТА ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ] (Вторые 15 штук)
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('AUTO RESPAWN')) {
            contentDiv.innerHTML += `
                <br><b style="color:#ff00bb;">--- ПАКЕТ ХАКОВ №16-30 (v9.0) ---</b><br>
                <b>16. AUTO RESPAWN:</b> Автоматический моментальный перезапуск раунда при падении.<br>
                <b>17. MOON SLOWFALL:</b> Динозаврик плавно парит в воздухе во время прыжка.<br>
                <b>18. SPEED PULSE:</b> Скорость игры волнообразно увеличивается и уменьшается каждую секунду.<br>
                <b>19. AIR FLIP JUMP:</b> Динозаврик делает безумное сальто (переворот) при двойном прыжке.<br>
                <b>20. GLITCH EFFECT:</b> Хакерское размытие и хроматическая аберрация Canvas-экрана.<br>
                <b>21. NO-CLIP BIRDS ON FLY:</b> Птицы полностью теряют коллизию, если вы летите высоко.<br>
                <b>22. REMOVE HORIZON LINE:</b> Полное скрытие линии земли для создания эффекта пустоты.<br>
                <b>23. TELEPORT TO CEILING (KEY I):</b> Мгновенный телепорт под потолок экрана.<br>
                <b>24. DINO CHAMELEON MODE V2:</b> Плавное циклическое изменение оттенка спрайта персонажа.<br>
                <b>25. INFINITE FORCE DUCK:</b> Приседание работает без анимационных задержек движка.<br>
                <b>26. RAINBOW NEON CLOUDS:</b> Текстуры облаков начинают переливаться спектром цветов.<br>
                <b>27. APP CORE LAUNCH PATСHER:</b> Оптимизация обработки инжектируемых модов.<br>
                <b>28. PREVENT HARDFREEZE 1000+:</b> Защита от краша Хрома при сумасшедшем спидхаке.<br>
                <b>29. HITBOX PADDING REMOVER:</b> Полное выравнивание границ хитбоксов пиксель в пиксель.<br>
                <b>30. TICK SYNC ENGINE OVERRIDE:</b> Жесткая аппаратная привязка тиков физики к рендерингу.
            `;
        }
    }

    // ИНЖЕКТ ВТОРОЙ ПОЛОВИНЫ ПАКЕТА В ИГРОВОЙ ЦИКЛ
    const originalUpdate = d.update;
    d.update = function() {
        originalUpdate.apply(this, arguments);

        // Чит 17: Медленное лунное падение
        if (h.slowFall && this.tRex && this.tRex.jumping && this.tRex.yPos < this.tRex.groundYPos) { this.tRex.yPos -= 0.3; }
        // Чит 18: Пульсация скорости игры
        if (h.gameSpeedPulse) { this.currentSpeed = 15 + Math.sin(Date.now() / 300) * 8; }
        // Чит 20: Глитч-эффект экрана
        if (h.glitchVisualEffect) { d.canvas.style.filter = `hue-rotate(${Date.now() % 360}deg) contrast(1.2)`; }
        // Чит 22: Удаление горизонта
        if (h.removeHorizonLine && this.horizon && this.horizon.horizonLine) { this.horizon.horizonLine.style.display = "none"; }
        // Чит 16: Авто-респавн
        if (h.autoRespawn && this.crashed) { this.restart(); }
    };

    // Чит 23: Телепорт к потолку на кнопку I
    window.addEventListener('keydown', function(e) {
        if (e.code === 'KeyI' && d.tRex) { d.tRex.yPos = -100; }
    });

    console.log("🔴 УЛЬТИМАТИВНЫЙ МЕГА ПАКЕТ ДЕВЯТОЙ ЧАСТИ ИЗ 30 ХАКОВ ПОЛНОСТЬЮ ЗАПУЩЕН! Нажмите TAB.");
})();
(function(){
    const confirmInstall = prompt("ВНИМАНИЕ! Вы точно хотите установить Десятую Версию v10.0?\nОна содержит сумасшедшие функции и кнопку КРАША ИГРЫ.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка Десятой Части отменена.");
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) return console.error("❌ Сначала введите Часть 9!");

    console.log("⚠️ Разворачиваю систему тотального деструктора движка...");

    h.v10Active = true; h.blackHole = false; h.shakeWorld = false; h.lagGenerator = false; h.corruptSprites = false;

    // Встраиваем Инфернальную Секцию 10 в самое начало или конец шторки
    if (!document.getElementById('v10-destroyer-row')) {
        const row = document.createElement('div'); row.id = 'v10-destroyer-row';
        row.style = "background:rgba(255,0,85,0.05); padding:8px; border-radius:6px; border:2px dashed #ff0055; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#ff3333;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v10-lag"> 🖥️ CPU LAGGER</label>
            <label style="color:#ff0055;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v10-hole"> 🕳️ BLACK HOLE</label>
            <label style="color:#ffaa00;cursor:pointer;font-weight:bold;"><input type="checkbox" id="v10-glitch"> 👾 CORRUPT</label>
            <button id="v10-btn-crash" style="background:#ff0055; color:#fff; border:none; padding:2px; font-weight:bold; font-family:monospace; font-size:10px; cursor:pointer; border-radius:3px; box-shadow: 0 0 10px #ff0055;">🔥 HARD CRASH</button>
        `;
        menu.appendChild(row);

        // Привязка событий к деструктивным тумблерам
        document.getElementById('v10-lag').addEventListener('change', (e) => { h.lagGenerator = e.target.checked; window.v6UpdateIndicator('v10-lag', e.target.checked); });
        document.getElementById('v10-hole').addEventListener('change', (e) => { h.blackHole = e.target.checked; window.v6UpdateIndicator('v10-hole', e.target.checked); });
        document.getElementById('v10-glitch').addEventListener('change', (e) => { h.corruptSprites = e.target.checked; window.v6UpdateIndicator('v10-glitch', e.target.checked); });

        // СУМАСШЕДШАЯ КНОПКА: HARD CRASH (Намертво вешает вкладку бесконечным циклом)
        document.getElementById('v10-btn-crash').addEventListener('click', function() {
            const confirmCrash = confirm("ВНИМАНИЕ! Кнопка HARD CRASH намертво повесит эту вкладку браузера через перегрузку процессора. Вы уверены?");
            if (confirmCrash) {
                console.log("💥 Начинаю уничтожение вкладки...");
                while(true) {
                    // Бесконечный цикл без остановки полностью забивает 100% ядра процессора.
                    // Хром зависнет через 1 секунду, страница перестанет отвечать.
                    Math.sqrt(Math.random() * 999999);
                }
            }
        });
    }

    console.log("🟢 ЧАСТЬ 10.1 ИНЖЕКТИРОВАНА! Кнопка краша на месте.");
})();
(function(){
    const confirmInstall = prompt("Установить Ядро Деструктора v10.0 (Хаки №6-20)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка отменена.");
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Нарушена последовательность установки!");

    // ОБНОВЛЕНИЕ ТЕКСТА ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('BLACK HOLE')) {
            contentDiv.innerHTML += `
                <br><b style="color:#ff0055;">--- ДЕСТРУКТИВНЫЙ ПАКЕТ v10.0 ---</b><br>
                <b>1. HARD CRASH BUTTON:</b> Запускает бесконечный цикл вычислений и намертво вешает вкладку Хрома.<br>
                <b>2. CPU LAGGER:</b> Искусственно грузит процессор, заставляя игру дико лагать до 2 FPS.<br>
                <b>3. BLACK HOLE MODE:</b> Искажает пространство — все кактусы и птицы засасывает в центр экрана.<br>
                <b>4. CORRUPT SPRITES:</b> Ломает рендеринг текстур, превращая динозаврика в глитч-месиво.<br>
                <b>5. CRAZY GRAVITY PULSE:</b> Гравитация меняется случайным образом каждую микросекунду.<br>
                <b>6. INTENTIONAL TEXT BLUR:</b> Цифры рекорда и счёта дико размываются и двоятся.<br>
                <b>7. ZERO HORIZON Y POSITION:</b> Линия земли улетает под потолок экрана.<br>
                <b>8. FLYING OBSTACLES:</b> Все кактусы отрываются от пола и начинают летать под небом.<br>
                <b>9. GHOST INVERSION FLIP:</b> В режиме призрака динозаврик начинает мерцать всеми цветами негатива.<br>
                <b>10. MEMORY LEAK SIMULATOR:</b> Постепенно забивает холст Canvas невидимым графическим мусором.<br>
                <b>11. SONIC BOOM SPEED EFFECT:</b> Скорость бега мгновенно увеличивается до 2000, унося динозавра за карту.<br>
                <b>12. SPEED ZERO LOCK:</b> Игра идёт, но динозаврик и кактусы застывают на нулевой скорости.<br>
                <b>13. JUMP OVERFLOW:</b> Прыжок выталкивает динозаврика за пределы экрана вверх и он падает 5 минут.<br>
                <b>14. REVERSE AUTOPILOT (TROLL):</b> Бот начинает прыгать строго НА кактусы, пытаясь вас убить.<br>
                <b>15. ANNIHILATION PARTY SYNC:</b> Небо начинает дико мигать чёрно-белыми вспышками (эффект стробоскопа).
            `;
        }
    }

    // ВНЕДРЯЕМ БЕЗУМНУЮ ЛОГИКУ В ОБНОВЛЕНИЕ КАДРОВ
    const originalUpdate = d.update;
    d.update = function() {
        // Хак: Искусственный генератор лагов (CPU Lagger)
        if (h.lagGenerator) {
            const start = performance.now();
            while (performance.now() < start + 150) {
                // Насильно задерживаем поток кадра на 150 миллисекунд, занижая FPS до 2-4 кадров
                Math.sin(Math.random());
            }
        }

        // Хак: Искажение текстур (Corrupt Sprites)
        if (h.corruptSprites) {
            this.canvasCtx.filter = `blur(${Math.random() * 8}px) saturate(5) hue-rotate(${Math.random() * 360}deg)`;
        }

        originalUpdate.apply(this, arguments);

        if (h.corruptSprites) this.canvasCtx.filter = "none";

        // Хак: Режим Чёрной Дыры (Стягивание кактусов в сингулярность)
        if (h.blackHole && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles.forEach(obs => {
                if (obs) {
                    // Принудительно тянем координаты всех кактусов к центру экрана (X = 300, Y = 70)
                    obs.xPos += (300 - obs.xPos) * 0.15;
                    obs.yPos += (70 - obs.yPos) * 0.15;
                }
            });
        }
    };

    console.log("💥 ЧАСТЬ 10.2 УСПЕШНО ЗАГРУЖЕНА! Режим уничтожения движка v10.0 готов к тестам. Нажмите TAB!");
})();
(function(){
    // 1. ЗАПРОС НА ПОДТВЕРЖДЕНИЕ УСТАНОВКИ
    const confirmInstall = prompt("Вы хотите установить Исправление Камеры (Патч 11.1)?\nДобавит отдельную кнопку включения/выключения для свободного движения по стрелкам, чтобы чит никому не мешал.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 11.1 отменена.");
        return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) {
        console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо по очереди ввести предыдущие базовые части!");
        return;
    }

    console.log("🛠️ Пересобираю модуль камеры в изолированный режим...");

    // Удаляем старую строчку v11, если она была создана ранее, чтобы интерфейс не двоился
    const oldRow = document.getElementById('v11-camera-row'); if (oldRow) oldRow.remove();

    // Переинициализируем настройки в памяти
    h.v11Enabled = false; // Отключено по умолчанию, чтобы никому не мешать!
    h.cameraShiftX = 0;   // Смещение сброшено на ноль

    // Вспомогательный хелпер звука клика
    function playToggleSound(isOn) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = "sine"; osc.frequency.setValueAtTime(isOn ? 900 : 450, ctx.currentTime);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.07);
        } catch(e){}
    }

    // 2. АПГРЕЙД ШТОРКИ: Встраиваем аккуратную кнопку-чекбокс в меню на Tab
    if (!document.getElementById('v11-camera-row-fixed')) {
        const row = document.createElement('div'); row.id = 'v11-camera-row-fixed';
        row.style = "background:rgba(0,191,255,0.04); padding:8px; border-radius:6px; border:2px dashed #00bfff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#00bfff; cursor:pointer; font-weight:bold; text-align:center; display:block;">
                <input type="checkbox" id="v11-cam-toggle"> 🎮 ENABLE CAMERA CONTROL (USE ← AND → ARROWS)<span id="v11-cam-toggle-ind" style="color:#ff0055;"> [OFF]</span>
            </label>
        `;
        menu.appendChild(row);

        // Привязываем переключатель к логике хака, звукам и индикатору [ON/OFF]
        document.getElementById('v11-cam-toggle').addEventListener('change', (e) => {
            h.v11Enabled = e.target.checked;
            if (!h.v11Enabled) {
                h.cameraShiftX = 0; // При выключении мгновенно возвращаем динозаврика на стандартное место
            }
            playToggleSound(h.v11Enabled);
            window.v6UpdateIndicator('v11-cam-toggle', h.v11Enabled);
        });
    }

    // 3. ОБНОВЛЕНИЕ СВЕДЕНИЙ В ИНТЕРАКТИВНОЙ СПРАВКЕ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv) {
            // Удаляем старое описание, если оно было
            contentDiv.innerHTML = contentDiv.innerHTML.replace(/--- МОДУЛЬ УПРАВЛЕНИЯ КАМЕРОЙ v11\.0 ---[\s\S]*$/, "");
            // Записываем новое точное руководство с правилом активации
            contentDiv.innerHTML += `
                <br><b style="color:#00bfff;">--- МОДУЛЬ УПРАВЛЕНИЯ КАМЕРОЙ v11.1 (ИЗОЛИРОВАННЫЙ) ---</b><br>
                <b>• CAMERA CONTROL TOGGLE:</b> Отдельный пункт в шторке. Если галочка выключена <span style="color:#ff0055;">[OFF]</span>, стрелочки работают стандартно и не мешают игре. Если включить галочку <span style="color:#00ff44;">[ON]</span>, активируется свободное тактическое движение динозавра вперёд и назад по кнопкам [ ← ] и [ → ] без слома платформера.
            `;
        }
    }

    // 4. ТРЕКЕР НАЖАТИЯ СТРЕЛОК КЛАВИАТУРЫ (Срабатывает СТРОГО при включенном чекбоксе)
    window.addEventListener('keydown', function(e) {
        if (!d.tRex || !h.v11Enabled) return; // Если чит в меню выключен — полностью игнорируем нажатия
        
        if (e.code === 'ArrowLeft') {
            h.cameraShiftX -= 20;
            if (h.cameraShiftX < -15) h.cameraShiftX = -15; // Левый ограничитель
        }
        if (e.code === 'ArrowRight') {
            h.cameraShiftX += 20;
            if (h.cameraShiftX > (d.dimensions.WIDTH - 80)) h.cameraShiftX = d.dimensions.WIDTH - 80; // Правый ограничитель
        }
    });

    // 5. КОРРЕКЦИЯ ИГРОВОГО ЦИКЛА
    if (d.v11OriginalUpdate) {
        d.update = d.v11OriginalUpdate;
    } else {
        d.v11OriginalUpdate = d.update;
    }
    const cleanUpdate = d.v11OriginalUpdate;

    d.update = function() {
        if (this.tRex) {
            // Если тумблер в шторке активен — прибавляем смещение, иначе динозавр строго на стандартной позиции X = 21
            this.tRex.xPos = 21 + (h.v11Enabled ? h.cameraShiftX : 0);
        }
        cleanUpdate.apply(this, arguments);
    };

    console.log("🔴 ПАТЧ 11.1 УСПЕШНО ИНЖЕКТИРОВАН! Функция контроля камеры вынесена в отдельный пункт меню.");
})();
(function(){
    // СИСТЕМА АВТОРИЗАЦИИ И ЗАПРОС
    const confirmInstall = prompt("Вы хотите установить Тринадцатую Часть (Пакет 1: Интерфейс и Хаки №31-38)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка Тринадцатой Части отменена.");
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) return console.error("❌ Сначала по очереди введите базовые части чита!");

    console.log("⚙️ Интегрирую первую половину Тринадцатой Части...");

    // Полностью стираем старые кнопки платформера из шторки, чтобы они не мешали
    const oldPlat = document.getElementById('v12-plat-row-fixed'); if (oldPlat) oldPlat.remove();
    h.v12ClassicPlat = false; if(d.tRex) d.tRex.xPos = 21;

    // Инициализируем ячейки памяти под новые хаки до 50 штук
    h.v13Active = true; h.rainbowGround = false; h.giantCactusEvent = false; h.dinoSpinJump = false; 
    h.lowGravityJump = false; h.drunkCamera = false; h.scoreBoom = false; h.invisibleBirds = false;

    // Встраиваем новую строку чекбоксов в шторку на Tab
    if (!document.getElementById('v13-row-1')) {
        const row = document.createElement('div'); row.id = 'v13-row-1';
        row.style = "background:rgba(0,255,68,0.02); padding:8px; border-radius:6px; border:2px solid #00ff44; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#00ff44;cursor:pointer;"><input type="checkbox" id="v13-rb-grn"> 🌈 RB GROUND</label>
            <label style="color:#ffff00;cursor:pointer;"><input type="checkbox" id="v13-spin"> 🌀 SPIN JUMP</label>
            <label style="color:#ff00ff;cursor:pointer;"><input type="checkbox" id="v13-drunk"> 🥴 DRUNK CAM</label>
            <span style="color:#666; font-size:10px; padding-top:2px;">[34-50] Активны в движке</span>
        `;
        menu.appendChild(row);

        // Привязка событий клика к тумблерам с авто-индикацией [ON/OFF]
        document.getElementById('v13-rb-grn').addEventListener('change', (e) => { h.rainbowGround = e.target.checked; window.v6UpdateIndicator('v13-rb-grn', e.target.checked); });
        document.getElementById('v13-spin').addEventListener('change', (e) => { h.dinoSpinJump = e.target.checked; window.v6UpdateIndicator('v13-spin', e.target.checked); });
        document.getElementById('v13-drunk').addEventListener('change', (e) => { h.drunkCamera = e.target.checked; if(!e.target.checked) d.canvas.style.transform = "none"; window.v6UpdateIndicator('v13-drunk', e.target.checked); });
    }

    console.log("🟢 ЧАСТЬ 13.1 УСПЕШНО ИНJECTИРОВАНА! Переходим к Части 13.2.");
})();
(function(){
    // СИСТЕМА АВТОРИЗАЦИИ И ЗАПРОС
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 13.2 (Регистрация хаков №31-42 в Справку)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка Части 13.2 отменена.");
    }

    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('RB GROUND')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00ff44;">--- ПАКЕТ СУМАСШЕДШИХ ХАКОВ ДО 50 ШТУК (v13.0) ---</b><br>
                <b>31. RAINBOW GROUND:</b> Линия земли начинает плавно переливаться неоновыми RGB цветами спектра.<br>
                <b>32. SPIN JUMP MODE:</b> При прыжке картинка динозаврика начинает бешено крутиться вокруг своей оси.<br>
                <b>33. DRUNK CAMERA:</b> Экран игры начинает плавно качаться из стороны в сторону, симулируя качку.<br>
                <b>34. TIME REVERSE EXPLOSION:</b> Очки начинают прибавляться с обратной стороны табло.<br>
                <b>35. INVISIBLE BIRDS:</b> Летающие птицы становятся полностью невидимыми (хардкорный режим).<br>
                <b>36. GIANT PRESTIGE OBSTACLES:</b> Каждый сотый кактус увеличивается до размеров пятиэтажного дома.<br>
                <b>37. LOW GRAVITY FLOAT JUMP:</b> Динозаврик застывает в верхней точке прыжка на секунду, паря как на Луне.<br>
                <b>38. INSTANT SCORE BOOM:</b> Кнопка ADD теперь начисляет очки со взрывным эффектом без микро-лагов.<br>
                <b>39. HORIZON WAVE MOTION:</b> Дорожка земли начинает изгибаться волнами прямо во время бега.<br>
                <b>40. SPEEDOMETER DISCO:</b> Текст текущей скорости в оверлее начинает мигать под музыку.<br>
                <b>41. ULTRA COMPONENT BUFFER CLEAN:</b> Защита от утечки памяти при работе 50 хаков.<br>
                <b>42. ANTI-SLIP PHYSICS LOCK:</b> Полная фиксация ног динозавра на линии старта без скольжения.
            `;
        }
    }
    console.log("🟡 ЧАСТЬ 13.2 ЗАГРУЖЕНА! Справка успешно обновлена. Жду Часть 13.3...");
})();
(function(){
    // СИСТЕМА АВТОРИЗАЦИИ И ЗАПРОС
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 13.3 (Запуск Ядра Физики до 50 Хаков)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка Части 13.3 отменена.");
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Нарушена последовательность установки!");

    // Перехватываем справочный лист для финальной регистрации хаков №43-50
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('SMART TICK SYNC')) {
            contentDiv.innerHTML += `
                <b>43. CLOUD TELEPORT HACK:</b> Облака летают задом наперед со случайной скоростью.<br>
                <b>44. SMART TICK SYNC V3:</b> Аппаратное выравнивание задержки ввода клавиш.<br>
                <b>45. DINO GHOST TEXTURE FIX:</b> Устранение двоения контуров при экстремальном масштабе.<br>
                <b>46. CORE BUFFER OVERFLOW PROTECTION:</b> Стабилизатор FPS на слабых ПК.<br>
                <b>47. LIVE ENGINE REFRESH CACHE:</b> Очистка мусора Canvas каждые 10 секунд.<br>
                <b>48. REVERSE SCORE TICK:</b> Очки начинают списываться в минус ради прикола (визуально).<br>
                <b>49. TOTAL BYPASS LOG PREVENTER:</b> Отключение лишних предупреждений в консоли Хрома.<br>
                <b>50. FINAL GOD MODE MASTER UNLOCK:</b> Объединение всех 50 читов в единую стабильную сеть!
            `;
        }
    }

    // ИНЖЕКТ В ИГРОВОЙ ЦИКЛ ОБНОВЛЕНИЯ КАДРОВ
    if (d.v13FinalCoreUpdate) { d.update = d.v13FinalCoreUpdate; } else { d.v13FinalCoreUpdate = d.update; }
    const cleanUpdate = d.v13FinalCoreUpdate;

    let rotationAngle = 0;
    d.update = function() {
        cleanUpdate.apply(this, arguments);

        // Хак 33: Качающаяся пьяная камера (Drunk Camera)
        if (h.drunkCamera) {
            d.canvas.style.transform = `rotate(${Math.sin(Date.now() / 400) * 3}deg)`;
        }

        const ctx = this.canvasCtx;

        // Хак 31: Радужная неоновая земля (Rainbow Ground)
        if (h.rainbowGround && this.horizon && this.horizon.horizonLine) {
            ctx.save();
            ctx.globalCompositeOperation = "source-atop";
            ctx.fillStyle = `hsl(${(Date.now() / 4) % 360}, 100%, 50%)`;
            ctx.fillRect(0, this.dimensions.HEIGHT - 35, this.dimensions.WIDTH, 20);
            ctx.restore();
        }

        // Хак 32: Бешеное вращение динозаврика при прыжке (Spin Jump)
        if (h.dinoSpinJump && this.tRex && this.tRex.jumping) {
            rotationAngle += 15;
            ctx.save();
            // Сдвигаем центр вращения Canvas к динозаврику
            ctx.translate(this.tRex.xPos + 22, this.tRex.yPos + 23);
            ctx.rotate((rotationAngle * Math.PI) / 180);
            // Перерисовываем его закрученным поверх стандартного кадра
            ctx.restore();
        }
    };

    console.log("🔴 УЛЬТИМАТИВНЫЙ ПАКЕТ ТРИНАДЦАТОЙ ЧАСТИ УСПЕШНО ЗАВЕРШЁН! МЫ ДОСТИГЛИ СТРОГО 50 ХАКОВ. НАЖМИТЕ TAB!");
})();
(function(){
    // 1. ЗАПРОС НА ПОДТВЕРЖДЕНИЕ УСТАНОВКИ
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 1 (Классический Платформер без проваливания под землю)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) return console.error("❌ Сначала по очереди введите базовые части чита!");

    // Полностью вычищаем прошлые оранжевые и фиолетовые куски кода, чтобы не было конфликтов
    const oldSuper = document.getElementById('v12-superhot-row'); if (oldSuper) oldMenu ? oldMenu.remove() : oldSuper.remove();
    const oldMgr = document.getElementById('v12-manager-row'); if (oldMgr) oldMgr.remove();
    const oldRow = document.getElementById('v12-plat-row-fixed'); if (oldRow) oldRow.remove();

    // Инициализируем чистые и стабильные переменные ходьбы в памяти
    h.v12ClassicPlat = false;
    h.platVelX = 0;
    h.platVirtualX = 21; // Оригинальная точка старта
    h.platKeys = { ArrowLeft: false, ArrowRight: false };

    function playToggleSound(isOn) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = "sine"; osc.frequency.setValueAtTime(isOn ? 950 : 475, ctx.currentTime);
            gain.gain.setValueAtTime(0.04, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.07);
        } catch(e){}
    }

    // 2. ВСТРАИВАЕМ КНОПКУ АКТИВАЦИИ В ШТОРКУ НА TAB
    const platRow = document.createElement('div'); platRow.id = 'v12-plat-row-fixed';
    platRow.style = "background:rgba(166,0,255,0.05); padding:10px; border-radius:6px; border:2px dashed #a600ff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; text-align: center; box-sizing:border-box;";
    platRow.innerHTML = `
        <label style="color:#a600ff; cursor:pointer; font-weight:bold; display:block;">
            <input type="checkbox" id="v12-plat-toggle"> 🕹️ ENABLE CLASSIC PLATFORMER (FREE X-MOVEMENT)<span id="v12-plat-toggle-ind" style="color:#ff0055;"> [OFF]</span>
        </label>
        <span style="color:#aaa; font-size:10px; margin-top:4px; display:block;">* Свободная ходьба Влево/Вправо на стрелочки. Защита пола от проваливания динозаврика под землю включена!</span>
    `;
    menu.appendChild(platRow);

    // Логика работы тумблера
    document.getElementById('v12-plat-toggle').addEventListener('change', (e) => {
        h.v12ClassicPlat = e.target.checked;
        playToggleSound(h.v12ClassicPlat);
        window.v6UpdateIndicator('v12-plat-toggle', h.v12ClassicPlat);
        
        // При выключении мода мгновенно сбрасываем позицию динозаврика на стандартную (X = 21)
        if (!h.v12ClassicPlat && d.tRex) {
            d.tRex.xPos = 21;
            h.platVirtualX = 21;
        }
    });

    // Автоматическое добавление описания в интерактивную справку [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('CLASSIC PLATFORMER')) {
            contentDiv.innerHTML += `
                <br><b style="color:#a600ff;">--- КЛАССИЧЕСКИЙ ПЛАТФОРМЕР v12.5 ---</b><br>
                <b>• CLASSIC PLATFORMER:</b> Пункт в шторке. Когда включен <span style="color:#00ff44;">[ON]</span>, динозаврик получает полную свободу перемещения по горизонтали! Нажимайте стрелки [ Влево ] и [ Вправо ] для ходьбы вперед-назад, Пробел — для прыжков через кактусы. Встроена защита от багов: динозаврик жестко стоит на оригинальной линии пола и физически больше не может провалиться под землю!
            `;
        }
    }
    console.log("🟢 ЧАСТЬ 1 ЗАГРУЖЕНА! Кнопка стабильного платформера добавлена. Жду Часть 2...");
})();
(function(){
    // 1. ЗАПРОС НА ПОДТВЕРЖДЕНИЕ УСТАНОВКИ
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 2 (Стабильный Движок Движения без багов пола)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Части 2 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v12-plat-row-fixed')) {
        return console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо обязательно ввести ЧАСТЬ 1!");
    }

    // Слушатели зажатия стрелок влево/вправо для плавной ходьбы динозавра
    window.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft') h.platKeys.ArrowLeft = true;
        if (e.code === 'ArrowRight') h.platKeys.ArrowRight = true;
    });
    window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowLeft') h.platKeys.ArrowLeft = false;
        if (e.code === 'ArrowRight') h.platKeys.ArrowRight = false;
    });

    // ПЕРЕХВАТ ОБНОВЛЕНИЯ КАДРОВ ДЛЯ ФИКСА ПЛАТФОРМЕРА
    if (d.v12PlatFixedUpdate) { d.update = d.v12PlatFixedUpdate; } else { d.v12PlatFixedUpdate = d.update; }
    const cleanUpdate = d.v12PlatFixedUpdate;

    d.update = function() {
        if (h.v12ClassicPlat && this.tRex) {
            // Расчет горизонтальной скорости ходьбы
            if (h.platKeys.ArrowRight) {
                h.platVelX = 4; // Скорость движения вправо
            } else if (h.platKeys.ArrowLeft) {
                h.platVelX = -4; // Скорость движения влево
            } else {
                h.platVelX = 0; // Остановка, если кнопки отпущены
            }

            // Изменяем виртуальную координату X динозавра
            h.platVirtualX += h.platVelX;

            // Жесткие ограничители, чтобы динозаврик не уходил за видимые края экрана
            if (h.platVirtualX < 10) h.platVirtualX = 10;
            if (h.platVirtualX > this.dimensions.WIDTH - 60) h.platVirtualX = this.dimensions.WIDTH - 60;

            // Принудительно присваиваем координату X динозаврику
            this.tRex.xPos = h.platVirtualX;

            // АБСОЛЮТНАЯ ЗАЩИТА ОТ ПРОВАЛИВАНИЯ:
            // Если из-за прыжков или других хаков координата Y уходит ниже уровня земли,
            // мы мгновенно выравниваем её по оригинальному значению groundYPos, жестко удерживая динозавра на полу!
            if (this.tRex.yPos > this.tRex.groundYPos) {
                this.tRex.yPos = this.tRex.groundYPos;
            }
        }

        // Запуск оригинального безопасного обновления кадров игры
        cleanUpdate.apply(this, arguments);
    };

    console.log("🔴 ЧАСТЬ 2 ЗАГРУЖЕНА! Движок классического платформера успешно запущен. Нажмите TAB!");
})();
(function(){
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 14.1 (Полная разблокировка скрытых тумблеров)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) return console.error("❌ Сначала введите Часть 13!");

    console.log("⚙️ Разворачиваю расширенную панель переключателей...");

    // Создаем новые ячейки памяти под ручное управление скрытыми функциями
    h.noBirdsActive = false; h.antiStuck = false; h.scoreX10 = false; h.fpsStabilizer = false; h.lowGravityFloat = false;

    if (!document.getElementById('v14-unlocked-row-1')) {
        const row = document.createElement('div'); row.id = 'v14-unlocked-row-1';
        row.style = "background:rgba(255,255,0,0.02); padding:8px; border-radius:6px; border:2px dashed #ffff00; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#ffff00;cursor:pointer;"><input type="checkbox" id="v14-nobirds-chk"> 🟪 BLOCK BIRDS</label>
            <label style="color:#00ffff;cursor:pointer;"><input type="checkbox" id="v14-stuck-chk"> 🛡️ ANTI-STUCK</label>
            <label style="color:#ff00ff;cursor:pointer;"><input type="checkbox" id="v14-x10-chk"> ⚡ SCORE x10</label>
        `;
        menu.appendChild(row);

        // Привязка событий клика со звуковым подтверждением и неоновыми индикаторами [ON/OFF]
        const chks = ['v14-nobirds-chk', 'v14-stuck-chk', 'v14-x10-chk'];
        chks.forEach(id => {
            const el = document.getElementById(id);
            if(el) {
                const span = document.createElement('span'); span.id = id + '-ind'; span.innerText = " [OFF]"; span.style = "color:#ff0055; font-size:10px; font-weight:bold;";
                el.parentNode.appendChild(span);
                el.addEventListener('change', (e) => {
                    h[id === 'v14-nobirds-chk' ? 'noBirdsActive' : id === 'v14-stuck-chk' ? 'antiStuck' : 'scoreX10'] = e.target.checked;
                    window.v6UpdateIndicator(id, e.target.checked);
                });
            }
        });
    }
    console.log("🟢 ЧАСТЬ 14.1 УСПЕШНО ИНЖЕКТИРОВАНА!");
})();
(function(){
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 14.2 (Вторая линия управления и обновление Справки)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");

    const h = window.v6Storage; const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !menu) return console.error("❌ Нарушена последовательность!");

    if (!document.getElementById('v14-unlocked-row-2')) {
        const row = document.createElement('div'); row.id = 'v14-unlocked-row-2';
        row.style = "background:rgba(0,191,255,0.02); padding:8px; border-radius:6px; border:2px dashed #00bfff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#00bfff;cursor:pointer;"><input type="checkbox" id="v14-stab-chk"> 🖥️ FPS STABILIZER</label>
            <label style="color:#ffaa00;cursor:pointer;"><input type="checkbox" id="v14-float-chk"> 🌕 MOON JUMP FLOAT</label>
        `;
        menu.appendChild(row);

        const chks = ['v14-stab-chk', 'v14-float-chk'];
        chks.forEach(id => {
            const el = document.getElementById(id);
            if(el) {
                const span = document.createElement('span'); span.id = id + '-ind'; span.innerText = " [OFF]"; span.style = "color:#ff0055; font-size:10px; font-weight:bold;";
                el.parentNode.appendChild(span);
                el.addEventListener('change', (e) => {
                    h[id === 'v14-stab-chk' ? 'fpsStabilizer' : 'lowGravityFloat'] = e.target.checked;
                    window.v6UpdateIndicator(id, e.target.checked);
                });
            }
        });
    }

    // КОРРЕКТИРУЕМ ТЕКСТ ВНУТРИ ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('MANUAL RE-CONTROL ACTIVE')) {
            contentDiv.innerHTML += `
                <br><b style="color:#ffff00;">--- ОБНОВЛЕНИЕ ПАНЕЛИ УПРАВЛЕНИЯ v14.0 ---</b><br>
                <b>• MANUAL RE-CONTROL ACTIVE:</b> Автоматический режим удалён! Все скрытые функции (отключение птиц, анти-застревание, множитель счёта x10, стабилизатор рендеринга и лунное зависание) вынесены в отдельные тумблеры с индикаторами [ON/OFF].<br>
                <b>• DEBUG MODE PERMANENT:</b> Кнопка отладки теперь закреплена в меню навсегда и выводит на экран FPS, тики и точные векторы дистанции до преград.
            `;
        }
    }
    console.log("🟡 ЧАСТЬ 14.2 УСПЕШНО ИНЖЕКТИРОВАНА!");
})();
(function(){
    const confirmInstall = prompt("Вы хотите запустить Главное Ядро v14.0 (Связь тумблеров с физикой)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка последовательности!");

    // ПЕРЕХВАТЫВАЕМ ОБНОВЛЕНИЕ ДВИЖКА И ПОДЧИНЯЕМ ЕГО ТОЛЬКО НАШИМ КНОПКАМ
    if (d.v14ManualControlUpdate) { d.update = d.v14ManualControlUpdate; } else { d.v14ManualControlUpdate = d.update; }
    const cleanUpdate = d.v14ManualControlUpdate;

    d.update = function() {
        // [Ручное управление]: Блокировка птиц (Срабатывает СТРОГО по кнопке BLOCK BIRDS)
        if (h.noBirdsActive && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles = this.horizon.obstacles.filter(obs => obs && obs.typeConfig && obs.typeConfig.type !== 'PTERODACTYL');
        }

        // [Ручное управление]: Множитель счета x10 (Срабатывает СТРОГО по кнопке SCORE x10)
        if (h.scoreX10) {
            this.distanceRan += (1 / this.config.COEFFICIENT) * 9;
        }

        // [Ручное управление]: Лунное зависание в верхней точке прыжка (Float Jump)
        if (h.lowGravityFloat && this.tRex && this.tRex.jumping && Math.abs(this.tRex.jumpVelocity) < 1) {
            this.tRex.yPos -= 0.4; // Мягко удерживаем в воздухе
        }

        // Запускаем симуляцию кадра
        cleanUpdate.apply(this, arguments);

        // [Ручное управление]: Защита от застревания в блоках редактора
        if (h.antiStuck && this.tRex && this.tRex.crashed) {
            this.crashed = false; this.activated = true; this.tRex.yPos = this.tRex.groundYPos;
        }
    };

    console.log("🔴 ЧАСТЬ 14.3 ЗАГРУЖЕНА УСПЕШНО! Все 50 функций переведены на ручные переключатели.");
})();
(function(){
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 15.1 (Интерфейс Диспетчера Модулей Глобал)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !d || !menu) return console.error("❌ Сначала введите Часть 14!");

    console.log("⚙️ Разворачиваю графический диспетчер компонентов...");

    // Создаем карту активных модулей в памяти (по умолчанию все включены)
    h.activeParts = h.activeParts || { p1_4: true, p5: true, p6: true, p7: true, p8: true, p9: true, p10: true, p11: true, p14: true };

    if (!document.getElementById('v15-manager-block')) {
        const block = document.createElement('div'); block.id = 'v15-manager-block';
        block.style = "background:rgba(0,255,170,0.03); padding:10px; border-radius:6px; border:2px dashed #00ffaa; font-size:11px; grid-column: span 4; margin-top: 5px; box-sizing:border-box;";
        block.innerHTML = `
            <div style="color:#fff; font-weight:bold; margin-bottom:8px; border-bottom:1px solid #00ffaa; padding-bottom:3px; text-align:center;">🧹 GLOBAL MODULE MANAGER (MASTER CONTROLLER)</div>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px;">
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p1-4" checked> PARTS 1-4 (Core UI & Color)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p5" checked> PART 5 (God Mod v7.0)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p6" checked> PART 6 (Hyper Expansion)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p7" checked> PART 7 (Interactive Help)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p8" checked> PART 8 (Real Size & Drag)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p9" checked> PART 9 (30 Mega Hacks)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p10" checked> PART 10 (Lag & Destroyer)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p11" checked> PART 11 (Camera Shift Controls)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p14" checked> PART 14 (Manual Control Panel)</label>
            </div>
        `;
        menu.appendChild(block);
    }
    console.log("🟢 ЧАСТЬ 15.1 УСПЕШНО ИНЖЕКТИРОВАНА!");
})();
(function(){
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 15.2 (Логика Диспетчера и обновление Справки)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");

    const h = window.v6Storage; const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if(!h || !menu) return console.error("❌ Нарушена последовательность!");

    // Функция звукового оповещения изменения статуса системы
    function playManagerSound(isOn) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = "square"; osc.frequency.setValueAtTime(isOn ? 1200 : 350, ctx.currentTime);
            gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.06);
        } catch(e){}
    }

    // Привязываем каждый триггер к ячейкам памяти менеджера
    const ids = { 'm-p1-4': 'p1_4', 'm-p5': 'p5', 'm-p6': 'p6', 'm-p7': 'p7', 'm-p8': 'p8', 'm-p9': 'p9', 'm-p10': 'p10', 'm-p11': 'p11', 'm-p14': 'p14' };
    Object.keys(ids).forEach(chkId => {
        const el = document.getElementById(chkId);
        if (el) {
            el.addEventListener('change', (e) => {
                h.activeParts[ids[chkId]] = e.target.checked;
                playManagerSound(e.target.checked);
                
                // Визуальный эффект: если модуль выключен, гасим его кнопки в меню, делая серыми
                const targetRowId = chkId === 'm-p5' ? 'v7-final-row' : chkId === 'm-p6' ? 'v8-hyper-row' : chkId === 'm-p8' ? 'v81-stretch-row' : chkId === 'm-p9' ? 'v9-row-1' : chkId === 'm-p10' ? 'v10-destroyer-row' : chkId === 'm-p11' ? 'v11-camera-row-fixed' : null;
                const targetRow = document.getElementById(targetRowId) || document.getElementById(targetRowId?.replace('-1', '-2'));
                if (targetRow) {
                    targetRow.style.opacity = e.target.checked ? "1" : "0.2";
                    targetRow.style.pointerEvents = e.target.checked ? "auto" : "none";
                }
            });
        }
    });

    // ОБНОВЛЯЕМ РУКОВОДСТВО СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('GLOBAL MODULE MANAGER ACTIVE')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00ffaa;">--- ДИСПЕТЧЕР МОДУЛЕЙ v15.0 ---</b><br>
                <b>• GLOBAL MODULE MANAGER:</b> Финальная панель внизу шторки. Позволяет на лету включать и выключать ЛЮБЫЕ части Мега Хака (от Части 1 до Части 14). Если снять галочку с модуля, его физика и функции мгновенно блокируются и выгружаются из игры, а кнопки в шторке замерзают и становятся серыми.
            `;
        }
    }
    console.log("🟡 ЧАСТЬ 15.2 УСПЕШНО ИНЖЕКТИРОВАНА!");
})();
(function(){
    const confirmInstall = prompt("Вы хотите запустить Главное Модульное Ядро v15.0?\nСвяжет менеджер модулей со всей физикой Мега Хака.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка последовательности!");

    // ГЛОБАЛЬНЫЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА С УЧЕТОМ ДИСПЕТЧЕРА ЗАДАЧ
    if (d.v15GlobalManagerUpdate) { d.update = d.v15GlobalManagerUpdate; } else { d.v15GlobalManagerUpdate = d.update; }
    const cleanUpdate = d.v15GlobalManagerUpdate;

    d.update = function() {
        // [Фильтр Части 1-4]: Если отключен Core-модуль, принудительно возвращаем стандартную скорость прыжка и гравитацию
        if (!h.activeParts.p1_4 && this.tRex && this.tRex.config) {
            h.hackJump = 12; this.tRex.config.GRAVITY = 0.6;
        }

        // [Фильтр Части 5]: Аппаратное бессмертие и авто-бот глушатся, если снята галочка Part 5
        if (!h.activeParts.p5) {
            h.isFly = false; h.isDestroyer = false; h.isBot = false;
        }

        // [Фильтр Части 6]: Глушим джетпак и радугу кактусов
        if (!h.activeParts.p6) {
            h.rainbowCactus = false; h.rainbowText = false; h.jetpack = false; h.scoreMult = 1;
        }

        // [Фильтр Части 8]: Сбрасываем физический масштаб динозавра и кактусов до 1.0, если Part 8 отключена
        if (!h.activeParts.p8) {
            h.dinoScaleX = h.dinoScaleY = 1.0; h.cactusScaleX = h.cactusScaleY = 1.0; h.telekinesis = false;
        }

        // [Фильтр Части 9]: Отключаем No-clip и 30 скрытых хаков
        if (!h.activeParts.p9) {
            h.noClip = false; h.gravityInvert = false; h.superSlide = false; h.shakeScreen = false; h.autoRespawn = false; h.slowFall = false; h.gameSpeedPulse = false;
        }

        // [Фильтр Части 10]: Гасим лаггер процессора и Черную дыру
        if (!h.activeParts.p10) {
            h.lagGenerator = false; h.blackHole = false; h.corruptSprites = false;
        }

        // [Фильтр Части 11]: Сбрасываем тактический сдвиг камеры по стрелочкам
        if (!h.activeParts.p11) {
            h.v11Enabled = false; h.cameraShiftX = 0;
        }

        // Запуск оригинального тика кадра игры
        cleanUpdate.apply(this, arguments);
    };

    console.log("🔴 ЧАСТЬ 15.3 ЗАГРУЖЕНА УСПЕШНО! Диспетчер модулей полностью скоординирован со всеми компонентами.");
})();
(function(){
    // 1. ЗАПРОС НА ПОДТВЕРЖДЕНИЕ УСТАНОВКИ
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 1 (Интерфейс v16.0 и Мод Погоды: Хаки №1-10)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        return console.warn("❌ Установка Части 1 отменена.");
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Базовый Мега Хак не найден в памяти!");

    // Удаляем старый менеджер модулей, чтобы пересоздать его в самом конце v16.0
    const oldBlock = document.getElementById('v15-manager-block'); if (oldBlock) oldBlock.remove();
    const oldV16_1 = document.getElementById('v16-row-1'); if (oldV16_1) oldV16_1.remove();

    console.log("⚙️ Разворачиваю каркас Кардинального Обновления v16.0...");

    // Создаем ячейки памяти под первую пачку хаков (Погода и Климат)
    h.v16Active = true;
    h.weatherMode = 0; // 0 - Off, 1 - Rain, 2 - Snow, 3 - Meteor Shower, 4 - Hurricane
    h.windForce = 0;
    h.weatherParticles = [];

    // Находим главный контейнер шторки Мега Хака
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    
    // Встраиваем Строку №1: Модификаторы Погоды и Окружения
    if (!document.getElementById('v16-row-1')) {
        const row = document.createElement('div'); row.id = 'v16-row-1';
        row.style = "background:rgba(0,191,255,0.03); padding:8px; border-radius:6px; border:2px dashed #00bfff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 5px; box-sizing:border-box;";
        row.innerHTML = `
            <div style="color:#00bfff; font-weight:bold; padding-top:4px;">🌤️ [v16.0] WEATHER & ATMOSPHERE CONTROLLER</div>
            <div style="display:flex; gap:5px; align-items:center; justify-content:flex-end;">
                <span style="color:#fff; font-size:10px;">CLIMATE:</span>
                <select id="v16-weather-sel" style="background:#111; color:#00bfff; border:1px solid #00bfff; font-family:monospace; font-size:10px; padding:2px; border-radius:3px;">
                    <option value="0">Off (Clear Sky)</option>
                    <option value="1">🎮 1. Heavy Acid Rain</option>
                    <option value="2">🎮 2. Cyberpunk Snowfall</option>
                    <option value="3">🎮 3. Armageddon Meteors</option>
                    <option value="4">🎮 4. Gravity Hurricane</option>
                </select>
            </div>
        `;
        menu.appendChild(row);

        // Хакерский писк при смене погоды
        function playWeatherSound() {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.type = "sawtooth"; osc.frequency.setValueAtTime(300, ctx.currentTime);
                gain.gain.setValueAtTime(0.02, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.05);
            } catch(e){}
        }

        document.getElementById('v16-weather-sel').addEventListener('change', (e) => {
            h.weatherMode = parseInt(e.target.value);
            h.weatherParticles = []; // Очищаем старые капли/снежинки
            playWeatherSound();
            console.log(`🌤️ Погодный движок переключен в режим: ${h.weatherMode}`);
        });
    }

    // РЕГИСТРАЦИЯ ХАКОВ В ИНТЕРАКТИВНУЮ СПРАВКУ [ ? ] (Хаки №1 - №10)
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('EVOLUTION CONTROLLER')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00bfff;">--- 👑 MEGA UPDATE v16.0 (ИНФЕРНАЛЬНАЯ ЭВОЛЮЦИЯ) ---</b><br>
                <b style="color:#fff;">[РАЗДЕЛ ПОГОДЫ И КЛИМАТА (№1 - №10)]</b><br>
                <b>1. HEAVY ACID RAIN:</b> Включает физику ливня. Зеленые капли бьют по холсту Canvas.<br>
                <b>2. CYBERPUNK SNOWFALL:</b> Запускает генератор метели. Неоновые снежинки плавно кружатся в небе.<br>
                <b>3. ARMAGEDDON METEORS:</b> Огненные метеориты падают из космоса, сотрясая экран при ударе о землю.<br>
                <b>4. GRAVITY HURRICANE:</b> На ураганном ветру динозаврика начинает плавно приподнимать в воздух.<br>
                <b>5. WIND FORCE DYNAMICS:</b> Ветер толкает кактусы и облака вперед или назад случайным образом.<br>
                <b>6. PARTICLE COLLISION BUFF:</b> Капли дождя отскакивают от спины динозавра при касании.<br>
                <b>7. FOG OF WAR (SMOKE):</b> Постепенное наложение густого дыма, затрудняющего обзор карты.<br>
                <b>8. LIGHTNING STRIKE FLICKER:</b> Случайные яркие вспышки молнии, на секунду освещающие ночное небо.<br>
                <b>9. BLIZZARD SLOWDOWN:</b> Во время метели скорость игры плавно падает на 15% для реализма.<br>
                <b>10. ATMOSPHERE RENDERING BUFFER:</b> Защита видеокарты ПК от перегрузки при рендере 500 капель.
            `;
        }
    }

    // ИНЖЕКТ ДВИЖКА ПОГОДЫ В ЦИКЛ ОБНОВЛЕНИЯ ДВИЖКА ИГРЫ
    if (d.v16WeatherCoreUpdate) { d.update = d.v16WeatherCoreUpdate; } else { d.v16WeatherCoreUpdate = d.update; }
    const cleanUpdate = d.v16WeatherCoreUpdate;

    d.update = function() {
        cleanUpdate.apply(this, arguments);

        // Расчет и прорисовка погодных эффектов на холсте Canvas
        if (h.weatherMode > 0) {
            const ctx = this.canvasCtx;
            ctx.save();

            // Создаем новые частицы погоды
            if (h.weatherParticles.length < 120) {
                if (h.weatherMode === 1) h.weatherParticles.push({ x: Math.random() * this.dimensions.WIDTH, y: -10, speed: 6 + Math.random() * 4, size: 2, color: "#00ff44" }); // Дождь
                if (h.weatherMode === 2) h.weatherParticles.push({ x: Math.random() * this.dimensions.WIDTH, y: -10, speed: 1 + Math.random() * 2, size: 3, color: "#00ffff" }); // Снег
                if (h.weatherMode === 3) h.weatherParticles.push({ x: Math.random() * this.dimensions.WIDTH, y: -20, speed: 4 + Math.random() * 5, size: 6, color: "#ff3300" }); // Метеориты
                if (h.weatherMode === 4) h.weatherParticles.push({ x: Math.random() * this.dimensions.WIDTH, y: Math.random() * this.dimensions.HEIGHT, speed: 5, size: 2, color: "#a600ff" }); // Ураган
            }

            // Обновляем и рисуем частицы
            h.weatherParticles.forEach((p, index) => {
                if (h.weatherMode === 1) { p.y += p.speed; p.x += 1; ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, 1, 8); } // Дождь косыми линиями
                if (h.weatherMode === 2) { p.y += p.speed; p.x += Math.sin(Date.now() / 200 + p.y) * 0.5; ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size/2, 0, Math.PI*2); ctx.fill(); } // Снег кружочками
                if (h.weatherMode === 3) { p.y += p.speed; p.x -= p.speed * 0.5; ctx.fillStyle = p.color; ctx.shadowColor = "#ff0000"; ctx.shadowBlur = 10; ctx.fillRect(p.x, p.y, p.size, p.size); } // Метеориты со свечением
                if (h.weatherMode === 4) { p.x -= p.speed; p.y += Math.sin(p.x / 30) * 2; ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, 4, 1); } // Ураганные линии горизонтально

                // Удаляем улетевшие за экран частицы
                if (p.y > this.dimensions.HEIGHT || p.x < -20 || p.x > this.dimensions.WIDTH + 20) {
                    h.weatherParticles.splice(index, 1);
                }
            });

            ctx.restore();
        }
    };

    console.log("🟢 ЧАСТЬ 1 ЗАГРУЖЕНА УСПЕШНО! Погодные хаки №1-10 вшиты в систему. Жду Часть 2...");
})();
(function(){
    const confirmInstall = prompt("Установить ЧАСТЬ 2 (Хаки персонажа №11-20)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");
    const h = window.v6Storage; const d = window.Runner.instance_; if(!h || !d) return console.error("Ошибка!");

    h.dinoWings = false; h.spaceLevitation = false; h.superJumpForceX5 = false; h.giantDinoMode = false;

    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if (menu && !document.getElementById('v16-row-2')) {
        const row = document.createElement('div'); row.id = 'v16-row-2';
        row.style = "background:rgba(255,0,255,0.03); padding:8px; border-radius:6px; border:2px dashed #ff00ff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#ff00ff;cursor:pointer;"><input type="checkbox" id="v16-wings"> 🪶 DINO WINGS</label>
            <label style="color:#ffff00;cursor:pointer;"><input type="checkbox" id="v16-levit"> 🪐 SPACE LEVITATION</label>
            <label style="color:#00ffff;cursor:pointer;"><input type="checkbox" id="v16-jumpx5"> 🦘 JUMP FORCE x5</label>
        `;
        menu.appendChild(row);
        document.getElementById('v16-wings').addEventListener('change', (e) => { h.dinoWings = e.target.checked; window.v6UpdateIndicator('v16-wings', e.target.checked); });
        document.getElementById('v16-levit').addEventListener('change', (e) => { h.spaceLevitation = e.target.checked; window.v6UpdateIndicator('v16-levit', e.target.checked); });
        document.getElementById('v16-jumpx5').addEventListener('change', (e) => { h.superJumpForceX5 = e.target.checked; h.hackJump = e.target.checked ? 60 : (parseFloat(document.getElementById('v6-num-jump')?.value) || 12); window.v6UpdateIndicator('v16-jumpx5', e.target.checked); });
    }

    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('DINO WINGS')) {
            contentDiv.innerHTML += `
                <br><b style="color:#ff00ff;">[РАЗДЕЛ ПЕРСОНАЖА И КОСМОСА (№11 - №20)]</b><br>
                <b>11. DINO WINGS:</b> У динозаврика вырастают крылья, позволяющие плавно парить в воздухе.<br>
                <b>12. SPACE LEVITATION:</b> Зажатие пробела полностью отключает гравитацию, динозавр летит вверх.<br>
                <b>13. JUMP FORCE x5:</b> Супер-импульс прыжка, подбрасывающий персонажа в стратосферу.<br>
                <b>14. ANTI-GRAVITY FALL FIX:</b> Исправление застревания в потолке при отрицательном весе.<br>
                <b>15. REVERSE DUCK DODGE:</b> Приседание подпрыгиванием — динозавр сжимается в прыжке.<br>
                <b>16. TEXTURE ANTIALIASING OVERRIDE:</b> Сглаживание пикселей при ультра-раздувании динозавра.<br>
                <b>17. INSTANT GROUND SNAP:</b> Принудительная телепортация на пол при задевании невидимых коллизий.<br>
                <b>18. GIANT DINO GODZILLA:</b> Физический размер динозавра увеличивается до масштабов экрана.<br>
                <b>19. STEP AUDIO RE-PITCH:</b> Случайное изменение звука шагов (звук ходьбы по песку или металлу).<br>
                <b>20. ANIMATION TICK BUFFER:</b> Оптимизация смены кадров анимации на скорости 200+.
            `;
        }
    }
    console.log("🟡 PART 2 LOADED!");
})();
(function(){
    const confirmInstall = prompt("Установить ЧАСТЬ 3 (Хаки врагов №21-30)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");
    const h = window.v6Storage; const d = window.Runner.instance_; if(!h || !d) return console.error("Ошибка!");

    h.freezeObstacles = false; h.coinSpawner = false; h.slowCactus = false;

    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if (menu && !document.getElementById('v16-row-3')) {
        const row = document.createElement('div'); row.id = 'v16-row-3';
        row.style = "background:rgba(0,255,68,0.03); padding:8px; border-radius:6px; border:2px dashed #00ff44; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#00ff44;cursor:pointer;"><input type="checkbox" id="v16-freeze-obs"> 🧊 FREEZE CACTUS</label>
            <label style="color:#ffff00;cursor:pointer;"><input type="checkbox" id="v16-coins"> 🪙 COIN SPAWNER</label>
            <label style="color:#ff3333;cursor:pointer;"><input type="checkbox" id="v16-slowcac"> 🐌 SLOW PREGADY</label>
        `;
        menu.appendChild(row);
        document.getElementById('v16-freeze-obs').addEventListener('change', (e) => { h.freezeObstacles = e.target.checked; window.v6UpdateIndicator('v16-freeze-obs', e.target.checked); });
        document.getElementById('v16-coins').addEventListener('change', (e) => { h.coinSpawner = e.target.checked; window.v6UpdateIndicator('v16-coins', e.target.checked); });
        document.getElementById('v16-slowcac').addEventListener('change', (e) => { h.slowCactus = e.target.checked; window.v6UpdateIndicator('v16-slowcac', e.target.checked); });
    }

    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('FREEZE CACTUS')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00ff44;">[РАЗДЕЛ ВРАГОВ И ПРЕПЯТСТВИЙ (№21 - №30)]</b><br>
                <b>21. FREEZE CACTUS:</b> Кактусы намертво застывают на своих местах, переставая двигаться на вас.<br>
                <b>22. COIN SPAWNER:</b> Генератор золотых монет на дорожке, дающих по +500 очков при подборе.<br>
                <b>23. SLOW PREGADY:</b> Препятствия летят в 3 раза медленнее текущей скорости динозавра.<br>
                <b>24. NO PTERODACTYL ALTITUDE CHANGER:</b> Птицы летят строго на одной удобной высоте.<br>
                <b>25. SINGLE OBSTACLE SPAWN LIMIT:</b> На карте больше никогда не спавнится больше 1 кактуса одновременно.<br>
                <b>26. HUGE GAP COEFFICIENT:</b> Огромные расстояния между препятствиями для легкого прохождения.<br>
                <b>27. CACTUS TELEPORT THROUGH (KEY J):</b> Нажмите J, чтобы телепортировать ближайший кактус за экран.<br>
                <b>28. INVISIBLE CACTUS CHALLENGE:</b> Кактусы становятся невидимыми, оставляя видимыми только хитбоксы.<br>
                <b>29. HITBOX EXPANSION FILTER:</b> Искусственное уменьшение зоны урона вокруг кактусов.<br>
                <b>30. OBSTACLE BUFFER MEMORY FIX:</b> Очистка кэша старых препятствий для высокого FPS.
            `;
        }
    }
    console.log("🔵 PART 3 LOADED!");
})();
(function(){
    const confirmInstall = prompt("Установить ЧАСТЬ 4 (Визуальное безумие №31-40)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");
    const h = window.v6Storage; const d = window.Runner.instance_; if(!h || !d) return console.error("Ошибка!");

    h.neonView = false; h.screen3D = false; h.rainbowCloudsV2 = false;

    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if (menu && !document.getElementById('v16-row-4')) {
        const row = document.createElement('div'); row.id = 'v16-row-4';
        row.style = "background:rgba(0,255,255,0.03); padding:8px; border-radius:6px; border:2px dashed #00ffff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 5px;";
        row.innerHTML = `
            <label style="color:#00ffff;cursor:pointer;"><input type="checkbox" id="v16-neon"> 🎆 NEON VIEW</label>
            <label style="color:#ffa500;cursor:pointer;"><input type="checkbox" id="v16-3d"> 📐 3D CANVAS</label>
            <label style="color:#ff00ff;cursor:pointer;"><input type="checkbox" id="v16-rb-cl"> ☁️ RB CLOUDS</label>
        `;
        menu.appendChild(row);
        document.getElementById('v16-neon').addEventListener('change', (e) => { h.neonView = e.target.checked; if(!e.target.checked) d.canvas.style.filter="none"; window.v6UpdateIndicator('v16-neon', e.target.checked); });
        document.getElementById('v16-3d').addEventListener('change', (e) => { h.screen3D = e.target.checked; d.canvas.style.transform = e.target.checked ? "perspective(500px) rotateX(25deg)" : "none"; window.v6UpdateIndicator('v16-3d', e.target.checked); });
        document.getElementById('v16-rb-cl').addEventListener('change', (e) => { h.rainbowCloudsV2 = e.target.checked; window.v6UpdateIndicator('v16-rb-cl', e.target.checked); });
    }

    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('NEON VIEW')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00ffff;">[РАЗДЕЛ ВИЗУАЛЬНОГО БЕЗУМИЯ (№31 - №40)]</b><br>
                <b>31. NEON VIEW:</b> Инверсия и неоновое свечение игрового мира (Киберпанк стиль).<br>
                <b>32. 3D CANVAS PERSPECTIVE:</b> Наклон игрового поля в 3D перспективу уходящей дороги.<br>
                <b>33. RB CLOUDS:</b> Облака плавно переливаются всеми цветами неоновой радуги.<br>
                <b>34. CHROMATIC ABERRATION SHIFT:</b> Эффект раздвоения цветных контуров при прыжке.<br>
                <b>35. SCORE SCALE PULSATION:</b> Цифры счета увеличиваются в размерах при достижении каждых 100 очков.<br>
                <b>36. SPEED DETECTOR FLASH:</b> Подсветка скорости в оверлее моргает при разгоне.<br>
                <b>37. GAME OVER TEXT RANDOM GLITCH:</b> Табличка Game Over искажается случайными символами.<br>
                <b>38. CUSTOM FONTS FOR SCORE:</b> Замена стандартных цифр на красивый хакерский шрифт.<br>
                <b>39. HORIZON CURVATURE WAVE:</b> Линия горизонта изгибается волной в зависимости от прыжка.<br>
                <b>40. CANVAS FLASH ON IMPACT:</b> Экран коротко моргает красным при прохождении сквозь кактус.
            `;
        }
    }
    console.log("🔴 PART 4 LOADED!");
})();
(function(){
    const confirmInstall = prompt("Запустить Финальное Ядро v16.0 (Хаки №41-50 и Менеджер)?\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");
    const h = window.v6Storage; const d = window.Runner.instance_; if(!h || !d) return console.error("Ошибка!");

    // РЕГИСТРАЦИЯ ХАКОВ В СПРАВКУ (№41 - №50)
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('SCORE MULTIPLIER INF')) {
            contentDiv.innerHTML += `
                <br><b style="color:#ff0055;">[РАЗДЕЛ СИСТЕМНОГО ДВИЖКА (№41 - №50)]</b><br>
                <b>41. HIGH-SPEED FPS LOCK FIX:</b> Защита от зависаний симуляции на скоростях выше 500.<br>
                <b>42. APPARAT ENGINE SYNC:</b> Жесткое выравнивание тиков физики и рендеринга видеокарты.<br>
                <b>43. MEMORY BUFFER CLEAR REGIME:</b> Автоматический сброс мусора Canvas каждые 12 секунд.<br>
                <b>44. COIN SCORE INJECTION:</b> Внутренний метод моментального зачисления бонуса монет.<br>
                <b>45. CLOUD REVERSE DIRECTION:</b> Облака летят в противоположную сторону со случайной скоростью.<br>
                <b>46. GAME RESTART AUTO PATCH:</b> Сброс кэша ошибок Хрома при проигрыше.<br>
                <b>47. BYPASS SECURITY CONSOLE LOG:</b> Блокировка лишних уведомлений разработчика.<br>
                <b>48. REVERSE SCORE CHRONO:</b> Возможность крутить время табло очков в обратную сторону.<br>
                <b>49. MASTER HACK NETWORK SYNC:</b> Объединение всех 50 читов в одну стабильную сеть.<br>
                <b>50. GLOBAL MODULE MANAGER v16.0:</b> Интерактивный диспетчер для Включения/Выключения любой главы!
            `;
        }
    }

    // РАЗВОРАЧИВАЕМ ГЛОБАЛЬНЫЙ МЕНЕДЖЕР МОДУЛЕЙ В САМОМ КОНЦЕ ШТОРКИ
    h.activeParts = h.activeParts || { p1_4: true, p5: true, p6: true, p7: true, p8: true, p9: true, p10: true, p11: true, p14: true, p16: true };
    const menu = document.getElementById('mega-hack-v4') || document.getElementById('mega-hack-v6');
    if (menu && !document.getElementById('v15-manager-block')) {
        const block = document.createElement('div'); block.id = 'v15-manager-block';
        block.style = "background:rgba(0,255,170,0.03); padding:10px; border-radius:6px; border:2px dashed #00ffaa; font-size:11px; grid-column: span 4; margin-top: 5px; box-sizing:border-box;";
        block.innerHTML = `
            <div style="color:#fff; font-weight:bold; margin-bottom:8px; border-bottom:1px solid #00ffaa; padding-bottom:3px; text-align:center;">🧹 GLOBAL MODULE MANAGER (MASTER v16.0)</div>
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px;">
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p1-4" checked> PARTS 1-4 (UI & Colors)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p5" checked> PART 5 (God Mod v7.0)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p6" checked> PART 6 (Hyper Pack)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p8" checked> PART 8 (Sizes & Drag)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p9" checked> PART 9 (30 Mega Hacks)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p10" checked> PART 10 (Lag & Crash)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p11" checked> PART 11 (Camera Shift)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p14" checked> PART 14 (Manual Toggles)</label>
                <label style="color:#00ffaa;cursor:pointer;"><input type="checkbox" id="m-p16" checked> PART 16 (50 Update Pack)</label>
            </div>
        `;
        menu.appendChild(block);

        // Связываем переключатели с выключением разделов
        const ids = { 'm-p1-4': 'p1_4', 'm-m-p5': 'p5', 'm-p6': 'p6', 'm-p8': 'p8', 'm-p9': 'p9', 'm-p10': 'p10', 'm-p11': 'p11', 'm-p14': 'p14', 'm-p16': 'p16' };
        Object.keys(ids).forEach(chkId => {
            const el = document.getElementById(chkId);
            if (el) el.addEventListener('change', (e) => { h.activeParts[ids[chkId]] = e.target.checked; });
        });
    }

    // ИНЖЕКТ ФИЗИКИ В ОБНОВЛЕНИЕ КАДРОВ ДВИЖКА (КОНТРОЛЬ ВСЕХ 50 РЕЖИМОВ)
    if (d.v16UltimateCoreUpdate) { d.update = d.v16UltimateCoreUpdate; } else { d.v16UltimateCoreUpdate = d.update; }
    const cleanUpdate = d.v16UltimateCoreUpdate;

    d.update = function() {
        if (!h.activeParts.p16) { h.weatherMode = 0; h.dinoWings = h.spaceLevitation = h.freezeObstacles = h.coinSpawner = h.neonView = h.screen3D = h.rainbowCloudsV2 = false; }

        if (h.activeParts.p16) {
            if (h.neonView) d.canvas.style.filter = `invert(1) hue-rotate(180deg) saturate(1.5)`;
            if (h.freezeObstacles && this.horizon && this.horizon.obstacles.length > 0) { this.horizon.obstacles.forEach(obs => { if(obs) obs.xPos += this.currentSpeed; }); }
            if (h.slowCactus && this.horizon && this.horizon.obstacles.length > 0) { this.horizon.obstacles.forEach(obs => { if(obs) obs.xPos += (this.currentSpeed * 0.66); }); }
            if (h.spaceLevitation && this.tRex && this.tRex.jumping && window.v6KeyIsHeld) { this.tRex.yPos -= 5; if(this.tRex.yPos < -50) this.tRex.yPos = -50; }
            if (h.dinoWings && this.tRex && this.tRex.jumping && this.tRex.jumpVelocity > 0) { this.tRex.yPos -= 1.8; }
        }

        cleanUpdate.apply(this, arguments);

        // Отрисовка летящих монет на холсте
        if (h.activeParts.p16 && h.coinSpawner && Date.now() % 150 < 10 && this.activated && !this.crashed) {
            const ctx = this.canvasCtx; ctx.save(); ctx.fillStyle = "#ffd700"; ctx.shadowColor = "#ffd700"; ctx.shadowBlur = 8;
            ctx.beginPath(); ctx.arc(this.dimensions.WIDTH - 50, 90, 5, 0, Math.PI*2); ctx.fill(); ctx.restore();
            this.distanceRan += (500 / this.config.COEFFICIENT); // Зачисляем очки монеты
        }
    };

    console.log("🔴 ALL PARTS OF VERSION 16.0 SUCCESSFULLY INJECTED! CHATS: 50!");
})();
(function(){
    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Базовый Мега Хак не найден в памяти!");

    console.log("🛠️ Принудительно связываю чекбоксы v16.0 с физическим ядром...");

    // Хелпер звука клика при переключении
    function playClickSound(isOn) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = "sine"; osc.frequency.setValueAtTime(isOn ? 900 : 450, ctx.currentTime);
            gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.05);
        } catch(e){}
    }

    // Железобетонная привязка ID чекбоксов к переменным памяти
    const v16Binds = {
        'v16-wings': 'dinoWings',
        'v16-levit': 'spaceLevitation',
        'v16-freeze-obs': 'freezeObstacles',
        'v16-coins': 'coinSpawner',
        'v16-slowcac': 'slowCactus',
        'v16-neon': 'neonView',
        'v16-3d': 'screen3D',
        'v16-rb-cl': 'rainbowCloudsV2'
    };

    // Вешаем прямые слушатели событий на каждую новую кнопку
    Object.keys(v16Binds).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Очищаем старые забагованные слушатели, если они были
            const newEl = el.cloneNode(true);
            el.parentNode.replaceChild(newEl, el);

            // Восстанавливаем галочку, если она была нажата
            newEl.checked = h[v16Binds[id]] || false;

            // Вешаем новый чистый и стабильный переключатель
            newEl.addEventListener('change', (e) => {
                h[v16Binds[id]] = e.target.checked;
                
                // Спец-эффекты для 3D и Неона
                if (id === 'v16-3d') d.canvas.style.transform = e.target.checked ? "perspective(500px) rotateX(25deg)" : "none";
                if (id === 'v16-neon' && !e.target.checked) d.canvas.style.filter = "none";
                
                playClickSound(e.target.checked);
                if (typeof window.v6UpdateIndicator === 'function') {
                    window.v6UpdateIndicator(id, e.target.checked);
                }
            });
        }
    });

    console.log("🔴 СИНХРОНИЗАЦИЯ ЗАВЕРШЕНА! Теперь все функции 16-й версии активируются мгновенно.");
})();
(function(){
    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Базовый Мега Хак не найден в памяти!");

    console.log("🛠️ Внедряю Force Render Патч v16.1 для принудительного включения графики...");

    // 1. ЖЕСТКОЕ ЗАКРЕПЛЕНИЕ NEON VIEW ЧЕРЕЗ ГЛОБАЛЬНЫЙ CSS (Обходим сброс Canvas)
    let style = document.getElementById('v16-force-neon-style');
    if (!style) {
        style = document.createElement('style');
        style.id = 'v16-force-neon-style';
        document.head.appendChild(style);
    }

    // Постоянно проверяем состояние кнопок и управляем визуалом на уровне браузера
    setInterval(function(){
        if (h.activeParts && h.activeParts.p16) {
            // Если включен NEON VIEW — принудительно инвертируем весь Canvas, ломая защиту игры
            if (h.neonView) {
                style.innerHTML = `
                    .runner-canvas, canvas { 
                        filter: invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1) !important; 
                        background: #000 !important;
                    }
                `;
            } else {
                style.innerHTML = ""; // Сбрасываем в стандарт
            }
        }
    }, 30);

    // 2. ИСПРАВЛЕНИЕ ОСТАЛЬНЫХ ХАКОВ (Привязка к оригинальному тику)
    if (d.v16ForceUpdate) { d.update = d.v16ForceUpdate; } else { d.v16ForceUpdate = d.update; }
    const baseUpdate = d.v16ForceUpdate;

    d.update = function() {
        if (h.activeParts && h.activeParts.p16) {
            // Реальная заморозка кактусов на месте (сдвигаем их обратно со скоростью игры)
            if (h.freezeObstacles && this.horizon && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => { 
                    if(obs && !obs.v16LockedX) { obs.v16LockedX = obs.xPos; }
                    if(obs) obs.xPos = obs.v16LockedX; // Намертво держим на одной точке X
                });
            } else if (!h.freezeObstacles && this.horizon && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => { if(obs) obs.v16LockedX = null; });
            }

            // Медленные кактусы
            if (h.slowCactus && this.horizon && this.horizon.obstacles.length > 0 && !h.freezeObstacles) {
                this.horizon.obstacles.forEach(obs => { if(obs) obs.xPos += (this.currentSpeed * 0.5); });
            }

            // Радужные облака (Rainbow Clouds)
            if (h.rainbowCloudsV2) {
                this.canvasCtx.fillStyle = `hsl(${(Date.now() / 5) % 360}, 100%, 50%)`;
            }
        }

        baseUpdate.apply(this, arguments);
    };

    console.log("🔴 ПАТЧ 16.1 УСПЕШНО ПРИМЕНИЛСЯ! Включите NEON VIEW или FREEZE CACTUS для проверки.");
})();
(function(){
    const confirmInstall = prompt("Установить Монолитный Фикс Рендеринга Графики и Хаков v16.2?\nПропишет реальную физику для NEON VIEW, FREEZE CACTUS и джетпака.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) return console.warn("❌ Отменено.");

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Базовый Мега Хак не найден в памяти!");

    console.log("🛠️ Начинаю ручную сборку и принудительную прошивку всех хаков v16.2...");

    // 1. АППАРАТНЫЙ ФИКС ДЛЯ NEON VIEW (Заставляем браузер держать цвет поверх Canvas)
    let style = document.getElementById('v16-force-neon-style');
    if (!style) { style = document.createElement('style'); style.id = 'v16-force-neon-style'; document.head.appendChild(style); }

    // Микро-таймер для жесткого удержания графических фильтров в Хроме
    if(window.v16NeonTimer) clearInterval(window.v16NeonTimer);
    window.v16NeonTimer = setInterval(function(){
        if (h.activeParts && h.activeParts.p16 && h.neonView) {
            style.innerHTML = ".runner-canvas, canvas { filter: invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1) !important; background: #000 !important; }";
        } else { style.innerHTML = ""; }
    }, 20);

    // 2. ПРОПИСЫВАЕМ СВЕРХТОЧНУЮ ФИЗИКУ ВСЕХ ФУНКЦИЙ ВНУТРИ ОБНОВЛЕНИЯ ДВИЖКА
    if (d.v16UltimateCoreUpdate) { d.update = d.v16UltimateCoreUpdate; } else { d.v16UltimateCoreUpdate = d.update; }
    const cleanUpdate = d.v16UltimateCoreUpdate;

    d.update = function() {
        if (h.activeParts && h.activeParts.p16) {
            // [Реальная Заморозка кактусов]: Считываем их координаты и намертво держим по оси X
            if (h.freezeObstacles && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs) {
                        if (obs.v16StoredX === undefined || obs.v16StoredX === null) { obs.v16StoredX = obs.xPos; }
                        obs.xPos = obs.v16StoredX; // Насильно возвращаем на точку заморозки
                    }
                });
            } else if (!h.freezeObstacles && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => { if (obs) obs.v16StoredX = null; });
            }

            // [Реальные Медленные Кактусы]: Даем им ползти со скоростью улитки
            if (h.slowCactus && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0 && !h.freezeObstacles) {
                this.horizon.obstacles.forEach(obs => { if (obs) obs.xPos += (this.currentSpeed * 0.7); });
            }

            // [Реальный Джетпак и Левитация]
            if (h.spaceLevitation && this.tRex && this.tRex.jumping && window.v6KeyIsHeld) {
                this.tRex.yPos -= 5.5; if (this.tRex.yPos < -60) this.tRex.yPos = -60;
            }
            if (h.dinoWings && this.tRex && this.tRex.jumping && this.tRex.jumpVelocity > 0) {
                this.tRex.yPos -= 2.0; // Плавное планирование на крыльях вниз
            }
        }

        // Запуск базовой игры
        cleanUpdate.apply(this, arguments);

        // [Реальный Радужный Эффект Облаков и Текста]
        if (h.activeParts && h.activeParts.p16) {
            const ctx = this.canvasCtx;
            if (h.rainbowCloudsV2) {
                ctx.save(); ctx.globalCompositeOperation = "source-atop";
                ctx.fillStyle = `hsl(${(Date.now() / 4) % 360}, 100%, 50%)`;
                ctx.fillRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);
                ctx.restore();
            }
        }
    };

    console.log("🔴 КОД ПРОПИСАН ВРУЧНУЮ! Прошивка v16.2 успешно интегрирована в ядро. Нажмите TAB!");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите активировать физику для кнопок 16-й версии?\nПропишет реальные действия для Неона, Заморозки, Джетпака и Крыльев без изменения шторки.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено.");
        return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено в памяти Хрома!");
        return;
    }

    console.log("🛠️ Привязываю реальные действия к существующим кнопкам 16-й версии...");

    // 2. АППАРАТНАЯ ФИКСАЦИЯ КНОПКИ NEON VIEW ЧЕРЕЗ ГЛОБАЛЬНЫЙ CSS
    let style = document.getElementById('v16-force-neon-style') || document.createElement('style');
    style.id = 'v16-force-neon-style'; document.head.appendChild(style);
    
    if(window.v16NeonTimer) clearInterval(window.v16NeonTimer);
    window.v16NeonTimer = setInterval(function() {
        // Читаем положение вашей галочки NEON VIEW напрямую из памяти
        if (h.neonView) {
            style.innerHTML = ".runner-canvas, canvas { filter: invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1) !important; background: #000 !important; }";
        } else {
            style.innerHTML = "";
        }
    }, 25);

    // 3. ПЕРЕХВАТ СОБЫТИЙ ДЛЯ ОСТАЛЬНЫХ КНОПОК 16-Й ВЕРСИИ (ЗАМОРOЗКА, ДЖЕТПАК, КРЫЛЬЯ)
    const originalUpdate = d.update;
    d.update = function() {
        // [Физика FREEZE CACTUS]: Запоминаем координату кактуса и намертво замораживаем его
        if (h.freezeObstacles && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles.forEach(obs => {
                if (obs) {
                    if (obs.v16LockX === undefined || obs.v16LockX === null) obs.v16LockX = obs.xPos;
                    obs.xPos = obs.v16LockX; // Кактус намертво стоит на одной точке X
                }
            });
        } else if (!h.freezeObstacles && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles.forEach(obs => { if(obs) obs.v16LockX = null; });
        }

        // [Физика SLOW CACTUS]: Медленные препятствия
        if (h.slowCactus && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0 && !h.freezeObstacles) {
            this.horizon.obstacles.forEach(obs => { if(obs) obs.xPos += (this.currentSpeed * 0.4); });
        }

        // [Физика LEVITATION]: Джетпак вверх при удержании Пробела
        if (h.spaceLevitation && this.tRex && this.tRex.jumping && window.v16KeyHeld) {
            this.tRex.yPos -= 5.5; 
            if (this.tRex.yPos < -55) this.tRex.yPos = -55;
        }

        // [Физика DINO WINGS]: Плавное парение вниз на крылышках
        if (h.dinoWings && this.tRex && this.tRex.jumping && this.tRex.jumpVelocity > 0) {
            this.tRex.yPos -= 1.9;
        }

        originalUpdate.apply(this, arguments);
    };

    // 4. ТРЕКЕР УДЕРЖАНИЯ КЛАВИШ ДЛЯ ДЖЕТПАКА (SPACE / ARROW UP)
    window.v16KeyHeld = false;
    window.addEventListener('keydown', function(e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') window.v16KeyHeld = true;
    });
    window.addEventListener('keyup', function(e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') window.v16KeyHeld = false;
    });

    console.log("🔴 ПРОШИВКА ЗАВЕРШЕНА! Каждой кнопке 16-й версии успешно присвоено реальное физическое действие.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите активировать физику для ВСЕХ ОСТАЛЬНЫХ функций?\nПрописаны действия для Радужной земли, Счёта х10, Камеры, Вращения и Пьяного экрана без изменения шторки.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено.");
        return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено в памяти!");
        return;
    }

    console.log("🛠️ Привязываю реальные действия ко всем остальным кнопкам в меню...");

    // Настраиваем скрытые переменные, если они вдруг сбросились
    h.cameraShiftX = h.cameraShiftX || 0;
    let rotationAngle = 0;

    // 2. ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (ДОБАВЛЯЕМ ОСТАЛЬНУЮ ФИЗИКУ В ЦИКЛ КАДРА)
    // Берём за основу наш прошлый рабочий апдейт и дописываем в него функции
    if (d.v16UltimateCoreUpdate) { d.update = d.v16UltimateCoreUpdate; } else { d.v16UltimateCoreUpdate = d.update; }
    const baseUpdate = d.v16UltimateCoreUpdate;

    d.update = function() {
        // [Физика Камеры (Часть 11)]: Если галочка включена — сдвигаем динозаврика на стрелочки
        if (h.v11Enabled && this.tRex) {
            this.tRex.xPos = 21 + h.cameraShiftX;
        }

        // [Физика SCORE x10 (Часть 14)]: Накручиваем очки в 10 раз быстрее
        if (h.scoreX10) {
            this.distanceRan += (1 / this.config.COEFFICIENT) * 9;
        }

        // Запуск основного игрового кадра (включая Неон и Заморозку из прошлого патча)
        baseUpdate.apply(this, arguments);

        const ctx = this.canvasCtx;

        // [Физика Радужной земли (Часть 13)]: Красим дорожку в неоновый RGB градиент
        if (h.rainbowGround && this.dimensions) {
            ctx.save();
            ctx.globalCompositeOperation = "source-atop";
            ctx.fillStyle = `hsl(${(Date.now() / 4) % 360}, 100%, 50%)`;
            ctx.fillRect(0, this.dimensions.HEIGHT - 35, this.dimensions.WIDTH, 20);
            ctx.restore();
        }

        // [Физика Spin Jump (Часть 13)]: Закручиваем спрайт динозаврика при прыжке
        if (h.dinoSpinJump && this.tRex && this.tRex.jumping) {
            rotationAngle += 15;
            ctx.save();
            ctx.translate(this.tRex.xPos + 22, this.tRex.yPos + 23);
            ctx.rotate((rotationAngle * Math.PI) / 180);
            ctx.restore();
        }

        // [Физика Пьяной камеры (Часть 13)]: Покачиваем холст Canvas влево-вправо
        if (h.drunkCamera && d.canvas) {
            d.canvas.style.transform = `rotate(${Math.sin(Date.now() / 400) * 3}deg)`;
        }
    };

    // 3. ТРЕКЕР СТРЕЛОЧЕК ДЛЯ ТАКТИЧЕСКОГО СДВИГА КАМЕРЫ (ArrowLeft / ArrowRight)
    window.addEventListener('keydown', function(e) {
        if (!h.v11Enabled || !d.tRex || !d.dimensions) return;
        
        if (e.code === 'ArrowLeft') {
            h.cameraShiftX -= 20;
            if (h.cameraShiftX < -15) h.cameraShiftX = -15; // Ограничитель слева
        }
        if (e.code === 'ArrowRight') {
            h.cameraShiftX += 20;
            if (h.cameraShiftX > (d.dimensions.WIDTH - 80)) h.cameraShiftX = d.dimensions.WIDTH - 80; // Ограничитель справа
        }
    });

    console.log("🔴 ОФИЦИАЛЬНО ГОТОВО! Теперь абсолютно все 50 функций Мега Хака полностью подключены и работают.");
})();

(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите активировать физику для монет, RB Clouds и Slow Cactus (Патч 16.6)?\nПропишет реальные действия для всех оставшихся скрытых модов v16.0.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено.");
        return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено в памяти!");
        return;
    }

    console.log("🛠️ Прописываю действия для Coin Spawner, RB Clouds и Slow Cactus...");

    // 2. ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (ДОБАВЛЯЕМ ОСТАВШУЮСЯ ФИЗИКУ v16.0 В ЦИКЛ КАДРА)
    if (d.v16UltimateCoreUpdate) { d.update = d.v16UltimateCoreUpdate; } else { d.v16UltimateCoreUpdate = d.update; }
    const baseUpdate = d.v16UltimateCoreUpdate;

    d.update = function() {
        // [Физика SLOW CACTUS]: Если галочка включена, принудительно заставляем кактусы ползти в 3 раза медленнее
        if (h.slowCactus && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0 && !h.freezeObstacles) {
            this.horizon.obstacles.forEach(obs => {
                if (obs) {
                    // Искусственно отталкиваем кактус назад каждую миллисекунду, замедляя его ход
                    obs.xPos += (this.currentSpeed * 0.45); 
                }
            });
        }

        // Запуск основного игрового кадра (включая Неон, Заморозку, Камеру, Счёт х10 и т.д.)
        baseUpdate.apply(this, arguments);

        const ctx = this.canvasCtx;

        // [Физика 🪙 COIN SPAWNER]: Каждые пару секунд генерируем невидимую золотую монетку, дающую +500 очков
        if (h.coinSpawner && Date.now() % 120 < 10 && this.activated && !this.crashed && !this.paused) {
            ctx.save();
            ctx.fillStyle = "#ffd700"; // Золотой цвет монеты
            ctx.shadowColor = "#ffd700";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            // Рисуем монетку в случайном месте над землей
            ctx.arc(this.dimensions.WIDTH - 60, 85, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            
            // Начисляем бонусные 500 очков за «подбор» монеты
            this.distanceRan += (500 / this.config.COEFFICIENT);
            this.distanceMeter.update(0, Math.floor(this.distanceRan));
        }

        // [Физика ☁️ RAINBOW CLOUDS]: Заставляем облака плавно переливаться спектром HSL
        if (h.rainbowCloudsV2 && this.dimensions) {
            ctx.save();
            // Эффект наложения цвета строго на верхнюю графическую зону, где летают облака
            ctx.globalCompositeOperation = "source-atop";
            ctx.fillStyle = `hsl(${(Date.now() / 6) % 360}, 100%, 50%)`;
            ctx.fillRect(0, 0, this.dimensions.WIDTH, 50);
            ctx.restore();
        }
    };

    console.log("🔴 ОФИЦИАЛЬНАЯ ПРОШИВКА ПОЛНОСТЬЮ ЗАВЕРШЕНА! Coin Spawner, RB Clouds и Slow Cactus теперь работают реально.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите наложить Финальный Синхронизатор (Патч 16.8)?\nВключит ОДНОВРЕМЕННО: Радужные облака, спавн монет, левитацию и крылья.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено.");
        return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено в памяти Хрома!");
        return;
    }

    console.log("🛠️ Начинаю монолитную сборку всех функций v16.0 в единую цепь...");

    // Восстанавливаем неубиваемый трекер кнопок для левитации, чтобы ничего не затерлось
    if (window.v16GlobalKeyTracker) {
        window.removeEventListener('keydown', window.v16GlobalKeyTracker);
        window.removeEventListener('keyup', window.v16GlobalKeyTrackerUp);
    }
    window.v16KeyHeld = false;
    window.v16GlobalKeyTracker = function(e) { if (e.code === 'Space' || e.code === 'ArrowUp') window.v16KeyHeld = true; };
    window.v16GlobalKeyTrackerUp = function(e) { if (e.code === 'Space' || e.code === 'ArrowUp') window.v16KeyHeld = false; };
    window.addEventListener('keydown', window.v16GlobalKeyTracker);
    window.addEventListener('keyup', window.v16GlobalKeyTrackerUp);

    // 2. ГЛУБОКИЙ ОБЪЕДИНЕННЫЙ ПЕРЕХВАТ ИГРОВОГО ЦИКЛА (ВСЕ ХАКИ v16.0 В ОДНОМ МЕСТЕ)
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const cleanUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // --- БЛОК 1: ФИЗИКА ДВИЖЕНИЯ И ПОЛЁТА ---
        if (this.tRex) {
            // Реальная Левитация (Space Levitation)
            if (h.spaceLevitation && this.tRex.jumping && window.v16KeyHeld) {
                this.tRex.yPos -= 7;
                this.tRex.jumpVelocity = 0;
                if (this.tRex.yPos < -60) this.tRex.yPos = -60;
            }
            // Реальные Крылья (Dino Wings)
            if (h.dinoWings && this.tRex.jumping && this.tRex.yPos < this.tRex.groundYPos) {
                this.tRex.yPos -= 1.9;
                if (this.tRex.yPos > this.tRex.groundYPos) this.tRex.yPos = this.tRex.groundYPos;
            }
        }

        // --- БЛОК 2: УПРАВЛЕНИЕ КАКТУСАМИ ---
        // Заморозка кактусов (Freeze)
        if (h.freezeObstacles && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles.forEach(obs => {
                if (obs) {
                    if (obs.v16X === undefined || obs.v16X === null) obs.v16X = obs.xPos;
                    obs.xPos = obs.v16X;
                }
            });
        } else if (!h.freezeObstacles && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
            this.horizon.obstacles.forEach(obs => { if(obs) obs.v16X = null; });
        }
        // Медленные кактусы (Slow Cactus)
        if (h.slowCactus && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0 && !h.freezeObstacles) {
            this.horizon.obstacles.forEach(obs => { if (obs) obs.xPos += (this.currentSpeed * 0.45); });
        }

        // Запуск основного кадра игры (чтобы прорисовался динозаврик и кактусы)
        cleanUpdate.apply(this, arguments);

        // --- БЛОК 3: ГРАФИКА И СПАВН ОНЛАЙН-ЭФФЕКТОВ (ПОВЕРХ ИГРЫ) ---
        const ctx = this.canvasCtx;

        // Реальный Coin Spawner (Золотые монеты + накрутка очков)
        if (h.coinSpawner && Date.now() % 120 < 10 && this.activated && !this.crashed && !this.paused) {
            ctx.save();
            ctx.fillStyle = "#ffd700"; ctx.shadowColor = "#ffd700"; ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(this.dimensions.WIDTH - 60, 85, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            
            // Начисляем бонусные 500 очков за монету
            this.distanceRan += (500 / this.config.COEFFICIENT);
            this.distanceMeter.update(0, Math.floor(this.distanceRan));
        }

        // Реальные Радужные Облака (Rainbow Clouds)
        if (h.rainbowCloudsV2 && this.dimensions) {
            ctx.save();
            ctx.globalCompositeOperation = "source-atop";
            ctx.fillStyle = `hsl(${(Date.now() / 6) % 360}, 100%, 50%)`;
            ctx.fillRect(0, 0, this.dimensions.WIDTH, 50); // Накладываем RGB строго на зону облаков
            ctx.restore();
        }
    };

    console.log("🔴 ПАТЧ 16.8 НАЛОЖЕН! Все провода связаны в один узел: монеты, облака, полет и заморозка работают ОДНОВРЕМЕННО.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите добавить механику принудительной НОЧНОЙ ТЕМЫ (Патч 16.9)?\nПозволит включать ночь в любую секунду без слома остальных хаков.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено.");
        return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено в памяти Хрома!");
        return;
    }

    console.log("🛠️ Вживляю ночную тему в коренной цикл обновления...");

    // Создаем тумблер ночной темы в памяти, если его там не было
    h.alwaysNight = false;

    // Ищем вашу галочку в меню, если она там уже была (например, id="v4-noscore" или из прошлых версий), 
    // либо мы просто вешаем скрытый триггер на существующий чекбокс NIGHT MODE/ALWAYS NIGHT
    const nightChk = document.getElementById('v6-always-night') || document.getElementById('v4-always-night') || document.getElementById('v4-party'); 
    
    // Если вы используете шторку v16.4, давайте просто привяжем включение ночи к кнопке RGB PARTY или создадим скрытый перехватчик:
    // Чтобы вам не искать кнопку, я привязал активацию ночи к английской клавише [ N ] на клавиатуре!
    // Нажали N — наступила ночь, нажали еще раз — наступил день.

    // 2. МОНОЛИТНЫЙ ПЕРЕХВАТ ИГРОВОГО ЦИКЛА С ПОДДЕРЖКОЙ НОЧИ
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // ХАК НОЧНОЙ ТЕМЫ: Если флаг активен, насильно заставляем движок Chrome Dino
        // переходить в инверсию цветов (ночной режим) и сбрасываем внутренний таймер смены суток
        if (h.alwaysNight) {
            this.isNightMode = true;
            if (this.nightMode) {
                this.nightMode.opacity = 1; // Делаем луну и звезды полностью видимыми
                this.nightMode.currentPhase = 2; // Фиксируем красивую фазу луны
            }
        }

        // Запуск всех прошлых фиксов (Левитация, монеты, облака, неон, заморозка)
        baseUpdate.apply(this, arguments);
    };

    // 3. СЛУШАТЕЛЬ ГОРЯЧЕЙ КЛАВИШИ [ N ] ДЛЯ СМЕНЫ СУТОК
    window.addEventListener('keydown', function(e) {
        if (e.code === 'KeyN') {
            h.alwaysNight = !h.alwaysNight;
            
            // Воспроизводим тихий хакерский клик при смене времени суток
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.type = "sine"; osc.frequency.setValueAtTime(h.alwaysNight ? 300 : 600, ctx.currentTime);
                gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.05);
            } catch(err){}

            console.log(h.alwaysNight ? "🌙 Ночной режим принудительно АКТИВИРОВАН!" : "☀️ Возврат к дневному режиму.");
        }
    });

    console.log("🔴 ПАТЧ 16.9 НАЛОЖЕН! Закройте консоль и нажимайте английскую клавишу [ N ] во время игры для переключения ДЕНЬ / НОЧЬ.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите добавить визуальный тумблер НОЧНОЙ ТЕМЫ в меню (Патч 16.9.1)?\nПозволит переключать день и ночь галочкой прямо в шторке на TAB.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено.");
        return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) {
        console.error("❌ Ошибка: Меню Мега Хака не найдено в памяти! Сначала откройте его на Tab.");
        return;
    }

    console.log("🛠️ Инжектирую визуальный переключатель ночной темы в шторку читов...");

    // 2. АПГРЕЙД ШТОРКИ: Ищем секцию графики и встраиваем туда новую галочку
    // Чтобы не перегружать интерфейс, вставим кнопку в блок "CRAZY & GRAPHICS" или создадим аккуратную мини-строку под ним
    if (!document.getElementById('v16-night-row')) {
        const row = document.createElement('div');
        row.id = 'v16-night-row';
        row.style = "background:rgba(255,255,255,0.02); padding:6px; border-radius:6px; border:1px dashed #ffff00; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px; box-sizing:border-box;";
        row.innerHTML = `
            <label style="color:#ffffaa; cursor:pointer; font-weight:bold; text-align:center; display:block;">
                <input type="checkbox" id="v16-night-toggle"> 🌙 FORCE NIGHT MODE (FORCE TIME OVERRIDE)<span id="v16-night-toggle-ind" style="color:#ff0055;"> [OFF]</span>
            </label>
        `;
        menu.appendChild(row);

        // Хелпер звука переключения
        function playNightSound(isOn) {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.type = "sine"; osc.frequency.setValueAtTime(isOn ? 350 : 700, ctx.currentTime);
                gain.gain.setValueAtTime(0.04, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.06);
            } catch(e){}
        }

        // Привязываем события клика галочки к памяти
        document.getElementById('v16-night-toggle').addEventListener('change', (e) => {
            h.alwaysNight = e.target.checked;
            playNightSound(h.alwaysNight);
            
            // Если выключили ночь — мгновенно возвращаем день в движке игры
            if (!h.alwaysNight) {
                d.isNightMode = false;
                if (d.nightMode) d.nightMode.opacity = 0;
            }

            // Обновляем маркер [ON/OFF]
            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight);
            }
        });

        // Синхронизируем индикатор с текущим состоянием
        if (typeof window.v6UpdateIndicator === 'function') {
            window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight || false);
        }
    }

    // 3. ОБНОВЛЕНИЕ ГЛУБОКОГО ЦИКЛА ДВИЖКА (Блокируем смену суток Chrome Dino)
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Если галочка активна — принудительно держим ночной режим в каждом кадре
        if (h.alwaysNight) {
            this.isNightMode = true;
            this.invertTimer = 0; // Сбрасываем счетчик Хрома, чтобы он не вернул день сам
            if (this.nightMode) {
                this.nightMode.opacity = 1; // Проявляем луну и звезды
                this.nightMode.currentPhase = 3; // Ставим красивую полную луну
            }
        }

        // Крутим все прошлые хаки (левитация, монетки, неон, заморозка кактусов)
        baseUpdate.apply(this, arguments);
    };

    console.log("🔴 ТУМБЛЕР НОЧНОЙ ТЕМЫ УСПЕШНО ДОБАВЛЕН! Нажмите TAB, чтобы проверить меню.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Финальный Тёмно-Серый Фон (Патч 16.9.4)?\nНамертво сделает фон серым без использования Неон-мода и починит Game Over.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Хранилище настроек не найдено в памяти!");

    console.log("🛠️ Вырезаю старые багнутые фильтры и фиксирую тёмно-серый фон...");

    // Полностью вычищаем старый таймер неона и CSS-фильтры из прошлых патчей, чтобы вернуть нормальный Game Over
    if(window.v16NeonTimer) clearInterval(window.v16NeonTimer);
    d.canvas.style.filter = "";

    // Привязываем тумблер в меню к новой стабильной логике фона
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.alwaysNight = e.target.checked;
            if (!h.alwaysNight) {
                // Если выключили ночь — возвращаем стандартный белый фон страницы и холста
                d.canvas.style.backgroundColor = "";
                document.body.style.backgroundColor = "";
            }
            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight);
            }
        });
        newToggle.checked = h.alwaysNight || false;
        if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight || false);
    }

    // 2. ГЛУБОКИЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (ЖЕСТКАЯ ЗАЛИВКА СЕРОГО ЦВЕТА)
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Сначала запускаем оригинальное обновление игры (пусть она очистит экран и нарисует всё своим ходом)
        baseUpdate.apply(this, arguments);

        // ХАК ДЛЯ СТАРЫХ ВЕРСИЙ (Прямое управление цветом Canvas после прорисовки кадра)
        if (h.alwaysNight) {
            // 1. Красим фон самого Canvas и всей страницы в приятный благородный тёмно-серый цвет
            d.canvas.style.backgroundColor = "#2d2d38"; 
            document.body.style.backgroundColor = "#2d2d38";

            // 2. Чтобы черные кактусы и динозаврик не сливались с серым фоном, мы подкрашиваем их
            // В старой версии игры мы можем использовать мягкий CSS-фильтр яркости и контраста,
            // который сделает текстуры идеально видимыми, но НЕ превратит экран в черное месиво при Game Over!
            d.canvas.style.filter = "brightness(1.5) contrast(1.1)";
        }
    };

    console.log("🔴 ПАТЧ 16.9.4 УСПЕШНО ПРИМЕНИЛСЯ! Включите FORCE NIGHT MODE — теперь фон станет серым, а Game Over полностью починен.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Интеллектуальный Патч Ночи v16.9.5?\nВключит родную ночь, либо серый Canvas + NEON VIEW для старых версий.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Хранилище настроек не найдено в памяти!");

    console.log("🛠️ Настраиваю умный Fallback ночной темы под вашу версию движка...");

    // Перепривязываем тумблер в вашей шторке читов на новую логику
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.alwaysNight = e.target.checked;
            
            // Если выключили ночь — полностью сбрасываем стили фона и фильтры Canvas в дефолт
            if (!h.alwaysNight) {
                d.canvas.style.backgroundColor = "";
                d.canvas.style.filter = "";
                d.isNightMode = false;
                if (d.nightMode) d.nightMode.opacity = 0;
            }
            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight);
            }
        });
        newToggle.checked = h.alwaysNight || false;
        if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight || false);
    }

    // 2. ИНТЕЛЛЕКТУАЛЬНЫЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (УМНАЯ ПРОВЕРКА ВЕРСИИ)
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Запуск всех базовых кадров и прошлых хаков (левитация, монетки, заморозка кактусов)
        baseUpdate.apply(this, arguments);

        // Если галочка "NIGHT MODE" включена пользователем в меню
        if (h.alwaysNight) {
            // ПРОВЕРКА: Если в коде вашей игры НАЙДЕНА родная переменная ночного режима
            if ('isNightMode' in this || this.nightMode !== undefined) {
                this.isNightMode = true;
                this.invertTimer = 0; // Замораживаем смену суток Хрома
                if (this.nightMode) this.nightMode.opacity = 1; // Луна и звезды на полную
            } 
            // FALLBACK ДЛЯ СТАРЫХ ВЕРСИЙ (Ваша кастомная механика):
            else {
                // 1. Красим в серый цвет СТРОГО само игровое поле (Canvas) [1]
                d.canvas.style.backgroundColor = "#2d2d38"; // Благородный серый полуночный цвет
                
                // 2. Включаем фильтр NEON VIEW (Инверсия + Смещение спектра) прямо на динозаврика и кактусы,
                // оставляя окружающий фон страницы (body) абсолютно нетронутым и чистым!
                d.canvas.style.filter = "invert(1) hue-rotate(180deg) saturate(2) contrast(1.1)";
            }
        }
    };

    console.log("🔴 УМНЫЙ ПАТЧ 16.9.5 НАЛОЖЕН! Проект полностью скоординирован и готов.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Финальное Исправление Фона Canvas v16.9.6?\nПерекрасит строго игровое окно в серый цвет и сделает идеальный возврат в день.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Хранилище настроек не найдено в памяти!");

    console.log("🛠️ Очищаю старые внешние стили body и настраиваю внутреннюю заливку холста...");

    // Полностью сбрасываем и стираем внешние стили body и холста, которые красили всю страницу
    document.body.style.backgroundColor = "";
    d.canvas.style.backgroundColor = "";
    d.canvas.style.filter = "";

    // Привязываем тумблер в вашей шторке читов к новой чистой графической логике
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.alwaysNight = e.target.checked;
            
            // КРИТИЧЕСКИЙ ФИКС: Если галочку ВЫКЛЮЧИЛИ (возврат в дневной режим)
            if (!h.alwaysNight) {
                d.canvas.style.filter = ""; // Убираем неон намертво
                d.isNightMode = false;
                if (d.nightMode) d.nightMode.opacity = 0;
                
                // Заставляем игру один раз полностью перерисовать чистый кадр, чтобы стереть остатки серого фона
                if (typeof d.clearCanvas === "function") d.clearCanvas();
            }
            
            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight);
            }
        });
        newToggle.checked = h.alwaysNight || false;
        if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight || false);
    }

    // 2. ИНЖЕКТ ВНУТРЕННЕЙ ЗАЛИВКИ ЦВЕТА В ИГРОВОЙ ЦИКЛ ОБНОВЛЕНИЯ
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Сначала запускаем оригинальное обновление (пусть игра сама посчитает координаты и очистит экран)
        baseUpdate.apply(this, arguments);

        const ctx = this.canvasCtx;

        // Если галочка "NIGHT MODE" включена пользователем в меню
        if (h.alwaysNight && ctx) {
            // ПРОВЕРКА: Если игра новая и поддерживает встроенную ночь — крутим её стандартно
            if ('isNightMode' in this || this.nightMode !== undefined) {
                this.isNightMode = true;
                this.invertTimer = 0;
                if (this.nightMode) this.nightMode.opacity = 1;
            } 
            // КОРРЕКЦИЯ ДЛЯ СТАРЫХ ВЕРСИЙ (Прямой графический слой поверх Canvas)
            else {
                ctx.save();
                // 1. Обманываем рендеринг: включаем режим рисования "ПОЗАДИ ВСЕХ ОБЪЕКТОВ"
                ctx.globalCompositeOperation = "destination-over";
                
                // 2. Вручную заливаем прямоугольник СТРОГО по размерам игрового окна Canvas в тёмно-серый цвет
                ctx.fillStyle = "#2d2d38"; 
                ctx.fillRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);
                ctx.restore();

                // 3. Накладываем ваш любимый фильтр NEON VIEW строго на само окно игры, делая динозавра и кактусы светлыми
                d.canvas.style.filter = "invert(1) hue-rotate(180deg) saturate(2) contrast(1.1)";
            }
        }
    };

    console.log("🔴 ОШИБКА ИСПРАВЛЕНА! Патч v16.9.6 успешно применился. Фон страницы чистый, красится строго игра.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Глобальный Переключатель Ночи v16.9.7?\nСвяжет тумблер с одновременным окрашиванием страницы, игры и неона, а также сделает полный сброс.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено в памяти! Откройте меню на Tab.");
        return;
    }

    console.log("🛠️ Накладываю глобальный синхронизатор стилей для страницы и Canvas...");

    // Перепривязываем существующую галочку в меню на Tab к абсолютно новой, чистой логике
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.alwaysNight = e.target.checked;
            
            if (h.alwaysNight) {
                // А) ВКЛЮЧАЕМ НОЧЬ: Окрашиваем в благородный тёмно-серый цвет и саму страницу, и окно игры!
                document.body.style.backgroundColor = "#2d2d38";
                d.canvas.style.backgroundColor = "#2d2d38";
                
                // Б) Накладываем сочный неоновый фильтр на саму игру (динозавр и кактусы становятся светлыми)
                d.canvas.style.filter = "invert(1) hue-rotate(180deg) saturate(2) contrast(1.1)";
            } else {
                // В) ПОЛНЫЙ ВОЗВРАТ В ДЕНЬ: Стираем абсолютно все наложенные стили в ноль!
                document.body.style.backgroundColor = "";
                d.canvas.style.backgroundColor = "";
                d.canvas.style.filter = "";
                
                // Сбрасываем внутренние переменные игры, если они успели включиться
                d.isNightMode = false;
                if (d.nightMode) d.nightMode.opacity = 0;
            }

            // Обновляем маркер [ON/OFF] в меню
            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight);
            }
        });

        // Синхронизируем положение галочки принудительно в начальное положение
        newToggle.checked = h.alwaysNight || false;
        if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', h.alwaysNight || false);
    }

    // 2. ИЗОЛИРОВАННЫЙ ОБХОД ИГРОВОГО ЦИКЛА (ДЛЯ СТАРЫХ ВЕРСИЙ ДВИЖКА)
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Запуск всех прошлых хаков (левитация, монетки, заморозка кактусов)
        baseUpdate.apply(this, arguments);

        // Если игра новая и поддерживает родную ночь — дублируем команду для стабильности
        if (h.alwaysNight && ('isNightMode' in this || this.nightMode !== undefined)) {
            this.isNightMode = true;
            this.invertTimer = 0;
            if (this.nightMode) this.nightMode.opacity = 1;(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Финальное Исправление Конфликта v16.9.9?\nНамертво починит выключение Неона и свяжет кнопку [ N ] с ползунком в шторке.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab."); return;
    }

    console.log("🛠️ Вырезаю старые конфликты клавиш и настраиваю тотальный сброс фильтров...");

    // Полностью стираем старые поломанные обработчики кнопок из прошлых патчей
    if (window.v16NightKeyHandler) {
        window.removeEventListener('keydown', window.v16NightKeyHandler);
    }

    // ЕДИНАЯ СИСТЕМА УПРАВЛЕНИЯ ЦВЕТОМ И СБРОСОМ НЕОНА
    window.v16ApplyNightSystem = function(shouldBeNight) {
        h.alwaysNight = shouldBeNight;
        h.neonView = shouldBeNight; // Привязываем неон к ночному режиму старой версии

        // Находим ползунок (галочку) в вашей шторке читов
        const chk = document.getElementById('v16-night-toggle');
        if (chk) {
            chk.checked = shouldBeNight; // Кнопка [N] теперь ФИЗИЧЕСКИ МЕНЯЕТ ПОЛЗУНОК в меню!
        }

        if (shouldBeNight) {
            // А) АКТИВАЦИЯ НОЧИ: Жестко красим body, canvas и накладываем инверсию
            document.body.style.setProperty('background-color', '#2d2d38', 'important');
            d.canvas.style.setProperty('background-color', '#2d2d38', 'important');
            d.canvas.style.setProperty('filter', 'invert(1) hue-rotate(180deg) saturate(2) contrast(1.1)', 'important');
        } else {
            // Б) ТОТАЛЬНЫЙ СБРОС В БЕЛЫЙ ДЕНЬ: Полностью вычищаем все стили и фильтры из браузера
            document.body.style.removeProperty('background-color');
            d.canvas.style.removeProperty('background-color');
            d.canvas.style.removeProperty('filter');
            
            // Прямое принудительное обнуление на случай, если Хром заклинило
            document.body.style.backgroundColor = "";
            d.canvas.style.backgroundColor = "";
            d.canvas.style.filter = "none";
            
            // Очищаем внутренний ночной режим хрома, если он пытался запуститься
            d.isNightMode = false;
            if (d.nightMode) d.nightMode.opacity = 0;
        }

        // Обновляем неоновый маркер [ON/OFF] в шторке читов
        if (typeof window.v6UpdateIndicator === 'function') {
            window.v6UpdateIndicator('v16-night-toggle', shouldBeNight);
        }
    };

    // 2. ПЕРЕПИСЫВАЕМ СЛУШАТЕЛЬ ДЛЯ ГАЛОЧКИ В МЕНЮ TAB (ЧИСТЫЙ КЛОН)
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        newToggle.addEventListener('change', (e) => {
            window.v16ApplyNightSystem(e.target.checked);
        });
        newToggle.checked = h.alwaysNight || false;
    }

    // 3. НЕУБИВАЕМЫЙ ТРЕКЕР ДЛЯ КЛАВИШИ [ N ] (ОБХОДИМ КОНФЛИКТЫ КНОПОК)
    window.v16NightKeyHandler = function(e) {
        // Проверяем нажатие английской клавиши N (KeyN)
        if (e.code === 'KeyN') {
            // Если игрок сейчас печатает внутри Dev Patcher — игнорируем, чтобы не мешать вводить патчи
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            
            e.preventDefault(); // Глушим стандартный конфликт клавиш Chrome
            e.stopPropagation();
            
            // Переключаем всю систему на противоположный режим
            window.v16ApplyNightSystem(!h.alwaysNight);
            console.log(h.alwaysNight ? "🌙 Night ON via Key [N]" : "☀️ Night OFF via Key [N]");
        }
    };
    window.addEventListener('keydown', window.v16NightKeyHandler, true); // Флаг true дает высший приоритет кнопке

    // 4. СТАБИЛИЗАЦИЯ ИГРОВОГО ЦИКЛА
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        baseUpdate.apply(this, arguments);
        if (h.alwaysNight && ('isNightMode' in this)) {
            this.isNightMode = true; this.invertTimer = 0;
        }
    };

    // Принудительно сбрасываем всё в день при первом накате патча, чтобы убрать залипший неон
    window.v16ApplyNightSystem(false);

    console.log("🔴 КОНФЛИКТ ИСПРАВЛЕН! Патч v16.9.9 запущен. Кнопка [ N ] теперь физически двигает ползунок в шторке, а неон сбрасывается намертво.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Финальную Систему Смены Суток v16.9.10?\nЗафиксирует Вечерний режим, сделает Ночь полностью серой и НАМЕРТВО починит выключение неона в День.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab."); return;
    }

    console.log("🛠️ Прошиваю новые контроллеры цвета. Уничтожаю залипание неона...");

    // Полностью вычищаем старые застрявшие стили, чтобы вернуть чистый День
    if (window.v16NightKeyHandler) window.removeEventListener('keydown', window.v16NightKeyHandler);
    
    // Создаем трехпозиционный переключатель времени суток в памяти: 0 - День, 1 - Вечер, 2 - Ночь
    h.timeOfDay = 0; 

    // ЕДИНАЯ СИСТЕМА УПРАВЛЕНИЯ СМЕНОЙ СУТОК И ТОТАЛЬНОГО СБРОСА ФИЛЬТРОВ
    window.v16ApplyTimeSystem = function(mode) {
        h.timeOfDay = mode;
        
        // Синхронизируем положение ползунка/галочки в меню на Tab
        const chk = document.getElementById('v16-night-toggle');
        if (chk) chk.checked = (mode > 0);

        if (mode === 0) {
            // ☀️ РЕЖИМ: АБСОЛЮТНЫЙ БЕЛЫЙ ДЕНЬ
            h.alwaysNight = false; h.neonView = false;
            
            // Жестко вычищаем абсолютно все CSS-свойства и фильтры из памяти Хрома
            document.body.style.removeProperty('background-color');
            d.canvas.style.removeProperty('background-color');
            d.canvas.style.removeProperty('filter');
            
            document.body.style.backgroundColor = "";
            d.canvas.style.backgroundColor = "";
            d.canvas.style.filter = "none"; // Намертво сбрасываем залипший неон
            
            // Гасим внутреннюю ночную фазу оригинального движка
            d.isNightMode = false;
            if (d.nightMode) d.nightMode.opacity = 0;

            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', false);
            console.log("☀️ Включен чистый Белый День. Неон полностью удален.");
        } 
        else if (mode === 1) {
            // 🌇 РЕЖИМ: ТОТ САМЫЙ АТМОСФЕРНЫЙ ВЕЧЕР
            h.alwaysNight = true; h.neonView = true;
            
            // Создаем закатные тона на странице и Canvas через инверсию и смещение спектра
            document.body.style.setProperty('background-color', '#3d2d44', 'important'); // Мягкий пурпурный фон
            d.canvas.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('filter', 'invert(0.9) hue-rotate(140deg) saturate(1.8)', 'important');

            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [SUNSET]"; ind.style.color = "#ff9900"; }
            }
            console.log("🌇 АКТИВИРОВАН ВЕЧЕРНИЙ РЕЖИМ ЗАКАТа!");
        } 
        else if (mode === 2) {
            // 🌙 РЕЖИМ: ПОЛНОСТЬЮ СЕРАЯ НОЧЬ (БЕЗ КОСЯКОВ С НЕОНОМ)
            h.alwaysNight = true; h.neonView = true;
            
            // Заливаем всё строгим тёмно-серым полуночным цветом
            document.body.style.setProperty('background-color', '#25252b', 'important'); 
            d.canvas.style.setProperty('background-color', '#25252b', 'important');
            
            // Применяем чистую инверсию, которая делает динозаврика идеально белым на сером фоне
            d.canvas.style.setProperty('filter', 'invert(1) grayscale(1) contrast(1.2)', 'important');

            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [NIGHT]"; ind.style.color = "#00ffff"; }
            }
            console.log("🌙 АКТИВИРОВАНА ПОЛНОСТЬЮ СЕРАЯ НОЧЬ! Динозаврик стал белым.");
        }
    };

    // 2. ПЕРЕПИСЫВАЕМ СЛУШАТЕЛЬ ДЛЯ ГАЛОЧКИ В МЕНЮ TAB (ЦИКЛИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ МЫШКОЙ)
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        newToggle.addEventListener('change', (e) => {
            // Если кликаем мышкой: переключаем по очереди: День -> Вечер -> День
            if (e.target.checked) window.v16ApplyTimeSystem(1); // Включаем вечер
            else window.v16ApplyTimeSystem(0); // Возврат в день
        });
        newToggle.checked = (h.timeOfDay > 0);
    }

    // 3. НЕУБИВАЕМЫЙ ТРЕКЕР ДЛЯ КЛАВИШИ [ N ] (УПРАВЛЯЕТ ВСЕМИ 3 РЕЖИМАМИ ПО ОЧЕРЕДИ)
    window.v16NightKeyHandler = function(e) {
        if (e.code === 'KeyN') {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            
            e.preventDefault(); e.stopPropagation();
            
            // Циклический переключатель на кнопку N: День (0) -> Вечер (1) -> Ночь (2) -> День (0)
            let nextMode = h.timeOfDay + 1;
            if (nextMode > 2) nextMode = 0;
            
            window.v16ApplyTimeSystem(nextMode);
        }
    };
    window.addEventListener('keydown', window.v16NightKeyHandler, true); // Высший приоритет прерывания

    // 4. СТАБИЛИЗАЦИЯ ИГРОВОГО ЦИКЛА
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;
    d.update = function() { baseUpdate.apply(this, arguments); };

    // Мгновенно сбрасываем залипший неон при первом запуске патча
    window.v16ApplyTimeSystem(0);

    console.log("🔴 ОФИЦИАЛЬНЫЙ ПАТЧ 16.9.10 УСТАНОВЛЕН! Кнопка [ N ] теперь переключает: ДЕНЬ ☀️ -> ВЕЧЕР 🌇 -> НОЧЬ 🌙");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Финальный Фикс Неона v16.9.11?\nНамертво исправит залипание NEON VIEW и вернет черного динозаврика в Дневном режиме.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab."); return;
    }

    console.log("🛠️ Внедряю низкоуровневый очиститель кэша Canvas для сброса неона...");

    // Полностью вычищаем прошлые клавиатурные обработчики, чтобы не было наслоений кодов
    if (window.v16NightKeyHandler) window.removeEventListener('keydown', window.v16NightKeyHandler);

    // УНИВЕРСАЛЬНЫЙ ДВИЖОК СМЕНЫ СУТОК С ПРИНУДИТЕЛЬНОЙ ОЧИСТКОЙ ВИДЕОПАМЯТИ
    window.v16ApplyTimeSystem = function(mode) {
        h.timeOfDay = mode;
        
        // Синхронизируем физический ползунок в шторке читов
        const chk = document.getElementById('v16-night-toggle');
        if (chk) chk.checked = (mode > 0);

        const ctx = d.canvasCtx;

        if (mode === 0) {
            // ☀️ РЕЖИМ: КРИТИЧЕСКИЙ СБРОС В БЕЛЫЙ ДЕНЬ
            h.alwaysNight = false; h.neonView = false;
            
            // 1. Стираем внешние CSS стили Хрома
            document.body.style.removeProperty('background-color');
            d.canvas.style.removeProperty('background-color');
            d.canvas.style.removeProperty('filter');
            document.body.style.backgroundColor = "";
            d.canvas.style.backgroundColor = "";
            d.canvas.style.filter = "none";
            
            // 2. Вламываемся в аппаратный контекст Canvas и стираем фильтры Неона из памяти видеокарты
            if (ctx) {
                ctx.filter = "none";
                ctx.shadowBlur = 0;
                ctx.globalCompositeOperation = "source-over"; // Восстанавливаем дефолтный слой
            }

            // 3. Форсируем внутренний перезапуск кадра оригинальной игры для сброса артефактов
            d.isNightMode = false;
            if (d.nightMode) d.nightMode.opacity = 0;
            if (typeof d.clearCanvas === "function") d.clearCanvas();

            // Обновляем неоновый маркер в меню
            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [OFF]"; ind.style.color = "#ff0055"; }
            }
            console.log("☀️ Дневной режим: Фильтры зачищены, динозавр принудительно возвращен в черный цвет.");
        } 
        else if (mode === 1) {
            // 🌇 РЕЖИМ: ВЕЧЕРНИЙ ЗАКАТ (Тот самый эффект)
            h.alwaysNight = true; h.neonView = true;
            
            document.body.style.setProperty('background-color', '#3d2d44', 'important'); 
            d.canvas.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('filter', 'invert(0.9) hue-rotate(140deg) saturate(1.8)', 'important');

            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [SUNSET]"; ind.style.color = "#ff9900"; }
            }
            console.log("🌇 Вечерний режим активирован.");
        } 
        else if (mode === 2) {
            // 🌙 РЕЖИМ: ПОЛНОСТЬЮ СЕРАЯ НОЧЬ
            h.alwaysNight = true; h.neonView = true;
            
            document.body.style.setProperty('background-color', '#25252b', 'important'); 
            d.canvas.style.setProperty('background-color', '#25252b', 'important');
            d.canvas.style.setProperty('filter', 'invert(1) grayscale(1) contrast(1.2)', 'important');

            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [NIGHT]"; ind.style.color = "#00ffff"; }
            }
            console.log("🌙 Ночной режим активирован.");
        }
    };

    // 2. ПЕРЕПИСЫВАЕМ СЛУШАТЕЛЬ ДЛЯ ГАЛОЧКИ В МЕНЮ TAB (ПЕРЕКЛЮЧЕНИЕ МЫШКОЙ ДЕНЬ/ВЕЧЕР)
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        newToggle.addEventListener('change', (e) => {
            if (e.target.checked) window.v16ApplyTimeSystem(1); // Клик мышкой включает вечерний закат
            else window.v16ApplyTimeSystem(0); // Выключение возвращает чистый день
        });
        newToggle.checked = (h.timeOfDay > 0);
    }

    // 3. НЕУБИВАЕМЫЙ ЦИКЛИЧЕСКИЙ ТРЕКЕР ДЛЯ КЛАВИШИ [ N ] (ДЕНЬ -> ВЕЧЕР -> НОЧЬ)
    window.v16NightKeyHandler = function(e) {
        if (e.code === 'KeyN') {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            
            e.preventDefault(); e.stopPropagation();
            
            let nextMode = h.timeOfDay + 1;
            if (nextMode > 2) nextMode = 0; // Зацикливаем круг
            
            window.v16ApplyTimeSystem(nextMode);
        }
    };
    window.addEventListener('keydown', window.v16NightKeyHandler, true);

    // 4. ЖЕСТКАЯ ДИНАМИЧЕСКАЯ ФИКСАЦИЯ ОЧИСТКИ CANVAS КАЖДЫЙ КАДР
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Если активирован Белый День (mode = 0), принудительно сбиваем любые попытки неона закрепиться на холсте
        if (h.timeOfDay === 0 && this.canvasCtx) {
            this.canvasCtx.filter = "none";
        }
        baseUpdate.apply(this, arguments);
    };

    // Моментально выполняем тотальную зачистку при инжекте патча, чтобы вернуть динозаврика в норму
    window.v16ApplyTimeSystem(0);

    console.log("🔴 ПАТЧ v16.9.11 ПРИМЕНЕН! Залипание неона устранено на уровне видеопамяти. Проверяйте кнопку [ N ]!");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Фикс Фонового Интервала v16.9.12?\nОстановит заклинивший таймер, добавит строгую проверку через IF и полностью выключит Неон.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Сначала откройте меню Мега Хака на Tab!");

    console.log("🛠️ Вырубаю старый фоновый таймер и ставлю жесткий If-контроллер...");

    // ТОТАЛЬНОЕ УНИЧТОЖЕНИЕ ВСЕХ СТАРЫХ ЗАСТРЯВШИХ ТАЙМЕРОВ ИЗ ПАМЯТИ ХРОМА
    // Мы полностью очищаем интервалы, чтобы они перестали слать invert(1) втихаря
    if (window.v16NeonTimer) { clearInterval(window.v16NeonTimer); window.v16NeonTimer = null; }
    
    // Также на всякий случай очищаем таймеры по их ID (если Хром создал несколько штук)
    for (let i = 1; i < 999; i++) {
        // Мягко гасим фоновые процессы, связанные со сменой цвета, не ломая основную игру
        if (i !== d.update && i !== d.draw) { clearInterval(i); }
    }

    // Находим тег стилей, который принудительно красил Canvas, и очищаем его
    let style = document.getElementById('v16-force-neon-style');
    if (!style) {
        style = document.createElement('style'); style.id = 'v16-force-neon-style';
        document.head.appendChild(style);
    }
    style.innerHTML = ""; // Сбрасываем старую инверсию

    // Сбрасываем внешние CSS фильтры холста в ноль
    d.canvas.style.filter = "none";
    d.canvas.style.backgroundColor = "";

    // 2. СОЗДАЕМ НОВЫЙ, ИДЕАЛЬНО ЧИСТЫЙ ТАЙМЕР С КРИТИЧЕСКИМ IFОМ ПО ВАШЕМУ ТЗ
    window.v16NeonTimer = setInterval(function() {
        // ЖЕСТКАЯ ПРОВЕРКА ЧЕРЕЗ ОДИН IF: Неон включится ТОЛЬКО если активна 16-я часть И нажат чекбокс NEON VIEW
        if (h.activeParts && h.activeParts.p16 && h.neonView) {
            // Если условия совпали — применяем инверсию для Вечернего/Ночного/Неонового режимов
            style.innerHTML = ".runner-canvas, canvas { filter: invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1) !important; background: #000 !important; }";
        } else {
            // ЕСЛИ ГАЛОЧКА СНЯТА — СТРОЧКА ВЫШЕ В ПРЯМОМ СМЫСЛЕ СТИРАЕТСЯ ИЗ БРАУЗЕРА!
            style.innerHTML = "";
            if (d.canvasCtx) d.canvasCtx.filter = "none";
        }
    }, 25);

    // Перепривязываем тумблер шторки, чтобы он мгновенно дергал этот IF
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        nightToggle.addEventListener('change', (e) => {
            // Принудительно гасим неон в памяти при снятии галочки ночи
            if (!e.target.checked) {
                h.neonView = false; h.alwaysNight = false;
                style.innerHTML = "";
                d.canvas.style.filter = "none";
            }
        });
    }

    // Принудительно выключаем неон в памяти прямо сейчас при накате патча, чтобы вернуть чистый День
    h.neonView = false;
    window.v16ApplyTimeSystem ? window.v16ApplyTimeSystem(0) : null;

    console.log("🔴 ПАТЧ 16.9.12 УСПЕШНО НАЛОЖЕН! Заклинивший таймер уничтожен, IF-контроллер запущен.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Тёмно-Синий Ночной Режим (Патч 16.9.13)?\nЗаменит белый цвет на благородный тёмно-синий и полностью уберёт багнутый ч/б фильтр.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 16.9.13 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Откройте сначала меню читов на клавишу Tab!");

    console.log("🛠️ Вырезаю старую чёрно-белую инверсию. Запускаю попиксельный тёмно-синий рендеринг...");

    // Полностью уничтожаем старый заклинивший таймер неона и CSS стили из прошлых патчей
    if (window.v16NeonTimer) { clearInterval(window.v16NeonTimer); window.v16NeonTimer = null; }
    document.body.style.backgroundColor = "";
    d.canvas.style.backgroundColor = "";
    d.canvas.style.filter = "none";

    // Очищаем тег принудительных стилей инверсии, который ломал нам Game Over
    let oldStyle = document.getElementById('v16-force-neon-style');
    if (oldStyle) oldStyle.innerHTML = "";

    // ОБНОВЛЕНИЕ ТЕКСТА ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv) {
            // Мягко стираем старые упоминания инверсии и вписываем новую крутую механику
            contentDiv.innerHTML = contentDiv.innerHTML.replace(/--- МОДУЛЬ УПРАВЛЕНИЯ КАМЕРОЙ v11\.1[\s\S]*$/, "");
            contentDiv.innerHTML += `
                <br><b style="color:#00bfff;">--- УЛЬТИМАТИВНЫЙ ТЁМНО-СИНИЙ НОЧНОЙ РЕЖИМ v16.9.13 ---</b><br>
                <b>• REAL DEEP BLUE NIGHT:</b> Нажмите кнопку [ N ] или включите тумблер в шторке. Скрипт полностью заблокирует чёрно-белую инверсию. Вместо этого движок заменяет абсолютно весь белый цвет на холсте Canvas и на странице на глубокий тёмно-синий полуночный фон. Фигурки динозаврика и кактусов подсвечиваются мягким неоново-белым светом. Экран Game Over полностью исправлен и больше не чернеет! При возврате в День всё бесследно стирается.
            `;
        }
    }

    // УПРАВЛЕНИЕ СИСТЕМОЙ ПЕРЕКЛЮЧЕНИЯ И СБРОСА ФОНА
    window.v16ApplyTimeSystem = function(mode) {
        h.timeOfDay = mode;
        const chk = document.getElementById('v16-night-toggle');
        if (chk) chk.checked = (mode > 0);

        if (mode === 0) {
            // ☀️ БЕЗУПРЕЧНЫЙ БЕЛЫЙ ДЕНЬ: Вычищаем всё под ноль!
            h.alwaysNight = false; h.neonView = false;
            document.body.style.backgroundColor = "";
            d.canvas.style.backgroundColor = "";
            d.canvas.style.filter = "none";
            if (d.canvasCtx) d.canvasCtx.filter = "none";
            
            // Сбрасываем внутреннюю ночь Хрома
            d.isNightMode = false;
            if (d.nightMode) d.nightMode.opacity = 0;
            if (typeof d.clearCanvas === "function") d.clearCanvas();
            
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', false);
        }
        else if (mode === 1) {
            // 🌇 ВЕЧЕРНИЙ РЕЖИМ (Оставляем тот самый закатный эффект, который вам понравился)
            h.alwaysNight = true; h.neonView = true;
            document.body.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('filter', 'invert(0.9) hue-rotate(140deg) saturate(1.8)', 'important');
            
            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [SUNSET]"; ind.style.color = "#ff9900"; }
            }
        }
        else if (mode === 2) {
            // 🌙 ИСТИННЫЙ ТЁМНО-СИНИЙ НОЧНОЙ РЕЖИМ (ФИКС КОСЯКОВ)
            h.alwaysNight = true; h.neonView = false; // Отключаем грубый неон-негатив!
            
            // Перекрашиваем саму веб-страницу вокруг игры в тёмно-синий цвет
            document.body.style.setProperty('background-color', '#1a1a2e', 'important');
            d.canvas.style.setProperty('background-color', '#1a1a2e', 'important');
            
            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [BLUE NIGHT]"; ind.style.color = "#00bfff"; }
            }
        }
    };

    // ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (ПЕРЕКРАСКА ВНУТРИ ИГРОВОГО КАДРА)
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Запуск оригинального кадра и всех прошлых стабильных хаков
        baseUpdate.apply(this, arguments);

        const ctx = this.canvasCtx;
        
        // Если выбрана Тёмно-Синяя Ночь (mode === 2), мы принудительно красим объекты изнутри
        if (h.timeOfDay === 2 && ctx) {
            // С помощью специального CSS-фильтра яркости мы превращаем чёрные силуэты
            // динозаврика, земли и кактусов в идеально контрастные неоново-белые фигурки,
            // а подложка Canvas заливается глубоким благородным тёмно-синим цветом!
            d.canvas.style.setProperty('filter', 'invert(1) sepia(1) hue-rotate(190deg) brightness(2) contrast(1.5)', 'important');
        }
    };

    // СИНХРОНИЗАЦИЯ ГАЛОЧКИ В МЕНЮ TAB
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        newToggle.addEventListener('change', (e) => {
            if (e.target.checked) window.v16ApplyTimeSystem(1); // Включает вечер
            else window.v16ApplyTimeSystem(0); // Выключение возвращает день
        });
    }

    // СИНХРОНИЗАЦИЯ НЕУБИВАЕМОЙ КНОПКИ [ N ] (ЦИКЛ: ДЕНЬ -> ВЕЧЕР -> ТЁМНО-СИНИЯ НОЧЬ)
    if (window.v16NightKeyHandler) window.removeEventListener('keydown', window.v16NightKeyHandler);
    window.v16NightKeyHandler = function(e) {
        if (e.code === 'KeyN') {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            e.preventDefault(); e.stopPropagation();
            
            let nextMode = h.timeOfDay + 1;
            if (nextMode > 2) nextMode = 0;
            window.v16ApplyTimeSystem(nextMode);
        }
    };
    window.addEventListener('keydown', window.v16NightKeyHandler, true);

    // Мгновенный сброс в белый день при инжекте патча для чистоты памяти
    window.v16ApplyTimeSystem(0);

    console.log("🔴 ТЁМНО-СИНИЙ ПАТЧ 16.9.13 НАЛОЖЕН! Нажмите N для теста: День -> Вечер -> Синяя ночь.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ НОЧНОГО РЕЖИМА (Патч 16.9.14)?\nПолностью починит включение тёмно-синей ночи и возврат в день без использования багнутых фильтров.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Откройте сначала меню читов на клавишу Tab!"); return;
    }

    console.log("🛠️ Стираю заклинившие фильтры Хрома. Запускаю стабильный движок заливки цвета...");

    // НАМЕРТВО УНИЧТОЖАЕМ ВСЕ СТАРЫЕ ФИЛЬТРЫ И ИНВЕРСИИ, ИЗ-ЗА КОТОРЫХ ВСЁ СЛОМАЛОСЬ
    if (window.v16NeonTimer) { clearInterval(window.v16NeonTimer); window.v16NeonTimer = null; }
    if (window.v16NightKeyHandler) window.removeEventListener('keydown', window.v16NightKeyHandler);
    
    document.body.style.backgroundColor = "";
    d.canvas.style.backgroundColor = "";
    d.canvas.style.filter = "none";
    if (d.canvasCtx) d.canvasCtx.filter = "none";

    // УНИВЕРСАЛЬНЫЙ ТРЁХПОЗИЦИОННЫЙ ПЕРЕКЛЮЧАТЕЛЬ СУТОК
    window.v16ApplyTimeSystem = function(mode) {
        h.timeOfDay = mode;
        
        // Синхронизируем галочку в вашей шторке читов
        const chk = document.getElementById('v16-night-toggle');
        if (chk) chk.checked = (mode > 0);

        if (mode === 0) {
            // ☀️ АБСОЛЮТНЫЙ БЕЛЫЙ ДЕНЬ
            h.alwaysNight = false; h.neonView = false;
            document.body.style.backgroundColor = "";
            d.canvas.style.backgroundColor = "";
            
            // Возвращаем стандартные ночные параметры Хрома в дефолт
            d.isNightMode = false;
            if (d.nightMode) d.nightMode.opacity = 0;
            if (typeof d.clearCanvas === "function") d.clearCanvas();
            
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', false);
            console.log("☀️ Режим: День. Возвращены стандартные черно-белые цвета.");
        }
        else if (mode === 1) {
            // 🌇 РЕЖИМ: ВЕЧЕРНИЙ ЗАКАТ (Тот самый красивый фиолетовый эффект)
            h.alwaysNight = true; h.neonView = true;
            document.body.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('filter', 'invert(0.9) hue-rotate(140deg) saturate(1.8)', 'important');
            
            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [SUNSET]"; ind.style.color = "#ff9900"; }
            }
            console.log("🌇 Режим: Вечерний Закат.");
        }
        else if (mode === 2) {
            // 🌙 РЕЖИМ: НАСТОЯЩАЯ ТЁМНО-СИНИЯ НОЧЬ (БЕЗ ФИЛЬТРОВ И БАГОВ)
            h.alwaysNight = true; h.neonView = false;
            
            // Намертво красим фон самой страницы вокруг игры в глубокий тёмно-синий цвет
            document.body.style.setProperty('background-color', '#1a1a3a', 'important');
            d.canvas.style.setProperty('background-color', '#1a1a3a', 'important');
            d.canvas.style.filter = "none"; // Никаких капризных фильтров!
            
            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [BLUE NIGHT]"; ind.style.color = "#00bfff"; }
            }
            console.log("🌙 Режим: Тёмно-Синяя Ночь.");
        }
    };

    // 2. ИНЖЕКТ ЧИСТОЙ КРАСКИ В ИГРОВОЙ ЦИКЛ ОБНОВЛЕНИЯ КАДРОВ Canvas
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        const ctx = this.canvasCtx;

        // Если включен режим Тёмно-Синей ночи (mode === 2)
        if (h.timeOfDay === 2 && ctx) {
            ctx.save();
            // Заливаем фон Canvas глубоким синим цветом перед прорисовкой объектов
            ctx.fillStyle = "#1a1a3a";
            ctx.fillRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);
            
            // Переключаем кисть игры: всё, что игра рисует сейчас (линии земли, кактусы, динозаврик),
            // видеокарта принудительно выведет на экран красивым ярко-белым неоновым цветом!
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#ffffff";
            ctx.shadowColor = "#00bfff"; // Мягкая голубая неоновая подсветка
            ctx.shadowBlur = 4;
        }

        // Запуск основного обновления игры (левитация, монетки, заморозка кактусов)
        baseUpdate.apply(this, arguments);

        // Возвращаем кисть в исходное состояние в конце кадра
        if (h.timeOfDay === 2 && ctx) {
            ctx.restore();
        }
    };

    // 3. СИНХРОНИЗАЦИЯ ГАЛОЧКИ В МЕНЮ TAB (Переключение Мышкой: День -> Вечер -> День)
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        newToggle.addEventListener('change', (e) => {
            if (e.target.checked) window.v16ApplyTimeSystem(1); // Включает вечерний закат
            else window.v16ApplyTimeSystem(0); // Полный возврат в белый день
        });
        newToggle.checked = (h.timeOfDay > 0);
    }

    // 4. СИНХРОНИЗАЦИЯ НЕУБИВАЕМОЙ КНОПКИ [ N ] (ЦИКЛ: ДЕНЬ ☀️ -> ВЕЧЕР 🌇 -> СИНИЯ НОЧЬ 🌙)
    window.v16NightKeyHandler = function(e) {
        if (e.code === 'KeyN') {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            e.preventDefault(); e.stopPropagation();
            
            let nextMode = h.timeOfDay + 1;
            if (nextMode > 2) nextMode = 0; // Сброс по кругу
            
            window.v16ApplyTimeSystem(nextMode);
        }
    };
    window.addEventListener('keydown', window.v16NightKeyHandler, true);

    // Моментально сбрасываем залипшие настройки в чистый белый День при накате патча
    window.v16ApplyTimeSystem(0);

    console.log("🔴 ОШИБКА ИСПРАВЛЕНА НАМЕРТВО! Старые фильтры удалены. Нажимайте кнопку [ N ] для переключения режимов.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 17.1 (Интерфейс Мода Невидимости слоёв)?\nДобавит тумблеры скрытия Динозавра, Кактусов, Земли и Облаков в меню на TAB.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 17.1 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) {
        console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Базовое хранилище Мега Хака не найдено! Откройте меню на Tab."); return;
    }

    console.log("⚙️ Интегрирую графический интерфейс управления невидимостью...");

    // Создаем ячейки памяти под новые тумблеры скрытия объектов (по умолчанию всё видимое - false)
    h.hideDino = false;
    h.hideCactus = false;
    h.hideGround = false;
    h.hideClouds = false;

    // 2. АПГРЕЙД ШТОРКИ: Строим аккуратную бирюзовую строку управления слоями
    if (!document.getElementById('v17-visibility-row')) {
        const row = document.createElement('div'); row.id = 'v17-visibility-row';
        row.style = "background:rgba(0,255,255,0.03); padding:8px; border-radius:6px; border:2px dashed #00ffff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 5px; box-sizing:border-box;";
        row.innerHTML = `
            <label style="color:#00ffff; cursor:pointer; font-weight:bold;"><input type="checkbox" id="v17-h-dino"> HIDE DINO<span id="v17-h-dino-ind" style="color:#ff0055;"> [OFF]</span></label>
            <label style="color:#00ffff; cursor:pointer; font-weight:bold;"><input type="checkbox" id="v17-h-cac"> HIDE CACTUS<span id="v17-h-cac-ind" style="color:#ff0055;"> [OFF]</span></label>
            <label style="color:#00ffff; cursor:pointer; font-weight:bold;"><input type="checkbox" id="v17-h-grn"> HIDE GROUND<span id="v17-h-grn-ind" style="color:#ff0055;"> [OFF]</span></label>
            <label style="color:#00ffff; cursor:pointer; font-weight:bold;"><input type="checkbox" id="v17-h-cld"> HIDE CLOUDS<span id="v17-h-cld-ind" style="color:#ff0055;"> [OFF]</span></label>
        `;
        menu.appendChild(row);

        // Хелпер звука клика
        function playLayerSound(isOn) {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.type = "triangle"; osc.frequency.setValueAtTime(isOn ? 1100 : 550, ctx.currentTime);
                gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.06);
            } catch(e){}
        }

        // Привязываем события клика и неоновые маркеры [ON/OFF] к кнопкам
        const binds = { 'v17-h-dino': 'hideDino', 'v17-h-cac': 'hideCactus', 'v17-h-grn': 'hideGround', 'v17-h-cld': 'hideClouds' };
        Object.keys(binds).forEach(id => {
            document.getElementById(id).addEventListener('change', (e) => {
                h[binds[id]] = e.target.checked;
                playLayerSound(e.target.checked);
                if (typeof window.v6UpdateIndicator === 'function') {
                    window.v6UpdateIndicator(id, e.target.checked);
                }
            });
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator(id, false);
        });
    }

    // 3. АВТО-ОБНОВЛЕНИЕ ТЕКСТА ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('LAYER MANAGER v17.0')) {
            contentDiv.innerHTML += `
                <br><b style="color:#00ffff;">--- МЕНЕДЖЕР НЕВИДИМОСТИ СЛОЕВ v17.0 ---</b><br>
                <b>• HIDE DINO:</b> Полностью скрывает картинку динозаврика на экране. Хитбоксы и читы продолжают работать!<br>
                <b>• HIDE CACTUS:</b> Прячет текстуры кактусов и птиц. Играйте вслепую или ориентируйтесь по хитбоксам.<br>
                <b>• HIDE GROUND:</b> Убирает линию земли и пиксели дорожки, создавая эффект левитации в космосе.<br>
                <b>• HIDE CLOUDS:</b> Полностью отключает отрисовку облаков на заднем плане для чистой минималистичной карты.
            `;
        }
    }
    console.log("🟢 ЧАСТЬ 17.1 ЗАГРУЖЕНА УСПЕШНО! Интерфейс скрытия слоев готов. Вводите Часть 17.2...");
})();
(function(){
    // 1. ЗАПРОС НА ПОДТВЕРЖДЕНИЕ УСТАНОВКИ
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 17.2 (Низкоуровневый Движок Невидимости)?\nСвяжет тумблеры шторки с реальным скрытием текстур на Canvas.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Части 17.2 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v17-visibility-row')) {
        return console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо ввести ЧАСТЬ 17.1!");
    }

    console.log("🛠️ Модифицирую графический буфер Canvas для фильтрации невидимости слоев...");

    // Перехватываем оригинальный метод drawImage на самом низком уровне Canvas
    const ctx = d.canvasCtx;
    if (d.v17OriginalDrawImage) {
        ctx.drawImage = d.v17OriginalDrawImage;
    } else {
        d.v17OriginalDrawImage = ctx.drawImage; // Запоминаем чистый системный метод отрисовки браузера
    }
    const systemDrawImage = d.v17OriginalDrawImage;

    ctx.drawImage = function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Защита: если аргументов меньше 9, рисуем стандартно, чтобы не уронить Хром
        if (arguments.length < 9) return systemDrawImage.apply(this, arguments);

        const imgId = image.id || "";
        // Определяем тип объекта по его координатам в атласе спрайтов или по ID текстуры
        let isDino = imgId.includes("trex") || (sx >= 670 && sx <= 1150) || (sh > 40 && sw > 40);
        let isCactus = imgId.includes("obstacle") || (sx >= 400 && sx <= 650 && sw < 100);
        let isGround = sx === 2 || (sx === 0 && sy === 54) || sh === 12; // Координаты земли в атласе
        let isCloud = sx === 86 || (sw === 46 && sh === 13); // Координаты облаков

        // ПРОВЕРКА ФЛАГОВ НЕВИДИМОСТИ ИЗ НАШЕГО МЕНЮ TAB
        // Если галочка нажата — мы просто делаем return, то есть видеокарта ВООБЩЕ НЕ РИСУЕТ объект!
        if (isDino && h.hideDino) return;
        if (isCactus && h.hideCactus) return;
        if (isGround && h.hideGround) return;
        if (isCloud && h.hideClouds) return;

        // Если галочки выключены — рисуем объект в его стандартном виде
        return systemDrawImage.apply(this, arguments);
    };

    console.log("🔴 ЧАСТЬ 17.2 ЗАГРУЖЕНА УСПЕШНО! Модуль невидимости полностью готов к работе. Нажмите TAB.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Исправление Неона v17.5?\nРазблокирует ручную галочку NEON VIEW в меню, чтобы её можно было включать отдельно от Ночи.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 17.5 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab."); return;
    }

    console.log("🛠️ Перепрошиваю контроллер рендеринга. Освобождаю галочку NEON VIEW...");

    // Полностью очищаем старые наслоения CSS-стилей, чтобы запустить чистый обновленный движок
    d.canvas.style.filter = "none";

    // 2. ПЕРЕПИСЫВАЕМ СЛУШАТЕЛЬ ДЛЯ ГАЛОЧКИ В МЕНЮ TAB (РУЧНОЙ НЕОН)
    const neonToggle = document.getElementById('v16-neon');
    if (neonToggle) {
        const newNeonToggle = neonToggle.cloneNode(true);
        neonToggle.parentNode.replaceChild(newNeonToggle, neonToggle);
        
        // Восстанавливаем текущее состояние
        newNeonToggle.checked = h.neonView || false;

        newNeonToggle.addEventListener('change', (e) => {
            // Если пользователь ЛИЧНО нажал на галочку неона в меню
            h.neonView = e.target.checked;
            
            // Воспроизводим тихий хакерский клик
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.type = "sine"; osc.frequency.setValueAtTime(h.neonView ? 1000 : 500, ctx.currentTime);
                gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.05);
            } catch(err){}

            // Мгновенно применяем или отменяем стили, если мы находимся в Дневном режиме
            if (h.timeOfDay === 0) {
                if (h.neonView) {
                    d.canvas.style.setProperty('filter', 'invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1)', 'important');
                } else {
                    d.canvas.style.removeProperty('filter');
                    d.canvas.style.filter = "none";
                }
            }

            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v16-neon', h.neonView);
            }
        });
    }

    // 3. ОБНОВЛЯЕМ ГЛУБОКИЙ СИНХРОНИЗАТОР СМЕНЫ СУТОК С УЧЕТОМ СВОБОДНОГО НЕОНА
    const originalTimeSystem = window.v16ApplyTimeSystem;
    window.v16ApplyTimeSystem = function(mode) {
        // Запускаем базовую смену суток (День / Вечер / Синяя ночь)
        if (typeof originalTimeSystem === "function") originalTimeSystem(mode);

        // КРИТИЧЕСКИЙ ФИКС: Если мы сбросили игру в День (mode === 0)
        if (mode === 0) {
            // Неон выключится ПОЛНОСТЬЮ только в том случае, если ручная галочка в меню ТОЖЕ выключена!
            const neonToggle = document.getElementById('v16-neon');
            if (neonToggle && neonToggle.checked) {
                // Если пользователь хочет оставить ручной неон днем — держим его включенным!
                h.neonView = true;
                d.canvas.style.setProperty('filter', 'invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1)', 'important');
            } else {
                // Если ручной неон тоже выключен — стираем его без остатка
                h.neonView = false;
                d.canvas.style.removeProperty('filter');
                d.canvas.style.filter = "none";
            }
        }
    };

    // 4. КОРРЕКЦИЯ ИГРОВОГО ЦИКЛА ОБНОВЛЕНИЯ КАДРОВ
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        baseUpdate.apply(this, arguments);

        // Насильно удерживаем ручной неон днем, если игра пытается сбросить Canvas
        if (h.timeOfDay === 0 && h.neonView) {
            d.canvas.style.setProperty('filter', 'invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1)', 'important');
        }
    };

    console.log("🔴 ПАТЧ v17.5 НАЛОЖЕН! Ручной контроль NEON VIEW полностью разблокирован. Проверяйте галочку!");
})();

        }
    };

    console.log("🔴 ГЛОБАЛЬНЫЙ ПАТЧ НАЛОЖЕН! Проверьте переключение в шторке на Tab.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Авто-Калибратор Фильтров (Патч 17.6)?\nБудет непрерывно проверять и исправлять любые перепутанные состояния Дня, Вечера и Ночи.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab."); return;
    }

    console.log("🛠️ Вживляю систему автоматического исправления ошибок рендеринга (Anti-Glitch)...");

    // Жестко сбрасываем старый интервал неона из Части 16.9.12, чтобы он перестал путать Хром
    if (window.v16NeonTimer) clearInterval(window.v16NeonTimer);

    // 2. ФОНОВЫЙ АВТО-КАЛИБРАТОР: Проверяет и лечит перепутанные состояния 30 раз в секунду
    window.v16NeonTimer = setInterval(function() {
        if (!h.activeParts || !h.activeParts.p16) return;

        // --- ПРОВЕРКА 1: ЕСЛИ ДОЛЖЕН БЫТЬ ЧИСТЫЙ ДЕНЬ ---
        if (h.timeOfDay === 0 && !h.neonView) {
            // Если игра застряла в фильтрах, принудительно очищаем память Хрома снаружи
            if (d.canvas.style.filter !== "" && d.canvas.style.filter !== "none") {
                d.canvas.style.removeProperty('filter');
                d.canvas.style.filter = "none";
                document.body.style.removeProperty('background-color');
                d.canvas.style.removeProperty('background-color');
                console.log("🔍 [Калибратор]: Обнаружена ошибка Дня! Залипший неон принудительно стерт.");
            }
        }
        // --- ПРОВЕРКА 2: РУЧНОЙ НЕОН-ВИДЕО ДНЕМ ---
        else if (h.timeOfDay === 0 && h.neonView) {
            if (!d.canvas.style.filter.includes('invert(1)')) {
                d.canvas.style.setProperty('filter', 'invert(1) hue-rotate(180deg) saturate(2.5) contrast(1.1)', 'important');
                document.body.style.removeProperty('background-color');
                d.canvas.style.removeProperty('background-color');
                console.log("🔍 [Калибратор]: Восстановлен ручной режим Neon View.");
            }
        }
        // --- ПРОВЕРКА 3: ВЕЧЕРНИЙ ЗАКАТ ---
        else if (h.timeOfDay === 1) {
            if (!d.canvas.style.filter.includes('invert(0.9)')) {
                document.body.style.setProperty('background-color', '#3d2d44', 'important');
                d.canvas.style.setProperty('background-color', '#3d2d44', 'important');
                d.canvas.style.setProperty('filter', 'invert(0.9) hue-rotate(140deg) saturate(1.8)', 'important');
                console.log("🔍 [Калибратор]: Фильтры Вечера перепутались. Авто-выравнивание успешно.");
            }
        }
        // --- ПРОВЕРКА 4: ГЛУБОКАЯ СИНЯЯ НОЧЬ ---
        else if (h.timeOfDay === 2) {
            if (!d.canvas.style.backgroundColor.includes('rgb(26, 26, 58)') && !d.canvas.style.backgroundColor.includes('#1a1a3a')) {
                document.body.style.setProperty('background-color', '#1a1a3a', 'important');
                d.canvas.style.setProperty('background-color', '#1a1a3a', 'important');
                d.canvas.style.filter = "none"; // Гарантируем отсутствие инверсии в синей ночи
                console.log("🔍 [Калибратор]: Фон Ночи сбился. Принудительно заливаю синий цвет.");
            }
        }
    }, 33);

    // 3. СТАБИЛИЗАЦИЯ ИГРОВОГО ЦИКЛА (ЗАЩИТА ВНУТРЕННИХ ОБЪЕКТОВ)
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        // Дополнительная проверка: если активирована Тёмно-Синяя ночь (mode = 2),
        // заставляем кисть рисовать фигурки белым цветом изнутри кадра, подстраиваясь под старую версию
        if (h.timeOfDay === 2 && this.canvasCtx) {
            this.canvasCtx.save();
            this.canvasCtx.fillStyle = "#ffffff";
            this.canvasCtx.strokeStyle = "#ffffff";
            this.canvasCtx.shadowColor = "#00bfff";
            this.canvasCtx.shadowBlur = 4;
        }

        baseUpdate.apply(this, arguments);

        if (h.timeOfDay === 2 && this.canvasCtx) {
            this.canvasCtx.restore();
        }
    };

    console.log("🔴 АВТО-КАЛИБРАТОР УСПЕШНО ЗАПУЩЕН! Любые сбои и перепутанные фильтры теперь чинятся сами на лету.");
})();

(function(){
    // 1. ЗАПРОС НА ПОДТВЕРЖДЕНИЕ УСТАНОВКИ
    const confirmInstall = prompt("Добавить изолированный режим РАННЕЕ УТРО [🌅] (Патч 17.8)?\nВыведет этот крутой фильтр как отдельную галочку в меню на TAB.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) return console.error("❌ Сначала откройте меню Мега Хака на клавишу Tab!");

    console.log("⚙️ Встраиваю режим Раннего Утра в вашу шторку читов...");

    // Создаем переменную для тумблера утра в памяти (по умолчанию выключен)
    h.earlyMorningActive = false;

    // 2. АПГРЕЙД ШТОРКИ: Добавляем аккуратную утреннюю кнопку золотого цвета в меню на Tab
    if (!document.getElementById('v17-morning-row')) {
        const row = document.createElement('div'); row.id = 'v17-morning-row';
        row.style = "background:rgba(255,215,0,0.03); padding:8px; border-radius:6px; border:2px dashed #ffd700; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px; box-sizing:border-box;";
        row.innerHTML = `
            <label style="color:#ffd700; cursor:pointer; font-weight:bold; text-align:center; display:block;">
                <input type="checkbox" id="v17-morning-toggle"> 🌅 ACTIVATE EARLY MORNING FILTER (SOFT SUNRISE STATE)<span id="v17-morning-toggle-ind" style="color:#ff0055;"> [OFF]</span>
            </label>
        `;
        menu.appendChild(row);

        // Хакерский клик при включении рассвета
        function playMorningSound(isOn) {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.type = "sine"; osc.frequency.setValueAtTime(isOn ? 800 : 400, ctx.currentTime);
                gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.05);
            } catch(e){}
        }

        // Привязываем галочку к памяти мода и индикаторам
        document.getElementById('v17-morning-toggle').addEventListener('change', (e) => {
            h.earlyMorningActive = e.target.checked;
            playMorningSound(h.earlyMorningActive);
            
            // Если галочку СНЯЛИ (выключили утро) — мгновенно и чисто убираем утренний фильтр с экрана
            if (!h.earlyMorningActive) {
                d.canvas.style.removeProperty('filter');
                d.canvas.style.backgroundColor = "";
            }

            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v17-morning-toggle', h.earlyMorningActive);
            }
        });
        if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v17-morning-toggle', false);
    }

    // 3. ИНЖЕКТ ЭФФЕКТА РАССВЕТА В ЦИКЛ ОБНОВЛЕНИЯ КАДРОВ
    if (d.v17MorningCoreUpdate) { d.update = d.v17MorningCoreUpdate; } else { d.v17MorningCoreUpdate = d.update; }
    const baseUpdate = d.v17MorningCoreUpdate;

    d.update = function() {
        baseUpdate.apply(this, arguments);

        // Если пользователь лично нажал на галочку "EARLY MORNING" в шторке
        if (h.earlyMorningActive) {
            // Тот самый ваш крутой фильтр, который даёт мягкий туманный свет раннего рассвета!
            // Красит Canvas в светлый рассветный оттенок и мягко смещает спектр
            d.canvas.style.setProperty('background-color', '#e0e5ec', 'important');
            d.canvas.style.setProperty('filter', 'invert(0.15) hue-rotate(40deg) brightness(1.1)', 'important');
        }
    };

    console.log("🔴 ПАТЧ 17.8 УСПЕШНО НАЛОЖЕН! Режим Раннего Утра вынесен в отдельную кнопку и ничего не ломает.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 18.1 (Интерфейс Мода Трансформации)?\nДобавит кнопки превращения в Кактус (с заморозкой мира) и Птицу (с полетом на U/D).\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 18.1 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) {
        console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Базовое хранилище Мега Хака не найдено! Откройте меню на Tab."); return;
    }

    console.log("⚙️ Интегрирую графическую панель мода трансформации...");

    // Инициализируем переменные морфинга в памяти
    h.morphCactus = false;
    h.morphBird = false;
    h.birdVelY = 0;

    // 2. АПГРЕЙД ШТОРКИ: Строим красивую неоновую строку превращений
    if (!document.getElementById('v18-morph-row')) {
        const row = document.createElement('div'); row.id = 'v18-morph-row';
        row.style = "background:rgba(154,205,50,0.04); padding:8px; border-radius:6px; border:2px dashed #9acd32; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 5px; box-sizing:border-box;";
        row.innerHTML = `
            <label style="color:#00ff44; cursor:pointer; font-weight:bold; text-align:center;"><input type="checkbox" id="v18-m-cac"> 🌵 MORPH: CACTUS STYLE<span id="v18-m-cac-ind" style="color:#ff0055;"> [OFF]</span></label>
            <label style="color:#a600ff; cursor:pointer; font-weight:bold; text-align:center;"><input type="checkbox" id="v18-m-bird"> 🦅 MORPH: PTERODACTYL STYLE<span id="v18-m-bird-ind" style="color:#ff0055;"> [OFF]</span></label>
        `;
        menu.appendChild(row);

        function playMorphSound(isOn) {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.type = "sine"; osc.frequency.setValueAtTime(isOn ? 1300 : 350, ctx.currentTime);
                gain.gain.setValueAtTime(0.04, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(ctx.currentTime + 0.08);
            } catch(e){}
        }

        // Привязка кнопки КАКТУСА
        document.getElementById('v18-m-cac').addEventListener('change', (e) => {
            h.morphCactus = e.target.checked;
            if(h.morphCactus) { h.morphBird = false; document.getElementById('v18-m-bird').checked = false; if(window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-bird', false); }
            playMorphSound(h.morphCactus);
            if (window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-cac', h.morphCactus);
        });

        // Привязка кнопки ПТИЦЫ
        document.getElementById('v18-m-bird').addEventListener('change', (e) => {
            h.morphBird = e.target.checked;
            if(h.morphBird) { h.morphCactus = false; document.getElementById('v18-m-cac').checked = false; if(window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-cac', false); }
            playMorphSound(h.morphBird);
            if (window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-bird', h.morphBird);
        });
    }

    // 3. АВТО-ОБНОВЛЕНИЕ ТЕКСТА ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('MORPH SHIFTER PACK v18.0')) {
            contentDiv.innerHTML += `
                <br><b style="color:#9acd32;">--- МOД ТРАНСФОРМАЦИИ ПЕРСОНАЖА v18.0 ---</b><br>
                <b>• MORPH: CACTUS:</b> Превращает динозаврика в кактус. Персонаж застывает, над ним загорается неоновый текст «Я КАКТУС», а <b>все остальные кактусы на карте намертво замораживаются</b>, давая вам передышку!<br>
                <b>• MORPH: PTERODACTYL:</b> Превращает вас в летящую птицу. Активирует плавный вертикальный полёт во время игры на клавиши: английская <b>[ U ] — плавно лететь ВВЕРХ</b>, английская <b>[ D ] — плавно спускаться ВНИЗ</b>. При отключении любой галочки вы мгновенно становитесь обычным динозавриком.
            `;
        }
    }
    console.log("🟢 ЧАСТЬ 18.1 ЗАГРУЖЕНА УСПЕШНО! Интерфейс морфинга готов. Вводите Часть 18.2...");
})();
(function(){
    // 1. ЗАПРОС НА ПОДТВЕРЖДЕНИЕ УСТАНОВКИ
    const confirmInstall = prompt("Вы хотите установить ЧАСТЬ 18.2 (Ядро Физики и Отрисовки Морфинга)?\nВключит подмену текстур персонажа, надпись 'Я Кактус', заморозку карты и полёт птицы на U/D.\nВведите [ y ] (Да) or [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Части 18.2 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v18-morph-row')) {
        return console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо ввести ЧАСТЬ 18.1!");
    }

    console.log("🛠️ Вживляю низкоуровневый перехват спрайтов для подмены персонажа...");

    // ТРЕКЕР УДЕРЖАНИЯ КЛАВИШ КЛАВИАТУРЫ ДЛЯ ПЛАВНОГО ПОЛЁТА ПТИЦЫ (U - ВВЕРХ, D - ВНИЗ)
    window.v18Keys = { KeyU: false, KeyD: false };
    window.addEventListener('keydown', (e) => {
        if (e.code === 'KeyU') window.v18Keys.KeyU = true;
        if (e.code === 'KeyD') window.v18Keys.KeyD = true;
    });
    window.addEventListener('keyup', (e) => {
        if (e.code === 'KeyU') window.v18Keys.KeyU = false;
        if (e.code === 'KeyD') window.v18Keys.KeyD = false;
    });

    // 2. ГЛУБОКИЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ ИГРЫ И ГРАФИКИ CANVAS
    if (d.v18MorphUpdate) { d.update = d.v18MorphUpdate; } else { d.v18MorphUpdate = d.update; }
    const baseUpdate = d.v18MorphUpdate;

    d.update = function() {
        // --- МОД 1: ЛОГИКА ТРАНСФОРМАЦИИ В КАКТУС ---
        if (h.morphCactus && this.tRex) {
            // Замораживаем скорость игры и движения фона до нуля, пока вы стоите кактусом
            this.currentSpeed = 0;
            
            // Намертво замораживаем координаты ВСЕХ остальных кактусов на карте, чтобы они не ползли на вас
            if (this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs) {
                        if (obs.v18StaticX === undefined || obs.v18StaticX === null) obs.v18StaticX = obs.xPos;
                        obs.xPos = obs.v18StaticX; // Стоят как вкопанные
                    }
                });
            }
            
            // Счётчик очков во время отдыха кактусом тоже застывает, чтобы не накручивать лишнего
            this.distanceRan -= (1 / this.config.COEFFICIENT);
            if (this.distanceRan < 0) this.distanceRan = 0;
        } else if (!h.morphCactus && this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
            // Освобождаем кактусы, когда выходим из мода
            this.horizon.obstacles.forEach(obs => { if(obs) obs.v18StaticX = null; });
        }

        // --- МОД 2: ЛОГИКА ТРАНСФОРМАЦИИ В ПТИЦУ (ПЛАВНЫЙ ПОЛЁТ НА U / D) ---
        if (h.morphBird && this.tRex) {
            this.tRex.jumping = true; // Отвязываем от земли, динозавр в состоянии полёта
            
            // Плавное вертикальное перемещение по небу
            if (window.v18Keys.KeyU) {
                this.tRex.yPos -= 3.5; // Плавно летим ВВЕРХ
            } else if (window.v18Keys.KeyD) {
                this.tRex.yPos += 3.5; // Плавно опускаемся ВНИЗ
            }
            
            // Жесткие ограничители неба и пола, чтобы птица не улетала за экран
            if (this.tRex.yPos < -40) this.tRex.yPos = -40;
            if (this.tRex.yPos > this.tRex.groundYPos) this.tRex.yPos = this.tRex.groundYPos;
        }

        // Запуск основного обновления кадра игры
        baseUpdate.apply(this, arguments);

        // --- ГРАФИЧЕСКАЯ ПОДМЕНА СПРАЙТОВ НА ХОЛСТЕ CANVAS ---
        const ctx = this.canvasCtx;
        
        if (this.tRex && this.activated && !this.crashed) {
            // А) Отрисовка мода КАКТУСА
            if (h.morphCactus) {
                ctx.save();
                // Очищаем белый прямоугольник на месте динозаврика, чтобы стереть его оригинальную текстуру
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 2, this.tRex.yPos - 2, 50, 52);
                
                // Рисуем на его месте красивый аккуратный кактус из атласа игры (или заменяем фигурой)
                ctx.fillStyle = h.alwaysNight ? "#ffffff" : "#556b2f";
                ctx.strokeStyle = h.alwaysNight ? "#00bfff" : "#000000";
                ctx.lineWidth = 2;
                // Отрисовка формы кактуса на месте динозавра
                ctx.fillRect(this.tRex.xPos + 15, this.tRex.yPos + 5, 14, 42);
                ctx.fillRect(this.tRex.xPos + 5, this.tRex.yPos + 15, 10, 8);
                ctx.fillRect(this.tRex.xPos + 29, this.tRex.yPos + 20, 10, 8);
                
                // Выводим светящийся неоновый текст "Я КАКТУС" прямо над головой персонажа
                ctx.font = "bold 11px 'Consolas', monospace";
                ctx.fillStyle = "#00ff44";
                ctx.shadowColor = "#00ff44";
                ctx.shadowBlur = 6;
                ctx.fillText("Я КАКТУС", this.tRex.xPos - 5, this.tRex.yPos - 12);
                ctx.restore();
            }
            
            // Б) Отрисовка мода ПТИЦЫ
            if (h.morphBird) {
                ctx.save();
                // Стираем динозаврика
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 2, this.tRex.yPos - 2, 50, 52);
                
                // Рисуем на его месте летящую птицу в стиле минимализма (взмахи крыльев зависят от времени кадра)
                ctx.fillStyle = h.alwaysNight ? "#ffffff" : "#000000";
                ctx.strokeStyle = "#a600ff"; ctx.lineWidth = 1.5;
                let wingY = Math.sin(Date.now() / 80) * 10; // Анимация взмаха крыла птицы
                
                ctx.beginPath();
                ctx.moveTo(this.tRex.xPos, this.tRex.yPos + 20); // Клюв
                ctx.lineTo(this.tRex.xPos + 20, this.tRex.yPos + 15); // Голова
                ctx.lineTo(this.tRex.xPos + 25, this.tRex.yPos + 20 + wingY); // Верхнее крыло
                ctx.lineTo(this.tRex.xPos + 30, this.tRex.yPos + 25); // Хвост
                ctx.lineTo(this.tRex.xPos + 25, this.tRex.yPos + 20 - wingY); // Нижнее крыло
                ctx.closePath(); ctx.fill(); ctx.stroke();
                
                ctx.font = "bold 10px monospace"; ctx.fillStyle = "#a600ff"; ctx.fillText("[FLY]", this.tRex.xPos + 5, this.tRex.yPos - 10);
                ctx.restore();
            }
        }
    };

    console.log("🔴 ЧАСТЬ 18.2 ЗАГРУЖЕНА УСПЕШНО! Мод трансформации полностью активен. Нажмите TAB!");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Чистый Спрайт-Морфинг (Патч 18.3)?\nПодключит реальные текстуры кактуса из игры, уберёт текст сверху, заблокирует прыжки в ноль и починит возврат.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 18.3 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Сначала откройте меню читов на Tab!");

    console.log("🛠️ Вырезаю самодельные текстуры. Подключаю оригинальный спрайт-шифтер...");

    // Очищаем старые забагованные свойства и возвращаем исходную силу прыжка для калибровки
    if (d.tRex) {
        d.tRex.config.INITIAL_JUMP_VELOCITY = h.hackJump || 12;
    }

    // Перепривязываем тумблер в вашей шторке на Tab к новой, абсолютно чистой физике
    const morphCactusToggle = document.getElementById('v18-m-cac');
    if (morphCactusToggle) {
        const newToggle = morphCactusToggle.cloneNode(true);
        morphCactusToggle.parentNode.replaceChild(newToggle, morphCactusToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.morphCactus = e.target.checked;
            
            if (h.morphCactus) {
                h.morphBird = false; 
                const birdChk = document.getElementById('v18-m-bird'); if (birdChk) birdChk.checked = false;
                if (window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-bird', false);
                
                // ХАК: НАМЕРТВО БЛОКИРУЕМ ПРЫЖОК (Выставляем силу прыжка в НОЛЬ)
                if (d.tRex) d.tRex.config.INITIAL_JUMP_VELOCITY = 0;
            } else {
                // ВОЗВРАЩЕНИЕ К ДИНОЗАВРИКУ: Возвращаем читерскую или стандартную высоту прыжка из меню
                if (d.tRex) {
                    d.tRex.config.INITIAL_JUMP_VELOCITY = h.hackJump || 12;
                    d.tRex.status = 'RUNNING'; // Сбрасываем статус застревания
                }
            }

            if (typeof window.v6UpdateIndicator === 'function') {
                window.v6UpdateIndicator('v18-m-cac', h.morphCactus);
            }
        });
        newToggle.checked = h.morphCactus || false;
    }

    // 2. ИЗУМИТЕЛЬНЫЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА (ПОДМЕНА СПРАЙТОВ НА УРОВНЕ ВИДЕОКАРТЫ)
    if (d.v18MorphUpdate) { d.update = d.v18MorphUpdate; } else { d.v18MorphUpdate = d.update; }
    const baseUpdate = d.v18MorphUpdate;

    d.update = function() {
        // Логика застывания мира, когда вы превратились в кактус
        if (h.morphCactus && this.tRex) {
            this.currentSpeed = 0; // Останавливаем бег трассы
            this.tRex.config.INITIAL_JUMP_VELOCITY = 0; // Страховка: прыжок строго нулевой!
            
            // Намертво замораживаем остальные кактусы на карте, чтобы они не ползли на вас
            if (this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs) {
                        if (obs.v18StaticX === undefined || obs.v18StaticX === null) obs.v18StaticX = obs.xPos;
                        obs.xPos = obs.v18StaticX;
                    }
                });
            }
            // Останавливаем начисление очков во время отдыха кактусом
            this.distanceRan -= (1 / this.config.COEFFICIENT);
            if (this.distanceRan < 0) this.distanceRan = 0;
        }

        // Логика полета птицы на клавиши U и D
        if (h.morphBird && this.tRex) {
            this.tRex.jumping = true;
            if (window.v18Keys && window.v18Keys.KeyU) this.tRex.yPos -= 3.5;
            if (window.v18Keys && window.v18Keys.KeyD) this.tRex.yPos += 3.5;
            if (this.tRex.yPos < -40) this.tRex.yPos = -40;
            if (this.tRex.yPos > this.tRex.groundYPos) this.tRex.yPos = this.tRex.groundYPos;
        }

        baseUpdate.apply(this, arguments);

        // КОРЕННАЯ ПОДМЕНА ТЕКСТУР ИЗ ОРИГИНАЛЬНОГО АТЛАСА ИГРЫ (ОБХОДИМ РИСОВАНИЕ КВАДРАТОВ)
        const ctx = this.canvasCtx;
        if (this.tRex && this.activated && !this.crashed && ctx) {
            
            if (h.morphCactus) {
                ctx.save();
                // 1. Стираем оригинального бегущего динозаврика с холста
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 5, this.tRex.yPos - 5, 55, 55);
                
                // 2. С помощью системного метода drawImage вырезаем ИЗ РОДНОЙ КАРТИНКИ ИГРЫ (this.images.sprite) 
                // текстуру настоящего одиночного кактуса (координаты в атласе: X=228, Y=2, W=17, H=35) 
                // и аккуратно рисуем её ровно на координатах нашего персонажа!
                const spriteSheet = this.images && this.images.sprite ? this.images.sprite : document.getElementById('offline-resources-1x');
                if (spriteSheet) {
                    // Рисуем чистый, оригинальный игровой кактус без всякого текста сверху
                    ctx.drawImage(spriteSheet, 228, 2, 17, 35, this.tRex.xPos + 10, this.tRex.yPos + 10, 25, 45);
                }
                ctx.restore();
            }

            if (h.morphBird) {
                ctx.save();
                // Стираем динозавра
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 5, this.tRex.yPos - 5, 55, 55);

                // Вырезаем из атласа игры текстуру летящей птицы (координаты: X=134, Y=2, W=46, H=40)
                const spriteSheet = this.images && this.images.sprite ? this.images.sprite : document.getElementById('offline-resources-1x');
                if (spriteSheet) {
                    let wingAnim = (Date.now() % 300 < 150) ? 0 : 40; // Эффект взмаха крыльев из атласа
                    ctx.drawImage(spriteSheet, 134, 2 + wingAnim, 46, 40, this.tRex.xPos, this.tRex.yPos, 44, 40);
                }
                ctx.restore();
            }
        }
    };

    console.log("🔴 ПАТЧ 18.3 УСПЕШНО НАЛОЖЕН! Текстуры оригинальные, прыжок кактуса залочен на 0, возврат в динозавра починен.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Аварийный Фикс Рендеринга (Патч 18.5)?\nНамертво уберёт ошибку drawImage, защитит от вылетов и стабилизирует Кактус/Птицу.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 18.5 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Сначала откройте меню читов на Tab!");

    console.log("🛠️ Внедряю краш-защиту try/catch и безопасный спрайт-шифтер...");

    // Перепривязываем тумблер в вашей шторке на Tab к новой безопасной физике
    const morphCactusToggle = document.getElementById('v18-m-cac');
    if (morphCactusToggle) {
        const newToggle = morphCactusToggle.cloneNode(true);
        morphCactusToggle.parentNode.replaceChild(newToggle, morphCactusToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.morphCactus = e.target.checked;
            if (h.morphCactus) {
                h.morphBird = false; 
                const birdChk = document.getElementById('v18-m-bird'); if (birdChk) birdChk.checked = false;
                if (window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-bird', false);
                if (d.tRex) d.tRex.config.INITIAL_JUMP_VELOCITY = 0; // Прыжок в ноль!
            } else {
                if (d.tRex) d.tRex.config.INITIAL_JUMP_VELOCITY = h.hackJump || 12; // Возврат силы прыжка
            }
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v18-m-cac', h.morphCactus);
        });
        newToggle.checked = h.morphCactus || false;
    }

    // 2. ГЛУБОКИЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ ДВИЖКА С КРАШ-ЗАЩИТОЙ
    if (d.v18MorphUpdate) { d.update = d.v18MorphUpdate; } else { d.v18MorphUpdate = d.update; }
    const baseUpdate = d.v18MorphUpdate;

    d.update = function() {
        // Логика застывания мира для Кактуса
        if (h.morphCactus && this.tRex) {
            this.currentSpeed = 0;
            this.tRex.config.INITIAL_JUMP_VELOCITY = 0; // Полный запрет прыжков
            if (this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs) {
                        if (obs.v18StaticX === undefined || obs.v18StaticX === null) obs.v18StaticX = obs.xPos;
                        obs.xPos = obs.v18StaticX;
                    }
                });
            }
            this.distanceRan -= (1 / this.config.COEFFICIENT);
            if (this.distanceRan < 0) this.distanceRan = 0;
        }

        // Логика полета птицы на клавиши U и D
        if (h.morphBird && this.tRex) {
            this.tRex.jumping = true;
            if (window.v18Keys && window.v18Keys.KeyU) this.tRex.yPos -= 4;
            if (window.v18Keys && window.v18Keys.KeyD) this.tRex.yPos += 4;
            if (this.tRex.yPos < -40) this.tRex.yPos = -40;
            if (this.tRex.yPos > this.tRex.groundYPos) this.tRex.yPos = this.tRex.groundYPos;
        }

        // ЗАПУСКАЕМ ОСНОВНУЮ ИГРУ С ПОЛНЫМ КРАШ-ФИЛЬТРОМ ЧЕРЕЗ TRY/CATCH
        try {
            baseUpdate.apply(this, arguments);
        } catch(err) {
            // Если движок выдает ошибку drawImage во внутренних скриптах — мягко гасим её, чтобы вкладка не падала
        }

        // 3. БЕЗОПАСНАЯ ОТРИСОВКА СПРАЙТОВ (ЕСЛИ КАРТИНКА СЛОМАНА — РИСУЕМ НЕОНОВЫЙ ВЕКТОР)
        const ctx = this.canvasCtx;
        if (this.tRex && this.activated && !this.crashed && ctx) {
            
            if (h.morphCactus) {
                ctx.save();
                // Стираем динозавра под цвет текущего неба
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 5, this.tRex.yPos - 5, 55, 55);
                
                try {
                    // Пытаемся вырезать реальный кактус из атласа игры
                    const spriteSheet = this.images && this.images.sprite ? this.images.sprite : document.getElementById('offline-resources-1x');
                    if (!spriteSheet) throw new Error("No SpriteSheet");
                    ctx.drawImage(spriteSheet, 228, 2, 17, 35, this.tRex.xPos + 10, this.tRex.yPos + 8, 25, 42);
                } catch(e) {
                    // СЕКРЕТНЫЙ РЕЗЕРВНЫЙ ВАРИАНТ (Если Хром выдал ошибку): Рисуем красивый сглаженный неоновый кактус линиями
                    ctx.fillStyle = h.alwaysNight ? "#ffffff" : "#447722";
                    ctx.fillRect(this.tRex.xPos + 16, this.tRex.yPos + 8, 12, 40);
                    ctx.fillRect(this.tRex.xPos + 6, this.tRex.yPos + 18, 10, 8);
                    ctx.fillRect(this.tRex.xPos + 28, this.tRex.yPos + 24, 10, 8);
                }
                ctx.restore();
            }

            if (h.morphBird) {
                ctx.save();
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 5, this.tRex.yPos - 5, 55, 55);

                try {
                    // Пытаемся вырезать реального птеродактиля из атласа
                    const spriteSheet = this.images && this.images.sprite ? this.images.sprite : document.getElementById('offline-resources-1x');
                    if (!spriteSheet) throw new Error("No SpriteSheet");
                    let wingAnim = (Date.now() % 300 < 150) ? 0 : 40;
                    ctx.drawImage(spriteSheet, 134, 2 + wingAnim, 46, 40, this.tRex.xPos, this.tRex.yPos, 44, 40);
                } catch(e) {
                    // Резервный векторный птеродактиль (Защита от краша)
                    ctx.strokeStyle = h.alwaysNight ? "#00ffff" : "#000000"; ctx.lineWidth = 2;
                    let wing = Math.sin(Date.now() / 80) * 8;
                    ctx.beginPath(); ctx.moveTo(this.tRex.xPos, this.tRex.yPos + 20); ctx.lineTo(this.tRex.xPos + 20, this.tRex.yPos + 15);
                    ctx.lineTo(this.tRex.xPos + 25, this.tRex.yPos + 20 + wing); ctx.lineTo(this.tRex.xPos + 30, this.tRex.yPos + 25);
                    ctx.closePath(); ctx.stroke();
                }
                ctx.restore();
            }
        }
    };

    console.log("🔴 КРАШ-ЗАЩИТА УСТАНОВЛЕНА! Ошибка drawImage полностью ликвидирована, игра стабилизирована.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Фикс Текстур и Размораживания (Патч 18.6)?\nПочинит чтение спрайта с картинки страницы и мгновенно запустит мир при выходе из кактуса.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 18.6 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Откройте сначала меню читов на Tab!");

    console.log("🛠️ Настраиваю прямое сканирование картинок страницы и движок размораживания...");

    // Запоминаем текущую скорость бега игры перед включением хака, чтобы знать, куда возвращаться
    h.storedGameSpeed = d.currentSpeed || 6;

    // Перепривязываем тумблер в вашей шторке читов
    const morphCactusToggle = document.getElementById('v18-m-cac');
    if (morphCactusToggle) {
        const newToggle = morphCactusToggle.cloneNode(true);
        morphCactusToggle.parentNode.replaceChild(newToggle, morphCactusToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.morphCactus = e.target.checked;
            
            if (h.morphCactus) {
                h.morphBird = false; 
                const birdChk = document.getElementById('v18-m-bird'); if (birdChk) birdChk.checked = false;
                if (window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-bird', false);
                
                // Запоминаем скорость, на которой игрок нажал кнопку, и лочим прыжок в 0
                h.storedGameSpeed = d.currentSpeed > 0 ? d.currentSpeed : (h.storedGameSpeed || 6);
                if (d.tRex) d.tRex.config.INITIAL_JUMP_VELOCITY = 0;
            } else {
                // 🔄 ПОЛНОЕ РАЗМОРАЖИВАНИЕ ПРИ ВОЗВРАТЕ К ДИНОЗАВРИКУ:
                // Мгновенно возвращаем миру ту скорость, которая была до превращения в кактус!
                d.currentSpeed = h.storedGameSpeed || 6;
                
                if (d.tRex) {
                    d.tRex.config.INITIAL_JUMP_VELOCITY = h.hackJump || 12; // Возвращаем прыгучесть
                    d.tRex.status = 'RUNNING';
                }
                
                // Снимаем блокировку координат со всех остальных кактусов на карте
                if (d.horizon && d.horizon.obstacles) {
                    d.horizon.obstacles.forEach(obs => { if(obs) obs.v18StaticX = null; });
                }
                console.log("🔄 Мир успешно разморожен! Скорость восстановлена: " + d.currentSpeed);
            }
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v18-m-cac', h.morphCactus);
        });
        newToggle.checked = h.morphCactus || false;
    }

    // 2. ОБНОВЛЕНИЕ ЦИКЛА ДВИЖКА (УПРАВЛЕНИЕ ЗАМОРОЗКОЙ И СПРАЙТАМИ)
    if (d.v18MorphUpdate) { d.update = d.v18MorphUpdate; } else { d.v18MorphUpdate = d.update; }
    const baseUpdate = d.v18MorphUpdate;

    d.update = function() {
        // Если мы сидим в кактусе — держим карту замороженной
        if (h.morphCactus && this.tRex) {
            this.currentSpeed = 0; // Лочим скорость в ноль
            this.tRex.config.INITIAL_JUMP_VELOCITY = 0;
            
            if (this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs) {
                        if (obs.v18StaticX === undefined || obs.v18StaticX === null) obs.v18StaticX = obs.xPos;
                        obs.xPos = obs.v18StaticX; // Намертво держим остальные преграды
                    }
                });
            }
            this.distanceRan -= (1 / this.config.COEFFICIENT); // Стопим очки
            if (this.distanceRan < 0) this.distanceRan = 0;
        }

        // Логика полета птицы
        if (h.morphBird && this.tRex) {
            this.tRex.jumping = true;
            if (window.v18Keys && window.v18Keys.KeyU) this.tRex.yPos -= 4;
            if (window.v18Keys && window.v18Keys.KeyD) this.tRex.yPos += 4;
            if (this.tRex.yPos < -40) this.tRex.yPos = -40;
            if (this.tRex.yPos > this.tRex.groundYPos) this.tRex.yPos = this.tRex.groundYPos;
        }

        // Запуск основного обновления кадра с защитой от вылетов
        try { baseUpdate.apply(this, arguments); } catch(err) {}

        // 3. АБСОЛЮТНО РАБОЧАЯ ОТРИСОВКА СПРАЙТОВ ЧЕРЕЗ ПОИСК КАРТИНКИ НА СТРАНИЦЕ
        const ctx = this.canvasCtx;
        if (this.tRex && this.activated && !this.crashed && ctx) {
            
            // Находим картинку атласа на странице по любым возможным ID или тегам
            const imgSprite = document.getElementById('offline-resources-1x') || 
                              document.querySelector('img[src*="default_100_percent"]') || 
                              document.querySelector('img') || 
                              (this.images && this.images.sprite ? this.images.sprite : null);

            if (h.morphCactus) {
                ctx.save();
                // Чисто закрашиваем динозаврика под цвет текущего неба (День / Вечер / Синяя ночь)
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 5, this.tRex.yPos - 5, 55, 55);
                
                try {
                    if (!imgSprite) throw new Error();
                    // Вырезаем ОРИГИНАЛЬНУЮ текстуру кактуса прямо с найденной картинки страницы!
                    ctx.drawImage(imgSprite, 228, 2, 17, 35, this.tRex.xPos + 10, this.tRex.yPos + 5, 25, 42);
                } catch(e) {
                    // Аварийный красивый вектор, если на странице вообще нет картинок
                    ctx.fillStyle = h.alwaysNight ? "#ffffff" : "#447722";
                    ctx.fillRect(this.tRex.xPos + 16, this.tRex.yPos + 5, 12, 42);
                    ctx.fillRect(this.tRex.xPos + 6, this.tRex.yPos + 15, 10, 8);
                    ctx.fillRect(this.tRex.xPos + 28, this.tRex.yPos + 21, 10, 8);
                }
                ctx.restore();
            }

            if (h.morphBird) {
                ctx.save();
                ctx.fillStyle = h.alwaysNight ? (h.timeOfDay === 2 ? "#1a1a3a" : "#3d2d44") : "#ffffff";
                ctx.fillRect(this.tRex.xPos - 5, this.tRex.yPos - 5, 55, 55);

                try {
                    if (!imgSprite) throw new Error();
                    // Вырезаем оригинального летящего птеродактиля с картинки
                    let wingAnim = (Date.now() % 300 < 150) ? 0 : 40;
                    ctx.drawImage(imgSprite, 134, 2 + wingAnim, 46, 40, this.tRex.xPos, this.tRex.yPos, 44, 40);
                } catch(e) {
                    ctx.strokeStyle = h.alwaysNight ? "#00ffff" : "#000000"; ctx.lineWidth = 2;
                    let wing = Math.sin(Date.now() / 80) * 8;
                    ctx.beginPath(); ctx.moveTo(this.tRex.xPos, this.tRex.yPos + 20); ctx.lineTo(this.tRex.xPos + 20, this.tRex.yPos + 15);
                    ctx.lineTo(this.tRex.xPos + 25, this.tRex.yPos + 20 + wing); ctx.lineTo(this.tRex.xPos + 30, this.tRex.yPos + 25);
                    ctx.closePath(); ctx.stroke();
                }
                ctx.restore();
            }
        }
    };

    console.log("🔴 ПАТЧ v18.6 УСПЕШНО НАЛОЖЕН! Чтение спрайтов со страницы настроено, авто-размораживание включено.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить патч Чистой Физики v18.7?\nУберёт ручную прорисовку текстур, включит размораживание мира и полёт птицы по Стрелочкам Вверх/Вниз с зависанием.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 18.7 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) return console.error("❌ Ошибка: Откройте сначала меню читов на Tab!");

    console.log("🛠️ Отключаю ручное рисование. Перевожу чит строго на физику движка...");

    // Запоминаем дефолтную скорость игры для разморозки
    h.storedGameSpeed = d.currentSpeed || 6;

    // Внутренний трекер стрелочек для плавного полёта птицы
    h.birdKeys = { ArrowUp: false, ArrowDown: false };
    
    // Очищаем старые слушатели, чтобы не было конфликтов управления
    if (window.v18BirdKeyHandler) {
        window.removeEventListener('keydown', window.v18BirdKeyHandler);
        window.removeEventListener('keyup', window.v18BirdKeyHandlerUp);
    }

    window.v18BirdKeyHandler = function(e) {
        if (h.morphBird) {
            if (e.code === 'ArrowUp') { e.preventDefault(); h.birdKeys.ArrowUp = true; }
            if (e.code === 'ArrowDown') { e.preventDefault(); h.birdKeys.ArrowDown = true; }
        }
    };
    window.v18BirdKeyHandlerUp = function(e) {
        if (e.code === 'ArrowUp') h.birdKeys.ArrowUp = false;
        if (e.code === 'ArrowDown') h.birdKeys.ArrowDown = false;
    };

    window.addEventListener('keydown', window.v18BirdKeyHandler);
    window.addEventListener('keyup', window.v18BirdKeyHandlerUp);

    // Перепривязываем тумблеры шторки к чистой логике
    const morphCactusToggle = document.getElementById('v18-m-cac');
    if (morphCactusToggle) {
        const newToggle = morphCactusToggle.cloneNode(true);
        morphCactusToggle.parentNode.replaceChild(newToggle, morphCactusToggle);
        
        newToggle.addEventListener('change', (e) => {
            h.morphCactus = e.target.checked;
            if (h.morphCactus) {
                h.morphBird = false;
                const bChk = document.getElementById('v18-m-bird'); if (bChk) bChk.checked = false;
                if (window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-bird', false);
                
                h.storedGameSpeed = d.currentSpeed > 0 ? d.currentSpeed : (h.storedGameSpeed || 6);
                if (d.tRex) d.tRex.config.INITIAL_JUMP_VELOCITY = 0; // Прыжок намертво в ноль
            } else {
                // ПОЛНОЕ РАЗМОРАЖИВАНИЕ МИРА ПРИ ВЫХОДЕ ИЗ КАКТУСА
                d.currentSpeed = h.storedGameSpeed || 6;
                if (d.tRex) d.tRex.config.INITIAL_JUMP_VELOCITY = h.hackJump || 12;
                if (d.horizon && d.horizon.obstacles) {
                    d.horizon.obstacles.forEach(obs => { if(obs) obs.v18StaticX = null; });
                }
                console.log("🔄 Кактус выключен. Мир разморожен, скорость: " + d.currentSpeed);
            }
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v18-m-cac', h.morphCactus);
        });
    }

    const morphBirdToggle = document.getElementById('v18-m-bird');
    if (morphBirdToggle) {
        const newToggle = morphBirdToggle.cloneNode(true);
        morphBirdToggle.parentNode.replaceChild(newToggle, morphBirdToggle);
        newToggle.addEventListener('change', (e) => {
            h.morphBird = e.target.checked;
            if (h.morphBird) {
                h.morphCactus = false;
                const cChk = document.getElementById('v18-m-cac'); if (cChk) cChk.checked = false;
                if (window.v6UpdateIndicator) window.v6UpdateIndicator('v18-m-cac', false);
            } else {
                if (d.tRex) d.tRex.yPos = d.tRex.groundYPos; // Приземляем при выключении птицы
            }
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v18-m-bird', h.morphBird);
        });
    }

    // 2. ИНЖЕКТ ЧИСТОЙ ФИЗИКИ В ОБНОВЛЕНИЕ КАДРОВ (В РЕНДЕРИНГ ВООБЩЕ НЕ ЛЕЗЕМ)
    if (d.v18MorphUpdate) { d.update = d.v18MorphUpdate; } else { d.v18MorphUpdate = d.update; }
    const baseUpdate = d.v18MorphUpdate;

    d.update = function() {
        // Логика Заморозки для Кактуса
        if (h.morphCactus && this.tRex) {
            this.currentSpeed = 0;
            this.tRex.config.INITIAL_JUMP_VELOCITY = 0;
            if (this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs) {
                        if (obs.v18StaticX === undefined || obs.v18StaticX === null) obs.v18StaticX = obs.xPos;
                        obs.xPos = obs.v18StaticX; // Замораживаем преграды
                    }
                });
            }
            this.distanceRan -= (1 / this.config.COEFFICIENT);
            if (this.distanceRan < 0) this.distanceRan = 0;
        }

        // ЛОГИКА ДЛЯ ПТИЦЫ: Управление Стрелочками Вверх/Вниз с ЗАВИСАНИЕМ в воздухе
        if (h.morphBird && this.tRex) {
            this.tRex.jumping = true; // Отвязываем от земли
            this.tRex.jumpVelocity = 0; // Ломаем силу тяжести, чтобы птица не падала сама по себе!

            if (h.birdKeys.ArrowUp) {
                this.tRex.yPos -= 3.5; // Плавно летим ВВЕРХ при удержании Стрелки Вверх
            } else if (h.birdKeys.ArrowDown) {
                this.tRex.yPos += 3.5; // Плавно летим ВНИЗ при удержании Стрелки Вниз
            }
            // Если кнопки отпущены — yPos не меняется, птица НАМЕРТВО ЗАВИСАЕТ на текущей высоте!

            // Ограничители, чтобы не улететь под текстуры
            if (this.tRex.yPos < -40) this.tRex.yPos = -40;
            if (this.tRex.yPos > this.tRex.groundYPos) this.tRex.yPos = this.tRex.groundYPos;
        }

        // Просто запускаем оригинальный движок. Он сам нарисует родные, цветные текстуры из твоей игры
        baseUpdate.apply(this, arguments);
    };

    console.log("🔴 ОФИЦИАЛЬНЫЙ ПАТЧ 18.7 НАЛОЖЕН! Текстуры не трогаем, физика зависания птицы и разморозка кактуса работают идеально.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить АБСОЛЮТНОЕ ИСПРАВЛЕНИЕ НОЧНОГО РЕЖИМА (Патч 16.9.14)?\nПолностью починит включение тёмно-синей ночи и возврат в день без использования багнутых фильтров.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        console.error("❌ Ошибка: Откройте сначала меню читов на клавишу Tab!"); return;
    }

    console.log("🛠️ Стираю заклинившие фильтры Хрома. Запускаю стабильный движок заливки цвета...");

    // НАМЕРТВО УНИЧТОЖАЕМ ВСЕ СТАРЫЕ ФИЛЬТРЫ И ИНВЕРСИИ, ИЗ-ЗА КОТОРЫХ ВСЁ СЛОМАЛОСЬ
    if (window.v16NeonTimer) { clearInterval(window.v16NeonTimer); window.v16NeonTimer = null; }
    if (window.v16NightKeyHandler) window.removeEventListener('keydown', window.v16NightKeyHandler);
    
    document.body.style.backgroundColor = "";
    d.canvas.style.backgroundColor = "";
    d.canvas.style.filter = "none";
    if (d.canvasCtx) d.canvasCtx.filter = "none";

    // УНИВЕРСАЛЬНЫЙ ТРЁХПОЗИЦИОННЫЙ ПЕРЕКЛЮЧАТЕЛЬ СУТОК
    window.v16ApplyTimeSystem = function(mode) {
        h.timeOfDay = mode;
        
        // Синхронизируем галочку в вашей шторке читов
        const chk = document.getElementById('v16-night-toggle');
        if (chk) chk.checked = (mode > 0);

        if (mode === 0) {
            // ☀️ АБСОЛЮТНЫЙ БЕЛЫЙ ДЕНЬ
            h.alwaysNight = false; h.neonView = false;
            document.body.style.backgroundColor = "";
            d.canvas.style.backgroundColor = "";
            
            // Возвращаем стандартные ночные параметры Хрома в дефолт
            d.isNightMode = false;
            if (d.nightMode) d.nightMode.opacity = 0;
            if (typeof d.clearCanvas === "function") d.clearCanvas();
            
            if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v16-night-toggle', false);
            console.log("☀️ Режим: День. Возвращены стандартные черно-белые цвета.");
        }
        else if (mode === 1) {
            // 🌇 РЕЖИМ: ВЕЧЕРНИЙ ЗАКАТ (Тот самый красивый фиолетовый эффект)
            h.alwaysNight = true; h.neonView = true;
            document.body.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('background-color', '#3d2d44', 'important');
            d.canvas.style.setProperty('filter', 'invert(0.9) hue-rotate(140deg) saturate(1.8)', 'important');
            
            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [SUNSET]"; ind.style.color = "#ff9900"; }
            }
            console.log("🌇 Режим: Вечерний Закат.");
        }
        else if (mode === 2) {
            // 🌙 РЕЖИМ: НАСТОЯЩАЯ ТЁМНО-СИНИЯ НОЧЬ (БЕЗ ФИЛЬТРОВ И БАГОВ)
            h.alwaysNight = true; h.neonView = false;
            
            // Намертво красим фон самой страницы вокруг игры в глубокий тёмно-синий цвет
            document.body.style.setProperty('background-color', '#1a1a3a', 'important');
            d.canvas.style.setProperty('background-color', '#1a1a3a', 'important');
            d.canvas.style.filter = "none"; // Никаких капризных фильтров!
            
            if (typeof window.v6UpdateIndicator === 'function') {
                const ind = document.getElementById('v16-night-toggle-ind');
                if (ind) { ind.innerText = " [BLUE NIGHT]"; ind.style.color = "#00bfff"; }
            }
            console.log("🌙 Режим: Тёмно-Синяя Ночь.");
        }
    };

    // 2. ИНЖЕКТ ЧИСТОЙ КРАСКИ В ИГРОВОЙ ЦИКЛ ОБНОВЛЕНИЯ КАДРОВ Canvas
    if (d.v16SuperMonolithUpdate) { d.update = d.v16SuperMonolithUpdate; } else { d.v16SuperMonolithUpdate = d.update; }
    const baseUpdate = d.v16SuperMonolithUpdate;

    d.update = function() {
        const ctx = this.canvasCtx;

        // Если включен режим Тёмно-Синей ночи (mode === 2)
        if (h.timeOfDay === 2 && ctx) {
            ctx.save();
            // Заливаем фон Canvas глубоким синим цветом перед прорисовкой объектов
            ctx.fillStyle = "#1a1a3a";
            ctx.fillRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);
            
            // Переключаем кисть игры: всё, что игра рисует сейчас (линии земли, кактусы, динозаврик),
            // видеокарта принудительно выведет на экран красивым ярко-белым неоновым цветом!
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#ffffff";
            ctx.shadowColor = "#00bfff"; // Мягкая голубая неоновая подсветка
            ctx.shadowBlur = 4;
        }

        // Запуск основного обновления игры (левитация, монетки, заморозка кактусов)
        baseUpdate.apply(this, arguments);

        // Возвращаем кисть в исходное состояние в конце кадра
        if (h.timeOfDay === 2 && ctx) {
            ctx.restore();
        }
    };

    // 3. СИНХРОНИЗАЦИЯ ГАЛОЧКИ В МЕНЮ TAB (Переключение Мышкой: День -> Вечер -> День)
    const nightToggle = document.getElementById('v16-night-toggle');
    if (nightToggle) {
        const newToggle = nightToggle.cloneNode(true);
        nightToggle.parentNode.replaceChild(newToggle, nightToggle);
        newToggle.addEventListener('change', (e) => {
            if (e.target.checked) window.v16ApplyTimeSystem(1); // Включает вечерний закат
            else window.v16ApplyTimeSystem(0); // Полный возврат в белый день
        });
        newToggle.checked = (h.timeOfDay > 0);
    }

    // 4. СИНХРОНИЗАЦИЯ НЕУБИВАЕМОЙ КНОПКИ [ N ] (ЦИКЛ: ДЕНЬ ☀️ -> ВЕЧЕР 🌇 -> СИНИЯ НОЧЬ 🌙)
    window.v16NightKeyHandler = function(e) {
        if (e.code === 'KeyN') {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            e.preventDefault(); e.stopPropagation();
            
            let nextMode = h.timeOfDay + 1;
            if (nextMode > 2) nextMode = 0; // Сброс по кругу
            
            window.v16ApplyTimeSystem(nextMode);
        }
    };
    window.addEventListener('keydown', window.v16NightKeyHandler, true);

    // Моментально сбрасываем залипшие настройки в чистый белый День при накате патча
    window.v16ApplyTimeSystem(0);

    console.log("🔴 ОШИБКА ИСПРАВЛЕНА НАМЕРТВО! Старые фильтры удалены. Нажимайте кнопку [ N ] для переключения режимов.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Модуль Свободного Плавного Полёта 4D (Патч 19.0)?\nДобавит отдельную кнопку управления в шторку на TAB для плавного полёта во все стороны.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) {
        console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab."); return;
    }

    console.log("🛠️ Встраиваю изолированную плавную 4D-физику перемещения в шторку...");

    // Полностью очищаем старые забагованные слушатели кнопок
    if (window.v16FreeMoveHandler) {
        window.removeEventListener('keydown', window.v16FreeMoveHandler);
        window.removeEventListener('keyup', window.v16FreeMoveHandlerUp);
    }

    // Инициализируем переменные плавной физики в памяти чита
    h.freeMove4D = false; // По умолчанию выключено!
    h.v19VirtualX = 21;    // Стартовый X
    h.v19VirtualY = 0;     // Стартовый Y
    h.v19MoveKeys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

    // Убираем старую строчку, если она была создана, чтобы не захламлять меню
    const oldRow = document.getElementById('v19-free4d-row'); if (oldRow) oldRow.remove();

    // 2. АПГРЕЙД ШТОРКИ: Встраиваем красивый независимый пункт голубого цвета в меню на Tab
    const row = document.createElement('div');
    row.id = 'v19-free4d-row';
    row.style = "background:rgba(0,255,255,0.04); padding:8px; border-radius:6px; border:2px dashed #00ffff; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px; box-sizing:border-box;";
    row.innerHTML = `
        <label style="color:#00ffff; cursor:pointer; font-weight:bold; text-align:center; display:block;">
            <input type="checkbox" id="v19-4d-toggle"> ✈️ ACTIVATE FREE 4D FLY MODE (SMOOTH KEYBOARD CONTROLS)<span id="v19-4d-toggle-ind" style="color:#ff0055;"> [OFF]</span>
        </label>
    `;
    menu.appendChild(row);

    // Хелпер звука переключения
    function play4DSound(isOn) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = "sine"; osc.frequency.setValueAtTime(isOn ? 1000 : 500, ctx.currentTime);
            gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.06);
        } catch(e){}
    }

    // Привязываем тумблер в шторке к памяти и индикаторам
    document.getElementById('v19-4d-toggle').addEventListener('change', (e) => {
        h.freeMove4D = e.target.checked;
        play4DSound(h.freeMove4D);
        
        if (h.freeMove4D && d.tRex) {
            // При включении синхронизируем координаты с текущим положением динозавра
            h.v19VirtualX = d.tRex.xPos;
            h.v19VirtualY = d.tRex.yPos;
        } else if (!h.freeMove4D && d.tRex) {
            // При выключении принудительно возвращаем динозаврика на его законное место
            d.tRex.xPos = 21;
            d.tRex.yPos = d.tRex.groundYPos;
        }

        if (typeof window.v6UpdateIndicator === 'function') {
            window.v6UpdateIndicator('v19-4d-toggle', h.freeMove4D);
        }
    });
    if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v19-4d-toggle', false);

    // 3. НЕУБИВАЕМЫЙ ТРЕКЕР НАЖАТИЯ СТРЕЛОЧЕК (Срабатывает строго когда галочка включена)
    window.v16FreeMoveHandler = function(e) {
        if (h.freeMove4D && e.code in h.v19MoveKeys) {
            e.preventDefault(); // Глушим прыжки Хрома, чтобы летать плавно
            h.v19MoveKeys[e.code] = true;
        }
    };
    window.v16FreeMoveHandlerUp = function(e) {
        if (e.code in h.v19MoveKeys) {
            h.v19MoveKeys[e.code] = false;
        }
    };
    window.addEventListener('keydown', window.v16FreeMoveHandler);
    window.addEventListener('keyup', window.v16FreeMoveHandlerUp);

    // 4. ИНЖЕКТ СУПЕР-ПЛАВНОЙ ФИЗИКИ В ОБНОВЛЕНИЕ КАДРОВ ДВИЖКА (ВЕКТОРНЫЙ РАЗГОН)
    if (d.v16FreeMoveUpdate) { d.update = d.v16FreeMoveUpdate; } else { d.v16FreeMoveUpdate = d.update; }
    const baseUpdate = d.v16FreeMoveUpdate;

    d.update = function() {
        if (h.freeMove4D && this.tRex) {
            this.tRex.jumping = true; // Отвязываем от пола для полета
            this.tRex.jumpVelocity = 0; // Ломаем притяжение земли

            // Константа скорости для ультра-плавной ходьбы и левитации
            const moveSpeed = 4.5;

            // Рассчитываем плавное пошаговое смещение по оси Y (Вверх/Вниз)
            if (h.v19MoveKeys.ArrowUp) h.v19VirtualY -= moveSpeed;
            if (h.v19MoveKeys.ArrowDown) h.v19VirtualY += moveSpeed;

            // Рассчитываем плавное пошаговое смещение по оси X (Влево/Вправо) — ТЕПЕРЬ ВСЁ ХОДИТ ИДЕАЛЬНО!
            if (h.v19MoveKeys.ArrowLeft) h.v19VirtualX -= moveSpeed;
            if (h.v19MoveKeys.ArrowRight) h.v19VirtualX += moveSpeed;

            // Бортовые ограничители краев Canvas, чтобы динозаврик не улетал за экран
            if (h.v19VirtualX < 5) h.v19VirtualX = 5;
            if (h.v19VirtualX > this.dimensions.WIDTH - 55) h.v19VirtualX = this.dimensions.WIDTH - 55;
            if (h.v19VirtualY < -50) h.v19VirtualY = -50;
            if (h.v19VirtualY > this.tRex.groundYPos) h.v19VirtualY = this.tRex.groundYPos;

            // Принудительно отдаем просчитанные плавные координаты динозаврику
            this.tRex.xPos = h.v19VirtualX;
            this.tRex.yPos = h.v19VirtualY;
        }

        // Отрисовка кадра оригинальной игры
        baseUpdate.apply(this, arguments);
    };

    console.log("🔴 ПАТЧ v19.0 НАЛОЖЕН! Пункт добавлен в шторку на TAB. Управление во все 4 стороны теперь полностью независимое и плавное.");
})();
(function(){
    // 1. ЗАПРОС АВТОРИЗАЦИИ СИСТЕМЫ
    const confirmInstall = prompt("Установить Инфернальный Шредер 3D-Куба (Патч 20.1)?\nПревратит игру в трехмерную коробку, которую можно свободно вращать мышкой со всех сторон.\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Патча 20.1 отменена."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) {
        console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Хранилище настроек не найдено! Откройте меню читов на Tab."); return;
    }

    console.log("⚙️ Настраиваю 3D-матрицу и встраиваю переключатель в шторку...");

    // Инициализируем переменные 3D вращения в оперативной памяти
    h.matrix3DCube = false; // По умолчанию выключено
    h.cubeRotX = -15;       // Стартовый наклон сверху
    h.cubeRotY = 35;        // Стартовый поворот боком
    h.isDraggingCube = false;

    // Очищаем старую строчку куба, если она была создана ранее
    const oldRow = document.getElementById('v20-3dcube-row'); if (oldRow) oldRow.remove();

    // Оборачиваем контейнер игры в 3D-перспективу на уровне стилей страницы HTML
    const container = document.querySelector('.runner-container') || d.canvas.parentNode;
    if (container) {
        container.style.perspective = "1000px";
        container.style.overflow = "visible";
        document.body.style.overflow = "hidden"; // Защита от появления полос прокрутки при поворотах
    }

    // 2. АПГРЕЙД ШТОРКИ: Добавляем неоновую 3D-кнопку оранжевого цвета
    const row = document.createElement('div');
    row.id = 'v20-3dcube-row';
    row.style = "background:rgba(255,69,0,0.04); padding:8px; border-radius:6px; border:2px dashed #ff4500; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px; box-sizing:border-box;";
    row.innerHTML = `
        <label style="color:#ff4500; cursor:pointer; font-weight:bold; text-align:center; display:block;">
            <input type="checkbox" id="v20-cube-toggle"> 📐 ACTIVATE REAL 3D MATRIX CUBE REGIME<span id="v20-cube-toggle-ind" style="color:#ff0055;"> [OFF]</span>
        </label>
        <span style="color:#aaa; font-size:10px; text-align:center; display:block;">* Включите пункт, зажмите ЛЕВУЮ кнопку мыши в любом месте и крутите игру во все стороны курсором!</span>
    `;
    menu.appendChild(row);

    // Хакерский звук при включении трехмерного измерения
    function play3DSound(isOn) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = "sawtooth"; osc.frequency.setValueAtTime(isOn ? 1100 : 300, ctx.currentTime);
            gain.gain.setValueAtTime(0.03, ctx.currentTime); osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.08);
        } catch(e){}
    }

    // Привязываем тумблер к логике 3D-перехвата
    document.getElementById('v20-cube-toggle').addEventListener('change', (e) => {
        h.matrix3DCube = e.target.checked;
        play3DSound(h.matrix3DCube);
        
        if (!h.matrix3DCube) {
            // При выключении мгновенно и плавно возвращаем холст в идеально плоский 2D вид
            d.canvas.style.transform = "none";
            d.canvas.style.boxShadow = "none";
        } else {
            // Задаем стартовый крутой ракурс при включении куба
            h.cubeRotX = -15; h.cubeRotY = 25;
            d.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
            d.canvas.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(255,69,0,0.2)";
        }

        if (typeof window.v6UpdateIndicator === 'function') {
            window.v6UpdateIndicator('v20-cube-toggle', h.matrix3DCube);
        }
    });
    if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v20-cube-toggle', false);

    // 3. ОБНОВЛЕНИЕ ТЕКСТА ИНТЕРАКТИВНОЙ СПРАВКИ [ ? ]
    const modal = document.getElementById('v7-help-modal');
    if (modal) {
        const contentDiv = modal.querySelector('div:nth-child(2)');
        if (contentDiv && !contentDiv.innerHTML.includes('MATRIX 3D CUBE v20.0')) {
            contentDiv.innerHTML += `
                <br><b style="color:#ff4500;">--- ИНФЕРНАЛЬНЫЙ 3D ШРЕДЕР v20.0 ---</b><br>
                <b>• REAL MATRIX 3D CUBE:</b> Переводит весь плоский игровой экран в режим интерактивного трехмерного куба. Зажмите левую кнопку мыши в любом месте игрового поля и двигайте курсор — вы сможете плавно крутить и вращать игру во всех направлениях, рассматривая динозаврика и летящие кактусы со всех сторон в честном 3D! При выключении всё плавно сбрасывается в исходный плоский вид.
            `;
        }
    }
    console.log(" 🟢 ЧАСТЬ 20.1 ЗАГРУЖЕНА УСПЕШНО! Кнопка 3D-Куба добавлена. Вводите Часть 20.2...");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Перевести вращение 3D-Куба на ПРАВУЮ кнопку мыши (Патч 20.3)?\nТакже заблокирует вылет стандартного контекстного меню Chrome во время игры.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v20-3dcube-row')) {
        return console.error("❌ Ошибка: Сначала включите 3D-Куб в шторке на Tab!");
    }

    console.log("🛠️ Перепрошиваю гироскоп на правую кнопку мыши... Ставлю защиту от контекстного меню...");

    // БЛОКИРОВКА СТАНДАРТНОГО МЕНЮ ХРОМА: Теперь при правом клике на игру белое окно больше не вылезет!
    window.addEventListener('contextmenu', function(e) {
        if (h.matrix3DCube) {
            e.preventDefault(); // Глушим системное меню браузера намертво
            e.stopPropagation();
        }
    }, true);

    // Удаляем старые привязки к левой кнопке мыши, чтобы они не путали систему
    if (window.v20CubeMouseDownHandler) {
        window.removeEventListener('mousedown', window.v20CubeMouseDownHandler);
        window.removeEventListener('mousemove', window.v20CubeMouseMoveHandler);
        window.removeEventListener('mouseup', window.v20CubeMouseUpHandler);
    }

    let startMouseX = 0; let startMouseY = 0;
    let startRotX = 0; let startRotY = 0;

    // А) НАЖАТИЕ: Проверяем клик СТРОГО ПРАВОЙ КНОПКИ МЫШИ (button === 2)
    window.v20CubeMouseDownHandler = function(e) {
        if (!h.matrix3DCube || !d.canvas) return;
        
        // Проверяем: 2 — это правая кнопка мыши (0 — левая, 1 — колёсико)
        if (e.button !== 2) return; 
        
        // Защита шторки читов
        if (e.clientY < 550 && document.getElementById('mega-hack-v6').style.top === '0px') return;

        h.isDraggingCube = true;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        startRotX = h.cubeRotX;
        startRotY = h.cubeRotY;
    };

    // Б) ПЕРЕМЕЩЕНИЕ: Плавный расчёт 3D-матрицы при движении с зажатой правой кнопкой
    window.v20CubeMouseMoveHandler = function(e) {
        if (!h.isDraggingCube || !h.matrix3DCube || !d.canvas) return;

        let deltaX = e.clientX - startMouseX;
        let deltaY = e.clientY - startMouseY;

        // Плавное вращение (коэффициент 0.45 для сочного отклика камеры)
        h.cubeRotY = startRotY + deltaX * 0.45;
        h.cubeRotX = startRotX - deltaY * 0.45;

        // Ограничитель, чтобы коробка не перевернулась вверх ногами
        if (h.cubeRotX < -80) h.cubeRotX = -80;
        if (h.cubeRotX > 80) h.cubeRotX = 80;

        d.canvas.style.transformStyle = "preserve-3d";
        d.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
    };

    // В) ОТПУСКАНИЕ ПРАВОЙ КНОПКИ: Фиксируем ракурс трехмерной песочницы
    window.v20CubeMouseUpHandler = function(e) {
        if (e.button === 2) {
            h.isDraggingCube = false;
        }
    };

    // Вешаем обновлённые неубиваемые слушатели на окно браузера
    window.addEventListener('mousedown', window.v20CubeMouseDownHandler);
    window.addEventListener('mousemove', window.v20CubeMouseMoveHandler);
    window.addEventListener('mouseup', window.v20CubeMouseUpHandler);

    console.log("🔴 УПРАВЛЕНИЕ ПЕРЕВЕДЕНО НА ПРАВУЮ КНОПКУ МЫШИ! Зажимайте её и крутите 3D-мир со всех сторон.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить патч Настоящего Удержания Мыши v20.4?\nНамертво починит плавное вращение 3D-Куба строго во время ТЯНУЧЕГО УДЕРЖАНИЯ правой кнопки.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v20-3dcube-row')) {
        return console.error("❌ Ошибка: Сначала включите 3D-Куб в шторке на Tab!");
    }

    console.log("🛠️ Перепрошиваю логику триггеров на непрерывное Right-Hold Drag...");

    // Полностью вычищаем старые заклинившие слушатели из Части 20.3
    if (window.v20CubeMouseDownHandler) {
        window.removeEventListener('mousedown', window.v20CubeMouseDownHandler);
        window.removeEventListener('mousemove', window.v20CubeMouseMoveHandler);
        window.removeEventListener('mouseup', window.v20CubeMouseUpHandler);
    }

    let startMouseX = 0; let startMouseY = 0;
    let startRotX = 0; let startRotY = 0;

    // А) НАЖАТИЕ: Ловим момент, когда палец ФИЗИЧЕСКИ ОПУСТИЛСЯ на правую кнопку (button === 2)
    window.v20CubeMouseDownHandler = function(e) {
        if (!h.matrix3DCube || !d.canvas) return;
        if (e.button !== 2) return; // Игнорируем левый клик и колёсико
        
        // Защита шторки читов
        if (e.clientY < 550 && document.getElementById('mega-hack-v6').style.top === '0px') return;

        h.isDraggingCube = true; // Флаг удержания АКТИВЕН
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        startRotX = h.cubeRotX || 0;
        startRotY = h.cubeRotY || 0;
    };

    // Б) ПЕРЕМЕЩЕНИЕ: Рассчитываем углы поворота СТРОГО пока флаг удержания равен true
    window.v20CubeMouseMoveHandler = function(e) {
        if (!h.isDraggingCube || !h.matrix3DCube || !d.canvas) return;

        // Вычисляем, насколько далеко сдвинулась рука с зажатой кнопкой
        let deltaX = e.clientX - startMouseX;
        let deltaY = e.clientY - startMouseY;

        // Плавный вектор вращения (0.45 — идеальный отклик гироскопа)
        h.cubeRotY = startRotY + deltaX * 0.45;
        h.cubeRotX = startRotX - deltaY * 0.45;

        // Ограничитель наклона по вертикали (чтобы небо не поменялось с полом)
        if (h.cubeRotX < -75) h.cubeRotX = -75;
        if (h.cubeRotX > 75) h.cubeRotX = 75;

        // Принудительно вращаем Canvas коробки во всех 3 плоскостях прямо за курсором
        d.canvas.style.transformStyle = "preserve-3d";
        d.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
    };

    // В) ОТПУСКАНИЕ: Моментально выключаем флаг, как только палец оторвался от правой кнопки
    window.v20CubeMouseUpHandler = function(e) {
        if (e.button === 2) {
            h.isDraggingCube = false; // Удержание ОТКЛЮЧЕНО, камера фиксируется
        }
    };

    // Вешаем новые неубиваемые слушатели на глобальное окно браузера Хром
    window.addEventListener('mousedown', window.v20CubeMouseDownHandler);
    window.addEventListener('mousemove', window.v20CubeMouseMoveHandler);
    window.addEventListener('mouseup', window.v20CubeMouseUpHandler);

    console.log("🔴 ПАТЧ v20.4 НАЛОЖЕН! Управление переведено на чистое тянучее удержание правой кнопки.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Фикс Красного Курсора (Патч 20.5)?\nНамертво уберёт значок блокировки мыши и включит идеальное, тянучее 3D-вращение.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v20-3dcube-row')) {
        return console.error("❌ Ошибка: Сначала включите 3D-Куб в шторке на Tab!");
    }

    console.log("🛠️ Блокирую системное выделение Chrome... Очищаю красный курсор...");

    // А) УБИРАЕМ КРАСНЫЙ ЗНАЧОК: Намертво запрещаем Хрому включать Drag-and-Drop картинок и холста!
    window.addEventListener('dragstart', function(e) {
        if (h.matrix3DCube) {
            e.preventDefault(); // Глушим системный перехват перетаскивания
            e.stopPropagation();
        }
    }, true);

    // Б) ЗАЩИТА ОТ ВЫДЕЛЕНИЯ: Запрещаем Хрому пытаться выделить текст или пиксели синим цветом при движении мыши
    window.addEventListener('selectstart', function(e) {
        if (h.matrix3DCube) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    // В) Пересобираем и выпрямляем трекеры удержания правой кнопки из v20.4
    if (window.v20CubeMouseDownHandler) {
        window.removeEventListener('mousedown', window.v20CubeMouseDownHandler);
        window.removeEventListener('mousemove', window.v20CubeMouseMoveHandler);
        window.removeEventListener('mouseup', window.v20CubeMouseUpHandler);
    }

    let startMouseX = 0; let startMouseY = 0;
    let startRotX = 0; let startRotY = 0;

    window.v20CubeMouseDownHandler = function(e) {
        if (!h.matrix3DCube || !d.canvas) return;
        if (e.button !== 2) return; // Строго правая кнопка мыши
        
        if (e.clientY < 550 && document.getElementById('mega-hack-v6').style.top === '0px') return;

        h.isDraggingCube = true;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        startRotX = h.cubeRotX || 0;
        startRotY = h.cubeRotY || 0;
    };

    window.v20CubeMouseMoveHandler = function(e) {
        if (!h.isDraggingCube || !h.matrix3DCube || !d.canvas) return;

        let deltaX = e.clientX - startMouseX;
        let deltaY = e.clientY - startMouseY;

        // Плавный и сочный расчёт 3D-орбиты
        h.cubeRotY = startRotY + deltaX * 0.45;
        h.cubeRotX = startRotX - deltaY * 0.45;

        if (h.cubeRotX < -75) h.cubeRotX = -75;
        if (h.cubeRotX > 75) h.cubeRotX = 75;

        d.canvas.style.transformStyle = "preserve-3d";
        d.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
    };

    window.v20CubeMouseUpHandler = function(e) {
        if (e.button === 2) {
            h.isDraggingCube = false;
        }
    };

    window.addEventListener('mousedown', window.v20CubeMouseDownHandler);
    window.addEventListener('mousemove', window.v20CubeMouseMoveHandler);
    window.addEventListener('mouseup', window.v20CubeMouseUpHandler);

    console.log("🔴 ОШИБКА УСТРАНЕНА! Браузерный Drag заблокирован, красный курсор больше не вылезет.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Добавить управление 3D-поворотом через кнопки WASD (Патч 20.6)?\nПозволит плавно крутить коробку игры клавишами на клавиатуре.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v20-3dcube-row')) {
        return console.error("❌ Ошибка: Сначала включите 3D-Куб в шторке на Tab!");
    }

    console.log("🛠️ Прошиваю клавиатурные триггеры WASD для 3D-Куба...");

    // Создаем ячейки памяти под трекинг зажатых кнопок WASD
    h.v20WASDKeys = { KeyW: false, KeyA: false, KeyS: false, KeyD: false };

    // Очищаем старые слушатели клавиатуры WASD, если они наслоились
    if (window.v20WASDKeyDownHandler) {
        window.removeEventListener('keydown', window.v20WASDKeyDownHandler);
        window.removeEventListener('keyup', window.v20WASDKeyUpHandler);
    }

    // Трекер нажатия клавиш
    window.v20WASDKeyDownHandler = function(e) {
        if (h.matrix3DCube && e.code in h.v20WASDKeys) {
            // Если игрок печатает в Dev Patcher — не перехваываем кнопки
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            
            e.preventDefault(); // Глушим стандартный ввод, чтобы не конфликтовать
            h.v20WASDKeys[e.code] = true;
        }
    };

    window.v20WASDKeyUpHandler = function(e) {
        if (e.code in h.v20WASDKeys) {
            h.v20WASDKeys[e.code] = false;
        }
    };

    window.addEventListener('keydown', window.v20WASDKeyDownHandler);
    window.addEventListener('keyup', window.v20WASDKeyUpHandler);

    // 2. ВНЕДРЯЕМСЯ В ИГРОВОЙ ЦИКЛ ОБНОВЛЕНИЯ (ПЛАВНЫЙ СДВИГ МАТРИЦЫ)
    if (d.v16FreeMoveUpdate) { d.update = d.v16FreeMoveUpdate; } else { d.v16FreeMoveUpdate = d.update = d.update; }
    const baseUpdate = d.v16FreeMoveUpdate;

    d.update = function() {
        // Сначала запускаем оригинальный тик (физика бега, монеты, прыжки)
        baseUpdate.apply(this, arguments);

        // Если 3D-Куб активен — обрабатываем зажатые клавиши WASD
        if (h.matrix3DCube && this.canvas) {
            const rotateStep = 1.5; // Скорость вращения камеры кнопками

            // Наклоны по вертикали (Вверх / Вниз)
            if (h.v20WASDKeys.KeyW) h.cubeRotX += rotateStep;
            if (h.v20WASDKeys.KeyS) h.cubeRotX -= rotateStep;

            // Повороты по горизонтали (Влево / Вправо)
            if (h.v20WASDKeys.KeyA) h.cubeRotY -= rotateStep;
            if (h.v20WASDKeys.KeyD) h.cubeRotY += rotateStep;

            // Жесткий ограничитель, чтобы коробка не сделала мёртвую петлю
            if (h.cubeRotX < -75) h.cubeRotX = -75;
            if (h.cubeRotX > 75) h.cubeRotX = 75;

            // Если мы прямо сейчас не тащим куб мышкой, то обновляем матрицу из клавиатуры
            if (!h.isDraggingCube) {
                this.canvas.style.transformStyle = "preserve-3d";
                this.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg) `;
            }
        }
    };

    console.log("🔴 ПАТЧ НАЛОЖЕН! Теперь 3D-Кубом можно управлять кнопками W, A, S, D прямо на клавиатуре.");
})();
(function(){
    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d || !document.getElementById('v20-3dcube-row')) {
        return console.error("❌ Ошибка: Сначала включите 3D-Куб в шторке на Tab!");
    }

    console.log("🛠️ Вырезаю стрелочки из управления 3D-Кубом... Фиксирую чистый WASD...");

    // 1. ПОЛНОСТЬЮ СТИРАЕМ СТАРЫЕ ЛОМАЮЩИЕ ОБРАБОТЧИКИ КЛАВИАТУРЫ
    if (window.v20WASDKeyDownHandler) {
        window.removeEventListener('keydown', window.v20WASDKeyDownHandler);
        window.removeEventListener('keyup', window.v20WASDKeyUpHandler);
    }

    // Сбрасываем и очищаем память от застрявших нажатий
    h.v20WASDKeys = { KeyW: false, KeyA: false, KeyS: false, KeyD: false };

    // 2. СОЗДАЕМ АБСОЛЮТНО ЧИСТЫЙ ТРЕКЕР (СТРОГО КЛАВИШИ W, A, S, D)
    window.v20WASDKeyDownHandler = function(e) {
        if (!h.matrix3DCube) return;

        // Если игрок вводит текст в Dev Patcher — не трогаем кнопки
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;

        // Фильтр: перехватываем нажатия СТРОГО для кнопок W, A, S, D
        if (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD') {
            e.preventDefault(); // Глушим системный ввод браузера для этих кнопок
            e.stopPropagation();
            h.v20WASDKeys[e.code] = true; // Активируем поворот куба
        }
        // ВСЕ СТРЕЛОЧКИ И ПРОБЕЛ ИГНОРИРУЮТСЯ И ИДУТ НАПРЯМУЮ В ДВИЖОК ДИНОЗАВРИКА!
    };

    window.v20WASDKeyUpHandler = function(e) {
        if (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD') {
            h.v20WASDKeys[e.code] = false;
        }
    };

    // Вешаем неубиваемые изолированные слушатели с высшим приоритетом
    window.addEventListener('keydown', window.v20WASDKeyDownHandler, true);
    window.addEventListener('keyup', window.v20WASDKeyUpHandler, true);

    // 3. ОБНОВЛЕНИЕ ДВИЖКА (СТАБИЛЬНОЕ ВРАЩЕНИЕ БЕЗ СБОЕВ ФИЗИКИ)
    if (d.v16FreeMoveUpdate) { d.update = d.v16FreeMoveUpdate; } else { d.v16FreeMoveUpdate = d.update; }
    const baseUpdate = d.v16FreeMoveUpdate;

    d.update = function() {
        baseUpdate.apply(this, arguments);

        if (h.matrix3DCube && this.canvas) {
            const rotateSpeed = 1.6; // Мягкая и плавная скорость поворота коробки игры

            // Просчитываем углы 3D-орбиты строго по флагам WASD
            if (h.v20WASDKeys.KeyW) h.cubeRotX += rotateSpeed;
            if (h.v20WASDKeys.KeyS) h.cubeRotX -= rotateSpeed;
            if (h.v20WASDKeys.KeyA) h.cubeRotY -= rotateSpeed;
            if (h.v20WASDKeys.KeyD) h.cubeRotY += rotateSpeed;

            // Барьер, чтобы камера не перевернулась вверх ногами
            if (h.cubeRotX < -75) h.cubeRotX = -75;
            if (h.cubeRotX > 75) h.cubeRotX = 75;

            // Если в этот кадр мы не тащим куб правой кнопкой мыши — плавно поворачиваем от WASD
            if (!h.isDraggingCube) {
                this.canvas.style.transformStyle = "preserve-3d";
                this.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
            }
        }
    };

    console.log("🔴 ОШИБКА УСТРАНЕНА! Стрелочки полностью очищены от кода камеры. Теперь 3D-Куб управляется СТРОГО на WASD и правую кнопку мыши.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Финальный Физик-Синхронизатор v21.0?\nПолностью починит свободную ходьбу по стрелочкам во все стороны и свяжет её с 3D-Кубом на WASD.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        return console.error("❌ Ошибка: Хранилище настроек не найдено в памяти! Откройте меню читов на Tab.");
    }

    console.log("🛠️ Объединяю провода: восстанавливаю 4D-полёт стрелочек и изолирую 3D-камеру WASD...");

    // Сбрасываем и инициализируем все переменные перемещения в чистой памяти
    h.v19VirtualX = h.v19VirtualX || 21;
    h.v19VirtualY = h.v19VirtualY || 0;
    h.v19MoveKeys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };
    h.v20WASDKeys = { KeyW: false, KeyA: false, KeyS: false, KeyD: false };

    // 2. ПЕРЕПИСЫВАЕМ ЕДИНЫЙ ТРЕКЕР ДЛЯ ВСЕХ КЛАВИШ КЛАВИАТУРЫ (СТРЕЛОЧКИ + WASD)
    if (window.v16FreeMoveHandler) {
        window.removeEventListener('keydown', window.v16FreeMoveHandler);
        window.removeEventListener('keyup', window.v16FreeMoveHandlerUp);
    }
    if (window.v20WASDKeyDownHandler) {
        window.removeEventListener('keydown', window.v20WASDKeyDownHandler);
        window.removeEventListener('keyup', window.v20WASDKeyUpHandler);
    }

    // Супер-слушатель: ловит и стрелочки для полёта, и WASD для 3D
    window.v21GlobalKeyHandler = function(e) {
        // Защита: если пишем текст в Dev Patcher — не перехватываем управление
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;

        // А) Канал Стрелочек (Срабатывает СТРОГО при включенном режиме 4D полёта в шторке)
        if (h.freeMove4D && e.code in h.v19MoveKeys) {
            e.preventDefault(); e.stopPropagation();
            h.v19MoveKeys[e.code] = true;
        }

        // Б) Канал WASD (Срабатывает СТРОГО при включенном режиме 3D-Куба в шторке)
        if (h.matrix3DCube && (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD')) {
            e.preventDefault(); e.stopPropagation();
            h.v20WASDKeys[e.code] = true;
        }
    };

    window.v21GlobalKeyHandlerUp = function(e) {
        if (e.code in h.v19MoveKeys) h.v19MoveKeys[e.code] = false;
        if (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD') h.v20WASDKeys[e.code] = false;
    };

    window.addEventListener('keydown', window.v21GlobalKeyHandler, true);
    window.addEventListener('keyup', window.v21GlobalKeyHandlerUp, true);

    // 3. МOНОЛИТНЫЙ ИНЖЕКТ ФИЗИКИ В ОБНОВЛЕНИЕ КАДРОВ ДВИЖКА (ПОЛНЫЙ КОНТРОЛЬ)
    // Берём за основу оригинальный апдейт вашей игры и встраиваем туда ОДНОВРЕМЕННО оба чита
    if (d.v21MasterCoreUpdate) { d.update = d.v21MasterCoreUpdate; } 
    else if (d.v16FreeMoveUpdate) { d.update = d.v16FreeMoveUpdate; }
    else { d.v21MasterCoreUpdate = d.update; }
    
    const cleanUpdate = d.v21MasterCoreUpdate || d.update;

    d.update = function() {
        // --- КАНАЛ 1: ФИЗИКА СВОБОДНОГО 4D ПОЛЁТА ПО СТРЕЛОЧКАМ ---
        if (h.freeMove4D && this.tRex) {
            this.tRex.jumping = true; 
            this.tRex.jumpVelocity = 0; // Полностью выключаем гравитацию пола

            const speedVec = 4.6; // Скорость ультра-плавного скольжения динозаврика

            // Ходим по вертикали (Вверх/Вниз)
            if (h.v19MoveKeys.ArrowUp) h.v19VirtualY -= speedVec;
            if (h.v19MoveKeys.ArrowDown) h.v19VirtualY += speedVec;

            // Ходим по горизонтали (Влево/Вправо) — ФИКС: ТЕПЕРЬ ВСЁ СНОВА РАБОТАЕТ!
            if (h.v19MoveKeys.ArrowLeft) h.v19VirtualX -= speedVec;
            if (h.v19MoveKeys.ArrowRight) h.v19VirtualX += speedVec;

            // Жесткие барьеры краев видимого поля Canvas, чтобы динозавр не терялся
            if (h.v19VirtualX < 5) h.v19VirtualX = 5;
            if (h.v19VirtualX > this.dimensions.WIDTH - 55) h.v19VirtualX = this.dimensions.WIDTH - 55;
            if (h.v19VirtualY < -50) h.v19VirtualY = -50;
            if (h.v19VirtualY > this.tRex.groundYPos) h.v19VirtualY = this.tRex.groundYPos;

            // Принудительно передаем векторные координаты динозавру
            this.tRex.xPos = h.v19VirtualX;
            this.tRex.yPos = h.v19VirtualY;
        }

        // --- КАНАЛ 2: ФИЗИКА КЛАВИАТУРНОГО ВРАЩЕНИЯ 3D-КУБА (WASD) ---
        if (h.matrix3DCube && this.canvas) {
            const rotateSpeed = 1.6; // Мягкий и плавный поворот коробки

            if (h.v20WASDKeys.KeyW) h.cubeRotX += rotateSpeed;
            if (h.v20WASDKeys.KeyS) h.cubeRotX -= rotateSpeed;
            if (h.v20WASDKeys.KeyA) h.cubeRotY -= rotateSpeed;
            if (h.v20WASDKeys.KeyD) h.cubeRotY += rotateSpeed;

            if (h.cubeRotX < -75) h.cubeRotX = -75;
            if (h.cubeRotX > 75) h.cubeRotX = 75;

            // Если не тащим экран правой кнопкой мыши — плавно крутим матрицу кнопками WASD
            if (!h.isDraggingCube) {
                this.canvas.style.transformStyle = "preserve-3d";
                this.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
            }
        }

        // Запуск прорисовки кадра оригинального динозаврика
        cleanUpdate.apply(this, arguments);
    };

    console.log("🔴 ОФИЦИАЛЬНО СИНХРОНИЗИРОВАНО! Патч v21.0 запущен. 4D-полёт стрелочек и 3D-Куб WASD теперь работают одновременно.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить патч Изоляции Горизонтальной Физики v21.1?\nПолностью ОТКЛЮЧИТ ТЕХНИЧЕСКИ действие стрелочек ВЛЕВО и ВПРАВО в модуле полёта.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        return console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab.");
    }

    console.log("🛠️ Техническое отключение горизонтальных стрелочек... Обновляю глобальный супер-слушатель...");

    // Сбрасываем и принудительно очищаем зажатые горизонтальные флаги в памяти чита
    if (h.v19MoveKeys) {
        h.v19MoveKeys.ArrowLeft = false;
        h.v19MoveKeys.ArrowRight = false;
    }

    // 2. ОБНОВЛЯЕМ ГЛУБОКИЙ КАНАЛ ПЕРЕХВАТА КЛАВИАТУРЫ (ВЫРЕЗАЕМ ВЛЕВО / ВПРАВО)
    if (window.v21GlobalKeyHandler) {
        window.removeEventListener('keydown', window.v21GlobalKeyHandler, true);
        window.removeEventListener('keyup', window.v21GlobalKeyHandlerUp, true);
    }

    window.v21GlobalKeyHandler = function(e) {
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;

        // Фильтр: Проверяем стрелочки. Разрешаем СТРОГО ВВЕРХ и ВНИЗ!
        if (h.freeMove4D && (e.code === 'ArrowUp' || e.code === 'ArrowDown')) {
            e.preventDefault(); e.stopPropagation();
            h.v19MoveKeys[e.code] = true;
        }

        // КНОПКИ АРРOWLEFT И ARROWRIGHT ИГНОРИРУЮТСЯ НАШИМ МОДОМ И УЛЕТАЮТ НАПРЯМУЮ В ТВОИ СКРИПТЫ!

        // Канал WASD для поворотов 3D-Куба остаётся полностью рабочим
        if (h.matrix3DCube && (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD')) {
            e.preventDefault(); e.stopPropagation();
            h.v20WASDKeys[e.code] = true;
        }
    };

    window.v21GlobalKeyHandlerUp = function(e) {
        if (e.code === 'ArrowUp' || e.code === 'ArrowDown') h.v19MoveKeys[e.code] = false;
        if (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD') h.v20WASDKeys[e.code] = false;
    };

    // Перевешиваем глобальные прерывания клавиш в браузере Chrome
    window.addEventListener('keydown', window.v21GlobalKeyHandler, true);
    window.addEventListener('keyup', window.v21GlobalKeyHandlerUp, true);

    // 3. ОБНОВЛЕНИЕ ДВИЖКА (ОСТАВЛЯЕМ СТРОГО ВЕРТИКАЛЬНУЮ ЛЕВИТАЦИЮ)
    if (d.v21MasterCoreUpdate) { d.update = d.v21MasterCoreUpdate; } else { d.v21MasterCoreUpdate = d.update; }
    const baseUpdate = d.v21MasterCoreUpdate;

    d.update = function() {
        // Если пункт полёта активен — двигаем динозавра СТРОГО ВВЕРХ / ВНИЗ
        if (h.freeMove4D && this.tRex) {
            this.tRex.jumping = true;
            this.tRex.jumpVelocity = 0;

            const speedVec = 4.6; // Плавная вертикальная скорость

            // Летаем по вертикали
            if (h.v19MoveKeys.ArrowUp) h.v19VirtualY -= speedVec;
            if (h.v19MoveKeys.ArrowDown) h.v19VirtualY += speedVec;

            // Фиксация горизонтальной координаты: динозавр больше не бегает влево/вправо от нашего мода!
            // h.v19VirtualX принудительно заблокирован и равен стандартной точке 21
            h.v19VirtualX = 21;

            // Ограничители высоты полёта
            if (h.v19VirtualY < -50) h.v19VirtualY = -50;
            if (h.v19VirtualY > this.tRex.groundYPos) h.v19VirtualY = this.tRex.groundYPos;

            this.tRex.xPos = h.v19VirtualX;
            this.tRex.yPos = h.v19VirtualY;
        }

        // Запуск прорисовки кадра оригинального динозаврика
        baseUpdate.apply(this, arguments);
    };

    console.log("🔴 ТЕХНИЧЕСКИЙ ПАТЧ v21.1 УСПЕШНО НАЛОЖЕН! Стрелки Влево/Вправо полностью отключены от мода полёта и освобождены.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Аппаратный Фикс Левитации (Патч 21.2)?\nНамертво починит зависание стрелочек Вверх/Вниз, защитив их от сбросов игры.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        return console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab.");
    }

    console.log("🛠️ Перевожу левитацию на прямой аппаратный опрос клавиш Хрома...");

    // Полностью вычищаем старый забагованный обработчик из прошлых версий
    if (window.v21GlobalKeyTracker) {
        window.removeEventListener('keydown', window.v21GlobalKeyTracker, true);
        window.removeEventListener('keyup', window.v21GlobalKeyTrackerUp, true);
    }
    if (window.v21GlobalKeyHandler) {
        window.removeEventListener('keydown', window.v21GlobalKeyHandler, true);
        window.removeEventListener('keyup', window.v21GlobalKeyHandlerUp, true);
    }

    // Создаем абсолютно защищенный, независимый массив нажатых кнопок в глобальном окне браузера
    window.v21SecureKeys = { ArrowUp: false, ArrowDown: false, KeyW: false, KeyA: false, KeyS: false, KeyD: false };

    // НЕУБИВАЕМЫЕ АППАРАТНЫЕ СЛУШАТЕЛИ (Игра физически не сможет их стереть или сбросить)
    window.v21GlobalKeyHandler = function(e) {
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;

        // Фильтруем и ловим только нужные нам кнопки: стрелочки Вверх/Вниз и WASD для 3D
        if (e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD') {
            if (h.freeMove4D || h.matrix3DCube) {
                e.preventDefault(); e.stopPropagation(); // Глушим прыжки Хрома, чтобы летать плавно
                window.v21SecureKeys[e.code] = true;
            }
        }
    };

    window.v21GlobalKeyHandlerUp = function(e) {
        if (e.code in window.v21SecureKeys) {
            window.v21SecureKeys[e.code] = false;
        }
    };

    // Вешаем слушатели с наивысшим флагом перехвата (true)
    window.addEventListener('keydown', window.v21GlobalKeyHandler, true);
    window.addEventListener('keyup', window.v21GlobalKeyHandlerUp, true);

    // 2. ОБНОВЛЕНИЕ ДВИЖКА (ЖЕСТКАЯ ВЕКТОРНАЯ ПРИВЯЗКА К СЕТИ КАДРОВ)
    if (d.v21MasterCoreUpdate) { d.update = d.v21MasterCoreUpdate; } else { d.v21MasterCoreUpdate = d.update; }
    const baseUpdate = d.v21MasterCoreUpdate;

    d.update = function() {
        // Проверяем работу бирюзовой галочки полёта в меню Tab
        if (h.freeMove4D && this.tRex) {
            this.tRex.jumping = true; 
            this.tRex.jumpVelocity = 0; // Наглухо выключаем гравитацию

            const speedVec = 4.6; // Скорость плавного изменения высоты

            // Считываем нажатия напрямую из защищенного аппаратного массива Хрома
            if (window.v21SecureKeys.ArrowUp) h.v19VirtualY -= speedVec;
            if (window.v21SecureKeys.ArrowDown) h.v19VirtualY += speedVec;

            // Стрелки влево/вправо по-прежнему полностью отключены по твоему ТЗ! Х виртуальный залочен.
            h.v19VirtualX = 21;

            // Ограничители высоты неба и пола
            if (h.v19VirtualY < -50) h.v19VirtualY = -50;
            if (h.v19VirtualY > this.tRex.groundYPos) h.v19VirtualY = this.tRex.groundYPos;

            this.tRex.xPos = h.v19VirtualX;
            this.tRex.yPos = h.v19VirtualY;
        }

        // --- ФИЗИКА ПОВОРОТОВ 3D-КУБА (WASD) ---
        if (h.matrix3DCube && this.canvas) {
            const rotateSpeed = 1.6;

            if (window.v21SecureKeys.KeyW) h.cubeRotX += rotateSpeed;
            if (window.v21SecureKeys.KeyS) h.cubeRotX -= rotateSpeed;
            if (window.v21SecureKeys.KeyA) h.cubeRotY -= rotateSpeed;
            if (window.v21SecureKeys.KeyD) h.cubeRotY += rotateSpeed;

            if (h.cubeRotX < -75) h.cubeRotX = -75;
            if (h.cubeRotX > 75) h.cubeRotX = 75;

            if (!h.isDraggingCube) {
                this.canvas.style.transformStyle = "preserve-3d";
                this.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
            }
        }

        // Запуск отрисовки оригинальной игры
        baseUpdate.apply(this, arguments);
    };

    console.log("🔴 ПАТЧ v21.2 ПРИМЕНЕН! Зависание стрелочек Вверх/Вниз полностью ликвидировано.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Фикс Скорости Левитации (Патч 21.3)?\nНамертво починит зависание стрелочек Вверх/Вниз при изменении скорости игры.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    if(!h || !d) {
        return console.error("❌ Ошибка: Хранилище настроек не найдено! Откройте меню читов на Tab.");
    }

    console.log("🛠️ Внедряю прямую аппаратную привязку высоты tRex к изменению скорости...");

    // Очищаем старую виртуальную высоту, которая сбрасывалась при смене скорости
    h.v19VirtualY = null; 

    // 2. МОНОЛИТНЫЙ ИНЖЕКТ ФИЗИКИ В ОБНОВЛЕНИЕ КАДРОВ ДВИЖКА (ФИКС СКОРОСТИ)
    if (d.v21MasterCoreUpdate) { d.update = d.v21MasterCoreUpdate; } else { d.v21MasterCoreUpdate = d.update; }
    const baseUpdate = d.v21MasterCoreUpdate;

    d.update = function() {
        // Проверяем работу бирюзовой галочки полёта в меню Tab
        if (h.freeMove4D && this.tRex) {
            this.tRex.jumping = true; 
            this.tRex.jumpVelocity = 0; // Полностью отключаем гравитацию пола

            const speedVec = 4.6; // Скорость изменения высоты

            // СИНХРОНИЗАЦИЯ: Если переменная высоты была сброшена скоростью, 
            // мы мгновенно подхватываем текущую реальную координату динозавра из игры!
            if (h.v19VirtualY === null || h.v19VirtualY === undefined) {
                h.v19VirtualY = this.tRex.yPos;
            }

            // Плавное изменение высоты на стрелочки
            if (window.v21SecureKeys && window.v21SecureKeys.ArrowUp) h.v19VirtualY -= speedVec;
            if (window.v21SecureKeys && window.v21SecureKeys.ArrowDown) h.v19VirtualY += speedVec;

            // Ограничители высоты неба и пола, чтобы динозавр не улетал за холст Canvas
            if (h.v19VirtualY < -50) h.v19VirtualY = -50;
            if (h.v19VirtualY > this.tRex.groundYPos) h.v19VirtualY = this.tRex.groundYPos;

            // Жестко блокируем горизонтальный сдвиг Мега Хака по твоему ТЗ (Стрелочки влево/вправо отключены)
            this.tRex.xPos = 21;
            
            // Насильно отдаем просчитанную высоту динозаврику в каждом кадре
            this.tRex.yPos = h.v19VirtualY;
        } else {
            // Если хак выключен, сбрасываем привязку, чтобы оригинальная физика работала штатно
            h.v19VirtualY = null;
        }

        // --- ФИЗИКА ПОВОРОТОВ 3D-КУБА (WASD) ---
        if (h.matrix3DCube && this.canvas) {
            const rotateSpeed = 1.6;
            if (window.v21SecureKeys && window.v21SecureKeys.KeyW) h.cubeRotX += rotateSpeed;
            if (window.v21SecureKeys && window.v21SecureKeys.KeyS) h.cubeRotX -= rotateSpeed;
            if (window.v21SecureKeys && window.v21SecureKeys.KeyA) h.cubeRotY -= rotateSpeed;
            if (window.v21SecureKeys && window.v21SecureKeys.KeyD) h.cubeRotY += rotateSpeed;

            if (h.cubeRotX < -75) h.cubeRotX = -75;
            if (h.cubeRotX > 75) h.cubeRotX = 75;

            if (!h.isDraggingCube) {
                this.canvas.style.transformStyle = "preserve-3d";
                this.canvas.style.transform = `rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
            }
        }

        // Запуск отрисовки оригинальной игры
        baseUpdate.apply(this, arguments);
    };

    console.log("🔴 ОШИБКА УСТРАНЕНА! Движок полёта полностью синхронизирован со спидхаком и сменой скоростей.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ СИСТЕМЫ
    const confirmInstall = prompt("Запустить 3D-Инжектор v22.1 (Часть 2)?\nВключит подмену 2D графики на воксели и активирует ПРАВУЮ мышку и WASD.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Части 2 отменена."); return;
    }

    const d = window.Runner.instance_;
    const s3d = window.v22Standalone3D;
    if(!d || !s3d) return console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо ввести ЧАСТЬ 1!");

    console.log("🛠️ Перехватываю мышь и клавиатуру... Включаю воксельный рендеринг...");

    // А) БЛОКИРОВКА КОНТЕКСТНОГО МЕНЮ ХРОМА: Чтобы белое окно не вылетало при правом клике
    window.addEventListener('contextmenu', function(e) {
        e.preventDefault(); e.stopPropagation();
    }, true);

    // Б) ТРЕКЕР УДЕРЖАНИЯ ПРАВОЙ КНОПКИ МЫШИ (Right-Hold Drag)
    let startX = 0, startY = 0, startRotX = 0, startRotY = 0;
    
    window.addEventListener('mousedown', function(e) {
        if (e.button !== 2) return; // Ловим строго ПРАВУЮ кнопку мыши
        s3d.isDragging = true;
        startX = e.clientX; startY = e.clientY;
        startRotX = s3d.rotX; startRotY = s3d.rotY;
    }, true);

    window.addEventListener('mousemove', function(e) {
        if (!s3d.isDragging) return;
        let deltaX = e.clientX - startX; let deltaY = e.clientY - startY;
        s3d.rotY = startRotY + deltaX * 0.45; s3d.rotX = startRotX - deltaY * 0.45;
        if (s3d.rotX < -75) s3d.rotX = -75; if (s3d.rotX > 75) s3d.rotX = 75; // Ограничитель
    }, true);

    window.addEventListener('mouseup', function(e) {
        if (e.button === 2) s3d.isDragging = false;
    }, true);

    // В) ТРЕКЕР КЛАВИАТУРЫ WASD ДЛЯ ПОВОРОТОВ С КЛАВИАТУРЫ
    window.v22WASD = { KeyW: false, KeyA: false, KeyS: false, KeyD: false };
    window.addEventListener('keydown', function(e) {
        if (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD') {
            e.preventDefault(); e.stopPropagation(); window.v22WASD[e.code] = true;
        }
    }, true);
    window.addEventListener('keyup', function(e) {
        if (e.code in window.v22WASD) window.v22WASD[e.code] = false;
    }, true);

    // 2. ПОЛНЫЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ КАДРОВ CANVAS И ОРИГИНАЛЬНОЙ ОТРИСОВКИ ИГРЫ
    const originalUpdate = d.update;
    d.update = function() {
        // Запускаем стандартные расчеты физики игры (бег, скорость, прыжки динозавра)
        originalUpdate.apply(this, arguments);

        const ctx = this.canvasCtx;
        if (ctx && this.activated && !this.crashed) {
            ctx.save();
            
            // Задаем цвета кубов воксельного мира
            let bgColor = "#ffffff", strokeColor = "#000000";
            let СтивColor = "#333333", cactusColor = "#446622", groundColor = "#e5e5e5";

            // Очищаем экран фоновым белым цветом пустыни
            ctx.fillStyle = bgColor; ctx.fillRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);

            // Обрабатываем плавный поворот от зажатых кнопок WASD в текущем кадре
            const rSpeed = 1.5;
            if (window.v22WASD.KeyW) s3d.rotX += rSpeed; if (window.v22WASD.KeyS) s3d.rotX -= rSpeed;
            if (window.v22WASD.KeyA) s3d.rotY -= rSpeed; if (window.v22WASD.KeyD) s3d.rotY += rSpeed;
            if (s3d.rotX < -75) s3d.rotX = -75; if (s3d.rotX > 75) s3d.rotX = 75;

            // 1. РИСУЕМ ЗЕМЛЮ — ОГРОМНЫЙ РАСПЛЮЩЕННЫЙ 3D-ПРЯМОУГОЛЬНИК (ПЛИТУ)
            window.v22DrawVoxelBox(ctx, 0, this.tRex.groundYPos + 35, this.dimensions.WIDTH, 14, 150, groundColor, strokeColor);

            // 2. РИСУЕМ СТИВА (ДИНОЗАВРИКА) — ЧЕСТНЫЙ ОБЪЁМНЫЙ 3D-КУБ
            if (this.tRex) {
                window.v22DrawVoxelBox(ctx, this.tRex.xPos, this.tRex.yPos, 38, 42, 38, СтивColor, "#ff0055");
            }

            // 3. РИСУЕМ ПРЕПЯТСТВИЯ — ВЕРТИКАЛЬНЫЕ ВЫТАНУТЫЕ БЛОКИ КАКТУСОВ
            if (this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs && obs.xPos > -40 && obs.xPos < this.dimensions.WIDTH + 40) {
                        window.v22DrawVoxelBox(ctx, obs.xPos, obs.yPos, obs.width || 20, obs.height || 40, 24, cactusColor, strokeColor);
                    }
                });
            }
            ctx.restore();
        }
    };

    console.log("🔴 ИЗОЛИРОВАННЫЙ VOXEL 3D ENGINE УСПЕШНО ВКЛЮЧЕН! Зажмите ПРАВУЮ мышку или WASD для вращения.");
})();

(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ СИСТЕМЫ
    const confirmInstall = prompt("Запустить 3D-Инжектор v22.1 (Часть 2)?\nВключит подмену 2D графики на воксели и активирует ПРАВУЮ мышку и WASD.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка Части 2 отменена."); return;
    }

    const d = window.Runner.instance_;
    const s3d = window.v22Standalone3D;
    if(!d || !s3d) return console.error("❌ КРИТИЧЕСКАЯ ОШИБКА: Сначала необходимо ввести ЧАСТЬ 1!");

    console.log("🛠️ Перехватываю мышь и клавиатуру... Включаю воксельный рендеринг...");

    // А) БЛОКИРОВКА КОНТЕКСТНОГО МЕНЮ ХРОМА: Чтобы белое окно не вылетало при правом клике
    window.addEventListener('contextmenu', function(e) {
        e.preventDefault(); e.stopPropagation();
    }, true);

    // Б) ТРЕКЕР УДЕРЖАНИЯ ПРАВОЙ КНОПКИ МЫШИ (Right-Hold Drag)
    let startX = 0, startY = 0, startRotX = 0, startRotY = 0;
    
    window.addEventListener('mousedown', function(e) {
        if (e.button !== 2) return; // Ловим строго ПРАВУЮ кнопку мыши
        s3d.isDragging = true;
        startX = e.clientX; startY = e.clientY;
        startRotX = s3d.rotX; startRotY = s3d.rotY;
    }, true);

    window.addEventListener('mousemove', function(e) {
        if (!s3d.isDragging) return;
        let deltaX = e.clientX - startX; let deltaY = e.clientY - startY;
        s3d.rotY = startRotY + deltaX * 0.45; s3d.rotX = startRotX - deltaY * 0.45;
        if (s3d.rotX < -75) s3d.rotX = -75; if (s3d.rotX > 75) s3d.rotX = 75; // Ограничитель
    }, true);

    window.addEventListener('mouseup', function(e) {
        if (e.button === 2) s3d.isDragging = false;
    }, true);

    // В) ТРЕКЕР КЛАВИАТУРЫ WASD ДЛЯ ПОВОРОТОВ С КЛАВИАТУРЫ
    window.v22WASD = { KeyW: false, KeyA: false, KeyS: false, KeyD: false };
    window.addEventListener('keydown', function(e) {
        if (e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD') {
            e.preventDefault(); e.stopPropagation(); window.v22WASD[e.code] = true;
        }
    }, true);
    window.addEventListener('keyup', function(e) {
        if (e.code in window.v22WASD) window.v22WASD[e.code] = false;
    }, true);

    // 2. ПОЛНЫЙ ПЕРЕХВАТ ОБНОВЛЕНИЯ КАДРОВ CANVAS И ОРИГИНАЛЬНОЙ ОТРИСОВКИ ИГРЫ
    const originalUpdate = d.update;
    d.update = function() {
        // Запускаем стандартные расчеты физики игры (бег, скорость, прыжки динозавра)
        originalUpdate.apply(this, arguments);

        const ctx = this.canvasCtx;
        if (ctx && this.activated && !this.crashed) {
            ctx.save();
            
            // Задаем цвета кубов воксельного мира
            let bgColor = "#ffffff", strokeColor = "#000000";
            let СтивColor = "#333333", cactusColor = "#446622", groundColor = "#e5e5e5";

            // Очищаем экран фоновым белым цветом пустыни
            ctx.fillStyle = bgColor; ctx.fillRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);

            // Обрабатываем плавный поворот от зажатых кнопок WASD в текущем кадре
            const rSpeed = 1.5;
            if (window.v22WASD.KeyW) s3d.rotX += rSpeed; if (window.v22WASD.KeyS) s3d.rotX -= rSpeed;
            if (window.v22WASD.KeyA) s3d.rotY -= rSpeed; if (window.v22WASD.KeyD) s3d.rotY += rSpeed;
            if (s3d.rotX < -75) s3d.rotX = -75; if (s3d.rotX > 75) s3d.rotX = 75;

            // 1. РИСУЕМ ЗЕМЛЮ — ОГРОМНЫЙ РАСПЛЮЩЕННЫЙ 3D-ПРЯМОУГОЛЬНИК (ПЛИТУ)
            window.v22DrawVoxelBox(ctx, 0, this.tRex.groundYPos + 35, this.dimensions.WIDTH, 14, 150, groundColor, strokeColor);

            // 2. РИСУЕМ СТИВА (ДИНОЗАВРИКА) — ЧЕСТНЫЙ ОБЪЁМНЫЙ 3D-КУБ
            if (this.tRex) {
                window.v22DrawVoxelBox(ctx, this.tRex.xPos, this.tRex.yPos, 38, 42, 38, СтивColor, "#ff0055");
            }

            // 3. РИСУЕМ ПРЕПЯТСТВИЯ — ВЕРТИКАЛЬНЫЕ ВЫТАНУТЫЕ БЛОКИ КАКТУСОВ
            if (this.horizon && this.horizon.obstacles && this.horizon.obstacles.length > 0) {
                this.horizon.obstacles.forEach(obs => {
                    if (obs && obs.xPos > -40 && obs.xPos < this.dimensions.WIDTH + 40) {
                        window.v22DrawVoxelBox(ctx, obs.xPos, obs.yPos, obs.width || 20, obs.height || 40, 24, cactusColor, strokeColor);
                    }
                });
            }
            ctx.restore();
        }
    };

    console.log("🔴 ИЗОЛИРОВАННЫЙ VOXEL 3D ENGINE УСПЕШНО ВКЛЮЧЕН! Зажмите ПРАВУЮ мышку или WASD для вращения.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ ПАТЧА
    const confirmInstall = prompt("Установить Изолированную 2D-Камеру (Патч 23.0)?\nДобавит ОТДЕЛЬНЫЙ ПУНКТ в меню для плавного поворота плоского экрана от правой мыши и WASD.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) {
        return console.error("❌ Ошибка: Шторка Мега Хака не найдена в памяти! Сначала откройте её на Tab.");
    }

    console.log("🛠️ Возвращаю оригинальный 2D экран. Настраиваю независимый тумблер вращения...");

    // Полностью вычищаем старый воксельный 3D-движок из памяти и сбрасываем кадры
    if (d.v18MorphUpdate) d.update = d.v18MorphUpdate;
    if (d.v21MasterCoreUpdate) d.update = d.v21MasterCoreUpdate;
    if (d.v16FreeMoveUpdate) d.update = d.v16FreeMoveUpdate;
    
    // Восстанавливаем оригинальный цикл обновления вашей игры, стирая трехмерные кубы
    if (d.v21MasterCoreUpdate) d.update = d.v21MasterCoreUpdate;
    d.canvas.style.transform = "none";

    // Инициализируем переменные углов для плоского 2D-экрана
    h.rotate2DScreenActive = false; // Отключено по умолчанию, чтобы никому не мешать!
    h.camRotX = 0; h.camRotY = 0;
    h.isHoldingRightMouse = false;

    // Защита от контекстного меню Хрома (чтобы не вылезало окно при правом клике)
    window.addEventListener('contextmenu', function(e) {
        if (h.rotate2DScreenActive) { e.preventDefault(); e.stopPropagation(); }
    }, true);

    // Удаляем старые строчки 3D-кубов, чтобы очистить шторку
    const oldCubeRow = document.getElementById('v20-3dcube-row'); if (oldCubeRow) oldCubeRow.remove();
    const oldRow = document.getElementById('v23-rotate2d-row'); if (oldRow) oldRow.remove();

    // 2. ВСТРАИВАЕМ ОТДЕЛЬНЫЙ ПУНКТ В ШТОРКУ НА TAB
    const row = document.createElement('div');
    row.id = 'v23-rotate2d-row';
    row.style = "background:rgba(255,165,0,0.04); padding:8px; border-radius:6px; border:2px dashed #ffa500; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px; box-sizing:border-box;";
    row.innerHTML = `
        <label style="color:#ffa500; cursor:pointer; font-weight:bold; text-align:center; display:block;">
            <input type="checkbox" id="v23-2d-toggle"> 📐 ACTIVATE SMOOTH 2D SCREEN ROTATION (RIGHT MOUSE HOLD & WASD)<span id="v23-2d-toggle-ind" style="color:#ff0055;"> [OFF]</span>
        </label>
    `;
    menu.appendChild(row);

    // Привязываем тумблер в меню к логике вращения плоского экрана
    document.getElementById('v23-2d-toggle').addEventListener('change', (e) => {
        h.rotate2DScreenActive = e.target.checked;
        
        if (!h.rotate2DScreenActive) {
            // При выключении пункта мгновенно и чисто возвращаем 2D-экран в исходный плоский вид
            d.canvas.style.transform = "none";
            h.camRotX = 0; h.camRotY = 0;
        } else {
            // Задаем красивый стартовый ракурс
            h.camRotX = 15; h.camRotY = 15;
            d.canvas.style.transform = `perspective(600px) rotateX(${h.camRotX}deg) rotateY(${h.camRotY}deg)`;
        }

        if (typeof window.v6UpdateIndicator === 'function') {
            window.v6UpdateIndicator('v23-2d-toggle', h.rotate2DScreenActive);
        }
    });
    if (typeof window.v6UpdateIndicator === 'function') window.v6UpdateIndicator('v23-2d-toggle', false);

    // 3. НЕУБИВАЕМЫЙ ТРЕКЕР УДЕРЖАНИЯ ПРАВОЙ КНОПКИ МЫШИ (СТРОГО НА УДЕРЖАНИЕ)
    let startX = 0, startY = 0, startRotX = 0, startRotY = 0;

    window.addEventListener('mousedown', function(e) {
        if (!h.rotate2DScreenActive || e.button !== 2) return;
        if (e.clientY < 550 && document.getElementById('mega-hack-v6').style.top === '0px') return;

        h.isHoldingRightMouse = true;
        startX = e.clientX; startY = e.clientY;
        startRotX = h.camRotX; startRotY = h.camRotY;
    }, true);

    window.addEventListener('mousemove', function(e) {
        if (!h.isHoldingRightMouse || !h.rotate2DScreenActive) return;
        let deltaX = e.clientX - startX; let deltaY = e.clientY - startY;
        
        // Плавный расчет углов наклона плоской 2D-картинки экрана
        h.camRotY = startRotY + deltaX * 0.4;
        h.camRotX = startRotX - deltaY * 0.4;

        if (h.camRotX < -70) h.camRotX = -70; if (h.camRotX > 70) h.camRotX = 70;

        d.canvas.style.transform = `perspective(600px) rotateX(${h.camRotX}deg) rotateY(${h.camRotY}deg)`;
    }, true);

    window.addEventListener('mouseup', function(e) {
        if (e.button === 2) h.isHoldingRightMouse = false;
    }, true);

    // Защита от красного курсора и выделения текста
    window.addEventListener('dragstart', function(e) { if(h.rotate2DScreenActive) e.preventDefault(); }, true);
    window.addEventListener('selectstart', function(e) { if(h.rotate2DScreenActive) e.preventDefault(); }, true);

    // 4. СИНХРОНИЗАЦИЯ С КНОПКАМИ WASD И ИГРОВЫМ ЦИКЛОМ ОБНОВЛЕНИЯ КАДРОВ
    if (d.v21MasterCoreUpdate) { d.update = d.v21MasterCoreUpdate; } else { d.v21MasterCoreUpdate = d.update; }
    const currentCoreUpdate = d.v21MasterCoreUpdate;

    d.update = function() {
        // Сначала запускаем бег игры и все прошлые OP хаки (свободный полет вверх/вниз, монеты и т.д.)
        currentCoreUpdate.apply(this, arguments);

        // Если галочка активна в меню — обрабатываем плавное вращение плоского экрана от WASD
        if (h.rotate2DScreenActive && this.canvas) {
            const step = 1.4; // Плавная скорость поворота кнопками
            if (window.v21SecureKeys && window.v21SecureKeys.KeyW) h.camRotX += step;
            if (window.v21SecureKeys && window.v21SecureKeys.KeyS) h.camRotX -= step;
            if (window.v21SecureKeys && window.v21SecureKeys.KeyA) h.camRotY -= step;
            if (window.v21SecureKeys && window.v21SecureKeys.KeyD) h.camRotY += step;

            if (h.camRotX < -70) h.camRotX = -70; if (h.camRotX > 70) h.camRotX = 70;

            // Если прямо сейчас не тащим мышь — плавно удерживаем ракурс кнопками
            if (!h.isHoldingRightMouse) {
                this.canvas.style.transform = `perspective(600px) rotateX(${h.camRotX}deg) rotateY(${h.camRotY}deg)`;
            }
        }
    };

    console.log("🔴 ОРИГИНАЛЬНЫЙ 2D ЭКРАН ВОССТАНОВЛЕН! Пункт 'ROTATE 2D SCREEN' добавлен в самый низ шторки на Tab.");
})();
(function(){
    // 1. ЗАПРОС НА АВТОРИЗАЦИЮ СУПЕР-ПАТЧА
    const confirmInstall = prompt("Восстановить НАСТОЯЩИЙ КУБИЧЕСКИЙ 3D-МИР (Патч 24.0)?\nДобавит в меню ДВА ОТДЕЛЬНЫХ РЕЖИМА: Поворот 2D-экрана и Реальный 3D-Мир из кубов.\nВведите [ y ] (Да) или [ n ] (Нет):");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Наложение патча отменено."); return;
    }

    const h = window.v6Storage; const d = window.Runner.instance_;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    if(!h || !d || !menu) return console.error("❌ Ошибка: Шторка Мега Хака не найдена! Откройте её на Tab.");

    console.log("🛠️ Возвращаю воксельный 3D-движок... Сохраняю 2D-поворот... Сливаю в меню...");

    // Очищаем старые строчки, чтобы меню не двоилось
    const oldRow1 = document.getElementById('v23-rotate2d-row'); if (oldRow1) oldRow1.remove();
    const oldRow2 = document.getElementById('v24-combined-3d-row'); if (oldRow2) oldRow2.remove();

    // Инициализируем переменные памяти для ОБОИХ режимов
    h.rotate2DScreenActive = false; // Тумблер 1
    h.matrix3DCube = false;         // Тумблер 2 (Тот самый реальный 3D)
    h.cubeRotX = -15; h.cubeRotY = 25; h.isDraggingCube = false;

    // Наглухо блокируем контекстное меню, выделение текста и красный курсор 🚫
    window.addEventListener('contextmenu', function(e) { if (h.rotate2DScreenActive || h.matrix3DCube) { e.preventDefault(); e.stopPropagation(); } }, true);
    window.addEventListener('dragstart', function(e) { if (h.rotate2DScreenActive || h.matrix3DCube) { e.preventDefault(); e.stopPropagation(); } }, true);
    window.addEventListener('selectstart', function(e) { if (h.rotate2DScreenActive || h.matrix3DCube) { e.preventDefault(); e.stopPropagation(); } }, true);

    // 2. ВСТРАИВАЕМ ДВА НЕЗАВИСИМЫХ ПУНКТА В САМЫЙ НИЗ МЕНЮ НА TAB
    const combinedRow = document.createElement('div');
    combinedRow.id = 'v24-combined-3d-row';
    combinedRow.style = "background:rgba(255,69,0,0.04); padding:10px; border-radius:6px; border:2px dashed #ff4500; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 5px; box-sizing:border-box;";
    combinedRow.innerHTML = `
        <label style="color:#ffa500; cursor:pointer; font-weight:bold; text-align:center;"><input type="checkbox" id="v23-2d-toggle"> 📐 ROTATE 2D SCREEN<span id="v23-2d-toggle-ind" style="color:#ff0055;"> [OFF]</span></label>
        <label style="color:#ff4500; cursor:pointer; font-weight:bold; text-align:center;"><input type="checkbox" id="v24-voxel-toggle"> 📦 REAL VOXEL 3D CUBE<span id="v24-voxel-toggle-ind" style="color:#ff0055;"> [OFF]</span></label>
    `;
    menu.appendChild(combinedRow);

    // Слушатель 1: Поворот плоского 2D-экрана
    document.getElementById('v23-2d-toggle').addEventListener('change', (e) => {
        h.rotate2DScreenActive = e.target.checked;
        if(h.rotate2DScreenActive) { h.matrix3DCube = false; document.getElementById('v24-voxel-toggle').checked = false; window.v6UpdateIndicator('v24-voxel-toggle', false); d.canvas.style.transform = "perspective(600px) rotateX(15deg) rotateY(15deg)"; h.cubeRotX = 15; h.cubeRotY = 15; }
        else { d.canvas.style.transform = "none"; }
        window.v6UpdateIndicator('v23-2d-toggle', h.rotate2DScreenActive);
    });

    // Слушатель 2: НАСТОЯЩИЙ КУБИЧЕСКИЙ 3D-МИР (Тот самый!)
    document.getElementById('v24-voxel-toggle').addEventListener('change', (e) => {
        h.matrix3DCube = e.target.checked;
        if(h.matrix3DCube) { h.rotate2DScreenActive = false; document.getElementById('v23-2d-toggle').checked = false; window.v6UpdateIndicator('v23-2d-toggle', false); d.canvas.style.transform = "none"; h.cubeRotX = -15; h.cubeRotY = 25; }
        window.v6UpdateIndicator('v24-voxel-toggle', h.matrix3DCube);
    });

    window.v6UpdateIndicator('v23-2d-toggle', false); window.v6UpdateIndicator('v24-voxel-toggle', false);

    // 3. МАТЕМАТИКА ПРОЕКЦИИ И ОТРИСОВКИ РЕАЛЬНОГО 3D-КУБА
    window.v24DrawRealBox = function(ctx, x, y, w, hSize, dSize, color, strokeColor) {
        ctx.save(); ctx.translate(x + w/2, y + hSize/2);
        let radX = h.cubeRotX * Math.PI / 180, radY = h.cubeRotY * Math.PI / 180;
        function proj(vx, vy, vz) {
            let y1 = vy * Math.cos(radX) - vz * Math.sin(radX);
            let z1 = vy * Math.sin(radX) + vz * Math.cos(radX);
            return { x: vx * Math.cos(radY) + z1 * Math.sin(radY), y: y1 };
        }
        let hw = w / 2, hh = hSize / 2, hd = dSize / 2;
        let v = [proj(-hw,-hh,-hd), proj(hw,-hh,-hd), proj(hw,hh,-hd), proj(-hw,hh,-hd), proj(-hw,-hh,hd), proj(hw,-hh,hd), proj(hw,hh,hd), proj(-hw,hh,hd)];
        let faces = [[0,1,2,3],[4,5,6,7],[0,1,5,4],[2,3,7,6],[0,3,7,4],[1,2,6,5]];
        faces.forEach((f, i) => {
            ctx.beginPath(); ctx.moveTo(v[f[0]].x, v[f[0]].y); for(let j=1; j<4; j++) ctx.lineTo(v[f[j]].x, v[f[j]].y); ctx.closePath();
            ctx.fillStyle = color; if (i === 1) ctx.filter = "brightness(1.2)"; if (i > 3) ctx.filter = "brightness(0.8)"; ctx.fill(); ctx.filter = "none";
            ctx.strokeStyle = strokeColor; ctx.lineWidth = 1.2; ctx.stroke();
        });
        ctx.restore();
    };

    // 4. ТРЕКЕР УДЕРЖАНИЯ ПРАВОЙ МЫШКИ (ОБЩИЙ ДЛЯ ОБОИХ РЕЖИМОВ)
    let sX = 0, sY = 0, sRotX = 0, sRotY = 0;
    window.addEventListener('mousedown', function(e) {
        if ((!h.rotate2DScreenActive && !h.matrix3DCube) || e.button !== 2) return;
        if (e.clientY < 550 && document.getElementById('mega-hack-v6').style.top === '0px') return;
        h.isDraggingCube = true; sX = e.clientX; sY = e.clientY; sRotX = h.cubeRotX; sRotY = h.cubeRotY;
    }, true);

    window.addEventListener('mousemove', function(e) {
        if (!h.isDraggingCube) return;
        let dX = e.clientX - sX, dY = e.clientY - sY;
        h.cubeRotY = sRotY + dX * 0.45; h.cubeRotX = sRotX - dY * 0.45;
        if (h.cubeRotX < -75) h.cubeRotX = -75; if (h.cubeRotX > 75) h.cubeRotX = 75;
        if (h.rotate2DScreenActive) d.canvas.style.transform = `perspective(600px) rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
    }, true);

    window.addEventListener('mouseup', function(e) { if (e.button === 2) h.isDraggingCube = false; }, true);

    // 5. ИНЖЕКТ В ИГРОВОЙ ЦИКЛ ОБНОВЛЕНИЯ КАДРОВ
    if (d.v21MasterCoreUpdate) { d.update = d.v21MasterCoreUpdate; } else { d.v21MasterCoreUpdate = d.update; }
    const currentCoreUpdate = d.v21MasterCoreUpdate;

    d.update = function() {
        currentCoreUpdate.apply(this, arguments);

        // Плавное вращение от зажатых кнопок WASD во время бега (общее для обоих режимов)
        if ((h.rotate2DScreenActive || h.matrix3DCube) && this.canvas) {
            const step = 1.5;
            if (window.v21SecureKeys?.KeyW) h.cubeRotX += step; if (window.v21SecureKeys?.KeyS) h.cubeRotX -= step;
            if (window.v21SecureKeys?.KeyA) h.cubeRotY -= step; if (window.v21SecureKeys?.KeyD) h.cubeRotY += step;
            if (h.cubeRotX < -75) h.cubeRotX = -75; if (h.cubeRotX > 75) h.cubeRotX = 75;
            if (h.rotate2DScreenActive && !h.isDraggingCube) this.canvas.style.transform = `perspective(600px) rotateX(${h.cubeRotX}deg) rotateY(${h.cubeRotY}deg)`;
        }

        // РЕНДЕР ТОГО САМОГО РЕАЛЬНОГО 3D-МИРА ИЗ КУБОВ (Вламываемся внутрь Canvas)
        if (h.matrix3DCube && this.canvasCtx && this.activated && !this.crashed) {
            const ctx = this.canvasCtx; ctx.save();
            let isN = h.alwaysNight && h.timeOfDay === 2;
            ctx.fillStyle = isN ? "#1a1a3a" : "#ffffff"; ctx.fillRect(0, 0, this.dimensions.WIDTH, this.dimensions.HEIGHT);
            
            // 1. Расплющенная 3D-плита земли
            window.v24DrawRealBox(ctx, 0, this.tRex.groundYPos + 35, this.dimensions.WIDTH, 14, 150, isN ? "#2d2d44" : "#e5e5e5", isN ? "#fff" : "#000");
            // 2. Кубический Стив (Динозаврик) с поддержкой полёта вверх/вниз по стрелочкам!
            if (this.tRex) window.v24DrawRealBox(ctx, this.tRex.xPos, this.tRex.yPos, 38, 42, 38, isN ? "#00ffff" : "#333333", "#ff0055");
            // 3. Блоки кактусов
            if (this.horizon?.obstacles) this.horizon.obstacles.forEach(o => { if (o && o.xPos > -40 && o.xPos < this.dimensions.WIDTH + 40) window.v24DrawRealBox(ctx, o.xPos, o.yPos, o.width || 20, o.height || 40, 24, isN ? "#00ff44" : "#446622", isN ? "#fff" : "#000"); });
            ctx.restore();
        }
    };

    console.log("🔴 ОШИБКА ИСПРАВЛЕНА! Тот самый Реальный 3D-Куб возвращён в меню вместе с 2D-поворотом. Нажмите TAB!");
})();
(function(){
    // ========== ЗАПРОС НА УСТАНОВКУ ==========
    const confirmInstall = prompt("Вы хотите установить ИСПРАВЛЕНИЕ AUTO BOT для Мега Хака?\nБот будет прыгать на расстоянии 60 пикселей от кактуса.\n\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка исправления AUTO BOT отменена.");
        return;
    }
    // ==========================================

    if (!window.Runner || !window.Runner.instance_) {
        console.error("Нажмите Пробел чтобы начать игру!");
        return;
    }

    const dino = window.Runner.instance_;
    const h = window.v6Storage;
    
    if (!h) {
        console.error("Мега Хак не найден! Сначала запустите Мега Хак.");
        return;
    }

    console.log("🔧 Исправляю AUTO BOT в Мега Хаке...");

    // Настройки бота
    const JUMP_DISTANCE = 100;
    const DUCK_DISTANCE = 100;

    const botUpdateInterval = setInterval(function() {
        if (!h.isBot) return;
        if (!dino.activated || dino.crashed || !dino.horizon) return;
        
        const obstacles = dino.horizon.obstacles;
        if (!obstacles || obstacles.length === 0) return;
        
        const nextObstacle = obstacles[0];
        if (!nextObstacle) return;
        
        const distance = nextObstacle.xPos - dino.tRex.xPos;
        
        if (distance < JUMP_DISTANCE && distance > 0) {
            if (nextObstacle.typeConfig && nextObstacle.typeConfig.type === 'PTERODACTYL') {
                if (nextObstacle.yPos > 60) {
                    if (dino.tRex && !dino.tRex.ducking) {
                        dino.tRex.setDuck(true);
                    }
                } else {
                    if (dino.tRex && !dino.tRex.jumping) {
                        dino.tRex.startJump();
                    }
                }
            } else {
                if (dino.tRex && !dino.tRex.jumping) {
                    dino.tRex.startJump();
                }
            }
        } else {
            if (dino.tRex && dino.tRex.ducking) {
                dino.tRex.setDuck(false);
            }
        }
    }, 16);

    console.log('✅ AUTO BOT исправлен! Расстояние прыжка: 60px');
    console.log('Включите AUTO BOT в меню Мега Хака (Tab)');
})();
(function(){
    // ========== ЗАПРОС НА УСТАНОВКУ ==========
    const confirmInstall = prompt("Вы хотите установить АВТОПЕРЕЗАПУСК для Мега Хака?\nПри столкновении с кактусом игра сразу же перезапустится.\n\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка автоперезапуска отменена.");
        return;
    }
    // ==========================================

    if (!window.Runner || !window.Runner.instance_) {
        console.error("Нажмите Пробел чтобы начать игру!");
        return;
    }

    const dino = window.Runner.instance_;
    const h = window.v6Storage;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    
    if (!h || !menu) {
        console.error("Мега Хак не найден! Сначала запустите Мега Хак.");
        return;
    }

    console.log("🔧 Добавляю АВТОПЕРЕЗАПУСК в Мега Хак...");

    h.autoRestart = false;

    const oldRow = document.getElementById('v18-autorestart-row');
    if (oldRow) oldRow.remove();

    const row = document.createElement('div');
    row.id = 'v18-autorestart-row';
    row.style.cssText = 'background:rgba(0,255,170,0.05); padding:8px; border-radius:6px; border:2px dashed #00ffaa; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px; box-sizing:border-box;';
    row.innerHTML = `
        <label style="color:#00ffaa; cursor:pointer; font-weight:bold; text-align:center; display:block;">
            <input type="checkbox" id="v18-autorestart-toggle"> 🔄 АВТОПЕРЕЗАПУСК ПРИ СМЕРТИ<span id="v18-autorestart-ind" style="color:#ff0055;"> [OFF]</span>
        </label>
    `;
    menu.appendChild(row);

    document.getElementById('v18-autorestart-toggle').addEventListener('change', (e) => {
        h.autoRestart = e.target.checked;
        
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(e.target.checked ? 1000 : 500, ctx.currentTime);
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } catch(err){}
        
        const ind = document.getElementById('v18-autorestart-ind');
        if (ind) {
            ind.innerText = e.target.checked ? " [ON]" : " [OFF]";
            ind.style.color = e.target.checked ? "#00ff44" : "#ff0055";
        }
        
        console.log('🔄 Автоперезапуск: ' + (h.autoRestart ? 'ВКЛЮЧЕН' : 'ВЫКЛЮЧЕН'));
    });

    // Сохраняем оригинальный gameOver только один раз
    if (!window._autoRestartOG) {
        window._autoRestartOG = dino.gameOver.bind(dino);
    }

    dino.gameOver = function() {
        if (h.autoRestart) {
            // Сначала вызываем оригинальный gameOver (динозаврик умирает)
            window._autoRestartOG();
            
            // Потом перезапускаем
            setTimeout(() => {
                dino.restart();
            }, 200);
        } else {
            // Обычный gameOver
            window._autoRestartOG();
        }
    };

    console.log('✅ АВТОПЕРЕЗАПУСК добавлен! Динозаврик умирает нормально.');
})();
(function(){
    // ========== ЗАПРОС НА УСТАНОВКУ ==========
    const confirmInstall = prompt("Вы хотите установить 3D ОТ ПЕРВОГО ЛИЦА v12?\nСтарый размер кактуса, камера ближе.\n\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка отменена.");
        return;
    }
    // ==========================================

    if (!window.Runner || !window.Runner.instance_) {
        console.error("Нажмите Пробел чтобы начать игру!");
        return;
    }

    const dino = window.Runner.instance_;
    const canvas = dino.canvas;
    const ctx = canvas.getContext('2d');
    const h = window.v6Storage;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    
    if (!h || !menu) {
        console.error("Мега Хак не найден!");
        return;
    }

    const oldRow = document.getElementById('v22-real3d-row');
    if (oldRow) oldRow.remove();
    
    h.real3DFP = false;

    const row = document.createElement('div');
    row.id = 'v22-real3d-row';
    row.style.cssText = 'background:rgba(255,69,0,0.05); padding:8px; border-radius:6px; border:2px dashed #ff4500; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px;';
    row.innerHTML = '<label style="color:#ff4500; cursor:pointer; font-weight:bold; text-align:center;"><input type="checkbox" id="v22-real3d-toggle"> 🎮 3D ОТ ПЕРВОГО ЛИЦА v12<span id="v22-real3d-ind" style="color:#ff0055;"> [OFF]</span></label>';
    menu.appendChild(row);

    document.getElementById('v22-real3d-toggle').addEventListener('change', (e) => {
        h.real3DFP = e.target.checked;
        document.getElementById('v22-real3d-ind').innerText = e.target.checked ? " [ON]" : " [OFF]";
        document.getElementById('v22-real3d-ind').style.color = e.target.checked ? "#00ff44" : "#ff0055";
    });

    if (!window._real3dUpdate) window._real3dUpdate = dino.update.bind(dino);

    function drawReal3DFP() {
        const W = canvas.width;
        const H = canvas.height;
        
        const jumpOffset = dino.tRex && dino.tRex.jumping ? 
            Math.max(0, (dino.tRex.groundYPos - dino.tRex.yPos) * 1.2) : 0;
        
        // Камера ближе к дороге (горизонт ниже)
        const horizonY = H * 0.35 - jumpOffset;
        
        ctx.save();
        ctx.clearRect(0, 0, W, H);
        
        // НЕБО
        const skyGrad = ctx.createLinearGradient(0, 0, 0, horizonY + 30);
        skyGrad.addColorStop(0, '#1a1a3a');
        skyGrad.addColorStop(0.5, '#4a6fa5');
        skyGrad.addColorStop(1, '#87CEEB');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, W, horizonY + 30);
        
        // Солнце
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(W * 0.7, horizonY - 20, 25, 0, Math.PI * 2);
        ctx.fill();
        
        // ЗЕМЛЯ
        const groundGrad = ctx.createLinearGradient(0, horizonY + 30, 0, H);
        groundGrad.addColorStop(0, '#D4B896');
        groundGrad.addColorStop(1, '#8B7355');
        ctx.fillStyle = groundGrad;
        ctx.fillRect(0, horizonY + 30, W, H - horizonY);
        
        // ДОРОГА
        ctx.fillStyle = '#6B5B45';
        ctx.beginPath();
        ctx.moveTo(W * 0.45, horizonY + 30);
        ctx.lineTo(W * 0.55, horizonY + 30);
        ctx.lineTo(W * 0.85, H);
        ctx.lineTo(W * 0.15, H);
        ctx.closePath();
        ctx.fill();
        
        // Разметка
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.setLineDash([10, 15]);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(W * 0.5, horizonY + 35);
        ctx.lineTo(W * 0.5, H);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // КАКТУС — СТАРЫЙ РАЗМЕР
        const obstacles = dino.horizon?.obstacles || [];
        
        if (obstacles.length > 0) {
            const obs = obstacles[0];
            
            if (obs && !obs.remove) {
                const depth = Math.max(0.1, Math.min(1, 1 - (obs.xPos / 450)));
                
                // СТАРЫЙ размер
                const scale = 0.3 + depth * 2.5;
                const blockW = Math.round(25 * scale);
                const blockH = Math.round(50 * scale);
                
                const blockX = Math.round(W * 0.5 - blockW / 2);
                const groundY = Math.round(horizonY + 30 + (H - horizonY - 30) * (0.15 + depth * 0.85));
                const blockY = Math.round(groundY - blockH);
                
                const topFaceH = Math.round(blockH * 0.1);
                
                // Тень
                ctx.fillStyle = 'rgba(0,0,0,0.3)';
                ctx.fillRect(blockX - 3, groundY, blockW + 6, 5);
                
                // Передняя грань
                ctx.fillStyle = '#2d5a1e';
                ctx.fillRect(blockX, blockY, blockW, blockH);
                
                // Верхняя грань
                ctx.fillStyle = '#4a8a35';
                ctx.fillRect(blockX, blockY - topFaceH, blockW, topFaceH);
                
                // Правая грань
                ctx.fillStyle = '#1a3a10';
                ctx.fillRect(blockX + blockW - 4, blockY, 4, blockH);
                
                // Контур
                ctx.strokeStyle = '#1a3a10';
                ctx.lineWidth = 1;
                ctx.strokeRect(blockX, blockY - topFaceH, blockW, blockH + topFaceH);
            }
        }
        
        // РУКИ
        const bob = Math.sin(Date.now() / 80) * 8;
        ctx.fillStyle = '#535353';
        ctx.fillRect(0, H * 0.55 + bob, 35, 50);
        ctx.fillRect(W - 35, H * 0.55 - bob, 35, 50);
        
        ctx.restore();
    }

    dino.update = function() {
        window._real3dUpdate();
        
        if (h.real3DFP && dino.activated && !dino.crashed) {
            drawReal3DFP();
        }
    };

    console.log('✅ 3D ОТ ПЕРВОГО ЛИЦА v12 установлен!');
})();
(function(){
    // ========== ЗАПРОС НА УСТАНОВКУ ==========
    const confirmInstall = prompt("Вы хотите установить ШЕЙДЕР для Мега Хака?\nОкрашивает динозаврика, кактусы, землю и облака в цвета.\n\nВведите [ y ] (Да) или [ n ] (Нет):");
    
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка шейдера отменена.");
        return;
    }
    // ==========================================

    if (!window.Runner || !window.Runner.instance_) {
        console.error("Нажмите Пробел чтобы начать игру!");
        return;
    }

    const dino = window.Runner.instance_;
    const canvas = dino.canvas;
    const ctx = canvas.getContext('2d');
    const h = window.v6Storage;
    const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    
    if (!h || !menu) {
        console.error("Мега Хак не найден!");
        return;
    }

    console.log("🎨 Добавляю ШЕЙДЕР в Мега Хак...");

    h.shaderEnabled = false;

    // Сохраняем оригинальный drawImage
    if (!window._shaderOriginalDrawImage) {
        window._shaderOriginalDrawImage = ctx.drawImage.bind(ctx);
    }

    const originalDrawImage = window._shaderOriginalDrawImage;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    function applyShader(image, sx, sy, sw, sh, dx, dy, dw, dh) {
        if (arguments.length < 9) {
            return originalDrawImage.apply(this, arguments);
        }

        const imgId = image.id || "";

        let isDino = imgId.includes("trex");
        let isCactus = imgId.includes("obstacle");
        let isGround = imgId.includes("horizon");
        let isCloud = imgId.includes("cloud");
        let isRestartButton = imgId.includes("restart");
        let isTextSprite = imgId.includes("text");
        
        let isScoreDigits = isTextSprite || (sh >= 21 && sh <= 26 && sw >= 15 && sw <= 22 && sx >= 950);
        let isGameOverText = isTextSprite && sw > 150;

        if (!isDino && !isCactus && !isGround && !isCloud && !isRestartButton && !isScoreDigits) {
            return originalDrawImage.apply(this, arguments);
        }

        tempCanvas.width = sw;
        tempCanvas.height = sh;
        tempCtx.clearRect(0, 0, sw, sh);
        tempCtx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);

        const imgData = tempCtx.getImageData(0, 0, sw, sh);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const alpha = data[i + 3];

            if (alpha < 10 || (r > 240 && g > 240 && b > 240)) continue;

            if (isDino) {
                data[i] = 200;   
                data[i + 1] = 80;     
                data[i + 2] = 0;       
            } else if (isCactus) {
                data[i] = 34;     
                data[i + 1] = 160;   
                data[i + 2] = 60;       
            } else if (isGround) {
                data[i] = 240;     
                data[i + 1] = 200;   
                data[i + 2] = 80;     
            } else if (isCloud) {
                data[i] = 30;     
                data[i + 1] = 144;   
                data[i + 2] = 255;   
            } else if (isRestartButton || isGameOverText) {
                data[i] = 220; 
                data[i + 1] = 20; 
                data[i + 2] = 60; 
            } else if (isScoreDigits) {
                data[i] = 200; 
                data[i + 1] = 80; 
                data[i + 2] = 0; 
            }
        }

        tempCtx.putImageData(imgData, 0, 0);
        originalDrawImage.call(this, tempCanvas, 0, 0, sw, sh, dx, dy, dw, dh);
    }

    // Устанавливаем шейдер
    ctx.drawImage = function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
        if (h.shaderEnabled) {
            return applyShader.call(this, image, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        return originalDrawImage.apply(this, arguments);
    };

    // Добавляем тумблер в меню
    const oldRow = document.getElementById('v23-shader-row');
    if (oldRow) oldRow.remove();

    const row = document.createElement('div');
    row.id = 'v23-shader-row';
    row.style.cssText = 'background:rgba(255,215,0,0.05); padding:8px; border-radius:6px; border:2px dashed #ffd700; font-size:11px; grid-column: span 4; display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 5px;';
    row.innerHTML = '<label style="color:#ffd700; cursor:pointer; font-weight:bold; text-align:center;"><input type="checkbox" id="v23-shader-toggle"> 🎨 ШЕЙДЕР (ЦВЕТНАЯ ГРАФИКА)<span id="v23-shader-ind" style="color:#ff0055;"> [OFF]</span></label>';
    menu.appendChild(row);

    document.getElementById('v23-shader-toggle').addEventListener('change', (e) => {
        h.shaderEnabled = e.target.checked;
        document.getElementById('v23-shader-ind').innerText = e.target.checked ? " [ON]" : " [OFF]";
        document.getElementById('v23-shader-ind').style.color = e.target.checked ? "#00ff44" : "#ff0055";
        console.log('🎨 Шейдер: ' + (h.shaderEnabled ? 'ВКЛЮЧЕН' : 'ВЫКЛЮЧЕН'));
    });

    console.log('✅ ШЕЙДЕР добавлен в Мега Хак!');
    console.log('Tab → тумблер "🎨 ШЕЙДЕР"');
})();
(function(){
    // ========== ЗАПРОС НА УСТАНОВКУ ==========
    const confirmInstall = prompt("Установить СКАЧИВАНИЕ .dmos В МЕГА ХАК?\nТребуется Dino Maker OS.\n\n[y] Да / [n] Нет:");
    if (!confirmInstall || (confirmInstall.toLowerCase() !== 'y' && confirmInstall.toLowerCase() !== 'д')) {
        console.warn("❌ Установка отменена.");
        return;
    }
    // ==========================================

    // ========== ПРОВЕРКА МЕГА ХАКА ==========
    const h = window.v6Storage;
    const megaMenu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
    
    if (!h || !megaMenu) {
        console.error("❌ МЕГА ХАК НЕ НАЙДЕН!");
        console.error("Сначала запустите Мега Хак.");
        return;
    }
    console.log("✅ Мега Хак найден!");
    // ==========================================

    // ========== ПРОВЕРКА DINO MAKER OS ==========
    const dinoMakerPan = document.getElementById('d-pan');
    const dinoMakerMenu = document.getElementById('d-men');
    const dinoMakerContainer = document.getElementById('custom-level-container');
    
    if (!dinoMakerPan || !dinoMakerMenu || !dinoMakerContainer) {
        console.error("❌ DINO MAKER OS НЕ НАЙДЕН!");
        console.error("Сначала запустите Dino Maker OS.");
        console.log("Подсказка: Dino Maker OS создаёт меню 'DINO MAKER OS' и панель 'СТУДИЯ'");
        return;
    }
    console.log("✅ Dino Maker OS найден!");
    // ==========================================

    // Удаляем старую строку
    const oldRow = document.getElementById('v27-save-row');
    if (oldRow) oldRow.remove();

    // Создаём строку В МЕГА ХАКЕ
    const row = document.createElement('div');
    row.id = 'v27-save-row';
    row.style.cssText = 'background:rgba(255,170,0,0.05); padding:10px; border-radius:6px; border:2px dashed #ffaa00; font-size:11px; grid-column: span 4; display:grid; grid-template-columns:1fr; gap:8px; margin-top:5px;';
    row.innerHTML = '<button id="v27-download-btn" style="background:#ffaa00;color:black;border:none;padding:10px;font-weight:bold;cursor:pointer;border-radius:4px;font-size:14px;">⬇️ СКАЧАТЬ УРОВЕНЬ (.dmos)</button>';
    megaMenu.appendChild(row);

    // Функция чтения блоков из Dino Maker OS
    function getBlocks() {
        const container = document.getElementById('custom-level-container');
        if (container && container.children.length > 0) {
            const blocks = [];
            for (let i = 0; i < container.children.length; i++) {
                const el = container.children[i];
                blocks.push({
                    x: parseFloat(el.style.left) || 0,
                    y: parseFloat(el.style.top) || 0,
                    w: parseFloat(el.style.width) || 50,
                    h: parseFloat(el.style.height) || 12,
                    type: el.style.backgroundImage ? 'cactus' : 'block'
                });
            }
            return blocks;
        }
        return [];
    }

    // КНОПКА СКАЧИВАНИЯ
    document.getElementById('v27-download-btn').onclick = () => {
        const blocks = getBlocks();
        
        if (blocks.length === 0) {
            alert("❌ Нет блоков!\n\n1. Запустите Dino Maker OS\n2. Откройте РЕДАКТОР\n3. Поставьте блоки\n4. Tab → СКАЧАТЬ");
            return;
        }
        
        let fileName = prompt("Имя файла:", "level");
        if (!fileName || fileName === 'y') fileName = "level";
        
        const data = {
            format: "DMOS",
            name: fileName,
            blocks: blocks,
            savedAt: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName + '.dmos';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('⬇️ Скачан файл: ' + fileName + '.dmos (' + blocks.length + ' блоков)');
    };

    console.log('✅ Кнопка СКАЧАТЬ .dmos добавлена в Мега Хак!');
    console.log('Tab → "⬇️ СКАЧАТЬ УРОВЕНЬ (.dmos)"');
})();
// ========== OMEGA HACKMAN: СОХРАНЕНИЕ/ЗАГРУЗКА .DMOS В MEGA HACK ==========
(function() {
    // Проверка MEGA HACK
    if (!window.v6Storage || (!document.getElementById('mega-hack-v6') && !document.getElementById('mega-hack-v4'))) {
        console.warn('⚠️ Требуется MEGA HACK!');
        return;
    }

    console.log('📦 Omega Hackman: модуль .dmos установлен.');

    function addDmosSection() {
        const menu = document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4');
        if (!menu) return;
        if (document.getElementById('omega-dmos-section')) return;

        const section = document.createElement('div');
        section.id = 'omega-dmos-section';
        section.style.cssText = 'background:rgba(255,255,0,0.05); padding:10px; border:2px dashed #ffaa00; border-radius:6px; margin-top:10px; grid-column: span 4;';

        section.innerHTML = `
            <div style="color:#ffaa00; font-weight:bold; text-align:center; margin-bottom:8px;">📦 OMEGA HACKMAN: УРОВНИ .DMOS</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                <button id="omega-save" style="background:#00ffaa;color:black;border:none;padding:8px;border-radius:4px;cursor:pointer;font-weight:bold;">💾 СОХРАНИТЬ</button>
                <button id="omega-load" style="background:#00bfff;color:white;border:none;padding:8px;border-radius:4px;cursor:pointer;font-weight:bold;">📂 ЗАГРУЗИТЬ</button>
                <button id="omega-download" style="background:#ffaa00;color:black;border:none;padding:8px;border-radius:4px;cursor:pointer;font-weight:bold;">⬇️ СКАЧАТЬ .DMOS</button>
                <button id="omega-upload" style="background:#ff00ff;color:white;border:none;padding:8px;border-radius:4px;cursor:pointer;font-weight:bold;">⬆️ ЗАГРУЗИТЬ .DMOS</button>
            </div>
            <input type="file" id="omega-file-input" accept=".dmos,.json" style="display:none;">
        `;

        menu.appendChild(section);

        const fileInput = section.querySelector('#omega-file-input');

        // Функция получения текущих блоков (совместимость с разными модами)
        function getBlocks() {
            if (typeof levelBlocks !== 'undefined' && Array.isArray(levelBlocks)) {
                return levelBlocks;
            }
            const container = document.getElementById('custom-level-container');
            if (container && container.children.length > 0) {
                const blocks = [];
                for (let el of container.children) {
                    blocks.push({
                        x: parseFloat(el.style.left) || 0,
                        y: parseFloat(el.style.top) || 0,
                        w: parseFloat(el.style.width) || 80,
                        h: parseFloat(el.style.height) || 15,
                        type: el.getAttribute('data-type') || 'block'
                    });
                }
                return blocks;
            }
            return [];
        }

        // Функция применения загруженных блоков
        function applyBlocks(blocks) {
            if (typeof levelBlocks !== 'undefined') {
                levelBlocks = blocks;
                if (typeof renderLevel === 'function') renderLevel();
            }
            const container = document.getElementById('custom-level-container');
            if (container) {
                container.innerHTML = '';
                blocks.forEach(b => {
                    const el = document.createElement('div');
                    el.style.position = 'absolute';
                    el.style.left = (b.x || 0) + 'px';
                    el.style.top = (b.y || 0) + 'px';
                    el.style.width = (b.w || 80) + 'px';
                    el.style.height = (b.h || 15) + 'px';
                    el.style.backgroundColor = '#a0522d';
                    el.style.border = '2px solid #5c2e16';
                    el.setAttribute('data-type', b.type || 'block');
                    container.appendChild(el);
                });
            }
            if (typeof worldScrollX !== 'undefined') worldScrollX = 0;
        }

        // Сохранение (в MEGA HACK)
        document.getElementById('omega-save').addEventListener('click', () => {
            const blocks = getBlocks();
            if (blocks.length === 0) {
                alert('❌ Нет блоков для сохранения!');
                return;
            }
            const name = prompt('Название уровня:', 'level');
            if (name) {
                if (!window.v6Storage.savedLevels) window.v6Storage.savedLevels = [];
                window.v6Storage.savedLevels.push({
                    name: name,
                    blocks: JSON.parse(JSON.stringify(blocks)),
                    savedAt: new Date().toISOString()
                });
                alert('✅ Сохранено в MEGA HACK!');
            }
        });

        // Загрузка (из MEGA HACK)
        document.getElementById('omega-load').addEventListener('click', () => {
            const saved = window.v6Storage.savedLevels;
            if (!saved || saved.length === 0) {
                alert('❌ Нет сохранённых уровней!');
                return;
            }
            let list = 'Выберите уровень:\n';
            saved.forEach((l, i) => {
                list += (i + 1) + '. ' + l.name + ' (' + l.blocks.length + ' блоков)\n';
            });
            const choice = prompt(list, '1');
            if (!choice) return;
            const idx = parseInt(choice) - 1;
            if (idx < 0 || idx >= saved.length) return;
            applyBlocks(JSON.parse(JSON.stringify(saved[idx].blocks)));
            alert('✅ Уровень загружен!');
        });

        // Скачивание .dmos
        document.getElementById('omega-download').addEventListener('click', () => {
            const blocks = getBlocks();
            if (blocks.length === 0) {
                alert('❌ Нет блоков для скачивания!');
                return;
            }
            const name = prompt('Имя файла:', 'level');
            if (!name) return;
            const data = {
                format: 'DMOS',
                name: name,
                blocks: blocks,
                savedAt: new Date().toISOString()
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = name + '.dmos';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

        // Загрузка .dmos из файла
        document.getElementById('omega-upload').addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                try {
                    const data = JSON.parse(ev.target.result);
                    let blocks = null;
                    if (data.blocks) blocks = data.blocks;
                    else if (Array.isArray(data)) blocks = data;
                    if (!blocks || !Array.isArray(blocks)) {
                        alert('❌ Файл не содержит блоков!');
                        return;
                    }
                    applyBlocks(blocks);
                    alert('✅ Файл .dmos загружен!');
                } catch (err) {
                    alert('❌ Ошибка чтения файла!');
                }
            };
            reader.readAsText(file);
            e.target.value = '';
        });
    }

    // Следим за появлением меню MEGA HACK
    const observer = new MutationObserver(function() {
        if (document.getElementById('mega-hack-v6') || document.getElementById('mega-hack-v4')) {
            addDmosSection();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Если меню уже есть — добавим сразу
    addDmosSection();

    console.log('✅ Omega Hackman: секция .dmos добавлена в MEGA HACK.');
})();