//the following is the fade function,
   //currently unattached to button:
   //source: https://stackoverflow.com/questions/28662893/fade-in-and-fade-out-in-pure-javascript-without-jquery


   function fadeOut(elem, speed) {

    if (!elem.style.opacity) {
    elem.style.opacity = 1;
    } // end if
 
    var outInterval = setInterval(function () {
    elem.style.opacity -= 0.02;
    if (elem.style.opacity <= 0) {
        clearInterval(outInterval);
    } // end if
    }, speed / 50);
    }
    // cuz this calls the function just when the page loads so on the start of everything:
    // fadeOut(box, 2000);
 
    // end fadeOut()