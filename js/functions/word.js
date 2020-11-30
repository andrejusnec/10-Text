import { checkLetter } from '../functions/letters.js';
/**
 * Skaicioja zodziu kieki Stringe pagal esamus tarpus tarp zodziu
 * @param {String} string  Priima Stringa ir padalyna i masiva. Dalina elementus pagal tarpa
 * @returns {number} Grazina skaiciau tipo reiksme ( massivo ilgi)
 */
function checkWord(str) {
    /*
    let temporary = numRemove(str);
    return temporary.split(" ").length;*/
    let zodeliai = [];
    let sakiniukas = '';
    for (let i = 0; i < str.length; i++) {
        if (checkLetter(str[i]) || str[i] === "'") {
            sakiniukas += str[i];
        } else {
            if (sakiniukas !== '') {
                zodeliai.push(sakiniukas);
                sakiniukas = '';
            }
        }
    }
    return zodeliai.length
}
export { checkWord }
