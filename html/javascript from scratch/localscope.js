var constant =32;

function celsiusToFarenheit(temperature)
{
  var multiplier =9;
  var divisor=5;
  var farenheitTemp =temperature *multiplier/divisor+constant;
  return farenheitTemp;
}

output.innerHTML=celsiusToFarenheit(200);

//var z =multiplier;
//output.innerHTML =z;//undefined, as local variable cant be accessed outside.


var x=15;
if(x<20)
{
  var y =x;
}
var z =y;
output.innerHTML =z;
