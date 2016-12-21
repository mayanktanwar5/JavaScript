(function(){document.getElementById("logIn").addEventListener('click',function(){
var id= document.getElementById("Sign-upLog-in");
id.setAttribute("class" ,"signupLogin login-active ");
var id2=document.getElementById("signupForm");
id2.setAttribute("class" , "signupForm login-active-signupForm" );
var id3=document.getElementById("loginForm");
id3.setAttribute("class","loginForm login-active-loginForm" );
},false);

document.getElementById("signUp").addEventListener('click',function(){
var id=document.getElementById("Sign-upLog-in");
id.setAttribute("class" ,"signupLogin  signup-active");
var id2=document.getElementById("signupForm");
id2.setAttribute("class" , "signupForm signup-active-signupForm" );
var id3=document.getElementById("loginForm");
id3.setAttribute("class"," loginForm signup-active-loginForm" );


},false);


var emailId=document.getElementById("email-id");
var emailError=document.getElementById("emailname-error");
var password =document.getElementById("pwd");
var pwdError = document.getElementById("password-error");
var telNum= document.getElementById("tel");
var telError =document.getElementById("telephone-error");

emailId.addEventListener("change",function(){
 var pattern = new RegExp( "^[\\w.%+\\-]+@[\\w.\\-]+\\.([A-Za-z]{2}|yahoo|google|hotmail)");
 var isValid = this.value.search(pattern)>=0;

 if(!(isValid)) {

 	emailError.innerHTML ="Email should be of the format  someone@someone.com";
 }
 else
 {
 	emailError.innerHTML="";
 }
},false);

password.addEventListener("change",function(){
 var pattern = new RegExp( "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$");
 var isValid = this.value.search(pattern)>=0;

 if(!(isValid)) {

 	pwdError.innerHTML ="Password should have (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars )";
 }
 else
 {
 	pwdError.innerHTML="";
 }
},false);

telNum.addEventListener("change",function(){
 var pattern = new RegExp( "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$");
 var isValid = this.value.search(pattern)>=0;

 if(!(isValid)) {

 	telError.innerHTML ="US based Phone Number in the format of: 123-456-7890";
 }
 else
 {
 	telError.innerHTML="";
 }
},false);
})();