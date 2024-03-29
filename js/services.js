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
let commercialBall = document.getElementById("commercialBall");
let concreteBall = document.getElementById("concreteBall");

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


function createServicesDisplay(button, heading, heading2, body, imgURL){
    yellowButtonIcon.innerHTML=`<img src="${imgURL}"  class="servicesIcons" alt="Commercial Painting"></button>`;
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
        fadeOut(concreteRestorationText);
    }

    if (object == residentialPaintingButton)
    {
        fadeOut(servicesHeading);
        fadeOut(concreteRestorationButton);
        fadeOut(commercialPaintingButton);
        fadeOut(servicesYellowLineContainer);
        fadeOut(residentialPaintingText);
    }
    if (object == commercialPaintingButton)
    {
        fadeOut(servicesHeading);
        fadeOut(concreteRestorationButton);
        fadeOut(residentialPaintingButton);
        fadeOut(servicesYellowLineContainer);
        fadeOut(commercialPaintingText);
    }


}



commercialPaintingButton.onclick = ()=> {
    createServicesDisplay(commercialPaintingButton, "Commercial", "Painting", "We offer outstanding commercial/industrial painting services. We understand that your image is everything to you and we make it our business to make you look good.", "./media/images/commercialPainting.svg");
    fadeOutAllButMe(commercialPaintingButton);

    commercialBall.style.setProperty("top", "6.5%");
    commercialBall.style.setProperty("left", "5%");
    commercialBall.addEventListener("transitionend", ()=>{
        


        commercialBall.addEventListener("transitionend", ()=>{



        displayNone(servicesYellowLineContainer);
        displayNone(servicesHeading);
        displayNone(commercialPaintingButton);
        displayNone(concreteRestorationButton);
        displayNone(residentialPaintingButton);
        
        servicesGridButtons.className = "servicesGridButtonsExpanded";

 

        commercialBall.style.removeProperty("position");

        returnDisplay(servicesYellowLineVertical);
        returnDisplay(yellowButtonIcon);
        returnDisplay(headingServicesMenu);
        returnDisplay(bodyText);
        returnDisplay(goBackButton);
    });
    });


};

concreteRestorationButton.onclick = ()=> {
    createServicesDisplay(concreteRestorationButton, "Concrete", "Restoration", "We provide concrete restoration, the 40 year inspection and painting bid packages to low –mid-high rise buildings. Let our license professional engineers provide you with an accurate inspection.", "./media/images/concreteRestoration.svg");
    fadeOutAllButMe(concreteRestorationButton);
    concreteBall.style.setProperty("top", "6.5%");
    concreteBall.style.setProperty("left", "5%");

    concreteBall.addEventListener("transitionend", ()=>{




        concreteBall.addEventListener("transitionend", ()=>{

 


        displayNone(servicesYellowLineContainer);
        displayNone(servicesHeading);
        displayNone(commercialPaintingButton);
        displayNone(concreteRestorationButton);
        displayNone(residentialPaintingButton);

        
        servicesGridButtons.className = "servicesGridButtonsExpanded";
        concreteBall.style.removeProperty("position");


        returnDisplay(servicesYellowLineVertical);
        returnDisplay(yellowButtonIcon);
        returnDisplay(headingServicesMenu);
        returnDisplay(bodyText);
        returnDisplay(goBackButton);

    });

    });


};



residentialPaintingButton.onclick = (a)=> {
    fadeOutAllButMe(residentialPaintingButton);
    createServicesDisplay(residentialPaintingButton, "Residential", "Painting", "We believe in the value of careful preparation. We can Assure you that you are opening to a trustworthy and reputable company. We work closely with you or your interior designer on paint colors and the style you envision.", "./media/images/residentialPainting.svg");

    residentialBall.style.setProperty("top", "6.5%");
    residentialBall.style.setProperty("left", "5%");
        residentialBall.addEventListener("transitionend", ()=>{


   

            residentialBall.addEventListener("transitionend", ()=>{



        
                returnDisplay(servicesYellowLineVertical);
                returnDisplay(yellowButtonIcon);
                returnDisplay(headingServicesMenu);
                returnDisplay(bodyText);
                returnDisplay(goBackButton);

                residentialBall.style.removeProperty("position");

                displayNone(servicesYellowLineContainer);
                displayNone(servicesHeading);
                displayNone(residentialPaintingButton);
                displayNone(concreteRestorationButton);
                displayNone(commercialPainting);

                servicesGridButtons.className = "servicesGridButtonsExpanded";


            });

        });            
    


    




};




goBackButton.addEventListener("click", ()=>{

residentialBall.style.setProperty("position", "absolute");
residentialBall.style.removeProperty("top");
residentialBall.style.removeProperty("left");



commercialBall.style.setProperty("position", "absolute");
commercialBall.style.removeProperty("top");
commercialBall.style.removeProperty("left");

concreteBall.style.setProperty("position", "absolute");
concreteBall.style.removeProperty("top");
concreteBall.style.removeProperty("left");


returnDisplay(servicesYellowLineContainer);
returnDisplay(servicesHeading);
returnDisplay(concreteRestorationButton);
returnDisplay(residentialPaintingButton);
returnDisplay(commercialPaintingButton);
returnDisplay(commercialPaintingText);
returnDisplay(concreteRestorationText);
returnDisplay(residentialPaintingText);


//residentialBall.style.setProperty("transform", "translate(0%, 0%)");

displayNone(servicesYellowLineVertical);
displayNone(yellowButtonIcon);
displayNone(headingServicesMenu);
displayNone(bodyText);
displayNone(goBackButton);


servicesGridButtons.className = "servicesGridButtons";




})
