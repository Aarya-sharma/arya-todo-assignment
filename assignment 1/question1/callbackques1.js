function setTimeoutSync(callback,n)
{
    console.log("Please wait for some time");
var dt =new Date();
while((new Date())-dt <=n );

wait();
//do nothing
}


var  wait =function cb()
    {console.log("thankyou for waiting");}


    setTimeoutSync(wait,10000);
