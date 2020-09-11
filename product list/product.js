
window.onload=function updateTable(){

  let data1=[];
  data1=JSON.parse(localStorage.getItem("session_table"));
  var j=0;
  var x1=data1[j];
  var y1=x1.email;

  let data2=[];
  data2=JSON.parse(localStorage.getItem("pro_table"));

  for(var i=0 in data2)
  {
    var item=data2[i];
   var y2=item.admin_email;
   
  if(y1==y2)
  {
    //location.reload();
  document.getElementById('list').style.display="";
  var i=0;
  //var x=data.length;
  localStorage.removeItem('pid_table');
  
  // for(i in data2)
  //  {
    //var item=data2[i];
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = item.Product_id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = item.Product_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = item.Product_price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML =`<img src="${item.Image}" width="80" height="90">`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML =`<a href="#" onClick="onEdit(this)" p-id="${item.Product_id}"><b>EDIT</b></a>`;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML =`<a href="#" onClick="onDelete(this)" pro-id="${item.Product_id}"><b>DELETE</b></a>`;
   //}
  }
}
  // else{alert("NO PRODUCTS IN LIST, TO UPDATE");}
  }

  function onDelete(td) {
    if (confirm('Are you sure to delete this product ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        //formclear();
        //var p=td.target.parentElement.parentElement;
        var pid=td.getAttribute('pro-id');
        delLocalStorage(pid);
    }
  }
  
function delLocalStorage(data) {
          
    //localStorage.removeItem(data);
     let m=[];
     m=getInfo();
  
    m= m.filter(function(m,index) {
        return m.Product_id!==data
      });
  
       localStorage.setItem('pro_table',JSON.stringify(m));
       alert("item deleted");
       //document.getElementById("list-items").style.display = "";
   }

function getInfo() {
    let data; 
  
    if(localStorage.getItem('pro_table')===null){
        data=[];
    } else{
        data= JSON.parse(localStorage.getItem('pro_table'));
    
    }
    return data;
  }

  function onEdit(td) {
      
    selectedRow = td.parentElement.parentElement;
    var pid=selectedRow.cells[0].innerText;
    var name=selectedRow.cells[1].innerText;
    var price=selectedRow.cells[2].innerText;
    var image=selectedRow.querySelector('img').getAttribute('src');
     //window.pid=td.getAttribute('p-id'); 
     let pid_data=localStorage.getItem("pid_table");
       if(pid_data==null)
       {
         task1=[];
        }
       else{
           task1=JSON.parse(pid_data);
           }
       task1.push({'pid':pid,'name':name,'price':price,'image':image});
       localStorage.setItem("pid_table",JSON.stringify(task1));

      document.getElementById('updatepro').style.display="";
      document.getElementById('disptab').style.display="none";
      updatePro();
  }

  function updatePro(){
    let p; 

    if(localStorage.getItem('pid_table')===null){
        p=[];
    } else{
        p= JSON.parse(localStorage.getItem('pid_table'));
    }
    var x=0;
    var pro=p[x];
    let data; 
  
          document.getElementById("productid").value = pro.pid;
          document.getElementById("productname").value =pro.name; 
          document.getElementById("productprice").value = pro.price;
          document.getElementById("productimage").value = pro.image;
          window.proid=pro.pid;
  }

  function updateRecord() {
    if(confirm("Are you sure to update changes??"))
      {
        let Data=[];
        Data=getdata();
  
    let m=[];
     m=getInfo();
    
     for(var i=0 in m)
     {
      var item=m[i];
      if(item.Product_id === proid)
      {
      item.Product_id=Data[0];
      item.Product_name=Data[1];
      item.Product_price=Data[2];
      item.Image=Data[3];
      break;
      }
     }
    
      localStorage.setItem('pro_table',JSON.stringify(m));
      alert("item updated");
      formclear();
      localStorage.removeItem('pid_table');
      document.getElementById('updatepro').style.display="none";
      location.reload();
    }
    else{ formclear();
          localStorage.removeItem('pid_table');
        }
  }
  
   function getInfo() {
    let data; 
  
    if(localStorage.getItem('pro_table')===null){
        data=[];
    } else{
        data= JSON.parse(localStorage.getItem('pro_table'));
    
    }
    return data;
  }
  
  function getdata(){
  var proName = document.getElementById('productname').value;
  var proPrice = document.getElementById('productprice').value;
  var proImg = document.getElementById('productimage').value;
  var proId = document.getElementById('productid').value; 
  
  var data=[proId,proName,proPrice,proImg];
  return data;
  }
  
  function formclear(){
  document.getElementById('productid').value=" ";
  document.getElementById('productname').value=" ";
  document.getElementById('productprice').value=" ";
  document.getElementById('productimage').value=" ";
  localStorage.removeItem('pid_table');
  //document.getElementById('updatepro').style.display="none";
  location.reload();
  }