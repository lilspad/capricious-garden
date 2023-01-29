var foliage = ["alocasia", "begonia", "calathea", "chinese evergreen", "croton", "ferns", "fittonia", "indoor trees", "ivy", "maranta", 
"palms", "philodendron", "pothos", "spider plant"];
var succulents = ["agave", "aloe", "cacti", "calisia", "ceropegia", "crassula", "echeveria", "gasteria", "haworthia", "hoya", "kalanchoe", "peporomia", 
"sedum", "senecio", "tradescantia", "yucca"]

var flowering = ["african violet", "bromeliad", "clivia", "crown-of-thorns", "geranium", "kalanchoe", "maracas", "orchids"]

var trees = ["citrus", "dracaena", "ficus", "laurels", "pachira", "pine", "yucca"];
var ferns = ["asparagus", "bird's nest", "blue star", "boston", "maidenhair", "mother", "staghorn"];

var indoor = [foliage, succulents, flowering]

function createPlant(name, enviroment, type, sizes, priceFrom) {
    return {
        name: name,
        enviroment: enviroment,
        type: type,
        sizes: sizes,
        priceFrom: priceFrom
    }
}