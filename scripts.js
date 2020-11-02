/* Add your JavaScript to this file */
function ValidateEmail(email)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form1.text1.focus();
return true;
}
else
{
alert("Entered Email address is invalid!");
document.form1.text1.focus();
return false;
}
}