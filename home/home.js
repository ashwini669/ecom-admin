var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var letters = /^[A-Za-z]+$/;
var rate = /^[0-9]+$/;
    
 function displayData(){

  var proName = document.getElementById('name').value;
  var proPrice = document.getElementById('price').value;
  var proImg = document.getElementById('upload').value;
  var proId = document.getElementById('proid').value;

  let data=[];
  data=JSON.parse(localStorage.getItem("session_table"));
  var i=0;
  var admin=data[i];
  var admin_email=admin.email;

  if( proId!=""&&proId.match(rate)&&proName!=""&& proName.match(letters)&&proPrice!="" && proPrice.match(rate)&&proImg!="")
  {
     let pro_data=localStorage.getItem("pro_table");
         if(pro_data==null)
         {
           task=[];
          }
         else{
              task=JSON.parse(pro_data);
            }
          task.push({'admin_email':admin_email,'Product_id':proId,'Product_name':proName,'Product_price':proPrice,'Image':proImg});
          localStorage.setItem("pro_table",JSON.stringify(task));

           alert("added new product to list");
           formclear();
            location.reload();
    }
    else{
      alert("please fill all the valid details");
    }
 }

 function formclear(){
  document.getElementById('proid').value=" ";
  document.getElementById('name').value=" ";
  document.getElementById('price').value=" ";
  document.getElementById('upload').value=" ";
  }