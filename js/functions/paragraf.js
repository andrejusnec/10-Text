/**
 * Paragrafo Paieskos funkcija
 * @param {string} symbol Priima stringo [i] elementa ir tikrina ar jis yra paragrafo pabaigos zenklas
 * @returns {boolean} Grazina tiesa jeigu randa paragrafo pabaigos zenklas
 */
function checkParagraf(symbol) {
    const paragraFas = '\n';
    let arParagrafas = paragraFas.indexOf(symbol);
    if(arParagrafas > -1) {
        return true;
    }
}
export { checkParagraf }