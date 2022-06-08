// Global variables
let imageSelected = 0;

// DOM elements
let projectGrid = document.getElementById("projectGrid");
let baseURL = document.getElementById("base");
let popUpImage = document.getElementById("popUpImage");
let closeButton = document.getElementById("closeButtonImage");
let projectGalleryPhotoBigGrid = document.getElementById("projectGalleryPhotoBigGrid");
let projectGalleryArrowBack = document.getElementById("projectGalleryArrowBack");


// Photos Array
let photos = [];

// Amount of Photos in File
let totalPhotosApartmentCondominiums = 12;

// Folder roots
let folderApartmentCondominiums = baseURL.getAttributeNode("href").value+"media/images/projectGallery_apartmentCondominium/";

// Object Photo
class Photo {

    constructor(image, category){
        this.image = image;
        this.category = category;
    }


}

// Add photos to array
for (let i=0; i<totalPhotosApartmentCondominiums; i++){
    photos.push(new Photo(folderApartmentCondominiums+"project"+i+".webp", "apartmentCondominium"));
    let gridElement = document.createElement("div");
    gridElement.id = "project"+i;
    gridElement.className = "projectGalleryTile";
    gridElement.style.background = "url("+photos[i].image+")";
    gridElement.style.backgroundSize = "cover";
    gridElement.style.backgroundPosition = "center";
    gridElement.setAttribute("data-aos", "fade-zoom-in");
    gridElement.setAttribute("data-aos-easing", "ease");
    gridElement.setAttribute("data-aos-delay", "1");
    gridElement.addEventListener("click", (event)=>{
        popUpImage.style.background = "url("+photos[i].image+")";
        projectGalleryPhotoBigGrid.style.opacity = "100%";
        projectGalleryPhotoBigGrid.style.zIndex = "5";
        imageSelected = i;
        projectGrid.style.filter = "brightness(20%)";


    })
    projectGrid.appendChild(gridElement);
}

closeButton.addEventListener("click", ()=>{
    projectGalleryPhotoBigGrid.style.opacity = "0";
    projectGalleryPhotoBigGrid.style.zIndex = "-5";
    projectGrid.style.filter = "brightness(100%)";
});

projectGalleryArrowBack.addEventListener("click", ()=>{
    if(imageSelected>0){
    imageSelected--;
    popUpImage.style.background = "url("+photos[imageSelected].image+")";
}
}
);

projectGalleryArrowForward.addEventListener("click", ()=>{
    if(totalPhotosApartmentCondominiums-1>imageSelected){
    imageSelected++;
    popUpImage.style.background = "url("+photos[imageSelected].image+")";}
}
);
