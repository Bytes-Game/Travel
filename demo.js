

function getData(){
    const inp= document.getElementById('search');
inp.addEventListener('input', inputChange);
    var countries=[];

fetch(`https://restcountries.com/v3.1/all`)
.then(response=> response.json())
.then(data => countries=data.map((countrie)=>{
    return countrie.name.common;
}));


function inputChange(){
    removeDropDown();
    const val = inp.value.toLowerCase();
if(val.length===0) return;

    const filterNames=[];

    countries.forEach((country)=>{
        if(country.substr(0,val.length).toLowerCase()==val){
            filterNames.push(country);
        }
    })

    dropDown(filterNames);
}
}

function dropDown(list){
    const listEl= document.createElement("ul");
    listEl.className= "autoCompleteList"
    listEl.id="autoComplete";

    list.forEach((country)=>{
        const listItem= document.createElement("li");
        const cButton= document.createElement("button");
        cButton.className="selecting";
        cButton.innerText= country;
        cButton.addEventListener("click", clickcButton);
        listItem.appendChild(cButton);
        listEl.appendChild(listItem);
    })
  
    document.querySelector("#child").appendChild(listEl);
   
}

function removeDropDown(){
    const listEl=document.querySelector("#autoComplete");
    if(listEl){
        listEl.remove();
    }
}

function clickcButton(e){
    e.preventDefault();
 const buttonE1= e.target;
 document.getElementById('search').value= buttonE1.innerHTML;
 removeDropDown();
}
