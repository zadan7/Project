var greet = document.querySelector('#greeting')

greet.innerHTML="WELCOME !"+" "+ window.sessionStorage.getItem("user");

const check_user=()=>{
	if(window.sessionStorage.getItem("user") =="" || window.sessionStorage.getItem("user") == null){
	 	window.location.assign("../index.html")
	}
} 


window.onload = check_user();
var logout=document.querySelector('#Logout');
logout.addEventListener("click",()=>{
	console.log("click")
	document.querySelector("#popup").style.display="block";
	// window.sessionStorage.setItem("user","")
	// window.location.assign("../index.html")
})



var no =document.querySelector(".button1");
no.addEventListener("click",()=>{
	document.querySelector("#popup").style.display="none";	


})
var yes =document.querySelector(".button2");
yes.addEventListener("click",()=>{
	document.querySelector("#popup").style.display="none";
	window.sessionStorage.setItem("user","")
	window.location.assign("../index.html");



})

var make_sales = document.querySelector(".make-sales");
make_sales.addEventListener("click",function(){
	console.log("click");
	window.location.assign("make-sales/make_sales.html");

})