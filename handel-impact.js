var score = 0;
function insertScore() {
    let element = document.getElementById('score');
    element.innerText = score;
}
function Impact(arrayBullet,arrayObj) {
    arrayObj.forEach((obj,index) => {
        arrayBullet.forEach((item,index2) => {
            let bool = ImpactRect(obj,item);
            if (bool) {
                score++ ;
                insertScore();
                arrayObj.splice(index,1);
                arrayBullet.splice(index2,1);
                explosion(obj.x,obj.y);
                //return {x: item.x,y:item.y}
            }
            
        })
    })
    
}

function ImpactRect(obj1,obj2) {
    var subX = Math.abs((obj1.x + obj1.dx/2) - (obj2.x + obj2.dx/2));
    var subY = Math.abs((obj1.y + obj1.dy/2) - (obj2.y + obj2.dy/2));
    var distW = (obj1.dx + obj2.dx)/2;
    var distH = (obj1.dy + obj2.dy)/2; 
    if (subX <= distW && subY <= distH) {
        return true;
    }
    return false;
}
function GetCoordinateEnemy(screenW,width,arr){
    if (arr.length <= 0) return Random(0,screenW - width);
    let x;
    let check = false;
    while (check == false) {
        x = Random(0,screenW - width);
        let count = 0;
        for( let i = 0; i < arr.length; i++){
            count++;
            if (x >= arr[i].x && x <= (arr[i].x + arr[i].dx)) {
                count = 0;
                break;
            }
        }
        if (count == arr.length) check = true;    
    }
    console.log(x);
    return x;  
}
function ImpactRectArray(obj,arrayObj,index){
    for(let i = 0; i< arrayObj.length; i++){
        if ( i === index) continue;
        let check = ImpactRect(obj,arrayObj[i]);
        if (check){
            // debugger;
            return true;
        }
    }
    return false;
}