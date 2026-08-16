(function(){
    if (!window.Runner || !window.Runner.instance_) {
        console.error("Нажмите Пробел чтобы начать игру!");
        return;
    }

    const dino = window.Runner.instance_;
    const canvas = dino.canvas;
    
    // ========== НАСТРОЙКИ БОТА ==========
    const BOT_ENABLED = true;           // Бот включен
    const JUMP_DISTANCE = 100;          // На каком расстоянии прыгать (пиксели)
    const DUCK_DISTANCE = 100;          // На каком расстоянии приседать (для птиц)
    // ====================================

    let botRunning = false;

    function botJump() {
        if (!dino.tRex || !dino.activated || dino.crashed) return;
        
        if (!dino.tRex.jumping) {
            dino.tRex.startJump();
        }
    }

    function botDuck() {
        if (!dino.tRex || !dino.activated || dino.crashed) return;
        
        if (!dino.tRex.ducking) {
            dino.tRex.setDuck(true);
        }
    }

    function botStopDuck() {
        if (dino.tRex && dino.tRex.ducking) {
            dino.tRex.setDuck(false);
        }
    }

    function botUpdate() {
        if (!BOT_ENABLED || !dino.horizon || !dino.activated || dino.crashed) return;
        
        const obstacles = dino.horizon.obstacles;
        if (!obstacles || obstacles.length === 0) {
            botStopDuck();
            return;
        }
        
        const nextObstacle = obstacles[0];
        if (!nextObstacle) return;
        
        const distance = nextObstacle.xPos - dino.tRex.xPos;
        
        // Если препятствие близко
        if (distance < JUMP_DISTANCE && distance > 0) {
            
            // Проверяем тип препятствия
            if (nextObstacle.typeConfig && nextObstacle.typeConfig.type === 'PTERODACTYL') {
                // Птица - приседаем или прыгаем в зависимости от высоты
                if (nextObstacle.yPos > 60) {
                    botDuck();
                } else {
                    botJump();
                }
            } else {
                // Кактус - прыгаем
                botJump();
            }
        } else {
            botStopDuck();
        }
    }

    // Запускаем бота
    botRunning = true;
    setInterval(botUpdate, 16); // ~60 раз в секунду

    console.log('🤖 БОТ ЗАПУЩЕН! Он будет автоматически прыгать через препятствия.');
    console.log('Расстояние прыжка: ' + JUMP_DISTANCE + 'px');
})();