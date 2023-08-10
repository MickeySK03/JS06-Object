
const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
};

//for (---in---) {}
//ถ้าkey อย่ในvariable ใช้dot ไม่ได้

// 'firstName' in user; //true
// 'age' in user;//true
// 'phone' in user;//false
//key ไม่ใช่ตัวแปร แต่เป็นstring ที่เก็บค่า

for(let key in user) {
    //let key = 'firstname'
    //let key = 'lastname'
    //let key = 'age'
    console.log(key);
    console.log(user(key));

}