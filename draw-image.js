function DrawImage(url,x,y,width,height,obj){
    let image = new Image();
    image.src = url;
    image.onload = () =>{
        obj.drawImage(image,0,0,image.width,image.height,x,y,width,height);
    }   
}
var frame = 0;
var frame2 = 0;
function explosion(x,y) {
    if ( frame > 7) frame = 1;
    var sx = frame * 161
    let image = new Image();
    let xImg = (x - 25) < (width - 25) ? x - 25 :width - 25;
    let yImg = (y - 25) > 25 ? y - 25 : 25;
    image.src = 'image/explosion/arrExplosion.png';
    ctx.drawImage(image,0,0,161,image.height,x,y,50,50);
    let interval = setInterval(() => {  
        //ctx.clearRect(0,0,width,height) ;
        var sx2 = frame * 161;
        
        ctx.drawImage(image,sx2,0,161,image.height,x,y,50,50);
        //debugger;
        //ctx.translate(-100,-(image.height/2));
        
        if(frame == 7 ) {
            clearInterval(interval);
            frame = 0;
        }
        frame ++;
    },200);
    // image.onload = () => {
    //     ctx.drawImage(image,sx,0,200,image.height,x,y,50,50);
    // }
    image.onload = interval;
    
}
function explosion2(x,y) {
    if ( frame2 > 7) frame2 = 1;
    var sx = frame2 * 161
    let image = new Image();
    let xImg = (x - 25) < (width - 25) ? x - 25 :width - 25;
    let yImg = (y - 25) > 25 ? y - 25 : 25;
    image.src = 'image/explosion/arrExplosion.png';
    image.onload = () => {
        ctx.drawImage(image,sx,0,161,image.height,x,y,50,50);
    }
    
    // let interval = setInterval(() => {  
    //     //ctx.clearRect(0,0,width,height) ;
    //     var sx2 = frame * 200;
        
    //     ctx.drawImage(image,sx2,0,167.7,image.height,x,y,50,50);
    //     console.log('x',x-100);
    //     console.log('y',y);
    //     //debugger;
    //     //ctx.translate(-100,-(image.height/2));
        
    //     if(frame == 7 ) {
    //         clearInterval(interval);
    //         frame = 0;
    //     }
    //     frame ++;
    // },200);
    // // image.onload = () => {
    // //     ctx.drawImage(image,sx,0,200,image.height,x,y,50,50);
    // // }
    // image.onload = interval;
    
}