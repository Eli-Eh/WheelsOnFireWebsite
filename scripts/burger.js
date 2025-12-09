/*
    Description: This code handles the hiding and showing of the navigation menu when
    pressing the "three lines" icon shown when the website is displayed on smaller displays.

    Author: Illia Sergeyev
*/

// are the links in the nav menu hidden?
// true = hidden, false = shown
let toggled = false;
// the links which are hidden by the burger toggle.
// for some reason, the home link is included in this, despite the fact it doesnt have the .underBurger class
const links = document.getElementsByClassName("underBurger");

function burgerToggle(){  
    // if the burger toggle is on, hide the menus
    if (toggled){
        // these for loops goes from 1 to links length +1 because theres a vengeful spirit in the code (see links comment)
        // such bodge
        for (let i = 1; i < (links.length)+1; i++) {
            document.links[i].style.display = "none";
        }
    }

    // if the burger menu is not toggles, show the menus
    else{
        for (let i = 1; i < (links.length)+1; i++) {
            document.links[i].style.display = "block";
        }
    }

    // flip toggled
    toggled=!toggled;
}
