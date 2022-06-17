let side = "front";
let animationName;
function rotateCard(){
    document.getElementById(side).style.display = "none";
    if(side == 'front'){
        side = "back";
        animationName = "rotateAnimation"; 
    }else{
        side = "front";
        animationName = "rotateAnimationReverse";
    }
    document.getElementById("creditcard").style.animation = animationName + " 1s linear infinite";
    document.getElementById("creditcard").style.animationIterationCount = "1";
    document.getElementById(side).style.display = "block";
}