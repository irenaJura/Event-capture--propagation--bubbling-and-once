const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

// when we click on one of the nested elements,
// click will bubble up to all the elements that wrap around it
function logText(e) {
   console.log(this.classList.value);
   // console.log(this);
   e.stopPropagation(); // stop bubbling
}

// event capture goes from the top down to find your clicked element
// then it bubbles up and triggers click events on the other elements wraped around

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false // true = run the function on the way down
}));

button.addEventListener('click', () => {
    console.log('Click');
}, {
    once: true // unbind event after one click
});