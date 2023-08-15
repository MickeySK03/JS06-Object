let log = console.log;
let calculater = {
    read() {
        this.x = +prompt('enter number 1');
        this.y = +prompt('enter number 2');
    },
    sum(){ 
        return this.x+this.y},
    mul(){
        return this.x*this.y},
    
};



calculater.read();
log(calculater.sum());
log(calculater.mul());