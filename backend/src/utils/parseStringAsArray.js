module.exports = function parseStringAsArray (arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()); // trim remove espacamentos antes e depois da string
}