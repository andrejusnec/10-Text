import { checkEnd } from './sentences.js';
import { checkLetter } from './letters.js';
import { checkParagraf } from './paragraf.js';
import { checkWord } from './word.js';
import { isNumber } from './digits.js';
import { countNum } from './numbers.js';
import { checkSymbol } from './symbols.js';
import { isStringOrEmpty } from '../validacija/validation.js'
/**
 * Funkcija kuri paskaicioja kiek yra kokiu elementu Tekste
 * @param {string} str Priima String'a , naudodama kitas funkcijas paskaicioja  kiek yra raidziu,sakiniu,paragrafu,skaitmenu,zodziu,
 * skaiciu ir simboliu.
 * @returns {number} Grazina skaiciau tipo reiksmes
 */
function SpellingTest(str) {
    let raidziu = 0;
    let sakiniu = 0;
    let paragrafu = 1;
    let skaitmenu = 0;
    let zodziu = checkWord(str);
    let skaiciu = countNum(str);
    let simboliu = 0;
    //input validation
    if(!isStringOrEmpty(str)){
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (checkEnd(str[i])) {
            sakiniu++;
        }
        if (checkLetter(str[i])) {
            raidziu++;
        }
        if (checkParagraf(str[i])) {
            paragrafu++;
        }
        if (isNumber(str[i])) {
            skaitmenu++;
        }
        if(checkSymbol(str[i])) {
            simboliu++;
        }
    }
    console.log(zodziu);
    document.querySelector('.paragrafu').innerText = `${paragrafu}`;
    document.querySelector('.sakiniu').innerText = `${sakiniu}`;
    document.querySelector('.zodziu').innerText = `${zodziu}`;
    document.querySelector('.raidziu').innerText = `${raidziu}`;
    document.querySelector('.skaitmenu').innerText = `${skaitmenu}`;
    document.querySelector('.skaiciu').innerText = `${skaiciu}`;
    document.querySelector('.simboliu').innerText = `${simboliu}`;
}
export { SpellingTest }
