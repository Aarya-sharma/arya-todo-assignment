function hypotenuse(a,b)
{

   function square(x)
   {
     return x*x;
   }

 return Math.sqrt(square(a) + square(b));
}

output.innerHTML =hypotenuse(1,2);
