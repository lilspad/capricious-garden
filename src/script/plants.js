console.log(sessionStorage)

var display = document.getElementById('plants-display');
var filters = document.getElementsByClassName('filter');
var filtersDiv = document.getElementsByClassName('filter-div');
var types = document.getElementsByClassName('plant-type');


var indoor = document.createElement('iframe');

indoor.src = '/src/script/data/indoor-plants.html';

var foliage = document.createElement('iframe');

foliage.src = '/src/script/data/foliage.html';

var succulents = document.createElement('iframe');

succulents.src = '/src/script/data/succulents.html';

var flowering = document.createElement('iframe');

flowering.src = '/src/script/data/flowering.html';

var easy = document.createElement('iframe');

easy.src = '/src/script/data/easy.html';

var fussy = document.createElement('iframe');

fussy.src = '/src/script/data/fussy.html';


let defaultSelection = 'ALL';
let currentFilter;

for (let i = 0; i < types.length; i++) {
    types[i].addEventListener('click', () => {
        switch(types[i].innerText) {
            case 'ALL':
                sessionStorage.setItem("selection", 'ALL');
                break;
            case 'EASYCARE':
                sessionStorage.setItem("selection", 'EASYCARE');
                break;
            case 'FUSSY':
                sessionStorage.setItem("selection", 'FUSSY');
                break;
            case 'FLOWERING':
                sessionStorage.setItem("selection", 'FLOWERING');
                break;
            case 'FOLIAGE':
                sessionStorage.setItem("selection", 'FOLIAGE');
                break;
            case 'SUCCULENTS & CACTI':
                sessionStorage.setItem("selection", 'SUCCULENTS');
        }

    })
};

if (sessionStorage.getItem("selection")) {
    defaultSelection = sessionStorage.getItem("selection");
    switch(defaultSelection) {
            case 'ALL':
                currentFilter = indoor;
                break;
            case 'EASYCARE':
                currentFilter = easy;
                break;
            case 'FUSSY':
                currentFilter = fussy;
                break;
            case 'FLOWERING':
                currentFilter = flowering;
                break;
            case 'FOLIAGE':
                currentFilter = foliage;
                break;
            case 'SUCCULENTS':
                currentFilter = succulents;
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
            case 'ALL':
                currentFilter = indoor;
                break;
            case 'EASYCARE':
                currentFilter = easy;
                break;
            case 'FUSSY':
                currentFilter = fussy;
                break;
            case 'FLOWERING':
                currentFilter = flowering;
                break;
            case 'FOLIAGE':
                currentFilter = foliage;
                break;
            case 'SUCCULENTS':
                currentFilter = succulents;
        }

        display.innerHTML = "";
        display.appendChild(currentFilter);
    })
};
