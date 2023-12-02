
// Make variables out of the elements we will manipulate
var totalCounter = document.querySelector(".total")
var currentCounter = document.querySelector(".current")
var yesOrNoCounter = document.querySelector(".yesorno")

// Start the scrolling count with 0
var initialPixels = 0;

//We add an event listener to the event "scroll" and call the event "scrolled"
document.addEventListener('scroll', function (scrolled) {
    // Every time we scroll, add 1 to the counter
    totalCounter.innerHTML = "You have scrolled " + (initialPixels += 1) + " times";

    //Calculate the location of the window in the Y axis (vertical)
    currentPixels = window.scrollY;
    currentCounter.innerHTML = "You're currently at " + currentPixels + " pixels";

    // Check if the event "scrolled" already happened
    if (scrolled) {
        yesOrNoCounter.innerHTML = "You've scrolled"
    }

    if (currentPixels < 100 || currentPixels > 1000) {
        document.body.style.backgroundColor = "tomato";
    } else {
        document.body.style.backgroundColor = "white";
    }
});

