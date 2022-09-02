// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddybear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/


function writeCards(name,message) {
    let messages=[];
    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`)
    }
    console.log(messages);
    return messages;
}

writeCards(["Guadalupe","Ollie","Aki"],"surprise");

function countDown(number){
    for(let i = number; i >= 0; i--){
    console.log(i)
    }
}
countDown(10);

