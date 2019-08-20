// function sum() {
//   let args = Array.from(arguments);
//   let sum = 0
//   for (let i = 0; i < args.length; i++) {
//     const element = args[i];
//     sum += element;
//   }
//   return sum;
// }

function sum(args){
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    const element = args[i];
    sum += element;
  }
  return sum;
}

// console.log(sum(1,2,3,4)); //10 

Function.prototype.myBind = function(context, ...bargs) {
  return (...cargs) => {
    this.apply(context, bargs.concat(cargs));
  };
};

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(num){
    debugger
    numbers.push(num);
    if (numbers.length === numArgs){
      let sum = 0;
      for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
      }
      return sum;
    }
    else {
      console.log(this);
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs){
  let that = this;
  let numbers = [];
  function _curry(num) {
    numbers.push(num);
    if (numbers.length === numArgs){
      return that(numbers);
    }
    else {
      return _curry;
    }
  }
  return _curry;
};

const c = sum.curry(4);
console.log(c(5)(30)(20)(1));
