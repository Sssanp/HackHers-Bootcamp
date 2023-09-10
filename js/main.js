//Variables

//Countdown

var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

//Folders

const header = document.querySelector("header");

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

//scroll up button
const createScrollButton = function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&uarr;";
    scrollBtn.setAttribute("id", "scroll-btn");
    document.body.appendChild(scrollBtn);
  
    const showScrollButton = function () {
      window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    };
  
    const scrollToTop = function () {
      if (window.scrollY != 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"  
        });
      }
    };

//Functions

// Countdown

function countdownTimer() {
    const countDownDate = new Date('04/25/2024').getTime()

    // Convert to milliseconds
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // Calculate every second
    const interval = setInterval(() => {
            // Get Current Date
    const now = new Date().getTime()
    const distance = countDownDate - now

    daysEl.innerText = formatNumber(Math.floor(distance / day))
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour))
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute))
    secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second))
        
        // When date is reached 
        if(distance < 0){
            document.getElementById('headline').innerText = 'Today is the Day'
            document.getElementById('countdown').style.display = 'none'
            
            // Stop interval
            clearInterval(interval)
        }
    }, 1000);
}

// Add 0 if number is small then 10 .... 8 ----> 08
function formatNumber(number) {
    if(number < 10) {
        return '0' + number
    }
    return number
}

// Run Function
countdownTimer()

// Header
function toggleStickyHeader() {
    //Add the "sticky-header" class to the header when you scroll down and remove it when you're at the top of the page
    if (window.scrollY > 100) { 
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}

//Hamburger Menu

function openHamburgerMenu() {
    //Show the hamburger menu
    hamburgerMenu.style.visibility = "visible";
}

function closeHamburgerMenu() {
    //Hide the hamburger menu
    hamburgerMenu.style.visibility = "hidden";
}

// Testimonials

function changeTestimonial() {
    //Change the values to match those of the client that has been clicked on
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

window.addEventListener("scroll", toggleStickyHeader);

hamburgerOpenIcon.addEventListener("click", openHamburgerMenu);
hamburgerCloseIcon.addEventListener("click", closeHamburgerMenu);

if (testimonialButtons) {
    testimonialButtons.forEach(button => button.addEventListener("click", changeTestimonial));
}

//Scroll up button
window.addEventListener("scroll", showScrollButton);
    scrollBtn.addEventListener("click", scrollToTop);
  };
  
  createScrollButton();