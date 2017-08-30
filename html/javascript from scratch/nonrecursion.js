function nonrecursion(num,exp)
{
  var retval=1;
  for(var i=0;i<exp;i++)
  {
    retval *= num;
  }
  return retval;
}

var answer = nonrecursion(2,10);
output.innerHTML =answer;
