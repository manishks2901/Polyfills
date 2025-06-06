Function.prototype.myBind = function (context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "cannot be bound as it's not callable")
    }

    context.fn = this;
    return function (...newArgs){
        return context.fn(...args,...newArgs)
    }
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


purchaseCar.myBind(car,["$",50000]);