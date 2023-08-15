let name = 'Joe';

function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();// call by window
console.log(user.ref.name); // *Joe เพราะ
