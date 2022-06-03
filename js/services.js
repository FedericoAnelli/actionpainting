let servicesGridButtons = document.getElementById("servicesGridButtons");
let concreteRestoration = document.getElementById("concreteRestoration");
let residentialPainting = document.getElementById("residentialPainting");
let commercialPainting = document.getElementById("commercialPainting");
let commercialPaintingText = document.getElementById("commercialPaintingText");
let servicesYellowLine = document.getElementById("servicesYellowLine");
let servicesHeading = document.getElementById("servicesHeading");
let servicesTextMiddleContainer = document.getElementById("servicesTextMiddleContainer");
let servicesMiddleDivMovementSideways = document.getElementById("servicesMiddleDivMovementSideways");
let servicesTextTile = document.getElementById("servicesTextTile");

commercialPainting.addEventListener("click", ()=>{


    // Moves yellow line to the right
    let servicesYellowLine = document.getElementById("servicesYellowLine");
    servicesYellowLine.remove();
    let shrinkYellowLine = document.createElement("p");
    shrinkYellowLine.id = "shrinkYellowLine";
    shrinkYellowLine.className = "shrinkYellowLine";
    shrinkYellowLine.innerHTML = `&nbsp`;
    servicesMiddleDivMovementSideways.appendChild(shrinkYellowLine);
    shrinkYellowLine.addEventListener("animationend", ()=>{
        servicesMiddleDivMovementSideways.remove();
    }
    
    
    )

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
    shrinkYellowLine.addEventListener("animationend", () => {
    
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

            // Text fade in, Commercial Painting
            let commercialPaintingBody = document.createElement("div");
            commercialPaintingBody.id = "commercialPaintingBody";
            commercialPaintingBody.className = "commercialPaintingBody";
            commercialPaintingBody.innerHTML = `<p class="commercialPaintingParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, repudiandae. Doloribus officia tempore vel, cumque sunt aperiam repellat ex reprehenderit, ipsum ipsa, autem quibusdam amet architecto ab accusantium explicabo! Aut.</p>`
            servicesTextMiddleContainer.appendChild(commercialPaintingBody);

            // Go back button fade in
            let goBackButton = document.createElement("div");
            goBackButton.id = "goBackButtonDiv";
            goBackButton.className = "goBackButtonDiv";
            goBackButton.innerHTML= `
            
            <div class = "arrowsDiv">
            <span class="material-symbols-outlined yellowArrows">
            arrow_back_ios
            </span><span class="material-symbols-outlined yellowArrows">
            arrow_back_ios
            </span></div>
            
            <div class="goBackParagraph"><p class="goBackText">GO BACK</p></div>
            
            `;
            
            servicesTextMiddleContainer.appendChild(goBackButton);

                    goBackButton.addEventListener("click", ()=>
                    
                    {
                        servicesTextMiddleContainer.remove();                        
                        servicesTextTile.appendChild(servicesTextMiddleContainer);
                        servicesTextMiddleContainer.appendChild(servicesHeading);
                        servicesTextMiddleContainer.appendChild(servicesMiddleDivMovementSideways);
                        servicesMiddleDivMovementSideways.appendChild(servicesYellowLine);
                        servicesTextMiddleContainer.appendChild(servicesGridButtons);
                        servicesGridButtons.appendChild(commercialPainting);
                        servicesGridButtons.appendChild(concreteRestoration);
                        servicesGridButtons.appendChild(residentialPainting);
                    }


                        
                    )

        }
        )




        




});
});