//sub program1 : input
let name = prompt('Enter Product Name');
let quantity = +prompt('Enter Quantity');
let price = Number(prompt('Enter Price'));
let discount = prompt('Enter Discount')*1;
//sub program2 : CreateObject
// const products = {
//     name: name, //name : 'Hermes'
//     quantity: quantity, //quantity :20
//     price: price, // price : 500_000
//     discount: discount, //discount : 0.1
// }
//*** เมื่อชื่อkey ตรงกับตัวแปรที่เก็บ value สามารถยุบSyntax(Property shorthand)
const products = {
    name,
    quantity,
    price,
};

if(discount != 0){
    products['discount'] = discount;
}
// log(products);

//sub program3 : Calculatte Price
//discount 10%, paid 90%
//discount 0.1, paid 0.9
//price,quantity,discount => TotalPrice
// function calcPrice (price,quantity,discount){
//     let TotalPrice = price * quantity * (1-discount);
//     return TotalPrice;
// }

// let result = calcPrice(products.price,products.quantity,products.discount);
// log(result);

function calcPrice(productsObj){
    let price = productsObj.price;
    let quantity = productsObj.quantity;
    let discount = productsObj.discount ? productsObj.discount :0;
    return price*quantity*(1-discount);
}
let result = calcPrice(products);
console.log(result);