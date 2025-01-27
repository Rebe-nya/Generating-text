function generateWord(numLetters) {
    let word = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    while (i<numLetters) {
        let characterOrder = Math.floor(Math.random() * alphabet.length);
        word += alphabet[characterOrder];
//      word += characterOrder + " ";
        i++;
    }
    return word;
}

function generateSentence(numWords) {
    let sentence = ""
    let i = 0;
    while (i<numWords) {
        sentence += generateWord(5);
    }
    return sentence;
}

console.log(generateSentence(5));