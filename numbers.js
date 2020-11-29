import { isNumber } from './digits.js';
/**
 * Funkcija kuri skaicioja skaiciu kieki String'e
 * @param {string} str Priima string typo reiksme, patikrina a jame yra skaitmuo - jeigu yra prideda i tuscia LAIKINA stringa.
 * Jeigu laikinasSkaicius nera tuscias, supushina i masiva
 * @returns {number} Grazina masivo ilgi
 */
function countNum(str) {
    let masivas = [];
    let laikinasSkaicius = '';
    for (let i = 0; i < str.length; i++) {
        if (isNumber(str[i])) {
            laikinasSkaicius += str[i];
        }
        else {
            if (laikinasSkaicius !== '') {
                masivas.push(laikinasSkaicius);
                laikinasSkaicius = '';
            }
        }

    }
    return masivas.length;
}
export { countNum }