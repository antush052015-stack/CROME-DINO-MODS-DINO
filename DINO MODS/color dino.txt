(function() { 
    if (!window.Runner || !window.Runner.instance_) { 
        console.error("Сначала начните игру (нажмите Пробел), а затем вставляйте код!"); 
        return; 
    } 

    const canvas = window.Runner.instance_.canvas; 
    const ctx = canvas.getContext('2d'); 
    const originalDrawImage = ctx.drawImage; 

    const tempCanvas = document.createElement('canvas'); 
    const tempCtx = tempCanvas.getContext('2d'); 

    ctx.drawImage = function(image, sx, sy, sw, sh, dx, dy, dw, dh) { 
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
        
        // Цифры счета и текст "Game Over"
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
                // Коричневый динозаврик
                data[i] = 200;   
                data[i + 1] = 80;     
                data[i + 2] = 0;       
            } else if (isCactus) { 
                // Зеленые кактусы
                data[i] = 34;     
                data[i + 1] = 160;   
                data[i + 2] = 60;       
            } else if (isGround) { 
                // Песочная земля
                data[i] = 240;     
                data[i + 1] = 200;   
                data[i + 2] = 80;     
            } else if (isCloud) { 
                // Голубые облака
                data[i] = 30;     
                data[i + 1] = 144;   
                data[i + 2] = 255;   
            } else if (isRestartButton || isGameOverText) { 
                // Красный текст смерти
                data[i] = 220; 
                data[i + 1] = 20; 
                data[i + 2] = 60; 
            } else if (isScoreDigits) { 
                // Оранжевые цифры счета
                data[i] = 200; 
                data[i + 1] = 80; 
                data[i + 2] = 0; 
            } 
        } 

        tempCtx.putImageData(imgData, 0, 0); 
        originalDrawImage.call(this, tempCanvas, 0, 0, sw, sh, dx, dy, dw, dh); 
    }; 

    console.log("Шейдер готов! Всё окрашено по вашей финальной супер-схеме."); 
})();
