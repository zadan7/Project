<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php

$username = $_POST["UserName"];
$password = $_POST["Password"];

Echo "Username: $username <br>" ;
Echo "Password: $password <br>";

var_dump($username);
echo "<br>";
var_dump($password);


 $user_obj =  array(
[
"Firstname"=>"sadam",
"Lastname"=>"umaru",
"Number"=>"07017985546",
"Email"=>"sadamumaru@gmail.com",
"UserName"=>"sadam_umaru",
"Confirm_UserName"=>"sadam",
"Password"=>"Barcode1jr.",
"confirm_password"=>"Barcode1jr.",
"Employment_status"=>"Administrator"
],

[
"Firstname"=>"Gadafi",
"Lastname"=>"umaru",
"Number"=>"09017985577",
"Email"=>"gadafiumaru@gmail.com",
"UserName"=>"gadafi_umaru",
"Confirm_UserName"=>"gadafi_umaru",
"Password"=>"ronaldojr.",
"confirm_password"=>"Barcode1jr.",
"Employment_status"=>"Administrator"
]
)
// [
// Firstname:"Aisha",
// Lastname:"Umaru",
// Number:"09017985577",
// Email:"KaishaLuxury@gmail.com",
// UserName:"aisha_umaru",
// Confirm_UserName:"aisha_umaru",
// Password:"1997",
// confirm_password:"1997",
// Employment_status:"Administrator"]

// echo "$user_obj";
 echo "$user_obj["0"]["0"]";


?>

</body>
</html>
