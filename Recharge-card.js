const homeSection = document.querySelector('.Home-Section')
const benefitSection = document.querySelector('.Benefits-Section')
const trainingSection = document.querySelector('.Training-Section')
const enrollSection = document.querySelector('.Enroll-Section')
let navbar = document.querySelector(".nav");

document.querySelector("#bar-btn").onclick = () => {
    navbar.classList.toggle('active');
}

document.getElementById('Home').addEventListener('click', () =>
 { homeSection.scrollIntoView( {behavior : "smooth"}) ;
   navbar.classList.remove('active');
});

document.getElementById('Benefits').addEventListener('click', () =>
 { benefitSection.scrollIntoView( {behavior : "smooth"});
   navbar.classList.remove('active');
 });

document.getElementById('Training').addEventListener('click', () =>
 { trainingSection.scrollIntoView( {behavior : "smooth"});
   navbar.classList.remove('active');
 });

 document.getElementById('Enroll').addEventListener('click', () =>
 { enrollSection.scrollIntoView( {behavior : "smooth"});
   navbar.classList.remove('active');
 });

 
