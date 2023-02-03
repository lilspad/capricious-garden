var display = document.getElementById('plants-display');
var filters = document.getElementsByClassName('filter');
var filtersDiv = document.getElementsByClassName('filter-div');
var types = document.getElementsByClassName('plant-type');

var foliage = ["alocasia", "begonia", "calathea", "chinese evergreen", "croton", "ferns", "fittonia", "indoor trees", "ivy", "maranta", 
"palms", "philodendron", "pothos", "spider plant"];
var succulents = ["agave", "aloe", "cacti", "calisia", "ceropegia", "crassula", "echeveria", "gasteria", "haworthia", "hoya", "kalanchoe", "peporomia", 
"sedum", "senecio", "tradescantia", "yucca"];

var flowering = ["african violet", "bromeliad", "clivia", "crown-of-thorns", "geranium", "kalanchoe", "maracas", "orchids"];

var trees = ["citrus", "dracaena", "ficus", "laurels", "pachira", "pine", "yucca"];
var ferns = ["asparagus", "bird's nest", "blue star", "boston", "maidenhair", "mother", "staghorn"];

/*function createPlant(name, enviroment, type, sizes, pricing) {
    return {
        name: name,
        enviroment: enviroment,
        type: type,
        sizes: sizes,
        pricing: pricing
    }
}*/

var indoor = [foliage, succulents, flowering];
var easy = ['some', 'easy', 'to care for', 'plants'];
var fussy = ['some', 'plants', 'that', 'are fussy'];


for (let i = 0; i < types.length; i++) {
    types[i].addEventListener('click', () => {
        switch(types[i].innerText) {
            case 'ALL':
                sessionStorage.setItem("currentFilter", indoor);
                break;
            case 'EASYCARE':
                sessionStorage.setItem("currentFilter", easy);
                break;
            case 'FUSSY':
                sessionStorage.setItem("currentFilter", fussy);
                break;
            case 'FLOWERING':
                sessionStorage.setItem("currentFilter", flowering);
                break;
            case 'FOLIAGE':
                sessionStorage.setItem("currentFilter", foliage);
                break;
            case 'SUCCULENTS':
                sessionStorage.setItem("currentFilter", succulents);
        }
        display.innerHTML = getCurrentFilter();
    })
};

let currentFilter = indoor;

const getCurrentFilter = () => {
    if (sessionStorage.getItem('currentFilter')) {
        currentFilter = sessionStorage.getItem('currentFilter');
        return currentFilter;
    } else {
        sessionStorage.setItem('currentFilter', currentFilter);
        return currentFilter;
    }
}

display.innerHTML = getCurrentFilter();

for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', () => {

        for (let j = 0; j < filters.length; j++) {
            filtersDiv[j].style.backgroundColor = 'inherit';
            filtersDiv[j].style.color = 'black';
        }

        filtersDiv[i].style.backgroundColor = '#501537';
        filtersDiv[i].style.color = 'white';

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

        sessionStorage.setItem('currentFilter', currentFilter);
        display.innerHTML = getCurrentFilter();
    })
};