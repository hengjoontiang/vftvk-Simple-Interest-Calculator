function compute()
{
    validate();
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100.0;
    var year = new Date().getFullYear() + parseInt(years);

    var text2Display = "If you deposit "+principal+",at an interest rate of "+rate+"%.You will receive an amount of "+interest+",in the year "+year;
    document.getElementById("result").innerText=text2Display;
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
// Form validation code will come here.
function validate() {
        var principal = document.getElementById("principal").value;
        if( principal <= 0.0  ) {
            alert( "Enter a positive number" );
            document.getElementById("principal").focus() ;
            return false;
         }

         return( true );
}
