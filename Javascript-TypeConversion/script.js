function inKilo()
{
	var weight=document.getElementById("weight").value;
	if(!isNaN(weight))
	{
		document.getElementById("showWeight").innerHTML =Number(weight)*0.452 +"  Kilograms";

	}
	else
	{

		alert("Please enter a valid number");
	}
	
}

function atMoon()
{
	var weight=document.getElementById("weight").value;
	if(!isNaN(weight))
	{
		document.getElementById("showWeight").innerHTML ="You weight "+(Number(weight)*0.2) +"  Pounds" +" at Moon";

	}
	else
	{

		alert("Please enter a valid number");
	}
	
}