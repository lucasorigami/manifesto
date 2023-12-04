var initialPixels = 0;
let collection;
let wrapper = document.getElementById("wrapper");
let scrollableDiv = document.getElementById("tnc")
let html = '';
let i = 9;
let buttonDiv = document.getElementById("button")
let buttontext = "accept & continue";


fetch('https://api.npoint.io/7c7e18cde89d8def88f1')
    .then(response => response.json())
    .then((json) => {
        collection = json,
            renderTemplate()
    })





scrollableDiv.onscroll = function (ev) {
    // Calculate the distance scrolled within the div
    var scrolledDistance = scrollableDiv.scrollTop;

    // Calculate the maximum scroll height considering the content
    var maxScrollHeight = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;

    // Adjust the threshold as needed
    if (scrolledDistance >= (maxScrollHeight - 1000)) {
        renderTemplate();
    }

    if (scrolledDistance > 10000) {
        buttontext = "don't you think"
        buttonDiv.style.backgroundColor = "black";
        // wrapper.style.backgroundColor = "purple";
    }
    if (scrolledDistance > 12000) {
        buttontext = "that websites should be easiliy accessible?"

    }

    if (scrolledDistance > 17000) {
        buttontext = "that they link to things that interest you"
        buttonDiv.style.backgroundColor = "white"
        buttonDiv.style.color = "blue"
        buttonDiv.style.textDecoration = "underline blue" 

    }

    if (scrolledDistance > 20000) {
        buttontext = "and by that i don't mean the ads"
        buttonDiv.style.backgroundColor = "blue"
        buttonDiv.style.color = "white"
        buttonDiv.style.textDecoration = "underline wavy red" 
    }

    if (scrolledDistance > 22000) {
        buttontext = "personal things"
        buttonDiv.style.backgroundColor = "pink"
        buttonDiv.style.color = "black"
        buttonDiv.style.textDecoration = "none" 
    }

        if (scrolledDistance > 27000) {
            buttontext = "like this"
            buttonDiv.style.backgroundColor = "pink"
            buttonDiv.style.color = "blue"
            buttonDiv.style.textDecoration = "underline blue" 
        }
        if (scrolledDistance > 27500) {
            buttontext = "or that"
            buttonDiv.style.backgroundColor = "pink"
            buttonDiv.style.color = "blue"
            buttonDiv.style.textDecoration = "underline blue" 
        }
        if (scrolledDistance > 28000) {
            buttontext = "or how how about this video"
            buttonDiv.style.backgroundColor = "pink"
            buttonDiv.style.color = "blue"
            buttonDiv.style.textDecoration = "underline blue" 
        }
        if (scrolledDistance > 28500) {
            buttontext = "or that article"
            buttonDiv.style.backgroundColor = "pink"
            buttonDiv.style.color = "blue"
            buttonDiv.style.textDecoration = "underline blue" 
        }
        if (scrolledDistance > 29000) {
            buttontext = "or this podcast"
            buttonDiv.style.backgroundColor = "pink"
            buttonDiv.style.color = "blue"
            buttonDiv.style.textDecoration = "underline blue" 
        }
        if (scrolledDistance > 29500) {
            buttontext = "selected by the human who made the website"
            buttonDiv.style.backgroundColor = "pink"
            buttonDiv.style.color = "black"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 35000) {
            buttontext = "not by algoritmns"
            buttonDiv.style.backgroundColor = "pink"
            buttonDiv.style.color = "black"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 40000) {
            buttontext = "not out of commerial gain"
            buttonDiv.style.backgroundColor = "lightgreen"
            buttonDiv.style.color = "black"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 45000) {
            buttontext = "but out of personal interest"
            buttonDiv.style.backgroundColor = "lightblue"
            buttonDiv.style.color = "black"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 48000) {
            buttontext = "like:"
            buttonDiv.style.backgroundColor = "lightblue"
            buttonDiv.style.color = "black"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 50000) {
            buttontext = "Hey check this out!"
            buttonDiv.style.backgroundColor = "lightblue"
            buttonDiv.style.color = "black"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 55000) {
            buttontext = "leading you to discover new and interesting websites"
            buttonDiv.style.backgroundColor = "white"
            buttonDiv.style.color = "red"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 60000) {
            buttontext = "to bring you to new places"
            buttonDiv.style.backgroundColor = "lightblue"
            buttonDiv.style.color = "black"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 65000) {
            buttontext = "instead of just keeping you scrolling..."
            buttonDiv.style.backgroundColor = "lightgrey"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 65000) {
            buttontext = "so do you want to go somewhere interesting?"
            buttonDiv.style.backgroundColor = "lightgrey"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 65000) {
            buttontext = "all you have to do is"
            buttonDiv.style.backgroundColor = "lightgrey"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 70000) {
            buttontext = "forget about the text above"
            buttonDiv.style.backgroundColor = "lightgrey"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 75000) {
            buttontext = "forget about the text above"
            buttonDiv.style.backgroundColor = "lightgrey"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 80000) {
            buttontext = "I promise, you're not the product..."
            buttonDiv.style.backgroundColor = "lightgrey"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 85000) {
            buttontext = "just click on that button..."
            buttonDiv.style.backgroundColor = "lightgrey"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
        if (scrolledDistance > 90000) {
            buttontext = "accept & continue"
            buttonDiv.style.backgroundColor = "rgb(173, 173, 173)"
            buttonDiv.style.color = "grey"
            buttonDiv.style.textDecoration = "none" 
        }
            button.innerHTML = `<p>${buttontext}</p>`
};



function renderTemplate() {
    item = collection[i]
    html = `<p>${item}</p>`;
    console.log(i);

    wrapper.innerHTML += html
    if (i == collection.length) {
        i = 0
    }
    else {
        i++
    }
}

function popup(){
    alert("Please first carefully review the terms and conditions.")
}