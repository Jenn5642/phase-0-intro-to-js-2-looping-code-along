

let cards = ["Charlie", "Samip", "Ali"];
function writeCards(cards) {
    const greeting = []
    for (let a = 0; a < cards.length; a++){
        greeting.push(`Thank you, ${cards[a]}, for the wonderful surprise gift!`);
   
    }
    return greeting;
}
console.log(writeCards(cards))

function countDown(){
let countDown = 0;
while (countDown < 11){
    console.log(countDown++);
}
}