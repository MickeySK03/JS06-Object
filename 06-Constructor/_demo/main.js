const log = console.log;

log('Constructor Function');

const dev1={
    name: 'john',
    age: 32,
    role: 'dev',
    salary: 40_000,
    dev: function(){
        console.log('Im develop some features');
    },
};

//Object Creators == Constructor Function

function Developer(name, age) {
    // this = {}
    this.name = name; // {name:"Pavit"}
    this.age = age; // {name:"Pavit", age : 25}
    this.role = 'dev' // {name:"pavit,age:25,role : "dev"}
    this.salary = 40_000; // {name:"Pavit", age : 25, role : "dev", salary:40_000}
    this.dev = function () {
        console.log('Im develop some features');
    }; // {name....., dev:fn()}
}
//[2] Implicit Return this
//return {name....., dev:fn()}



const dev2 = new Developer('Pavit',25);
log(dev2);

dev2.dev();


//########################################################
//BuiltIn have 4type
//1.console
//2.math
//3.date,day
//4.formdata
console.log('Test');
Math.max(5,4,2,20);//20  หาค่ามากที่สุด
const now = new Date();

//Date Object
now.getDay() //แสดงวัน
now.getHours() //แสดงเวลา
    now //

const formData = new FormData()
formData.append("key","Value")

formData