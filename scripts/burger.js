let toggled = false;
const links = document.getElementsByClassName("underBurger");

function burgerToggle(){  
    // it goes from 1 to links length +1 bc theres a vengeful spirit
    if (toggled){
        for (let i = 1; i < (links.length)+1; i++) {
            document.links[i].style.display = "none";
        }
    }

    else{
        for (let i = 1; i < (links.length)+1; i++) {
            document.links[i].style.display = "block";
        }
    }

    toggled=!toggled;
}
