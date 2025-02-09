function generateLetters(numLetters) {
    let word = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;  // Declare i
    while (i < numLetters) {
        let characterOrder = Math.floor(Math.random() * alphabet.length);
        word += alphabet[characterOrder];
        i++;
    }
    return word;
}

function generateWords(numWords) {
    let sentence = "";
    let i = 0;
    while (i < numWords) {
        sentence += generateLetters(Math.floor(Math.random() * (7 - 2 + 1)) + 2) + " ";
        i++;
    }
    sentence = sentence.trim() + ". "; // Remove trailing space and add period
    return sentence.charAt(0).toUpperCase() + sentence.slice(1); // Capitalize first letter
}

function generateSentences(numSentences) {
    let text = "";
    let = i = 0;
    while (i < numSentences) {
        text += generateWords(Math.floor(Math.random() * (10 - 5 + 1)) + 5);
        i++;
    }
    return text
}

const textGenerator = document.getElementById("textGenerator");
textGenerator.innerHTML = generateSentences(Math.floor(Math.random() * (15 - 7 + 1)) + 7);