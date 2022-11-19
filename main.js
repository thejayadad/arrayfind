
let array = [10, 8, 3, 5, 23, 6, 11];

const order = array.sort((a, b) => {
    if(a > b) return 1;
    if(b > a) return -1;

});

console.log(order);