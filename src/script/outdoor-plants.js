console.log(sessionStorage)

var display = document.getElementById('plants-display');
var filters = document.getElementsByClassName('filter');
var filtersDiv = document.getElementsByClassName('filter-div');
var types = document.getElementsByClassName('plant-type');


var seeds = document.createElement('iframe');

seeds.src = '../../script/data/seeds.html';

var perennial = document.createElement('iframe');

perennial.src = '../../script/data/perennial.html';

var ornamental = document.createElement('iframe');

ornamental.src = '../../script/data/ornamental.html';


let defaultSelection = 'SEEDS';
let currentFilter;

for (let i = 0; i < types.length; i++) {
    types[i].addEventListener('click', () => {
        switch(types[i].innerText) {
            case 'SEEDS':
                sessionStorage.setItem("selection", 'SEEDS');
                break;
            case 'PERENNIAL':
                sessionStorage.setItem("selection", 'PERENNIAL');
                break;
            case 'ORNAMENTAL':
                sessionStorage.setItem("selection", 'ORNAMENTAL');
                break;
        }

    })
};

if (sessionStorage.getItem("selection")) {
    defaultSelection = sessionStorage.getItem("selection");
    switch(defaultSelection) {
            case 'SEEDS':
                currentFilter = seeds;
                break;
            case 'PERENNIAL':
                currentFilter = perennial;
                break;
            case 'ORNAMENTAL':
                currentFilter = ornamental;
                break;
        }
}


display.innerHTML = "";
display.appendChild(currentFilter);

for (let i = 0; i < filters.length; i++) {

    if (filters[i].innerText === defaultSelection) {
        filtersDiv[i].classList.add('default');
    }

    filters[i].addEventListener('click', () => {

        for (let j = 0; j < filters.length; j++) {
            filtersDiv[j].classList.remove('selected', 'default')
        }

        filtersDiv[i].classList.add('selected');

        switch(filters[i].innerText) {
            case 'SEEDS & BULBS':
                currentFilter = seeds;
                break;
            case 'PERENNIAL':
                currentFilter = perennial;
                break;
            case 'ORNAMENTAL':
                currentFilter = ornamental;
                break;
        }

        display.innerHTML = "";
        display.appendChild(currentFilter);
    })
};