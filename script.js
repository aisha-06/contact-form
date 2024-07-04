function validate()
{
    var name=document.getElementById('name').value;
    var password1=document.getElementById('password1').value;
    var password2=document.getElementById('password2').value;
    var mobileno=document.getElementById('no').value;
    var email=document.getElementById('email-id').value;

    console.log('name')

    if(name==null|| name=="")
    {
         document.getElementById('uname').innerHTML="FILL THE USERNAME FIELD!";
         return false;
    }
    else
    {
        document.getElementById('uname').innerHTML ="";
        	return false;
    }
}