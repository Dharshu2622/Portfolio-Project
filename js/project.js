
const circles=document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked=elem.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;

    for(let i=0;i<dots;i++){
        points+=<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>;

    }
    elem.innerHTML=points;
    const pointsMarked=elem.querySelectorAll('.points');
    for (let i=0 ;i < percent;i++) {
        pointsMarked[i].classList.add('marked')
    }

})

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_355o714', 'template_r3m81hc', contactForm, '_rIKqSEAq6tRuVdPa')
        .then(() => {
            // Show sent message
            contactMessage.textContent = "Message sent successfully ✅";

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = "";
            }, 5000);

            // Clear input fields
            contactForm.reset();
        })
        .catch((error)=>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌' + error.text;
        });
};
// Add event listener to the form
contactForm.addEventListener('submit', sendEmail);
