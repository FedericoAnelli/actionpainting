let servicesGridButtons = document.getElementById("servicesGridButtons");
let concreteRestoration = document.getElementById("concreteRestoration");
let residentialPainting = document.getElementById("residentialPainting");
let commercialPainting = document.getElementById("commercialPainting");
let commercialPaintingText = document.getElementById("commercialPaintingText");
let servicesYellowLine = document.getElementById("servicesYellowLine");
let servicesHeading = document.getElementById("servicesHeading");
let servicesTextMiddleContainer = document.getElementById("servicesTextMiddleContainer");
commercialPainting.addEventListener("click", ()=>{


    // Moves yellow line to the right
    let movementRight = document.createElement("div");
    movementRight.id = "movementRight";
    movementRight.className = "servicesBlackLine";
    servicesYellowLine.prepend(movementRight);

    // Concrete Restoration Fade Out
    let concreteRestorationFadeOut = document.createElement("div");
    concreteRestorationFadeOut.id = "concreteRestorationFadeOut";
    concreteRestorationFadeOut.className = "servicesButtonFadeOut";
    concreteRestorationFadeOut.innerHTML = `<button class="yellowCircleButton"></button><p class="paragraphButtons">Concrete Restoration</p>`;
    servicesGridButtons.appendChild(concreteRestorationFadeOut);
    concreteRestoration.remove();
    concreteRestorationFadeOut.addEventListener("animationend", ()=>{
        concreteRestorationFadeOut.remove();
    })

    // Residential Painting button Fade Out
    let residentialPaintingFadeOut = document.createElement("div");
    residentialPaintingFadeOut.id = "concreteRestorationFadeOut";
    residentialPaintingFadeOut.className = "servicesButtonFadeOut";
    residentialPaintingFadeOut.innerHTML = `<button class="yellowCircleButton"></button><p class="paragraphButtons">Residential Painting</p>`;
    servicesGridButtons.appendChild(residentialPaintingFadeOut);
    residentialPainting.remove();
    residentialPaintingFadeOut.addEventListener("animationend", ()=>{
        residentialPaintingFadeOut.remove();
    })

    // Removes commercial painting text below yellow circle

    let commercialPaintingTextFadeOut = document.createElement("p");
    commercialPaintingTextFadeOut.id = "commercialPaintingTextFadeOut";
    commercialPaintingTextFadeOut.className = "paragraphButtonsFadeOut";
    commercialPainting.appendChild(commercialPaintingTextFadeOut);
    commercialPaintingText.remove(); 
    commercialPaintingTextFadeOut.addEventListener("animationend", ()=>{
            commercialPaintingTextFadeOut.remove();
        });
 

    // Heading WE OFFER BEST PAINTING SERVICES & SOLUTIONS Fade Out
    let servicesFadeOut = document.createElement("h2");
    servicesFadeOut.id = "servicesFadeOut";
    servicesFadeOut.className = "servicesHeadingFadeOut";
    servicesFadeOut.innerHTML=`We Offer <br> Best Painting <br> Services & Solutions`;
    servicesTextMiddleContainer.prepend(servicesFadeOut);
    servicesHeading.remove();



    // Animation after movement to the right starts
    movementRight.addEventListener("animationend", () => {
    
        servicesFadeOut.remove();

        servicesGridButtons.remove();

        let servicesGridButtonsExpanded = document.createElement("div");
        servicesGridButtonsExpanded.id = "servicesGridButtonsExpanded";
        servicesGridButtonsExpanded.className = "servicesGridButtonsExpanded";
        servicesTextMiddleContainer.appendChild(servicesGridButtonsExpanded);

        servicesYellowLine.remove();

        let commercialPaintingSelected = document.createElement("div");
        commercialPaintingSelected.id = "commercialPaintingSelectedButton";
        commercialPaintingSelected.className = "yellowCircleButtonHeading";
        servicesGridButtonsExpanded.appendChild(commercialPaintingSelected);


        //Expands yellow line vertically

        let middleDiv = document.createElement("div");
        middleDiv.id = "middleDiv";
        middleDiv.className = "servicesMiddleDivMovementUpwards";
        servicesGridButtonsExpanded.appendChild(middleDiv);

        let yellowLineExpandUp = document.createElement("p");
        yellowLineExpandUp.id = "yellowLineExpandUp";
        yellowLineExpandUp.className = "servicesYellowLineExpandVertical";
        yellowLineExpandUp.innerHTML=`&nbsp`;
        middleDiv.appendChild(yellowLineExpandUp);





        yellowLineExpandUp.addEventListener("animationend", ()=>{

            // Header Fade in, Commercial Painting
            let commercialPaintingHeader = document.createElement("h2");
            commercialPaintingHeader.id = "commercialPaintingHeader";
            commercialPaintingHeader.className = "servicesAppearingHeaderStyle";
            commercialPaintingHeader.innerHTML = `Commercial <br> Painting`;
            servicesGridButtonsExpanded.appendChild(commercialPaintingHeader);


        }
        )




        




});
});