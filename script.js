let collection;
let wrapper = document.getElementById("wrapper");
let html = '';



fetch('./onlytortilla.json')
    .then(response => response.json())
    .then((json) => {
        collection = json,
            renderTemplate()
    })


window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        renderTemplate();
    }
}



function renderTemplate() {
    for (let item of collection) {
        `<p>hello!</p>`;
    }
    wrapper.innerHTML = html
}
