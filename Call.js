// Call, Bind and Apply 

Function.prototype.myCall = function (context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "It's not callable ")
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

purchaseCar.myCall(car,"$",50000);