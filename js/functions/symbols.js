function checkSymbol(symbol) {
    /*let masivas = [];*/
    let simboliai = [' ', '-', '.', '*', '"', "'", '!', '?', ';', ':','\n' ,'$','%',')','(','/','\\', ','];
    /*const simboliai = '" .)(,//|?!;-:';*/
    /*let simbolis = '';*/
    /*let counteris = 0;*/
    /*for(let i = 0; i < str.lenght; i++) { */
        let arSimbolis = simboliai.indexOf(symbol)
        if(arSimbolis > -1) {
            return true;
        }/*
        else {
            if(simbolis != ''){
                masivas.push(simbolis);
                simbolis = '';
            }
        } */
        else{
            return false;
        }
    
}
export { checkSymbol }


// Tekstas, yra toks, koks! Tomas-bus anoks gal kada...
// 