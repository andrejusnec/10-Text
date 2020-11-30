/**
 * Sakinio Paieskos funkcija
 * @param {string} symbol Priima stringo [i] elementa ir tikrina ar jis yra sakinio pabaigos zenklas
 * @returns {boolean} Grazina true jei symbol attinka sakinio pabaigos zenklui
 */
    function checkEnd(symbol) {
    const endSent1 = ('.;?!');
    let endOfSent = endSent1.indexOf(symbol)
    if(endOfSent > -1){
        return true;
    }
}
export { checkEnd }