/**
 * Skaicioja zodziu kieki Stringe pagal esamus tarpus tarp zodziu
 * @param {String} string  Priima Stringa ir padalyna i masiva. Dalina elementus pagal tarpa
 * @returns {number} Grazina skaiciau tipo reiksme ( massivo ilgi)
 */
function checkWord(string) { 
    let rez = '';
    return rez = string.split(" ").length;
}
export { checkWord }
/*
ALTERNATIVE VERSION
    let gap = ' ';
    let arWord = gap.indexOf(symbol)
    if(arword > -1) {
        return true;
    }*/