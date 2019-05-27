//Create a function to easily select our elements
const toBeSelected = (s) => document.querySelector(s);

//Hide and show the navigation on click
toBeSelected('.menu-toggle').addEventListener('click', () =>{
    toBeSelected('header').classList.toggle('nav-open');
});

