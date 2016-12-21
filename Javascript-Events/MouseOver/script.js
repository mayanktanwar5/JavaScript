document.querySelector('.img-grid').addEventListener('mouseover',function (e){

if(e.target.tagName==='IMG')
{
var count =0
count= count+1;

	var myElement = document.createElement('div');
    console.log(e.target) ;
    console.log(e.target.parentNode) ;
    console.log(e.target.tagName) ;
    console.log(count +"  count")
	myElement.className ='preview';
	e.target.parentNode.appendChild(myElement);
	var myImg =document.createElement("img");
    myImg.src= e.target.src; 
	myElement.appendChild(myImg);

	e.target.addEventListener('mouseout', function handler(d){
		var myNode = d.target.parentNode.querySelector('.preview');
		console.log("inside mouse out "+ myNode.tagName );
		console.log("inside mouse out "+ myNode.parentNode );

		myNode.parentNode.removeChild(myNode);
		e.target.removeEventListener('mouseout',handler,false);
	},false);

}

},false);
