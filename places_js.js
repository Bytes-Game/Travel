
function revolve(){
    let val = document.getElementById('search').value;
    const frame= document.getElementById('frame');
    const logo= document.getElementById('logo');
    if(val.length>0&&val!=''){
        document.getElementById('earth').classList.add('revolve');
        setTimeout("document.getElementById('earth').classList.remove('revolve')",2000);
    }else{
        document.getElementById('warning').innerText="!This field can't be empty";
    }
    
    document.getElementById('search').addEventListener('input', (e)=>{
        document.getElementById('warning').innerText="";
    })
logo.addEventListener('click', (e)=>{
    if(val==="United States"){
        frame.setAttribute("src", "https://www.ourescapeclause.com/best-places-to-visit-in-usa-bucket-list/");
    }
    else{
        frame.setAttribute("src", "https://www.cntraveler.com/gallery/best-destinations-in-the-world-gold-list");
    }
});
}
function accept(){
document.getElementById('revolv').addEventListener('click', revolve);
}
