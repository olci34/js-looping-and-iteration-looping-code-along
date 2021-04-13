// Code your solutions in this file
function writeCards(array,name) {
    let result = [];
    for (let i=0; i != array.length; i++) {
        result.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    }
    return result;
}

function countDown(number) {
    while (number >= 0 ) {
        console.log(number);
        number--;
    }
}
