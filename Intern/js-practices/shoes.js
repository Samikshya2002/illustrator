class Shoes{
    constructor(name){
        this.comp= name;
    }
    present(){//method
        return 'I love '+this.comp;
    }
}


class Car{
    constructor(name){
        this.brand= name;
    }
    pres(){
        return 'I drive '+ this.brand;
    }
}

const myshoes = new Shoes("Nike");
console.log(myshoes.present());

const mycar = new Car("Porsche");
console.log(mycar.pres());
