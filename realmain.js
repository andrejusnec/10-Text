import { checkEnd } from './sentences.js';
import { checkLetter } from './letters.js';
import { checkParagraf } from './paragraf.js';
import { checkWord } from './word.js';
import { isNumber } from './digits.js';
import { countNum } from './numbers.js'
/*import { tekstas, text1 } from './js/data/data.js';*/

let Tekstukas = document.getElementById("inputText");
let IgorText = Tekstukas.innerText;

function IgorTest(str) {
    let raidziu = 0;
    let sakiniu = 0;
    let paragrafu = 1;
    let skaitmenu = 0;
    let zodziu = checkWord(str);
    let skaiciu = countNum(str);
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
    }
    document.querySelector('.paragrafu').innerText = `${paragrafu}`;
    document.querySelector('.sakiniu').innerText = `${sakiniu}`;
    document.querySelector('.zodziu').innerText = `${zodziu}`;
    document.querySelector('.raidziu').innerText = `${raidziu}`;
    document.querySelector('.skaitmenu').innerText = `${skaitmenu}`;
    document.querySelector('.skaiciu').innerText = `${skaiciu}`
}
console.log(IgorText)
IgorTest(IgorText);