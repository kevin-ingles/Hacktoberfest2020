
function main(input) {
    wordsUppercase(input);
}
function wordsUppercase(input) {
    console.log(input.replace(/[^\w\s]/g, "").toUpperCase().split(' ').join(', '));
}
main('100th'); //100TH
main('Hi, how are you?'); // HI, HOW, ARE, YOU
main('hello'); // HELLO
// (/(\b[A-Z0-9][A-Z0-9]+|\b[A-Z]\b)/g);

// (/(\b[a-z0-9][a-z0-9]+|\b[a-z]\b)/g);