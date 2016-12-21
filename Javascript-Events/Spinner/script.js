document.querySelector(".preview").addEventListener('click', function(e){
	var lowRes= e.target.src;
	var showOverlay = document.querySelector(".overlay");
	var highRes= document.createElement("img");
	var spinner=document.createElement("img");
	showOverlay.style.visibility="visible";
	highRes.className="bg-img";
	highRes.src="spring.jpg";
	showOverlay.appendChild(highRes);
	spinner.className="spinner";
	spinner.src="spinner.gif";
	showOverlay.appendChild(spinner);
    highRes.addEventListener('load',function(){
    	spinner.parentNode.removeChild(spinner);
    },false);
	
	

},false)