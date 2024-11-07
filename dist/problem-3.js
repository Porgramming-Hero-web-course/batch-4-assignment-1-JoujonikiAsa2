"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countWordOccurrences = (sentence, word) => {
    const arrayOfWords = sentence.split(" ");
    const totalWordsOfGivenString = arrayOfWords.filter(value => value.toLowerCase().slice(0, word.length) === word.toLowerCase());
    return totalWordsOfGivenString.length;
};
const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
console.log(result);
