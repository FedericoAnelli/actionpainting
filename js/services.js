// Boxes
let servicesTextMiddleContainer = document.getElementById("servicesTextMiddleContainer");
let servicesTextTile = document.getElementById("servicesTextTile");

// Buttons
let commercialPaintingButton = document.getElementById("commercialPainting");
let concreteRestorationButton = document.getElementById("concreteRestoration");
let residentialPaintingButton = document.getElementById("residentialPainting");
let servicesGridButtons = document.getElementById("servicesGridButtons");
let yellowCircleButton = document.getElementById("yellowCircleButton");

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


        //Creates elements for Commercial Painting Screen
        let servicesYellowLineVertical = document.createElement("p");
        servicesYellowLineVertical.className = "servicesYellowLineVertical";
        servicesYellowLineVertical.id = "servicesYellowLineVertical";
        servicesYellowLineVertical.innerHTML = `&nbsp`;

        let headingCommercialPainting = document.createElement("p");
        headingCommercialPainting.className = "servicesAppearingHeaderStyle";
        headingCommercialPainting.id = "headingCommercialPainting";
        headingCommercialPainting.innerHTML = `Commercial <br> Painting`;

        let commercialPaintingBody = document.createElement("p");
        commercialPaintingBody.className = "commercialPaintingParagraph";
        commercialPaintingBody.id = "commercialPaintingBody";
        commercialPaintingBody.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, repudiandae. Doloribus officia tempore vel, cumque sunt aperiam repellat ex reprehenderit, ipsum ipsa, autem quibusdam amet architecto ab accusantium explicabo! Aut.`;





// Heading
let servicesHeading = document.getElementById("servicesHeading");

// Paragraph texts
let commercialPaintingText = document.getElementById("commercialPaintingText");

// Yellow line
let servicesYellowLineHorizontal = document.getElementById("servicesYellowLine");
let servicesYellowLineContainer = document.getElementById("servicesYellowLineContainer");

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
        //fadeOut(commercialPaintingText);
        fadeOut(servicesYellowLineContainer);
    }

    if (object == residentialPaintingButton)
    {
        fadeOut(servicesHeading);
        fadeOut(concreteRestorationButton);
        fadeOut(residentialPaintingButton);
        //fadeOut(commercialPaintingText);
        fadeOut(servicesYellowLineContainer);
    }
    if (object == commercialPaintingButton)
    {
        fadeOut(servicesHeading);
        fadeOut(concreteRestorationButton);
        fadeOut(residentialPaintingButton);
        fadeOut(commercialPaintingText);
        fadeOut(servicesYellowLineContainer);
    }


}



commercialPaintingButton.onclick = ()=> {

    fadeOutAllButMe(commercialPaintingButton);

    

    servicesHeading.addEventListener("transitionend", ()=>{

        displayNone(servicesYellowLineContainer);
        displayNone(servicesHeading);
        displayNone(concreteRestorationButton);
        displayNone(residentialPaintingButton);
        displayNone(commercialPaintingText);
        
        servicesGridButtons.className = "servicesGridButtonsExpanded";
        commercialPaintingButton.className = "servicesButtonSelected";



        servicesGridButtons.appendChild(servicesYellowLineVertical);
        servicesGridButtons.appendChild(headingCommercialPainting);
        servicesTextMiddleContainer.appendChild(commercialPaintingBody);
        servicesTextMiddleContainer.appendChild(goBackButton);
    });


};

goBackButton.addEventListener("click", ()=>{

returnDisplay(servicesYellowLineContainer);
returnDisplay(servicesHeading);
returnDisplay(concreteRestorationButton);
returnDisplay(residentialPaintingButton);
returnDisplay(commercialPaintingText);

displayNone(servicesYellowLineVertical);
displayNone(headingCommercialPainting);
displayNone(commercialPaintingBody);
displayNone(goBackButton);


servicesGridButtons.className = "servicesGridButtons";


})
