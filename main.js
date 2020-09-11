const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
let signup = document.getElementById('signup');
let signin = document.getElementById('signin');
const container = document.getElementById('container');
//signin and signup part
signUpButton.addEventListener('click', () => {
	
	container.classList.add("right-panel-active");
	
});

signup.addEventListener("click", function(){

  var email= document.getElementById("email").value;
  var password= document.getElementById("password").value;
  var re_password= document.getElementById('conpass').value;
  var name = document.getElementById("name").value;
  var phoneno = document.getElementById("number").value;
  var role = document.getElementById("role1").value;
  var letters = /^[A-Za-z]+$/;
  var phonenum = /^\d{10}$/;
  var pass=  /^[A-Za-z]\w{5,14}$/;
  
 if(name!="" && name.match(letters))    
 {
   if(email!="")
    {
      if(phoneno.match(phonenum))
       { 
         if(password.length!=0 && re_password.length!=0 && password==re_password && password.match(pass))
          { 
          
            if(role=="admin")
            {
                let isAdmin="true";
              
                 let admin_data=localStorage.getItem("admin_table");
                 if(admin_data==null)
                 {
	                 task=[];
                  }
                 else{
	                   task=JSON.parse(admin_data);
                     }
                 task.push({'IsAdmin':isAdmin,'Name':name,'email':email,'password':password,'phone number':phoneno,'role':role});
                 localStorage.setItem("admin_table",JSON.stringify(task));
                 alert('sucessfully registered as admin');
                 
             }
             else 

               if(role=="user")
                 {
                  let isAdmin="false";
              
                  let admin_data=localStorage.getItem("admin_table");
                  if(admin_data==null)
                  {
                    task=[];
                   }
                  else{
                      task=JSON.parse(admin_data);
                      }
                  task.push({'IsAdmin':isAdmin,'Name':name,'email':email,'password':password,'phone number':phoneno,'role':role});
                  localStorage.setItem("admin_table",JSON.stringify(task));
                  alert('sucessfully registered as user');
                }    

        }
          else{ alert("invalid password");}
      }
       else{ alert("invalid phone number");}
    }
     else{alert("invalid email");}
  }
    else{alert("invalid name");}
});


signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signin.addEventListener('click', (event) => {
  
  event.preventDefault();
	let emailadd = document.getElementById('emailadd').value;
  let pass =document.getElementById('pass').value;
  //let role=document.getElementById('role2').value;
  
     let data=JSON.parse(localStorage.getItem("admin_table"));
    var i=0;
    var len=(data.length)-1;
      for( i=0;i<data.length;i++)
       {
        var item=data[i];
        var x=item.email;
        var y=item.password;
        var z=item.IsAdmin;
        
         if(x === emailadd && y === pass)
         {
          if(z=="true")
          {
           alert('welcome admin!!');
           
           let session_data=localStorage.getItem("session_table");
           if(session_data==null)
           {
             task1=[];
            }
           else{
               task1=JSON.parse(session_data);
               }
           task1.push({'email':emailadd});
           localStorage.setItem("session_table",JSON.stringify(task1));
           alert('LOGGED IN SUCCESSFULLY');
           
           document.getElementById('emailadd').value=" ";
           document.getElementById('pass').value=" ";
           window.location.replace("admin.html");
           break;
         }
         else {
          alert("welcome user!!!");
          document.getElementById('emailadd').value=" ";
             document.getElementById('pass').value=" ";
          break;
          }
        }

        if(i==len && x !== emailadd && y !== pass)
           { 
             alert('invalid username and password');
            location.reload();
           }
        
      }
        
               
    
});


