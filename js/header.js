


function yellowStrikethroughIn (elementID){


    let headerButton = document.getElementById(elementID);
headerButton.addEventListener("mouseover", ()=>{

    if(document.getElementById("strikethroughOut"))
    {
        let customStrikethroughOut = document.getElementById("strikethroughOut");
        customStrikethroughOut.remove();
    }

    let customStrikethrough = document.createElement("div");
    customStrikethrough.id = "strikethroughIn";
    customStrikethrough.className = "menuYellowStrikethrough";
    headerButton.appendChild(customStrikethrough);

});

headerButton.addEventListener("mouseout", ()=>{

    let customStrikethroughOut = document.getElementById("strikethroughIn");
    customStrikethroughOut.id = "strikethroughOut";
    customStrikethroughOut.className = "menuYellowStrikethroughOut";


}
);

};

let menuList = document.getElementById("navbar").getElementsByTagName("li");

for (let i = 0; i < menuList.length-1; i++)
{
    console.log(menuList[i+1].id);
    yellowStrikethroughIn(menuList[i+1].id);
}