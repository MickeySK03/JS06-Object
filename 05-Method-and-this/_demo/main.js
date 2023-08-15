const log = console.log;
log('Method and this keyword');

//each record => called property
//each property => <key>:<value>

//some record => <key>:<FN>
//called method == ความสามารถของ Object

// const programmer = {
//     name: 'Pavit',
//     age: 30,
//     dev: devWebsite,
//     meet: meeting,
//     sleep: sleep,
// };

// function devWebsite() {
//     console.log("I'm working");
// }
// function meeting() {
//     console.log("I'm meeting");
// }
// function sleep() {
//     console.log("I'm sleeping");
// }

// //property
// //syntax: <obj>.<key>
// log(programmer.name);
// log(programmer.age);

// //method
// //syntax: <obj><method>
// programmer.dev();
// programmer.meet();
// programmer.sleep();


//#############################
//####### 2.Alternative Syntax
//############################

// const programmer = {
//     name:'john',
//     age: 30,
//     dev: function() {
//         console.log("I'm working");
//     },
//     meet: () => console.log("i'm meeting"),
//     //method shorthand
//     sleep() {
//         console.log("I'm sleeping");
//     },
// };
// programmer.dev();
// programmer.meet();
// programmer.sleep();

// //Mini-lab
// //สร้าง Object ของตัวเอง
// //ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ
// //ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// //key : nameFunction
// //key : anonymous FN
// //key : arrowFN
// //key : shortHand

// function playSport() {
//     console.log("i'n playing football");
// }
// const aboutMe = {
//     name: 'Mix',
//     hair: 'Black',
//     eye: 'Blue',
//     gender: 'Male',
//     myEx: ['john','Jane'],
//     sport: playSport,
//     sleepAllDay: function() {
//     },
//     eatAllNight: (menu) => console.log((`I'm eating ${menu} all the time`)),
//     focus() {
//         console.log("I'm working in Focus mode");
//     },
// };
// aboutMe.sport('basketball')
// aboutMe.sport();
// aboutMe.eatAllNight('Tako');
// aboutMe.focus('javascript lab');
// aboutMe.sleepAllDay();

// //########################]
// //#############4.Basic OOP
// //######################
// //OOP :Object Oriented Program

// const car = {
//     brand:'tesla',
//     model:'x',
//     drive:() => console.log('Driving'),
//     autopilot:()=>console.log('Self Driving'),
//     speed:100,
// };

// log(car.brand,car.model);

// //caller method
// car.drive();
// car['autopilot']();

// const calculater ={
//     sum:(x,y) => x+y,
//     minus:(x,y) => x-y,
// };

// let r1 = calculater.sum(5,7);
// let r2 = calculater.minus(7,3);
// log(r1,r2);

// log(car.speed);
// car.speed = calculater.sum(car.speed,20);
// log(car.speed);


//JS keyword: if,else,for,while,do,switch,this
//ข้อดีของthis ทำให้เข้าถึงpropertyได้่ง่าย
// const user = {
//     name:'CODECAMP',
//     age:15,
//     sayHi: function() {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld:function () {
//         console.log(this);
//         //this ==user,this.age == user.age
//         this.age++;
//     },
// };
// user.sayHi();
// user.name = 'software';
// user.sayHi();

// log(user.age);
// user.growOld();
// log(user.age);

//Q:ค่าของ this ถูก solve ตั้งแต่ตอนที่เขียนฟังก์ชั้นหรือเปล่า ตอบ ไม่
function dev() {
    console.log(`${feature} feature developed by ${this.name}`);
}
const programmer1 = {
    name:'John',
    develope: dev,
};

const programmer2 = {
    name:'Jane',
    develope: dev,
};

//this หมายถึงobject ที่เรียกใช้ method

programmer1.develope();
programmer1.develope('login');
programmer2.develope();
programmer2.develope('regis');

//เวลาrun ฟังก์ชั่นจะสร้างcontext สำหรับexecute
//ก่อนรัน js มีcontext ตัวหนึ่งที่มีมาก่อนกาล global,window this==Current execution context === windows object
//เพราะฉะนัน ตอนเรียก method ผ่าน object == run function
//function =>สร้าง context => solve this => thid == current execution context

//###################################
//######## 5.Execution Context == Caller
//###################################

//global(Browser) : window object

//window.alert("i'm global");
//this.alert("I'm Global this");
//alert("I'm execute in window");

//FN Declaration จะทำให้ sayHi ไปติดใน window0b
//Hosting

// function sayHi() {
//     console.log(this); //window
// }
// var a = 'm';
//this.sayHi();
//

var name = 'Codecamp';
function sayHello(){
    log(this.name);
}
sayHello();
window.sayHello();

const user = {
    name: 'john',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    }, //arrow ไม่มีความสามารถในการสร้างcontext
    scrm: function() {
        console.log(`scream by ${this.name}`);
    }
};
user.scream();
user.scrm();



//arrow ไม่มีความสามารถในการสร้างcontext

