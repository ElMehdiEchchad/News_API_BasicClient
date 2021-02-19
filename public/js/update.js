document.getElementById("formOfUpdate").addEventListener("submit",e=>{
    e.preventDefault();  
   var content = document.getElementById("contentToUpdate").value; 
   var title= document.getElementById("titleToUpdate").value;
   var id=document.getElementById("id").value;
   
   const body={"content":content ,"title": title};
   fetch('http://localhost:5000/news/' +id, {
          method: 'put',
          body:    JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => console.log(json));
      console.log("updating API was successful");
      var toUpdate=document.getElementById("toUpdate");
      deleted.style.margin= "20px 20px 30px 200px";
        deleted.innerHTML="Updated successfully";
  
  })

  
  
  
  