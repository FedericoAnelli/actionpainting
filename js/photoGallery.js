// DOM elements
let projectGrid = document.getElementById("projectGrid");
let baseURL = document.getElementById("base");

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
    gridElement.setAttribute("data-aos-easing", "ease-in-back");
    gridElement.setAttribute("data-aos-delay", "1");
    projectGrid.appendChild(gridElement);
}

