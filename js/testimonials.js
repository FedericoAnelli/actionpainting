// Global Variables
let totalTestimonials = 6;


// DOM Elements
let baseURLTestimonials = document.getElementById("base");
let testimonialsMainGrid = document.getElementById("testimonialsMainGrid");

// Folder roots
let folderTestimonials_Logos = baseURLTestimonials.getAttributeNode("href").value+"media/images/testimonials_Logos/";


// Array of testimonials
let testimonials = [];

// Object
class Testimonial{

    constructor(logo){

        this.logo = logo;


    }

}



for (let i = 0; i<totalTestimonials; i++){

    testimonials.push(new Testimonial(folderTestimonials_Logos+"testimonials"+i+".webp"));
    console.log(testimonials[i].logo);
    let gridElement = document.createElement("div");
    gridElement.id = "testimonial"+i;
    gridElement.className = "testimonialsTile";
    gridElement.style.background = "url("+testimonials[i].logo+")";
    gridElement.style.backgroundSize = "cover";
    gridElement.style.backgroundPosition = "center";
    gridElement.setAttribute("data-aos", "fade-up");
    gridElement.setAttribute("data-aos-easing", "ease");
    gridElement.setAttribute("data-aos-duration", 1500-(i*250));
    testimonialsMainGrid.appendChild(gridElement);
}