/**
 * Input duomenu validacija
 * @param {string} str Priima Strin'a : Patikrina ar ivedamas string tipo argumentas ir ar argumentas ne tuscias
 * @returns {boolean} Grazina boolean tipo reiksme. Jei string ir ne tuscias grazina True 
 */
function isStringOrEmpty(str) {
    if(typeof str !== 'string') {
        console.log('ERROR: Ivestas ne tekstas');
        return false;
    }
    if(str === '') {
        console.log('ERROR: Tekstas neivestas');
        return false;
    }
    return true;
}

function isNumOutput(reiksme) { 
    if(typeof raidziu !== 'number' || !isFinite(raidziu)) {
        console.log('ERROR: Ne skaiciau tipo reiksme')
        return false;
    }
    return true;
}
export { isStringOrEmpty }