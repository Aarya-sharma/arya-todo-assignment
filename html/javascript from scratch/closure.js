function makeAdder(x)
{
  return function(y)
  {
    return x+y;
  };
}

var c= makeAdder(5);
var d=makeAdder(10);

console.log(c(5));
console.log(d(5));
