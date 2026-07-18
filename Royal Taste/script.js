// script.js

// Smooth navbar shadow on scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    nav.style.background = "rgba(0,0,0,0.85)";
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  }
  else{
    nav.style.background = "rgba(0,0,0,0.5)";
    nav.style.boxShadow = "none";
  }

});


// Button interactions

const primaryBtn = document.querySelector(".primary");
const secondaryBtn = document.querySelector(".secondary");

primaryBtn.addEventListener("click", () => {
  alert("Table booking feature coming soon 🍽️");
});

secondaryBtn.addEventListener("click", () => {

  document.querySelector(".menu").scrollIntoView({
    behavior:"smooth"
  });

});


// Reveal animation on scroll

const cards = document.querySelectorAll(".card, .menu-card");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

},{
  threshold:0.2
});

cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.8s ease";

  observer.observe(card);

});