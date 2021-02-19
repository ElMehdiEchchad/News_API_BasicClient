document.getElementById("PostForm").addEventListener("submit",e=>{
  e.preventDefault();  
 var content = document.getElementById("content").value; 
 var title= document.getElementById("title").value;
 
 const body={"content":content ,"title": title};
 fetch('http://localhost:5000/news', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
    console.log("posting to API was successful");
    var posted= document.getElementById("posted");
    posted.style.margin= "20px 20px 30px 200px";
    posted.innerHTML="Sent successfully";


})




