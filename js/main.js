//Variables

const hamburgerOpenIcon = document.querySelector("#hamburger-open"),
    hamburgerCloseIcon = document.querySelector("#hamburger-close"),
    hamburgerMenu = document.querySelector("#hamburger-menu");

const testimonialButtons = document.querySelectorAll(".folders img"),
    clientName = document.querySelectorAll(".client-name"),
    clientTestimonial = document.querySelectorAll(".client-testimonial"),
    clientRepresentative = document.querySelectorAll(".client-rep"),
    clientLogo = document.querySelectorAll(".client-logo");

let testimonialsArray = [
    {
        client: "N-able",
        testimonial: "“Collaborating with an Interactive Media Design student from Fanshawe College in the coding field was a remarkable experience. Their coding expertise and creative approach added tremendous value to our IT projects. We're excited about the potential of working with such talented students in the tech industry.”",
        representative: "Carlos Topaz, N-able Specialist",
        logo: "images/n-able-logo.png",
    },

    {
        client: "Clash Creative",
        testimonial: "“Our partnership with a Fanshawe College Interactive Media Design student was a design game-changer. Their fresh ideas and skills infused our projects with creativity.”",
        representative: "Suzi Adams, Design Director",
        logo: "images/clash-creative-logo.png",
    },

    {
        client: "Cleio",
        testimonial: "“Their coding prowess and creative thinking injected new energy into our projects. The student's commitment and fresh ideas led to innovative solutions that surpassed our expectations.”",
        representative: "John Ruby, Creative Lead",
        logo: "images/cleio-logo.png",
    },

    {
        client: "RedRhino",
        testimonial: "“This partnership has reaffirmed our belief in the value of nurturing young design talent. We eagerly look forward to more opportunities to collaborate with such promising individuals.”",
        representative: "Mason Talon, Designer",
        logo: "images/redrhino-logo.png",
    },
]

//Functions

function openHamburgerMenu() {
    //Show the hamburger menu
    hamburgerMenu.style.visibility = "visible";
}

function closeHamburgerMenu() {
    //Hide the hamburger menu
    hamburgerMenu.style.visibility = "hidden";
}

function changeTestimonial() {
    /*Change the values to match those of the client that has been clicked on*/
    clientName.forEach(name => {
        name.textContent = testimonialsArray[this.dataset.testimonial].client;
    });

    clientTestimonial.forEach(testimonial => {
        testimonial.textContent = testimonialsArray[this.dataset.testimonial].testimonial;
    });

    clientRepresentative.forEach(representative => {
        representative.textContent = testimonialsArray[this.dataset.testimonial].representative;
    });

    clientLogo.forEach(logo => {
        logo.src = testimonialsArray[this.dataset.testimonial].logo;
    });
    
    /*Loop through the buttons and change the icon of the one that has been clicked to indicate that it is 
        the testimonial that is currently being shown on the page*/
    testimonialButtons.forEach(button => {
        if (button.dataset.testimonial === this.dataset.testimonial) {
            button.src = "images/folder-open.png";
        } else {
            button.src = "images/folder-closed.png";
        }
    });
}

//Event Listeners

hamburgerOpenIcon.addEventListener("click", openHamburgerMenu);
hamburgerCloseIcon.addEventListener("click", closeHamburgerMenu);

if (testimonialButtons) {
    testimonialButtons.forEach(button => button.addEventListener("click", changeTestimonial));
}