window.onload=function setTable(){
    // location.reload();
    let data1=[];
  data1=JSON.parse(localStorage.getItem("session_table"));
  var j=0;
  var x1=data1[j];
  var y1=x1.email;

  let data2=[];
  data2=JSON.parse(localStorage.getItem("pro_table"));
  
  for(var i=0 in data2)
  {
    var x2=data2[i];
   var y2=x2.admin_email;
   if(y1==y2)
  {
  document.getElementById('list').style.display="";
  //var x=data.length;
  localStorage.removeItem('pid_table');
   //var d=0;
  // for(d in data2)
  //  {
    var item=data2[i];
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
    
   //}
  }
  }
  //  else{alert("LIST IS EMPTY");}
  }