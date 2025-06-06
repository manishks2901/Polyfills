// reduce(callbackFn,initialvalue)
// callbackFn -> a function that gets called for each element, with the following argumennts
// accumulator
// currentvalue
// currentIndex
// array(optional)
Array.prototype.myReduce = function (cb , initialValue){
    var accumulator = initialValue;
    for(let i =0 ;i< this.length;i++ ){
        accumulator = accumulator?cb(accumulator,this[i] , i, this) : this[i];
        console.log(this[i])
    }

    return accumulator;
}

// Example 1

const nums = [1,2,3,4];

const sum = nums.myReduce((acc,curr,i,arr) => {
    return acc + curr
},0)

console.log(sum)

// Example 2

// const nested = [[1, 2], [3, 4], [5]];

// const flat = nested.myReduce((acc, curr) => acc.concat(curr), []);

// console.log(flat); 