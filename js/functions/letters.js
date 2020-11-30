function checkLetter(symbol) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let isAletter = alphabet.indexOf(symbol)
    if (isAletter > -1) {
        return true;
    }
}
export { checkLetter }