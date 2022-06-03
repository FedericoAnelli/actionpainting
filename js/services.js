let servicesYellowLine = document.getElementById("servicesYellowLine");
let servicesHeading = document.getElementById("servicesHeading");
let servicesTextMiddleContainer = document.getElementById("servicesTextMiddleContainer");
commercialPainting.addEventListener("click", ()=>{

    if(document.getElementById("movementRight")){
        document.getElementById("movementRight").remove();
    };

    if(document.getElementById("servicesFadeOut")){
        document.getElementById("servicesFadeOut").remove();
    }

    let movementRight = document.createElement("div");
    movementRight.id = "movementRight";
    movementRight.className = "servicesBlackLine";
    servicesYellowLine.prepend(movementRight);

    

    let servicesFadeOut = document.createElement("h2");
    servicesFadeOut.id = "servicesFadeOut";
    servicesFadeOut.className = "servicesHeadingFadeOut";
    servicesFadeOut.innerHTML=`We Offer <br> Best Painting <br> Services & Solutions`;
    servicesTextMiddleContainer.prepend(servicesFadeOut);
    servicesHeading.remove();
});