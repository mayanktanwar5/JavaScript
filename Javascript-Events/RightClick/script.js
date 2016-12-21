document.querySelector('.img-grid').addEventListener('contextmenu',function (e){
e.preventDefault();
if(e.target.tagName==='IMG')
{
var count =0
count= count+1;

	var myElement = document.createElement('div');
	myElement.className ='preview';
	e.target.parentNode.appendChild(myElement);
	var myImg =document.createElement("img");
    myImg.src= e.target.src; 
    myElement.style.left=e.offsetX +15 +'px';
myElement.style.top=e.offsetY+15+'px';
	myElement.appendChild(myImg);

e.target.addEventListener('mousemove',function(f){

myElement.style.left=f.offsetX +15 +'px';
myElement.style.top=f.offsetY+15+'px';},false)

	e.target.addEventListener('mouseout', function handler(d){
		var myNode = d.target.parentNode.querySelector('.preview');
		console.log("inside mouse out "+ myNode.tagName );
		console.log("inside mouse out "+ myNode.parentNode );

		myNode.parentNode.removeChild(myNode);
		e.target.removeEventListener('mouseout',handler,false);
	},false);

}

},false);


