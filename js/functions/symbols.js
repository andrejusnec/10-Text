/**
 * Funkcija simboliams paskaicioti
 * @param {string} symbol Gauna stringo[i] elementa ir tikrina ar jis sutampa su simboliu
 * @returns {boolean} Grazina boolean tipo reiksme. Jei simbolis rastas, grazina True
 */
function checkSymbol(symbol) {
    let simboliai = [' ','-', '.', '*', '"', "'", '!', '?', ';', ':', '\n', '$', '%', ')', '(', '/', '\\', ','];
    let arSimbolis = simboliai.indexOf(symbol)
    if (arSimbolis > -1) {
        return true;
    }
    else {
        return false;
    }

}
export { checkSymbol }
