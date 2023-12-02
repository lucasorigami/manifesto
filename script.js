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



// window.onscroll = function (ev) {
    // if (window.innerHeight + window.scrollY >= (document.body.offsetHeight-1000)) {
        // renderTemplate();
    // }
// }

// document.addEventListener('scroll', function (scrolled) {

// }


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
            button.innerHTML = `<p>${buttontext}</p>`
};


// length array 
// += 1

// [item + 2]

// currentItem = 0 

// item[currentItem + 1].length 

// item[currentItem + 1]

function renderTemplate() {
    item = collection[i]
    // for (let item of collection) {
    //     html = `<p>${item}</p>`;
    //     console.log(item)
    // }
    // wrapper.innerHTML = html
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