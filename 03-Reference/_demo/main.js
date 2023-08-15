
const log = console.log;
log('Learn Ref.');

//Copied by Value
//Copied by Reference

let message = 'Hello';
let word = message;
// log(message);
// log(word);

message = 'Hi';
log(message);
log(word);

//Object
let user = {
    name: 'John',
    age: 33,
};

//*** COPIED BY REFERENCE
// assign Address ของ user ให้กับemployee
let employee = user;

user.name ='Joe';

