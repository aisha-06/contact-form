function validate()
{
    var name=document.getElementById('name');
    var password1 =document.getElementById('password1');
    var password2=document.getElementById('password2');
    var mobileno =document.getElementById('mobile-no');
    var email=document.getElementById('email-id');

    document.getElementById('uname').innerHTML = "";
    document.getElementById('em').innerHTML = "";
    document.getElementById('pass1').innerHTML = "";
    document.getElementById('pass2').innerHTML = "";
    document.getElementById('no').innerHTML = "";

//     console.log('name')

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
   
          
    if(mobileno.value==null || mobileno.value=="")
    {
     document.getElementById('no').innerHTML="FILL THE MOBILE NO FIELD!";
     return false;
    }

    if(isNaN(mobileno.value))
    {
      document.getElementById('no').innerHTML="ONLY NUMBERS!!";
      return false;
    }
  if(mobileno.value.length!=10)
  {
     document.getElementById('no').innerHTML="MOBILE NUMBER SHOULD BE IN 10 DIGITS NOT MORE OR LESS THAN 10.";
     return false;
  }
    

    if (email.value==null ||  email.value=="")
     {    
      document.getElementById('em').innerHTML="FILL THE ABOVE FIELD!";
      return false;
   }
   if(email.value.indexOf('@')<=0)
   {
     document.getElementById('em').innerHTML="@ INVALID POSITION!";
     return false;
   }
   if(password1.value==null || password1.value=="")
   {
     document.getElementById('pass1').innerHTML="FILL THE PASSWORD FIELD!";
     return false;

   }
   if(password1.value.length<=5 || password1.value>=20 )
   {
     document.getElementById('pass1').innerHTML="PASSWORD LENGHT MUST BE BETWEEN 5 AND 20";
     return false;
   }
   if(password2.value==null || password2.value=="")
     {
       document.getElementById('passs2').innerHTML="FILL THE CONFIRM PASSWORD FIELD!";
       return false;
  
     }
     if(password1.value!=password2.value)
     {
          document.getElementById('pass2').innerHTML="PASSWORD ARE NOT MATCHING PLEASE ENTER CORRECT PASSWORD";
          return false;
     }
    
}
