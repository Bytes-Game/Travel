function mySearchFunction() {
  let val= document.getElementById('search').value;
  if(!val){
  document.getElementById("arrow_1").classList.add("red_arrow1");
  document.getElementById("arrow_2").classList.add("red_arrow2");
  document.getElementById("arrow_3").classList.add("red_arrow3");
  }else{
    document.getElementById("arrow_1").classList.add("green_arrow1");
    document.getElementById("arrow_2").classList.add("green_arrow2");
    document.getElementById("arrow_3").classList.add("green_arrow3");

  }
}
function myDateFunction() {
  let val= document.getElementById('check_date').value;
  
  if(!val){
  document.getElementById("arrow_4").classList.add("red_arrow1");
  document.getElementById("arrow_5").classList.add("red_arrow2");
  document.getElementById("arrow_6").classList.add("red_arrow3");
  
  }else{
    document.getElementById("arrow_4").classList.add("green_arrow1");
    document.getElementById("arrow_5").classList.add("green_arrow2");
    document.getElementById("arrow_6").classList.add("green_arrow3");
    
    document.getElementById('search_logo').style.animation="1.5s linear 0s infinite alternate animte"
  }
}
let count=0;
function showPersonsBlock() {
  count++;
  if(count%2==1){
  document.getElementById('persons_block').style.display = "block";
}else{
  document.getElementById('persons_block').style.display = "none";
}
}
let adults_count=2;
function adultAdd(){
  adults_count++;
  document.getElementsByClassName("person_p")[0].innerText=adults_count;
  if(adults_count==1){
    document.getElementsByClassName("person_1")[0].innerText=adults_count;
    document.getElementsByClassName("person_1")[1].innerText="Adult"; 
  }else{
    document.getElementsByClassName("person_1")[0].innerText=adults_count;
    document.getElementsByClassName("person_1")[1].innerText="Adults";
  }

}
  function adultMinus(){
    
    if(adults_count>=2){
      adults_count--;
      document.getElementsByClassName("person_p")[0].innerText=adults_count;
      if(adults_count==1){
        document.getElementsByClassName("person_1")[0].innerText=adults_count;
        document.getElementsByClassName("person_1")[1].innerText="Adult"; 
      }else{
        document.getElementsByClassName("person_1")[0].innerText=adults_count;
        document.getElementsByClassName("person_1")[1].innerText="Adults";
      }

    }else{
    adults_count=1;
  }

  }

  let child_count=0;
function childAdd(){
  child_count++;
  document.getElementsByClassName("person_p")[1].innerText=child_count;
  if(child_count==1){
  document.getElementsByClassName("person_1")[2].innerText=child_count;
  document.getElementsByClassName("person_1")[3].innerText="Child"; 
}else{
  document.getElementsByClassName("person_1")[2].innerText=child_count;
  document.getElementsByClassName("person_1")[3].innerText="Children";
}
}
  function childMinus(){
    
    if(child_count>=1){
      child_count--;
      document.getElementsByClassName("person_p")[1].innerText=child_count;
      if(child_count==1){
        document.getElementsByClassName("person_1")[2].innerText=child_count;
        document.getElementsByClassName("person_1")[3].innerText="Child"; 
      }else{
        document.getElementsByClassName("person_1")[2].innerText=child_count;
        document.getElementsByClassName("person_1")[3].innerText="Children";
      }

    }else{
    child_count=0;
  }

  }
 
  let room_count=0;
  function roomAdd(){
    room_count++;
    document.getElementsByClassName("person_p")[2].innerText=room_count;
    if(room_count==1){
      document.getElementsByClassName("person_1")[4].innerText=room_count;
      document.getElementsByClassName("person_1")[5].innerText="Room"; 
    }else{
      document.getElementsByClassName("person_1")[4].innerText=room_count;
      document.getElementsByClassName("person_1")[5].innerText="Rooms";
    }
  }
    function roomMinus(){
      
      if(room_count>=2){
        room_count--;
        document.getElementsByClassName("person_p")[2].innerText=room_count;
        if(room_count==1){
          document.getElementsByClassName("person_1")[4].innerText=room_count;
          document.getElementsByClassName("person_1")[5].innerText="Room"; 
        }else{
          document.getElementsByClassName("person_1")[4].innerText=room_count;
          document.getElementsByClassName("person_1")[5].innerText="Rooms";
        }
      }else{
      room_count=1;
    }
  
    }
 
 
