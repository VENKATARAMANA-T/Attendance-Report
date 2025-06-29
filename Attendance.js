/*let ALL = document.createElement("div")

ALL.innerHTML = " <div class='allcourses'><div class='heading'><div >Course Name</div> <div>Total Classes</div> <div>Attended</div> <div>Percentage</div></div><div class='data'><div class='one'><div class='cn'>Default-1</div><div class='tc'>50</div><div class='ac'>50</div><div class='p'>100</div>  </div> <div class='one'>    <div class='cn'>Default-2</div> <div class='tc'>50</div><div class='ac'>50</div> <div class='p'>75</div>  </div> <div class='one'>  <div class='cn'>Default-3</div><div class='tc'>50</div><div class='ac'>50</div>  <div class='p'>100</div>   </div>  <div class='one'><div class='cn'>Default-4</div>    <div class='tc'>50</div><div class='ac'>50</div>  <div class='p'>74</div> </div> <div class='one'><div class='cn'>Default-5</div><div class='tc'>50</div><div class='ac'>50</div><div class='p'>100</div></div>  <div class='one'><div class='cn'>Default-6</div><div class='tc'>50</div><div class='ac'>50</div><div class='p'>100</div> </div></div></div>"
*/
str = "HELo"
let ALL = document.createElement("table")




ID=["#d1","#d2","#d3","#d4","#d5","#d6"]

per = document.querySelectorAll(".p");

document.querySelector("button").addEventListener("click",()=>{
    for(id of ID){
        document.querySelector(id).style.display="none";
    }


    let value = document.querySelector("#course").value;



   if(value=="ALL"){
    document.querySelector(".table").style.display="inline-block";
    
    for(id of ID){
        document.querySelector(id).style.display="table-row";
       
    }

    for(p of per){
        console.log(p.innerText)
        if(p.innerText>75){
                p.style.color="green";
        }else if(p.innerText==75){
            p.style.color="orange";
        }else{
            p.style.color="red"
        }
    }

   }else{
    value="#"+value;
    document.querySelector(".table").style.display="inline-block";
    for(id of ID){
        if(id==value){
        document.querySelector(id).style.display="table-row";

            if(document.querySelector(id+" .p").innerText>75){
                document.querySelector(id+" .p").style.color="green"

            }else if(document.querySelector(id+" .p").innerText==75){
                document.querySelector(id+" .p").style.color="orange"

            }else{
                document.querySelector(id+" .p").style.color="red"
            }
        }
    }


   }

})



        
   
     
       


    
    
    
   

   
    
   
   

  
   
    
 

   
  
 
   

   
   

    
    
   
   
  



/*
document.querySelector("button").addEventListener("click",()=>{
        console.log(document.querySelector("#course").value)
    if(document.querySelector("#course").value=="ALL"){
        
        
        document.querySelector(".fr").append(ALL)
        document.querySelector(".fr .allcourses").style.display="inline-block"
        for(att of document.querySelectorAll(".p")){
            if(att.innerText>75){
                att.style.color="green"
            }else if(att.innerText==75){
                att.style.color="orange";
            }else{
                att.style.color="red";
            }
        }
    }else{
        document.querySelector(".fr .allcourses").style.display="none"
    }
})*/