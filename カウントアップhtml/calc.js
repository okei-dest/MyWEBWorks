function calc(){

    document.getElementById('tx1').innerText ="hello"
    return;
}

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
        case papter:
            if(ophand == rock){
                return 1;
            }else{
                return -1;
            }
     }
     return ;
}


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
function countup(){
    var objnum =document.getElementById('num').value
    var strnum =objnum.toString();
    
    alert(strnum)
    var num =parseInt(strnum,10);
    num = num +1
    strnum = num.toString()
    document.getElementById('num').value =strnum 
}