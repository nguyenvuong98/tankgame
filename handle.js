function Random(a,b) {
    return Math.floor(Math.random()*(b-a+1)) - a;
}
function moveTank(obj) {
    document.addEventListener('keydown',(e) => {
        if (e.which === 39 && obj.x <= (width - obj.dx)) {
            obj.x += 5;
            obj.Xbullet.x = obj.x + obj.dx;   
            obj.Xbullet.y = obj.y + obj.dy/2 - 4; 
            obj.directBul = 'right';  
        } else if (e.which === 39 && obj.x > (width - obj.dx)) {
            obj.x = width - obj.dx;
            obj.Xbullet.x = obj.x + obj.dx;   
            obj.Xbullet.y = obj.y + obj.dy/2 -4;
            obj.directBul = 'right';
        }
        if ( e.which === 37 && obj.x >= 2) {
            obj.x -= 5;
            obj.Xbullet.x = obj.x;   
            obj.Xbullet.y = obj.y + obj.dy/2 -4;
            obj.directBul = 'left';
        } else if ( e.which === 37 && obj.x < 2) {
            obj.x = 0;
            obj.Xbullet.x = obj.x;   
            obj.Xbullet.y = obj.y + obj.dy/2 -4;
            obj.directBul = 'left';
        }
        if (e.which === 38 && obj.y >= 0) {
            obj.y -= 5;
            obj.Xbullet.x = obj.x + obj.dx/2 - 4;   
            obj.Xbullet.y = obj.y ;
            obj.directBul = 'top';
        } else if (e.which === 38 && obj.y < 0) {
            obj.y = 0;
            obj.Xbullet.x = obj.x + obj.dx/2 -4;   
            obj.Xbullet.y = obj.y ;
            obj.directBul = 'top';
        }
        if ( e.which === 40 && obj.y <= (height- obj.dy)) {
            obj.y += 5;
            obj.Xbullet.x = obj.x + obj.dx/2 - 4;   
            obj.Xbullet.y = obj.y +obj.dy;
            obj.directBul = 'bottom';
        } else if ( e.which === 40 && obj.y > (height-obj.dy)) {
            obj.y = height - obj.dy;
            obj.Xbullet.x = obj.x + obj.dx/2 - 4;   
            obj.Xbullet.y = obj.y +obj.dy;
            obj.directBul = 'bottom';
        }
    })
}