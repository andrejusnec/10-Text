import { checkEnd } from '../sentences.js';
import { checkLetter } from '../letters.js';
import { checkParagraf } from '../paragraf.js';
import { checkWord } from '../word.js';
import { tekstas, text1 } from './data/data.js'
import { isNumber } from '../digits.js';
/*let g = tekstas.replace('Georgia', 'LTU');*/
// const testas = (' ', '.', ',', '!', '?', ';', ':', '\n');
//
//
/*
function skip(tekstas) {
    let rez = '';
    const testas = [' ', '.', ',', '!', '-', ';', ':', '\n'];
    for (let i = 0; i  < tekstas.length; i++) {
        if(checkas(tekstas[i]) === true) {
            rez+= tekstas[i]
        }
        console.log(checkas(tekstas[i]))
    }
    return rez;
}
console.log(tekstas, tekstas.length);

console.log(skip(tekstas));*/


/* if(tekstas[i] === ' ' || tekstas[i] === '.' || tekstas[i] ===  ',' || tekstas[i] === '!') {
            continue;
        }
        else{
        rez = rez + tekstas[i];
        } */

/*
function checkWord(string) {
    let rez = '';
    return rez = string.split(" ").length;
}*/

/*
function letterCount(str) {
    let raides = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // строка с алфавитом
    let arRaide = alphabet.split("");                                      // разделение строки на массив по одному элеиенту 
    for (let i = 0; i < str.length; i++) {                                  //
        if (arRaide.indexOf(str[i]) > -1) {                             // проверяет есть ли в arRaide текущий символ (str[i])
            raides += 1;                                              // если нету то возращает -1, если есть то возвращает 0 или
        }                                                            // положительный индекс  и мы добовляем 1 к счетчику букв
    }
    return raides;
}
console.log(letterCount(text1)); */

function numberCount(str) {
    let numbers = 0;
    let allnum = "0123456789";
    let arSkaicius = allnum.split("");
    for (let i = 0; i < str.length; i++) {
        if (arSkaicius.indexOf(str[i]) > -1) {
            numbers += 1
        }
    }
    return numbers;
}
console.log(numberCount(tekstas));
/*
function paragrafCount(str) {
    let paragrafas = 0;
    let qq = '\n';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === qq) {
            paragrafas++
        }
    }
    return paragrafas;
} */
////////////////////////////////////////////////////////////////////////////
function IgorTest(str) {
    let raidziu = 0;
    let sakiniu = 0;
    let paragrafu = 1;
    let zodziu = checkWord(str);
    let skaiciu = 0;
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
        skaiciu = countNum(str[i]);

    }
    console.log(`Sakiniu yra ${sakiniu}\nRaidziu yra ${raidziu}\nParagrafu yra ${paragrafu}\nZodziu yra ${zodziu}\nSkaiciu yra ${skaiciu}`)
    return sakiniu;
}

IgorTest(text1);

function countNum(str) {
    let masivas = [];
    let laikinasSkaicius = '';
    for (i = 0; i < str.length; i++) {
        if (isNumber(str[i])) {
            laikinasSkaicius += str[i];
        }
        else {
            if (laikinasSkaicius !== '') {
                masimas.push(laikinasSkaicius);
                laikinasSkaicius = '';
            }
        }

    }
    return masivas.length;
}
/// Labas Igori, kaip sek89 tau blemba 2010.