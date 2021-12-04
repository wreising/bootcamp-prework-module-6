document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "Blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").fadeOut(box, 2000);

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";

    document.getElementById("box").style.backgroundColor = "orange";

    document.getElementById("box").style.opacity = "100";

})