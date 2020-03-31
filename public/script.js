const user_obj = [
{
Firstname:"sadam",
Lastname:"umaru",
Number:"07017985546",
Email:"sadamumaru@gmail.com",
UserName:"sadam_umaru",
Confirm_UserName:"sadam",
Password:"Barcode1jr.",
confirm_password:"Barcode1jr.",
Employment_status:"Administrator"},

{
Firstname:"Gadafi",
Lastname:"umaru",
Number:"09017985577",
Email:"gadafiumaru@gmail.com",
UserName:"gadafi_umaru",
Confirm_UserName:"gadafi_umaru",
Password:"ronaldojr.",
confirm_password:"Barcode1jr.",
Employment_status:"Administrator"},
{
Firstname:"Aisha",
Lastname:"Umaru",
Number:"09017985577",
Email:"KaishaLuxury@gmail.com",
UserName:"aisha_umaru",
Confirm_UserName:"aisha_umaru",
Password:"1997",
confirm_password:"1997",
Employment_status:"Administrator"},

{
Firstname:"Mr",
Lastname:"Kingseley",
Number:"08017985577",
Email:"mrKingsleyForChrist@gmail.com",
UserName:"mr_Kc",
Confirm_UserName:"mr_kc",
Password:"0000",
confirm_password:"0000",
Employment_status:"Manager"},

{
Firstname:"grace",
Lastname:"Ansel",
Number:"08134450799",
Email:"grace_ansel410@gmail.com",
UserName:"Grace_ansel",
Confirm_UserName:"Grace_ansel",
Password:"5546",
confirm_password:"5546",
Employment_status:"worker"}

]
var super_container =document.querySelector('#super-Container');
var submit = document.querySelector('#submit')
var logged_username = document.querySelector('#UserName')
	var logged_password=document.querySelector('#Password')
	var un=logged_username.value;
	var pw=logged_password.value;



// const logged_in=()=>{
// 	var root =document.querySelector('#root');
// 	root.innerHTML=user_obj[i].Employment_status;

// }
const redirect=()=>{
	console.log(window.location.href)
window.location.assign("dashboard/dashboard.html")
}

submit.addEventListener("click",function(){

	//CHECK IF USERNAME AND PASSWORD IS CORRECT
	for(var i=0;i<user_obj.length;i++){

		if(logged_username.value ===user_obj[i].UserName && logged_password.value ===user_obj[i].Password){
			console.log(logged_username.value);
			console.log(logged_password.value);
			// logged_in();
			console.log(user_obj[i].Employment_status);
			window.sessionStorage.setItem("user",logged_username.value);
			redirect();
			 

	var root =document.querySelector('#root');
	root.innerHTML=user_obj[i].Employment_status;
	return(user_obj[i].Employment_status);
	}else
	console.log("incorrect Password or UserName");
	var root =document.querySelector('#root');
	root.innerHTML="incorrect UserName or Password";

	}

	


	
})


