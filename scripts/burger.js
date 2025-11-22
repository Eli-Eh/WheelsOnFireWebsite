let toggled = false;

function burgerToggle(){
    links=document.getElementsByClassName("underBurger");

    // it goes from 1 to 4 bc theres a vengeful spirit
    if (toggled){
        for (let i = 1; i < 4; i++) {
            document.links[i].style.display = "none";
        }
    }

    if (!toggled){
        for (let i = 1; i < 4; i++) {
            document.links[i].style.display = "block";
        }
    }

    toggled=!toggled;
}

