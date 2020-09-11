const logout=document.querySelector('#log');

url=document.URL;
console.log(url);
if(url==="http://127.0.0.1:5500/admin.html"){
  if(localStorage.getItem('session_table')!==null){
    //alert('no');
    //window.location='/app.html';
  }
  else{
    window.location.replace("main.html");
      }
}

logout.addEventListener('click',sessionlogout);

function sessionlogout(e){
    
    if(confirm("Are you sure to log out??"))
    { alert("logged out successfully");
    localStorage.removeItem('session_table');
    //window.location='/main.html';
    window.location.href="./main.html";
    }
}

document.getElementById('box1').addEventListener('click',()=>{
    var home=document.getElementById('if')
    
    console.log(home)
    var list=document.getElementById('if3')
    
    console.log(list)

    var view=document.getElementById('if4')
    console.log(view)

    if(home.id==="if"){
        
        home.style.display="block" 
        list.style.display="none"
        view.style.display="none"

    }
        
    

    

})

document.getElementById('box2').addEventListener('click',()=>{
    var home1=document.getElementById('if')
    
    console.log(home1)
    var list1=document.getElementById('if3')
    
    console.log(list1)

    var view1=document.getElementById('if4')
    console.log(view1)

    if(list1.id==="if3"){

        
        list1.style.display="block"
        home1.style.display="none"
        view1.style.display="none"
    }
        
    

    

})

document.getElementById('box3').addEventListener('click',()=>{
    var home2=document.getElementById('if')
    
    console.log(home2)
    var list2=document.getElementById('if3')
    
    console.log(list2)

    var view2=document.getElementById('if4')
    console.log(view2)

    if(view2.id==="if4"){

        
        list2.style.display="none"
        home2.style.display="none"
        view2.style.display="block"
    }
        
    

    

})