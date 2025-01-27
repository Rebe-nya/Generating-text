function generateWord(numLetters) {
    let word = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    while (i<numLetters) {
        let characterOrder = Math.floor(Math.random() * alphabet.lenght);
        word += alphabet[characterOrder];
//      word += characterOrder + " ";
        i++;
    }
    return word;
}

console.log(generateWord(5));