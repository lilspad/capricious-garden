console.log(sessionStorage)

var display = document.getElementById('plants-display');
var filters = document.getElementsByClassName('filter');
var filtersDiv = document.getElementsByClassName('filter-div');
var types = document.getElementsByClassName('plant-type');


var indoor = document.createElement('iframe');

indoor.src = '../../script/data/indoor-plants.html';

var foliage = document.createElement('iframe');

foliage.src = '../../script/data/foliage.html';

var succulents = document.createElement('iframe');

succulents.src = '../../script/data/succulents.html';

var flowering = document.createElement('iframe');

flowering.src = '../../script/data/flowering.html';

var easy = document.createElement('iframe');

easy.src = '../../script/data/easy.html';

var fussy = document.createElement('iframe');

fussy.src = '../../script/data/fussy.html';


let defaultSelection = 'ALL';
let currentFilter;

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
} else {
    currentFilter = indoor;
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