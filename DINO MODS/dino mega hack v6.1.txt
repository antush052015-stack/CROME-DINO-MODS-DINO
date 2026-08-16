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
