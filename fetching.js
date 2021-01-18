const cards=document.getElementById("card");
async function test(){
    const url="https://api.github.com/users/nirajandata/repos";
    const response =await fetch(url);
    const result= await response.json();
    result.forEach(i=>{
       const anchor=document.createElement("a");
       const parag=document.createElement("p");
       anchor.href=i.html_url;
       anchor.textContent=i.name;
       parag.textContent=i.description;
       cards.appendChild(anchor);
       cards.appendChild(document.createElement("br"));
       cards.appendChild(parag)
       cards.appendChild(document.createElement("br"));
    });
}   
test();
