function changeWidth(){
    var widht = document.getElementById('width').value
    var size = document.getElementById('size').value
    document.getElementById("main").style.width = widht+size
}
function changeHeight(){
    var height = document.getElementById('height').value
    var size = document.getElementById('size').value
    document.getElementById("main").style.height = height+size
}
function changeColor(){
    var hues = document.getElementById('hues').value
    document.getElementById("main").style.backgroundColor = hues
}
function start(){
    document.getElementById("main").style.animationName = "start";
}

function stop(){  
    document.getElementById("main").style.animationName = "";
}