document.getElementById("getOneNews").addEventListener("submit",e=>{
    e.preventDefault();  
    mainObj={};
   var id=document.getElementById("id").value;
   fetch('http://localhost:5000/news/' +id, {
      method: "GET",
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(function(json) {
          var para=document.getElementById("getOne");
            //console.log(json[0].Title);
            mainObj=json;
           "<div class=\"container\"/>"
            for(let prop in mainObj){
              para.innerHTML+="<p class=\"container\"> <strong> Title: </strong> "+mainObj[prop].Title +"</p>"+"<p class=\"container\"><strong> Content: </strong>"+ mainObj[prop].Content+"</p> <p class=\"container\"> <strong> id </strong>"+mainObj[prop].id+"</p> </br>";
              console.log(mainObj[prop].Content);
              console.log(mainObj[prop].Title);
              "</div>";
            }})
                  
})
