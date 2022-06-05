// Boxes
let servicesTextMiddleContainer = document.getElementById("servicesTextMiddleContainer");
let servicesTextTile = document.getElementById("servicesTextTile");

// Buttons
let commercialPaintingButton = document.getElementById("commercialPainting");
let concreteRestorationButton = document.getElementById("concreteRestoration");
let residentialPaintingButton = document.getElementById("residentialPainting");
let servicesGridButtons = document.getElementById("servicesGridButtons");
let yellowCircleButton = document.getElementById("yellowCircleButton");
let residentialBall = document.getElementById("residentialBall");

let goBackButton = document.createElement("div");
goBackButton.id = "goBackButton";
goBackButton.className = "goBackButtonDiv";
goBackButton.innerHTML = `<div class = "arrowsDiv">
<span class="material-symbols-outlined yellowArrows">
arrow_back_ios
</span>
<span class="material-symbols-outlined yellowArrows">
arrow_back_ios
</span></div><div class = "goBackParagraph"><p class="goBackText">GO BACK</p></div>

`;
displayNone(goBackButton);


// Heading
let servicesHeading = document.getElementById("servicesHeading");

// Paragraph texts
let commercialPaintingText = document.getElementById("commercialPaintingText");
let concreteRestorationText = document.getElementById("concreteRestorationText");
let residentialPaintingText = document.getElementById("residentialPaintingText");

// Yellow line
let servicesYellowLineHorizontal = document.getElementById("servicesYellowLine");
let servicesYellowLineContainer = document.getElementById("servicesYellowLineContainer");



// Dynamic elements and functions
let servicesYellowLineVertical = document.createElement("p");
servicesYellowLineVertical.className = "servicesYellowLineVertical";
servicesYellowLineVertical.id = "servicesYellowLineVertical";
servicesYellowLineVertical.innerHTML = `&nbsp`;
displayNone(servicesYellowLineVertical);

let yellowButtonIcon = document.createElement("button");
yellowButtonIcon.className = "yellowCircleButton";
yellowButtonIcon.classList.add("residentialTransition");
displayNone(yellowButtonIcon);

let headingServicesMenu = document.createElement("p");
headingServicesMenu.className = "servicesAppearingHeaderStyle";
displayNone(headingServicesMenu);

let bodyText = document.createElement("p");
bodyText.className = "commercialPaintingParagraph";
displayNone(bodyText);

servicesGridButtons.appendChild(yellowButtonIcon);
servicesGridButtons.appendChild(servicesYellowLineVertical);
servicesGridButtons.appendChild(headingServicesMenu);
servicesTextMiddleContainer.appendChild(bodyText);
servicesTextMiddleContainer.appendChild(goBackButton);


function createServicesDisplay(button, heading, heading2, body){
    headingServicesMenu.id = heading+heading+heading2;
    headingServicesMenu.innerHTML = heading +"<br>"+ heading2;
    bodyText.id = heading+heading2+"Body";
    bodyText.innerHTML = `${body}`;
}





// Fade Out Function
function fadeOut(object){object.style.opacity = 0};
function displayNone(object){object.style.display = "none"};
function returnDisplay (object){object.style.removeProperty('display'); object.style.opacity = "100%"};




function fadeOutAllButMe (object){

    if(object == concreteRestorationButton)
    {
        fadeOut(servicesHeading);
        fadeOut(commercialPaintingButton);
        fadeOut(residentialPaintingButton);
        fadeOut(servicesYellowLineContainer);
    }

    if (object == residentialPaintingButton)
    {
        fadeOut(servicesHeading);
        fadeOut(concreteRestorationButton);
        fadeOut(commercialPaintingButton);
        fadeOut(servicesYellowLineContainer);
    }
    if (object == commercialPaintingButton)
    {
        fadeOut(servicesHeading);
        fadeOut(concreteRestorationButton);
        fadeOut(residentialPaintingButton);
        fadeOut(servicesYellowLineContainer);
    }


}



commercialPaintingButton.onclick = ()=> {

    fadeOutAllButMe(commercialPaintingButton);

    

    servicesHeading.addEventListener("transitionend", ()=>{

        displayNone(servicesYellowLineContainer);
        displayNone(servicesHeading);
        displayNone(commercialPaintingButton);
        displayNone(concreteRestorationButton);
        displayNone(residentialPaintingButton);
        
        servicesGridButtons.className = "servicesGridButtonsExpanded";

        createServicesDisplay(commercialPaintingButton, "Commercial", "Painting", "lorem ipsum");

        returnDisplay(servicesYellowLineVertical);
        returnDisplay(yellowButtonIcon);
        returnDisplay(headingServicesMenu);
        returnDisplay(bodyText);
        returnDisplay(goBackButton);
    });


};

concreteRestorationButton.onclick = ()=> {

    fadeOutAllButMe(concreteRestorationButton);

    

    servicesHeading.addEventListener("transitionend", ()=>{

        displayNone(servicesYellowLineContainer);
        displayNone(servicesHeading);
        displayNone(commercialPaintingButton);
        displayNone(concreteRestorationButton);
        displayNone(residentialPaintingButton);

        
        servicesGridButtons.className = "servicesGridButtonsExpanded";

        createServicesDisplay(concreteRestorationButton, "Concrete", "Restoration", "lorem ipsum");

        returnDisplay(servicesYellowLineVertical);
        returnDisplay(yellowButtonIcon);
        returnDisplay(headingServicesMenu);
        returnDisplay(bodyText);
        returnDisplay(goBackButton);
    });


};

residentialPaintingButton.onclick = ()=> {
    fadeOutAllButMe(residentialPaintingButton);
    residentialBall.style.setProperty("transform", "translateY(-32.8vh)");

        residentialBall.addEventListener("transitionend", ()=>{

            residentialBall.style.setProperty("transform", "translate(-32.8vw, -32.8vh)");

            residentialBall.addEventListener("transitionend", ()=>{




                displayNone(servicesYellowLineContainer);
                displayNone(servicesHeading);
                displayNone(residentialPaintingButton);
                displayNone(concreteRestorationButton);
                displayNone(commercialPainting);
                
                servicesGridButtons.className = "servicesGridButtonsExpanded";
        
                createServicesDisplay(residentialPaintingButton, "Residential", "Painting", "lorem ipsum");
        
                returnDisplay(servicesYellowLineVertical);
                returnDisplay(yellowButtonIcon);
                returnDisplay(headingServicesMenu);
                returnDisplay(bodyText);
                returnDisplay(goBackButton);
            });
        });
    


    




};




goBackButton.addEventListener("click", ()=>{

residentialBall.style.removeProperty("transform");
returnDisplay(servicesYellowLineContainer);
returnDisplay(servicesHeading);
returnDisplay(concreteRestorationButton);
returnDisplay(residentialPaintingButton);
returnDisplay(commercialPaintingButton);


//residentialBall.style.setProperty("transform", "translate(0%, 0%)");

displayNone(servicesYellowLineVertical);
displayNone(yellowButtonIcon);
displayNone(headingServicesMenu);
displayNone(bodyText);
displayNone(goBackButton);


servicesGridButtons.className = "servicesGridButtons";


})
