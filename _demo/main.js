console.log('Learn Object');
//Datatypes
//Primitive : Boolean,Number,String etc...
//Non-primitive : Object / Scope

//Object Declaration
//{} == stand for Object /Scope
//{record_1,record_2,record_3,...}
//each record => <key_name>:<value>
//<value> any Datatype
//<key_name> Datatype : string
//record === property (คุณสมบัติ,สิ่งที่มี) == key-value pair

let user = {
    firstName: 'Sorawit',
    lastName: 'Komain',
    age :30,
    isAdmin: true,
    'like human': true,
};

//#########################
//###ACCESS, MODIFY, DELETE
//#########################

//Every action NEED <KEY_NAME>!!
//Dot Notation <obj>,<key_name> === <vallue>
//<obj><key_name> === <value>
//ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

//GET,POLL,READ
console.log(user);
console.log(user.firstName === 'Sorawit');
console.log(user.lastName);
console.log(user.age==30);
console.log(user.age);
//console.log(user.like human)

//Modify,Update
//Syntax : <obj><old_key> = newValue
user.firstName = 'Saravit';
user.age = 25;
user.age += 2;
user.age++;
//console.log(user.age);

//ADD
//Syntax : <obj><new_key> = newValue
user.address = 'bangkok';
//console.log(user);

//DELETE
//Syntax : delete <obj><key_name>
delete user.isAdmin;
console.log(user);

//#################
//###NESTED Object
//#################

const employee = {
    fullName: 'John Doe',
    salary: 500_000,
    address: {
        district: 'Phaya Thao',
        province: 'Bangkok',
        country: 'Thailand',
    },
};

console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);

employee.address.province = 'Nothaburi';
delete employee.address.country;

//dot ใช้กับ Object เท่านั้น !! <obj><key>
//Dot ใช้กับ Object เท่านั้น!!
//ห้ามใช้กับ undefined <undefined><key>
//วิธีแก้ optional chaining => <undefined>?<key>
console.log(employee.addr);//undefined เพราะไม่เจอaddr ในobject employee
console.log(employee.addr.province);//error เพราะไม่เจอobject addr เพราะมันคือ undefined.province
console.log(employee.addr?.province);
console.log(employee.address?.province);


//########################
//######## 4.Check key ?
//########################

const product = {
    id: 227,
    name: 'Iphone',
    price: 50_000,
};

console.log(product.discount); // undefined

//IN Operator
//Syntax:<key_name_string>in<obj> => Boolean

//'name' in  product//=>true,false
console.log('name' in product);
console.log('discount' in product);

//method hasOwnProperty
//Syntax :<obj>hasOwnProperty(<key_name>) => Boolean
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));

//#############################
//####### 5. Bracket Notation []
//##############################

//Syntax : <obj>["<key_name_string>"]
//*** 1ใช้Bracket เมื่อไหร่ ซื้อ key ข้างในต้องเป็น string
//*** 2 ถ้าไม่ใช้ string ต้องเป็นตัวแปรที่เก็บ string // Cpomputed key
//Access key-value ผ่านชื่อตัวแปรได้
console.log(product.id);
console.log(product['id']);

//console.log(product.is mobile) crash
console.log(product['is mobile']);

product['name'] = 'Iphone-15';
//console.log(product);

let aaaaa = 'name';

console.log(product['name']);
console.log(product[aaaaa]);
console.log(product.aaaaa);