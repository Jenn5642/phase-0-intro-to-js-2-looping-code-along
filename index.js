
let names = ["Charlie", "Samip", "Ali"];
function writeCards(names) {
    const messages = [] 
for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
}
return messages;
}
console.log(writeCards(names))


function countDown() {
    let int = 10
while (int >= 0) {
    console.log(int);
    int--
}

// const name = "Jenn"
// const job = "project manager"
// function sayHi(name) {
//     console.log(`hi ${name}`)
// }
// sayHi(name)
// sayHi("Brian")
}