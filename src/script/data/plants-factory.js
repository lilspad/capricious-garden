const display = document.getElementById('plants-display');
var filters = document.getElementsByClassName('filter');
var filterButtons = document.getElementsByClassName('filter-button');

const plants = [
    ["1","https://images.pexels.com/photos/6909716/pexels-photo-6909716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Adiantum raddianum","Maidenhair Fern","foliage","fussy","8"],["2","https://images.pexels.com/photos/9311882/pexels-photo-9311882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Aglaonema commutatum","Chinese Evergreen","foliage","easy","7"],
    ["3","https://images.pexels.com/photos/5075475/pexels-photo-5075475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Alocasia macrorhiza","Giant Taro","foliage","fussy","10"],
    ["4","https://images.pexels.com/photos/7318134/pexels-photo-7318134.jpeg?auto=compress&cs=tinysrgb&w=800","Aloe barbadensis","Aloe Vera","succulent","easy","5"],
    ["5","https://images.pexels.com/photos/14378976/pexels-photo-14378976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Aphelandra squarrosa","Zebra Plant","foliage, flowering","fussy","11"],
    ["6","https://images.pexels.com/photos/7149718/pexels-photo-7149718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Asparagus aethiopicus","Asparagus Fern","foliage","fussy","5"],
    ["7","https://images.pexels.com/photos/3854743/pexels-photo-3854743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Begonia rex","Painted-leaf Begonia","foliage","fussy","10"],
    ["8","https://images.pexels.com/photos/4350801/pexels-photo-4350801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Begonia maculata","Polka Dot Begonia","foliage","fussy","10"],
    ["9","https://images.pexels.com/photos/1309769/pexels-photo-1309769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Brassia caudata","Spider Orchid","flowering","fussy","14"],
    ["10","https://images.pexels.com/photos/4593961/pexels-photo-4593961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Calathea lancifolia","Rattlesnake Plant","foliage","fussy","10"],
    ["11","https://images.pexels.com/photos/8734306/pexels-photo-8734306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Calathea makoyana","Peacock Plant","foliage","fussy","12"],
    ["12","https://images.pexels.com/photos/7486106/pexels-photo-7486106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Ceropegia woodii","String of Hearts","succulent, foliage","easy","6"],
    ["13","https://images.pexels.com/photos/3126442/pexels-photo-3126442.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load","Chamaedorea elegans","Parlor Palm","foliage","easy","9"],
    ["14","https://images.pexels.com/photos/11363516/pexels-photo-11363516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Chlorophytum comosum","Spider Plant","foliage","easy","7"],
    ["15","https://images.pexels.com/photos/7026638/pexels-photo-7026638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Coffea arabica","Coffee Plant","foliage, flowering","fussy","9"],
    ["16","https://images.pexels.com/photos/12813397/pexels-photo-12813397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Crassula marnieriana","Worm Plant","succulent","easy","9"],
    ["17","https://images.pexels.com/photos/7354518/pexels-photo-7354518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Crassula ovata","Jade Plant","succulent","easy","10"],
    ["18","https://images.pexels.com/photos/13799658/pexels-photo-13799658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Curio rowleyanus","String of Pearls","succulent","easy","8"],
    ["19","https://images.pexels.com/photos/11121422/pexels-photo-11121422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Cyclamen persicum","Florist's Cyclamen","flowering","fussy","8"],
    ["20","https://images.pexels.com/photos/1309769/pexels-photo-1309769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2+D47","Cymbidium spp.","Boat Orchid","flowering","fussy","15"],
    ["21","https://images.pexels.com/photos/9770430/pexels-photo-9770430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Dionaea muscipula","Venus Fly Trap","foliage","fussy","6"],
    ["22","https://images.pexels.com/photos/4299019/pexels-photo-4299019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Dracaena marginata","Dragon Tree","foliage","easy","12"],
    ["23","https://images.pexels.com/photos/9562655/pexels-photo-9562655.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load","Dracaena sanderiana","Lucky bamboo","foliage","easy","6"],
    ["24","https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Dracaena trifasciata","Snake Plant","succulent","easy","9"],
    ["25","https://images.pexels.com/photos/6839909/pexels-photo-6839909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Echeveria spp.","Echeveria","succulent","easy","6"],
    ["26","https://images.pexels.com/photos/5265995/pexels-photo-5265995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Echinocereus spp.","Hedgehog Cactus","succulent","easy","5"],
    ["27","https://images.pexels.com/photos/12735061/pexels-photo-12735061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Echinopsis chamaecereus ","Peanut Cactus","succulent","easy","8"],
    ["28","https://images.pexels.com/photos/6208085/pexels-photo-6208085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Epipremnum aureum","Pothos","foliage","easy","9"],
    ["29","https://images.pexels.com/photos/9760382/pexels-photo-9760382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","\tEuphorbia tirucalli","Pencil Cactus","succulent","easy","10"],
    ["30","https://images.pexels.com/photos/326545/pexels-photo-326545.jpeg?auto=compress&cs=tinysrgb&w=800","Fenestraria rhopalophylla ","Baby Toes","succulent","easy","5"],
    ["31","https://images.pexels.com/photos/12516295/pexels-photo-12516295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Ficus benjamina","Weeping Fig","foliage","fussy","12"],
    ["32","https://images.pexels.com/photos/2516651/pexels-photo-2516651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Ficus elastica","Rubber Plant","foliage","easy","9"],
    ["33","https://images.pexels.com/photos/8857324/pexels-photo-8857324.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load","Ficus lyrata","Fiddle Leaf Fig","foliage","fussy","15"],
    ["34","https://images.pexels.com/photos/12123232/pexels-photo-12123232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Fittonia verschaffeltii","Nerve Plant","foliage","fussy","8"],
    ["35","https://images.pexels.com/photos/7318095/pexels-photo-7318095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Gasteria spp.","Ox tongue","succulent","easy","6"],
    ["36","https://images.pexels.com/photos/10564275/pexels-photo-10564275.jpeg","Guzmania lingulata ","Scarlet Star","flowering","fussy","7"],
    ["37","https://images.pexels.com/photos/7365049/pexels-photo-7365049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Hedera helix","English Ivy","foliage","easy","6"],
    ["38","https://images.pexels.com/photos/4846104/pexels-photo-4846104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Heptapleurum arboricola ","Umbrella Tree","foliage","easy","8"],
    ["39","https://images.pexels.com/photos/11249335/pexels-photo-11249335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Hoya carnosa","Wax Plant","flowering","easy","8"],
    ["40","https://images.pexels.com/photos/798116/pexels-photo-798116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Kalanchoe blossfeldiana","Flaming Katy","succulent, flowering","easy","6"],
    ["41","https://images.pexels.com/photos/13150587/pexels-photo-13150587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Kalanchoe tomentosa","Velvet leafs","succulent","easy","7"],
    ["42","https://images.pexels.com/photos/8512669/pexels-photo-8512669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Lithops spp.","Pebble plant","succulent","easy","5"],
    ["43","https://images.pexels.com/photos/14024714/pexels-photo-14024714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Ludisia discolor","Jewel Orchid","foliage, flowering","fussy","8"],
    ["44","https://images.pexels.com/photos/11827399/pexels-photo-11827399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Maranta leuconeura","Prayer Plant","foliage","fussy","12"],
    ["45","https://images.pexels.com/photos/9115207/pexels-photo-9115207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Mimosa pudica","Sensitive Plant","foliage, flowering","easy","6"],
    ["46","https://images.pexels.com/photos/4691825/pexels-photo-4691825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Monstera adansonii","Monkey Mask Plant","foliage","fussy","12"],
    ["47","https://images.pexels.com/photos/6597437/pexels-photo-6597437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Monstera deliciosa","Swiss Cheese Plant","foliage","fussy","8"],
    ["48","https://images.pexels.com/photos/3854749/pexels-photo-3854749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Nephrolepsis exaltata","Boston Fern","foliage","easy","6"],
    ["49","https://images.pexels.com/photos/9667021/pexels-photo-9667021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Opuntia microdasys","Bunny Ears Cactus","succulent","easy","7"],
    ["50","https://images.pexels.com/photos/15721846/pexels-photo-15721846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Opuntia spp.","Prickly Pear","succulent","easy","5"],
    ["51","https://images.pexels.com/photos/13242091/pexels-photo-13242091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Oxalis regnellii sp.","False Shamrock","flowering","easy","6"],
    ["52","https://images.pexels.com/photos/1034476/pexels-photo-1034476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2+D29","Parodia magnifica","Ball cactus","succulent","easy","5"],
    ["53","https://images.pexels.com/photos/5943108/pexels-photo-5943108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Passiflora caerulea","Passion Flower","flowering","easy","6"],
    ["54","https://images.pexels.com/photos/12367455/pexels-photo-12367455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Peperomia prostrata","String of Turtles","succulent, foliage","easy","5"],
    ["55","https://images.pexels.com/photos/9130825/pexels-photo-9130825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Phalaenopsis spp.","Moth Orchid","flowering","fussy","10"],
    ["56","https://images.pexels.com/photos/4530723/pexels-photo-4530723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Philodendron erubescens","Pink Princess","foliage","easy","9"],
    ["57","https://images.pexels.com/photos/7663987/pexels-photo-7663987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Philodendron erubescens","White Wizard","foliage","easy","10"],
    ["58","https://images.pexels.com/photos/7494831/pexels-photo-7494831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Philodendron mia ","White Princess","foliage","easy","8"],
    ["59","https://images.pexels.com/photos/3854750/pexels-photo-3854750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Philodendron scandens","Heartleaf","foliage","easy","8"],
    ["60","https://images.pexels.com/photos/9130870/pexels-photo-9130870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Pilea argyreia ","Watermelon Peperomia","foliage","easy","8"],
    ["61","https://images.pexels.com/photos/6915358/pexels-photo-6915358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Pilea peperomioides","Chinese Money Plant","foliage","easy","6"],
    ["62","https://images.pexels.com/photos/7354794/pexels-photo-7354794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Pilosocereus","Blue Torch Cactus","succulent","easy","10"],
    ["63","https://images.pexels.com/photos/9707066/pexels-photo-9707066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Platycerium bifurcatum","Staghorn Fern","foliage","fussy","9"],
    ["64","https://images.pexels.com/photos/7814297/pexels-photo-7814297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Saintpaulia ionantha","African Violet","flowering","fussy","8"],
    ["65","https://images.pexels.com/photos/12288124/pexels-photo-12288124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Schlumbergera hybrids","Christmas Cactus","succulent","easy","9"],
    ["66","https://images.pexels.com/photos/12123235/pexels-photo-12123235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Scindapsus pictus","Satin Pothos","foliage","easy","6"],
    ["67","https://images.pexels.com/photos/15100978/pexels-photo-15100978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Sedum morganianum","Burro's Tail","succulent","easy","8"],
    ["68","https://images.pexels.com/photos/12367433/pexels-photo-12367433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Soleirolia soleirolii","Baby's tears","foliage","easy","7"],
    ["69","https://images.pexels.com/photos/12531511/pexels-photo-12531511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Spathiphyllum","Peace Lily","flowering","easy","9"],
    ["70","https://images.pexels.com/photos/5741789/pexels-photo-5741789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Stephanotis floribunda ","Madagascar Jasmine","flowering","fussy","12"],
    ["71","https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg","Strelitzia reginae ","Bird of Paradise","flowering","easy","13"],
    ["72","https://images.pexels.com/photos/11727957/pexels-photo-11727957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Streptocarpus x hibridus","Cape Primrose","flowering","fussy","10"],
    ["73","https://images.pexels.com/photos/4350844/pexels-photo-4350844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Syngonium podophyllum","Arrowhead Plant","foliage","easy","8"],
    ["74","https://images.pexels.com/photos/7222205/pexels-photo-7222205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Tillandsia Bergeri","Mad Pupper Air Plant","foliage, flowering","easy","6"],
    ["75","https://images.pexels.com/photos/3854754/pexels-photo-3854754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Tillandsia ionantha","Air Plant","foliage","easy","5"],
    ["76","https://images.pexels.com/photos/4690294/pexels-photo-4690294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Tradescantia zebrina","Inchplant","foliage","fussy","7"]
];

function filterPlants(filter) {
    let filteredPlants = [];
    plants.forEach(plant => {
        if (plant.includes(filter)) {
            filteredPlants.push(plant);
        }
    })
    return filteredPlants;
}

var all = plants;

var easy = filterPlants('easy');

var fussy = filterPlants('fussy');

var flowering = filterPlants('flowering');

var foliage = filterPlants('foliage');

var succulents = filterPlants('succulent');

let selection = 'ALL';
let currentFilter;

if (sessionStorage.getItem("selection")) {
    selection = sessionStorage.getItem("selection");
    switch(selection) {
            case 'ALL':
                currentFilter = all;
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
    currentFilter = all;
}

function plantsFactory(src, name, scName, price, type, care) {

    let plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');
    plantCard.classList.add(care);
    plantCard.classList.add(type[0]);

    if (type[1]) {
       plantCard.classList.add(type[1]); 
    }

    let plantTemplate = "<div class='plant-container'><img class='plant-img' src='"+ src +"' alt='picture of " + name + "' /></div><h5 class='plant name'>" + name + "</h5><div class='plant-info'>" +
    "<h5 class='secondary plant name'>" + scName + "</h5> <p class='price'>£" + price + "</p></div>";

    plantCard.innerHTML = plantTemplate;
    return plantCard;

}

function displayPlants(arr) {
    arr.forEach(plant => {

        let type;

        if (plant[4].search(',') !== -1) {
            let str = plant[4];
            let ing = plant[4];
            let i = str.indexOf(',');
            let type1 = str.slice(0, i++);
            let type2 = ing.slice(i+1, ing.length++);
            type = [type1, type2];
        } else {
            type = [(plant[4])];
        }
        display.appendChild(plantsFactory(plant[1], plant[3], plant[2], plant[6], type, plant[5]));
    });
};

displayPlants(currentFilter);

for (let i = 0; i < filters.length; i++) {

    if (filters[i].innerText === selection) {
        filterButtons[i].classList.add('default');
    }

    filters[i].addEventListener('click', () => {

            for (let j = 0; j < filters.length; j++) {
                filterButtons[j].classList.remove('selected', 'default')
            }

            filterButtons[i].classList.add('selected');

            switch(filters[i].innerText) {
                case 'ALL':
                    currentFilter = all;
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
            displayPlants(currentFilter);
    })
}
