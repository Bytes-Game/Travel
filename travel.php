<?php
$fname= $_POST['fname'];
$lname= $_POST['lname'];
$email= $_POST['email'];
$contact= $_POST['contact'];
$pass= $_POST['pass'];
$cpass= $_POST['cpass'];
$gender= $_POST['gender'];
if($fname&&$lname&&$email&&$contact&&$pass&&$cpass){
$conn = mysqli_connect("localhost", "root", "", "registration");
if(!$conn){
    die("could not connect".mysql_error($conn));
}
else{
    echo"Connected Successfully <br>";
    $sql="INSERT INTO registration_form VALUES ('$fname', '$lname', '$email', '$contact', '$pass', '$cpass', '$gender')";
    if(mysqli_query($conn,$sql)){
    echo"Record inserted successfully";
    }else{
        echo"Could not insert record";
    }
   

}
}
else{
    echo"Fields are empty";
}


?>