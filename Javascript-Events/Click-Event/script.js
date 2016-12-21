function removeElement(){
if((this.parentNode.children.length)<2)
{
	console.log("inside if");
document.getElementById("art-info").innerHTML="You have selected art "+this.children[0].getAttribute("alt");
document.getElementById("art-info").style.color="red";
document.getElementById("art-info").style.fontSize="20px";
this.children[0].style.height="100%";
this.children[0].style.width="100%";
}
else{
	this.parentNode.removeChild(this);
}

}

var imgClicked=document.getElementsByClassName("img");

for(var i=0;i<imgClicked.length;i++){
imgClicked[i].addEventListener('click',removeElement,false);
}