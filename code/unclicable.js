const buttonHeigth = 36;
const buttonWidth = 102; 

const maxWidth = window.innerWidth - buttonWidth;
const maxHeigth = window.innerHeight - buttonHeigth;

var clicked = 1;
var Ycli = 1;

window.addEventListener('DOMContentLoaded',() => {
    const  button = document.getElementById("UnclicableButton");

    button.addEventListener('mouseover', () =>{
        if(clicked > 3 && Ycli != 0){
            console.log('You hovered me');
            button.style.left = Math.floor(Math.random()* (  maxWidth +1)) + "px";
            button.style.top = Math.floor(window.innerHeight + (Math.random()* ( maxHeigth +1))) + "px";
        }
})  


    button.addEventListener('click',() => {
    
    if(clicked > 3 && Ycli != 0 ){
        button.style.left = Math.floor(Math.random()* (  maxWidth +1)) + "px";
        button.style.top = Math.floor(window.innerHeight + (Math.random()* ( maxHeigth +1))) + "px";
    }
    clicked +=1;
    })
});

function GetImageNO(ImgName){
    let img = document.querySelector("#YesButton");
    var result = document.getElementById("yes"); 


   

    if (clicked == 1 && Ycli != 0){
        img.setAttribute("src", ImgName);
        console.log('Image change');
        result.innerHTML = "&#129319Hmm.. Please think one more time babe&#129402"
    

    }
    if (clicked == 2 && Ycli != 0){
        img.setAttribute("src", "gif/goma-peach.gif");
        console.log('Image change');
        result.innerHTML = "Nahi yesa nahi ho sakta&#128557&#128557 Firse soch looo"

    }
    if (clicked == 3  && Ycli != 0){
        img.setAttribute("src", "gif/tears-cute.gif");
        console.log('Image change');
        result.innerHTML = "&#128557Ma jasto kta feri bhettau dai nau ni. Last chance&#129402"
    }
    if ( Ycli == 0){
        img.setAttribute("src", "gif/dubu.gif");
        console.log('Image change');
        result.innerHTML = "&#128513Aba no click gare ra k faida!! Timle Yes vani sakau&#128513"
    }
}

function GetImageYes(ImgName){
    let img = document.querySelector("#YesButton");
    img.setAttribute("src", ImgName);
    var result = document.getElementById("yes"); 
    result.innerHTML = "&#128513&#128513HEHE I knew itt I also love you soo much babee&#128150&#128536&#128536";
    Ycli = 0;



function ChangePara(Para){
   

}

}

