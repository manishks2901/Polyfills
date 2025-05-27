// let arr0 = [1,2,3,4,5];
// let multiplyTen_= arr0.map((arr_,i) => {
//     return arr_ * 10
// })

// console.log(multiplyTen_)

Array.prototype.myMap = function (cb){
    let temp = [];
    for(let i = 0 ; i < this.length ; i++ ){
        temp.push(cb(this[i],i,this));
    }

    return temp;
}



let arr = [1,2,3,4,5];

let multiplyTen = arr.myMap((num , i , arr ) => {
    return num * 10 ;
})


console.log(multiplyTen)