var numberDrums=document.querySelectorAll(".drum").length

for(var i=0;i<numberDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonLetter=this.innerHTML;
        makesound(buttonLetter);
        buttonAnimation(buttonLetter);
    })
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(letter)
{
    var sound="";
    switch (letter) {
        case "w":
            sound="crash.mp3";
            break;
        case "a":
            sound="kick-bass.mp3";
            break;
        case "s":
            sound="snare.mp3";
            break;
        case "d":
            sound="tom-1.mp3";
            break;
        case "j":
            sound="tom-2.mp3";
            break;
        case "k":
            sound="tom-3.mp3";
            break;
        case "l":
            sound="tom-4.mp3";
            break;
    
        default:
            break;
    }

    var audio=new Audio('sounds/'+sound);
    audio.play();
}


function buttonAnimation(currentkey)
{
    var a=document.querySelector("."+currentkey);
    a.classList.add("pressed");

    setTimeout(function(){
        a.classList.remove("pressed");
    },100);
}