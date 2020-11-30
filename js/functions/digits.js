/**
 * Funkcija kuri skaicioja skaitmenu kieki
 * @param {String[i]} symbol Priima stringo [i] elementa ir tikrina ar jis yra skaitmuo
 * @returns {boolean} Grazina tiesa jeigu rastas skaicius 
 */
function isNumber(symbol) {
    let allnum = "0123456789";
    let arSkaicius = allnum.indexOf(symbol)
    if (arSkaicius > -1) {
        return true;
    }
    else {
        return false;
    }
}
export { isNumber }