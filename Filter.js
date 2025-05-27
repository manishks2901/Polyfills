Array.prototype.myFilter = function (cb){
    let temp = [];
    for(let i = 0; i < this.length ; i++ ){
        if(cb(this[i] , i , this )) temp.push(this[i]);

    }

    return temp;

};


let array = [1,2,3,4,5,6,7,8];

let greaterThanTwo = array.filter((arr) => {
    return arr > 2;
})

console.log(greaterThanTwo)