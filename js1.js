let numbers = {
    a: 2,
    b: 4
   };

function result(numbers) {
  [numbers['a'], numbers['b']] = [numbers['b'], numbers['a']]
  return {a:numbers.a,
          b:numbers.b}
  }
   
console.log(result(numbers));