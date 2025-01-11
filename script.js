var timer = 60;
var score = 0;
var hitrn = 0;

//jispe click krroge woh particular element par event raise hoga aur event listener naa milne par event element ke parent par listener dhundega,waha bhi n milne par event parent ke parent par listener dhundega


function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
 function makeBubble(){
    var clutter = "";
 
 for(var i=1;i<=70;i++){
    var rn = Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
 }

 document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over </h1>`
        }
    },1000);
}

function getNewHint(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHint();
    }

});

increaseScore();
getNewHint();
runTimer()
makeBubble();