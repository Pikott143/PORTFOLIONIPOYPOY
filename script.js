// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const target = this.getAttribute('href');

        if(target.startsWith("#")){

            e.preventDefault();

            const section = document.querySelector(target);

            if(section){

                section.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });
});


// ================================
// ACTIVE NAVIGATION
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements=document.querySelectorAll(

".about-card,.skills-card,.contact-card,.browser,.code-box"

);

function reveal(){

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        const visible=window.innerHeight-120;

        if(top<visible){

            el.style.opacity="1";

            el.style.transform="translateY(0px)";

        }

    });

}

reveal();

window.addEventListener("scroll",reveal);


// ================================
// INITIAL STYLE
// ================================

revealElements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".8s";

});


// ================================
// FLOATING BACKGROUND
// ================================

const blur1=document.querySelector(".blur1");
const blur2=document.querySelector(".blur2");

document.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth;
    const y=e.clientY/window.innerHeight;

    blur1.style.transform=
    `translate(${x*40}px,${y*40}px)`;

    blur2.style.transform=
    `translate(${-x*40}px,${-y*40}px)`;

});


// ================================
// BUTTON RIPPLE EFFECT
// ================================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.setProperty("--x",x+"px");
btn.style.setProperty("--y",y+"px");

});

});


// ================================
// TYPEWRITER EFFECT
// ================================

const pre=document.querySelector(".code-box pre");

if(pre){

const original=pre.innerText;

pre.innerText="";

let i=0;

function typing(){

if(i<original.length){

pre.innerText+=original.charAt(i);

i++;

setTimeout(typing,20);

}

}

typing();

}


// ================================
// PROFILE HOVER
// ================================

const profile=document.querySelector(".profile");

if(profile){

profile.addEventListener("mousemove",(e)=>{

const rect=profile.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

profile.style.transform=

`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.05)`;

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="rotate(0deg)";

});

}


// ================================
// CARD HOVER EFFECT
// ================================

const cards=document.querySelectorAll(

".about-card,.skills-card,.contact-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ================================
// CONSOLE MESSAGE
// ================================

console.log(
"%cWelcome to Annalyn Jean's Portfolio 💜",
"color:#9b6cff;font-size:18px;font-weight:bold;"
);