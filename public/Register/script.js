var firstname=document.querySelector('#FirstName')
var lastname=document.querySelector('#LastName')
var form_number =document.querySelector('#Number')
var email =document.querySelector('#Email')
var username =document.querySelector('#UserName')
var cusername =document.querySelector('#CUserName')
var button =document.querySelector('#submit')
var pass1=document.querySelector('#pass1')
var Pass2=document.querySelector('#pass2')
var classi =document.querySelector('#class')


var fn;
var ln;
var nm;
var em;
var un;
var cun;
var pw;
var cpw;
var cls;



button.addEventListener("click", function(){
	 fn=firstname.value;
	 ln=  lastname.value;
	 nm=form_number.value;
	 em=email.value;
	 un= username.value;
	 cun=cusername.value;
	 pw= pass1.value;
	 cpw= pass2.value;
	 cls=classi.value;



	 if(fn || ln || nm ||em ||un || cun || pw || cpw || cls ===""){
	 	console.log("no field should be left empty");

	 }
	//form validation
if(form_number.value.length < 11 || form_number.value.length >11 && form_number.value.length !== 0){
	console.log("invalid Phone Number");
}

if(pass1.value !== pass2.value ||  pass1.value===0){
	console.log("invalid Password")
};

if(form_number.value.length === 11 && pass1.value === pass2.value && fn || ln || nm ||em ||un || cun || pw || cpw || cls !==""){
	console.log("Authentication Complete");

	

	const entries = {

		Firstname: fn,
		Lastname:ln,
		number:nm ,
		Email: em,
		UserName:un,
		Confirm_UserName: cun,
		Password:pw,
		confirm_password:cpw,
		Employment_status: cls
	}
	console.log(entries);
	user_obj.push(entries);

	
	
	console.log(user_obj);

	


	}
	firstname.value='';
	  lastname.value='';
	 form_number.value='';
	 email.value='';
	  username.value='';
	 cusername.value='';
	  pass1.value='';
	  pass2.value='';
	 classi.value='';


	
})


