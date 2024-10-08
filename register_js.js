function warn(){
const fname= document.getElementById('fname');
const lname= document.getElementById('lname');
const made= document.getElementById('made');
const pass= document.getElementById('pass');
const check=document.getElementById('check');
fname.addEventListener('input', (e)=>{
   
    if(fname.value===''||fname.value==null){ 
        const p=document.createElement("p");
        p.innerText="! This field can't be empty";
        p.style.color="red";
        fname.insertAdjacentElement("afterend", p);
       
    }else{
        fname.nextElementSibling.remove();
    }
});
lname.addEventListener('input', (e)=>{
   
    if(lname.value===''||lname.value==null){
        const p=document.createElement("p");
        p.innerText="! This field can't be empty";
        p.style.color="red";
        lname.insertAdjacentElement("afterend", p);
       
    }else{
        lname.nextElementSibling.remove();
    }
});
pass.addEventListener('input', (e)=>{
    if(pass.value.length<10&&pass.value.length>0){
         made.innerText="Weak Password";
        made.style.color='red';
     
    }else if(pass.value.length==0){
     made.innerText="";
    }else{
      {
     made.style.color='green';
     made.innerText="Strong Password";
    }
    }
});
check.addEventListener('click', (e)=>{
if(!fname&&!lname&&!email&&!contact&&pass!==cpass){
    check.disabled = false;
}
});
}

