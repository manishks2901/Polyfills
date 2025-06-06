Function.prototype.myApply = function (context = {}, args){
    if(typeof this !== "function"){
        throw new Error(this + "It's not callable ")
    }
    if(!Array.isArray(args)){
        throw new TypeError("CreateListFormArrayLike called on non objec")
    }
    context.fn = this;
    context.fn(...args)
}

let car = {
    color:"red",
    company:"Lambo"
}

function purchaseCar(currency,price){
    console.log(
        `I have purchased ${this.color} - ${this.company} car or ${currency} at price ${price}`
    )
}


purchaseCar.myApply(car,["$",50000]);