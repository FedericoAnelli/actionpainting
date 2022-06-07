// DOM elements
let projectGrid = document.getElementById("projectGrid");
let baseURL = document.getElementById("base");
let popUpImage = document.getElementById("popUpImage");
let closeButton = document.getElementById("closeButtonImage");

// Photos Array
let photos = [];

// Amount of Photos in File
let totalPhotosApartmentCondominiums = 16;

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
        popUpImage.style.opacity = "100%";
        popUpImage.style.zIndex = "900";
        popUpImage.style.backgroundRepeat = "no-repeat";
        popUpImage.style.backgroundPosition = "center";
        projectGrid.style.filter = "brightness(20%)";

    })
    projectGrid.appendChild(gridElement);
}

closeButton.addEventListener("click", ()=>{
    popUpImage.style.opacity = "0";
    popUpImage.style.zIndex = "-900";
    projectGrid.style.filter = "brightness(100%)";
});

