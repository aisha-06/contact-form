function validate()
{
    var name=document.getElementById('name');
    var password1 =document.getElementById('password1');
    var password2=document.getElementById('password2');
    var mobileno=document.getElementById('no').value;
    var email=document.getElementById('email-id').value;

    console.log('name')

    if (name.value==null||  name.value=="")
    {    
         document.getElementById('uname').innerHTML="FILL THE USERNAME FIELD!";
         return false;
    }
    if((name.value.length<=2)||(name.value.length>=30))
    {
     document.getElementById('uname').innerHTML="LENGTH SHOULD BE BETWEEN 3 AND 30!";
     return false;
    }
    if(!isNaN(name.value))
    {
     document.getElementById('uname').innerHTML="USERNAME SHOULD BE ONLY CHARACTER!";
     return false;
    }

  

    
}
