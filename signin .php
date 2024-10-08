<?php
$conn = mysqli_connect("localhost", "root", "", "registration");
if(!$conn){
    die("could not connect".mysql_error($conn));
}
else{
    echo "<br>";
}
if(isset($_POST['submit'])){
$email=$_POST['email'];
$pass=$_POST['password'];
$sql= "SELECT * FROM registration_form WHERE `email`='$email' && `password`='$pass'";
$result = mysqli_query($conn, $sql);
$checkresult= mysqli_num_rows($result);
if($checkresult==1){
    header("Location: Traveller.html");
    die();
}else{
    echo "<p class='alarm'> login failed </p>";

}
}
mysqli_close($conn);
// $sql= "SELECT email, password FROM registration_form";
// $ara=[];
// while($row = mysqli_fetch_array($result)){
//         $ara[]=$row;
       
    
// }
// $email=$_POST['email'];
// $pass=$_POST['password'];

//  for($i=0;$i<sizeof($ara);$i++){

// if($ara[$i]['email']===$email && $ara[$i]['password']===$pass){
//     header("Location: Traveller.html");
//     die();
// }
//  }
?>
<!DOCTYPE html>
<html>
<head>
<title>Sign in</title>
</head>
<style>
body{
background-image: url('image10.png');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
}
.B{
        position: absolute; 
        top: 7%;
        left: 60%;
        width: 22em;
        height: 35em;
        border: 4px solid rgba(199, 199, 204, 0.521);
        border-radius: 2em;
        animation: animte 5s infinite;
        background-color: aliceblue;
}
@keyframes animte {
       50%{box-shadow: 0px 0px 4px 5px rgba(199, 199, 204, 0.521);}
}
input[type=text]{
        position: absolute; 
        top: 30%;
        left: 8%;
        right: 20%;
        width: 18rem;
        height: 45px;
        border-radius: .5em;
        border: 2px solid rgba(0, 0, 0, 0.301);
        font-size: 14px;
        margin-right: 5px;
}  
input[type=password] {
        position: absolute; 
        top: 45%;
        left: 8%;
        width: 18rem;
        height: 45px;
        border-radius: .5em;
        border: 2px solid rgba(0, 0, 0, 0.301);
        font-size: 14px;
}  
#butlogin{
        position: absolute; 
        width: 298px;
        height: 50px;
        top: 70%;
        left: 8%;
        border-radius: 2em;
        color: rgb(253, 251, 251);
        border: 2px solid rgb(66, 87, 207);
        background-color: rgb(61, 77, 182);
        font-size: larger;
        font-family:  Arial, Helvetica, sans-serif;
}
h4{
        text-align: center;
        position: relative;
        top: 78%;
        color: rgba(92, 85, 85, 0.623);
}
h4::before{
        background-color: rgba(126, 123, 123, 0.384);
        content: "";
        display: block;
        position: absolute;
        width: 120px;
        height: 2px;
        left: 9%;
        top: 50%;
        z-index: -1;
}
h4::after{
        background-color: rgba(126, 123, 123, 0.384);
        content: "";
        display: block;
        position: absolute;
        width: 120px;
        height: 2px;
        left: 58%;
        top: 50%;
        z-index: -1;
}
#login{
        position: absolute;
        top: 59%;
        left: 9%;
        font-size: large;
        text-decoration: none;
}
#login:hover {
        text-decoration: underline;
}
#butlogin:hover{
        background-color: rgb(115, 144, 224);
        color:rgb(252, 249, 249)
}
.signup{
       position: relative;
       text-align: center;
       top:75%;
}
.signup>button{
        width: 220px;
        height: 35px;
}
.alarm{
        color: red;
        margin-left: 950px;
        margin-top: 380px;
        position: absolute;
        z-index: 1; 
        font-size: larger;
}
</style> 
<body>
<div class = B> 
<form action="" method="POST">
<input type="text" id="email" placeholder="Phone number, username, or email" name='email' required/>
<label for="user"></label>
<input type="password" id="password" placeholder ="Password" name='password' required />
<label for="password"></label>
<a href="image10.png" id="login">Forgot password?</a>
<button id="butlogin" name='submit'>Log In</button> 
</form>
<h4><span>or</span></h4>
<div class= "signup">
<p>Don't have an account?</p>
<button><a href="http://localhost:8080/Travel/register.html">Sign up</a></button>
</div>
</body>
</html>