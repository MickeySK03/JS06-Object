const TERMINATE = 'stop';
const fruits = {};
let key;
let value;

do {
    key = prompt('Enter fruit');
    value = +prompt('Enter Quality');
    if(value == 1) {
        fruits[key] =value;
    }else if (value >1) {
        fruits[`${key}s`] = value;
    }
}while(key != TERMINATE && value != TERMINATE);

console.log(fruits);