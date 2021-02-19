document.getElementById("FormDeleteById").addEventListener("submit",e=>{
    e.preventDefault();  
    var idTodel = document.getElementById("idToDelete").value;   
   fetch('http://localhost:5000/news/' +idTodel, {
          method: 'delete'
      })
      .then(res => res.json())
      .then(json => console.log(json));
      var deleted=document.getElementById("deleteOne");
      deleted.style.margin= "20px 20px 30px 200px";
    deleted.innerHTML="Check console message";
  })
   


  
  
  
  
  
  