
// let salaries = {
//     //John:100,
//     //Ann:160,
//     //Peter:130,
// };

function calSalaries(object) {
    if (isEmptyObj(object)) return 0;

    let sum = 0;
    for(let key in object) {

        // console.log(object[key]);
        sum += object[key];
    }
    return sum;
}
let salaries = {
    John: 100,
    Ann:160,
    Pete:130,
};
