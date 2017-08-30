var constant=32;

function celsiusToFarenheit(temperature)
{
  var farenheitTemp=temperature*9/5 + constant;
  return farenheitTemp;
}

 output.innerHTML =celsiusToFarenheit(100);
