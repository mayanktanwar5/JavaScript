var textCustomizer = (function(){

	var DEFAULTS = {
		fontSize:"10",
		fontFamily:"Cursive",
		textColor:"Orange"
		

	} 

	return {
		setFontSize : function(){

			var setvalues = arguments[0] || '';
			var fontValue = setvalues||DEFAULTS.fontSize;
			console.log("Inside size" +  fontValue);
			document.getElementById("displayResult").style.fontSize =fontValue +"px";
			return this;


		},
		setFontColor : function(){

			var setvalues = arguments[0] || '';
			var fontColor = setvalues||DEFAULTS.textColor;
			console.log("Inside color  " + fontColor);
			document.getElementById("displayResult").style.color =fontColor;
			return this;


		},
		setFontFamily : function(){

			var setvalues = arguments[0] || '';
			var fontFamilyValue = setvalues||DEFAULTS.fontFamily;

			document.getElementById("displayResult").style.fontFamily=fontFamilyValue;
			return this;

		}

	}


})();

window.onload =function()
{
	var fontColorInp= document.getElementById("font-color");
	var fontSizeInp =document.getElementById("font-size");
	var fontFamilyInp =document.getElementById('font-family');
	var enteredText =document.getElementById('text');

	document.getElementById("seeResult").addEventListener("click" , function(){

		console.log("In It");
		textCustomizer.setFontSize(fontSizeInp.value).setFontColor(fontColorInp.value).setFontFamily(fontFamilyInp[fontFamilyInp.selectedIndex].value);
		document.getElementById("result").innerText =enteredText.value;



	},false);
};

