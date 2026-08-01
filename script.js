/* =====================================
   FRIENDSHIP DAY WEBSITE
   SCRIPT.JS
===================================== */



// =============================
// ELEMENTS
// =============================


const envelope = document.getElementById("envelope");

const openBtn = document.getElementById("openBtn");

const intro = document.getElementById("intro");

const letter = document.getElementById("letter");

const message = document.getElementById("message");

const bandBtn = document.getElementById("bandBtn");

const friendship = document.getElementById("friendship");

const tieBtn = document.getElementById("tieBtn");

const final = document.getElementById("final");

const restartBtn = document.getElementById("restartBtn");

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

const scene = document.querySelector(".scene");




// =============================
// CREATE STARS
// =============================


const stars = document.querySelector(".stars");


for(let i=0;i<120;i++){

    let star=document.createElement("span");

    star.style.position="absolute";

    star.style.width="3px";

    star.style.height="3px";

    star.style.background="white";

    star.style.borderRadius="50%";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.opacity=Math.random();

    star.style.animation=
    `twinkle ${2+Math.random()*3}s infinite alternate`;

    stars.appendChild(star);

}





// =============================
// OPEN ENVELOPE
// =============================


openBtn.onclick=function(){


    envelope.classList.add("open");


    setTimeout(()=>{


        intro.style.display="none";


        letter.style.display="flex";


        typeMessage();


    },1500);



};





// =============================
// TYPEWRITER EFFECT
// =============================


const text=

`Thank you for always being there for me ❤️

You are not just my best friend,
you are someone truly special to my heart.

Every laugh, every memory,
and every moment with you is special.

No matter where life takes us,
our friendship will always remain forever.
Happy Friendship Day ❤️`;


let index=0;



function typeMessage(){


message.innerHTML="";

index=0;


let timer=setInterval(()=>{


message.innerHTML += text[index];


index++;


if(index>=text.length){

clearInterval(timer);

}


},45);


}










// =============================
// FRIENDSHIP BAND SECTION
// =============================


// =============================
// FRIENDSHIP BAND SECTION
// =============================

bandBtn.onclick = function () {

    letter.style.display = "none";

    friendship.style.display = "flex";

    friendship.scrollIntoView({
        behavior: "smooth"
    });

};



// =============================
// TIE BAND ANIMATION
// =============================


tieBtn.onclick=function(){


scene.classList.add("tie-animation");



setTimeout(()=>{


friendship.style.display="none";


final.style.display="flex";


confetti();


},100);



};







// =============================
// FLOATING HEARTS
// =============================



function createHeart(){


let heart=document.createElement("div");


heart.className="heart-float";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"%";


heart.style.animationDuration=
(5+Math.random()*5)+"s";



document.querySelector(".hearts")
.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);



}


setInterval(createHeart,700);







// =============================
// CONFETTI
// =============================


function confetti(){


const box=document.getElementById("confetti");


for(let i=0;i<150;i++){


let piece=document.createElement("div");


piece.className="confetti-piece";


piece.style.left=Math.random()*100+"%";


piece.style.background=

[
"#ff4d88",
"#ffd166",
"#06d6a0",
"#118ab2",
"#ffffff"

][Math.floor(Math.random()*5)];



piece.style.animationDuration=

(2+Math.random()*3)+"s";



box.appendChild(piece);



}


}






// =============================
// MUSIC
// =============================




openBtn.addEventListener("click", () => {
    music.play();
});


// =============================
// RESTART
// =============================



