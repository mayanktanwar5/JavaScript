// How javascript will behave when use strict  is not there  against when it is used.
	
//"use strict"
// will throw error when not used use Strict
// firsterror = " will  throw error when used strict mode";
// console.log(firsterror);
//==============================================================
// will throw error when not used use Strict
//==============================================================
// var arguments =[1,2,3];
//  var eval="hello"
// console.log(arguments[1]) +"error for using arguments as variable";
// console.log(eval) +"error for using arguments ";
//==============================================================
// will throw error when not used use Strict
//==============================================================
window.name="mayank";
function myname(name)
{
	this.name =name;
	console.log(this.name)
};
myname("mayank");
