import { checkEnd } from './sentences.js';
import { checkLetter } from './letters.js';
import { checkParagraf } from './paragraf.js';
import { checkWord } from './word.js';
import { isNumber } from './digits.js';
import { countNum } from './numbers.js';
import { checkSymbol } from './symbols.js';

function SpellingTest(str) {
    let raidziu = 0;
    let sakiniu = 0;
    let paragrafu = 1;
    let skaitmenu = 0;
    let zodziu = checkWord(str);
    let skaiciu = countNum(str);
    let simboliu = 0;
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
        console.log(simboliu);
    }
    console.log(simboliu);
    document.querySelector('.paragrafu').innerText = `${paragrafu}`;
    document.querySelector('.sakiniu').innerText = `${sakiniu}`;
    document.querySelector('.zodziu').innerText = `${zodziu}`;
    document.querySelector('.raidziu').innerText = `${raidziu}`;
    document.querySelector('.skaitmenu').innerText = `${skaitmenu}`;
    document.querySelector('.skaiciu').innerText = `${skaiciu}`;
    document.querySelector('.simboliu').innerText = `${simboliu}`;
}
export { SpellingTest }
