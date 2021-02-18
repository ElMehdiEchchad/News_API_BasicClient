document.getElementById("FormDeleteById").addEventListener("submit",e=>{
    e.preventDefault();  
    var idTodel = document.getElementById("idToDelete").value;   
   fetch('http://localhost:5000/news/' +idTodel, {
          method: 'delete'
      })
      .then(res => res.json())
      .then(json => console.log(json));
      //document.getElementById("deleteOne").innerHTML="teest of the thi";
  })
   


  
  
  
  
  
  