/**
 * Funkcija kuri skaicioja raides
 * @param {string} symbol Priima string[i] elementa ir tikrina ar jis yra raide 
 * @returns {boolean} Grazina tiesa, jei rasta raide
 */
function checkLetter(symbol) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let isAletter = alphabet.indexOf(symbol)
    if (isAletter > -1) {
        return true;
    }
}
export { checkLetter }