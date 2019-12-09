var canvas = document.getElementById("canvas");
console.log(canvas);
var ctx = canvas.getContext("2d");
//canvas.width = window.innerWidth - 50;
canvas.width = 500;
//canvas.height = window.innerHeight - 50;
canvas.height = 400;
var width = canvas.width;
var height = canvas.height;
var arrayBullet = new Array();
var arrayColor = ['#000000','#DF0101','#DF0101','#0A2A0A'];
var arrayEnemy = new Array();
var bulletArray = new Array();

class Tank {
    constructor(x,y,dx,dy,directBul){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.directBul = directBul;
        this.Xbullet = {x: this.x + this.dx/2 -4,y:this.y};
    }
     
    draw() {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x,this.y,this.dx,this.dy);
        if (this.directBul == 'top'){
            if (this.dx > this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank3-top.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'bottom'){
            if (this.dx > this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank3-bottom.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'left'){
            if (this.dx < this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank3-left.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'right'){
            if (this.dx < this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank3-right.png',this.x,this.y,this.dx,this.dy,ctx);
        }
    }
    move() {
        moveTank({x:this.x,y:this.y,dx:this.dx,dy:this.dy});
    }
}

class Bullet {
    constructor (x,y,dx,dy,directBul,distance) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.directBul = directBul;
        this.distance = Number(distance);
    }
    draw() {
        if (this.directBul == 'top'){
            if ( this.dx < this.dy) {
                let temp = this.dx;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/bullet/bullet1-top.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'bottom'){
            if ( this.dx < this.dy) {
                let temp = this.dx;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/bullet/bullet1-bottom.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'right'){
            if ( this.dx > this.dy) {
                let temp = this.dx;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/bullet/bullet1-right.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'left'){
            if ( this.dx > this.dy) {
                let temp = this.dx;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/bullet/bullet1-left.png',this.x,this.y,this.dx,this.dy,ctx);
        }
    }
    move() {
        // if (this.y >= -10) {
        //     this.y -=1 ;
        // } else {
        //     this.y = -11;
        // }   
        if (this.directBul == 'top'){
            this.y -= this.distance;
        } 
        else if ( this.directBul == 'bottom'){
            this.y += this.distance;
        }
        else if ( this.directBul == 'left'){
            this.x -= this.distance;
        }
        else if ( this.directBul == 'right'){
            this.x += this.distance;
        }
    }
}
class BulletEnemy {
    constructor (x,y,dx,dy,color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.dx,this.dy);
        
    }
    move() {
        if (this.y <= height + 10) {
            this.y += 1 ;
        } else {
            this.y = height + 10;
        }      
    }
}
class Enemy {
    constructor (dx,dy,directBul) {
        this.dx = dx;
        this.dy = dy;
        this.directBul = directBul;
        this.Xbullet = {x: this.x + this.dx/2 -4,y:this.y};
    }
    
    x = GetCoordinateEnemy(width,30,arrayEnemy);
    y = 1;
    color = arrayColor[Random(0,arrayColor.length-1)];
    draw() {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x,this.y, this.dx, this.dy);
        if (this.directBul == 'top'){
            if (this.dx > this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank1-top.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'bottom'){
            if (this.dx > this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank1-bottom.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'left'){
            if (this.dx < this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank1-left.png',this.x,this.y,this.dx,this.dy,ctx);
        }
        else if (this.directBul == 'right'){
            if (this.dx < this.dy) {
                let temp = this.dx ;
                this.dx = this.dy;
                this.dy = temp;
            }
            DrawImage('image/tank/tank1-right.png',this.x,this.y,this.dx,this.dy,ctx);
        }
    }
    fire() {

    }
}
var tank1 = new Tank(width/2,height-61,50,60,'top');
function createEnemy(quantity) {
    for (let i = 0;i< quantity; i++) {
        let enemy = new Enemy(50,50);
        arrayEnemy.push(enemy);
    }
}

var fps = 0;
function onLoad(){
    //ctx.clearRect(0,0,width,height);
    requestAnimationFrame(onLoad);
    fps ++;
    DrawImage('image/map.png',0,0,width,height,ctx);
    // explosion2(100,100);
    if (fps % 10 == 0){
        frame2++;
    }
    // ctx.fillStyle = '#fff';
    // ctx.fillRect(0,0,width,height);
    tank1.draw(); 
    drawEnemy();
    fireBullet(); 
    fireEnemy();
    //explosion(200,200);
    if (fps % 30 == 0){
        target(tank1);
    }
    if ( arrayEnemy.length > 0) {
        ImpactRect(tank1,arrayEnemy[0]);
    }
    ctx.save();
    Impact(arrayBullet,arrayEnemy);
    ctx.restore();
    // let coorEx = Impact(arrayBullet,arrayEnemy);
    // if ( coorEx !=  undefined) {
    //     explosion(coorEx.x , coorEx.y);
    // }
    
}


function fire(obj){
    document.addEventListener('keydown', e => {
        if (e.which === 32) {
            let bullet = new Bullet(obj.Xbullet.x,obj.Xbullet.y,8,7,obj.directBul,2);
            arrayBullet.push(bullet);
        }
    })
}
function fireBullet() {
    if (arrayBullet.length > 0) {
        for ( let i = 0 ; i< arrayBullet.length;i++){   
            if (arrayBullet[i].y <= -10) {              
                arrayBullet.splice(i,1);
            } else {
                arrayBullet[i].draw();
                arrayBullet[i].move();
            }       
        }
    }
}
function drawEnemy() {
    arrayEnemy.forEach( item => {
        item.draw();
    })
}
function fireEnemy() {
    if (bulletArray.length > 0) {
        for ( let i = 0; i < bulletArray.length ; i++){
            if (bulletArray[i].y >= height + 10) {              
                bulletArray.splice(i,1);
            } else {
                bulletArray[i].draw();
                bulletArray[i].move();
            } 
        }
    }
}
var addBulletEnemy = 0
function target(obj) {
    let targetX = obj.x;
    if (arrayEnemy.length > 0) {
        for (let i = 0 ; i< arrayEnemy.length ; i++) {
            arrayEnemy[i].draw();
            if ( arrayEnemy[i].x >= 0 && arrayEnemy[i].x <= (width - 30) && arrayEnemy[i].x <= targetX && !ImpactRectArray(arrayEnemy[i],arrayEnemy,i)) {
                arrayEnemy[i].x += 5;
                arrayEnemy[i].directBul = 'right';
                arrayEnemy[i].Xbullet.x = arrayEnemy[i].x + arrayEnemy[i].dx;
                arrayEnemy[i].Xbullet.y = arrayEnemy[i].y +arrayEnemy[i].dy/2 - 4;
            } else if ( arrayEnemy[i].x >= 0 && arrayEnemy[i].x <= (width - 30) && arrayEnemy[i].x >= (targetX + 10) && !ImpactRectArray(arrayEnemy[i],arrayEnemy,i)) {
                arrayEnemy[i].x -= 5;
                arrayEnemy[i].directBul = 'left';
                arrayEnemy[i].Xbullet.x = arrayEnemy[i].x ;
                arrayEnemy[i].Xbullet.y = arrayEnemy[i].y +arrayEnemy[i].dy/2 -4;
            }
            if ((arrayEnemy[i].x >= targetX) && (arrayEnemy[i].x <= (targetX + 10))) {
                if (addBulletEnemy % 2 == 0) {
                    arrayEnemy[i].directBul = 'bottom';
                    arrayEnemy[i].Xbullet.x = arrayEnemy[i].x + arrayEnemy[i].dx/2 - 4;
                    arrayEnemy[i].Xbullet.y = arrayEnemy[i].y +arrayEnemy[i].dy;
                    //let bullet = new BulletEnemy(arrayEnemy[i].x + 15 , arrayEnemy[i].y+30,3,5,'#F781F3');
                    let bullet = new Bullet(arrayEnemy[i].Xbullet.x,arrayEnemy[i].Xbullet.y,8,7,arrayEnemy[i].directBul,2);
                    bulletArray.push(bullet);       
                }                                                       
            }
            
        }
    }
     addBulletEnemy++;
}
var i = 1;
// function Onload2() {
//     //ctx.clearRect(0,0,width,height);
//     requestAnimationFrame(Onload2);
//     if ( i == 1 ) {
//         explosion(100,100);
//     }
//     i++;
// }
window.onload = () => {
    
    createEnemy(1);
    moveTank(tank1);
    fire(tank1);
    onLoad();
     //Onload2();
};