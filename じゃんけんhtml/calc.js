/***************************************************
* プログラム名:calc.js
* 
* CreatedAt:2020/04
* 
****************************************************/
function result(ophand,rsp){
    var rock ="rock"
    var sessors ="sessors"
    var paper ="paper"
    if(ophand == rsp){
        //あいこ
        return 0;
    }
    switch (rsp){
        case rock:
            if(ophand ==sessors){
                return 1;
            }else{
                return -1;
            }                    
        break;
        case sessors:
            if(ophand == paper){
                return 1;                
            }else{
                return -1;
            }
        case paper:
            if(ophand == rock){
                return 1;
            }else{
                return -1;
            }
     }
     return ;
}

/**/
function getrandhand(){
    var randnum = 1 + Math.floor( Math.random() * 3 );
    var returnhand="";
    switch(randnum){
        case 1:
            document.getElementById('tx1').innerText ="グー"
            returnhand="rock"
            break;
        case 2:
            document.getElementById('tx1').innerText ="チョキ"
            returnhand="sessors"
            break;
        case 3:
            document.getElementById('tx1').innerText ="パー"
            returnhand="paper"
            break;
    } 
    return returnhand;
}
function rsp(rsp){
    var ophand = getrandhand()
    var result1 = result(ophand,rsp)
    switch (result1){
        case 1:
            document.getElementById('result').innerText ="You Win!"
        break;
        case -1:
            document.getElementById('result').innerText ="You Lose"
            break;
        case 0:
            document.getElementById('result').innerText ="Even"
            break;
        default:
            document.getElementById('result').innerText ="Ohter"               
    } 

}