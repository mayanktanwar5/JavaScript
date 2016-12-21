(function(){

	
function openModal(){
	console.log("button clicked");
var overlay=document.getElementById("overlay");
overlay.setAttribute("class","overlay overlay-active");
var modalactive=document.getElementById("modalsection");
modalactive.setAttribute("class","modal-section modal-active");
}


function closeButton(){

var modalactive=document.getElementById("modalsection");
modalactive.setAttribute("class","modal-section modal-notactive");
	var overlay=document.getElementById("overlay");
	overlay.setAttribute("class","overlay overlay-notactive");
}



function  showDropdown(){

	var dropdown = this.parentNode.getElementsByClassName("dropdown-list")[0];
	console.log(this.parentNode.getElementsByClassName("dropdown-list")[0])
	console.log(dropdown.className);
	if(dropdown.className=="dropdown-list list-active")
	{
      dropdown.className="dropdown-list list-notactive";
      console.log(dropdown.className);
	}
    else
    {
    	dropdown.className="dropdown-list list-active";
    }	
}

function collapsible() {
	var collap= this.parentNode.getElementsByClassName("collap-content")[0];
	console.log(this.parentNode.getElementsByClassName("collap-content")[0])
	console.log(collap.className);
	if(collap.className=="collap-content collap-active")
	{
      collap.className="collap-content";
	}
	else
	{
      collap.className="collap-content collap-active";
	}
}

function tabsShow()
{
 var tabClass = this.children[0].getAttribute("href");
this.parentNode.getElementsByClassName("tabs-content-active")[0].className="";//sets the current list inactive
this.parentNode.parentNode.getElementsByClassName("tabs-content-active")[0].className="";// sets the tans inactive
tabClassId = tabClass.substr(1,tabClass.length);
console.log(tabClassId);
 
document.getElementById(tabClassId).setAttribute("class","tabs-content-active");
this.children[0].parentNode.className="tabs-content-active";

switch(tabClassId)
{
	case "tab2":
		document.getElementById("tab2").children[0].innerHTML ="Eiffel Tower";
		document.getElementById("tab2").children[1].innerHTML ="The Eiffel Tower (/ˈaɪfəl ˈtaʊər/ eye-fəl towr; French: Tour Eiffel, pronounced: [tuʁ‿ɛfɛl] About this sound listen) is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.Constructed in 1889 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.";
		break;
	case "tab3":
		document.getElementById("tab3").children[0].innerHTML ="The Taj Mahal";
		document.getElementById("tab3").children[1].innerHTML ="The Taj Mahal (/ˌtɑːdʒ məˈhɑːl/, more often /ˈtɑːʒ/;[3] Persian for Crown of Palaces[4]) is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned 1628–1658), to house the tomb of his favourite wife, Mumtaz Mahal. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.";
		break;

	case "tab4":
		document.getElementById("tab4").children[0].innerHTML ="Machu Pichu";
		document.getElementById("tab4").children[1].innerHTML ="Machu Picchu (Spanish pronunciation: [ˈmatʃu ˈpiktʃu]) or Machu Pikchu ([ˈmɑtʃu ˈpixtʃu]), is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea level.[1][2] It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru,[3] above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.";
		break;
	case "tab5":
		document.getElementById("tab5").children[0].innerHTML ="Grand Canyon";
		document.getElementById("tab5").children[1].innerHTML ="The Grand Canyon (Hopi: Ongtupqa;[2] Yavapai: Wi:kaʼi:la, Navajo: Tsékooh Hatsoh, Spanish: Gran Cañón) is a steep-sided canyon carved by the Colorado River in the state of Arizona in the United States. It is contained within and managed by Grand Canyon National Park, the Kaibab National Forest, Grand Canyon-Parashant National Monument, the Hualapai Tribal Nation, the Havasupai people and the Navajo Nation. President Theodore Roosevelt was a major proponent of preservation of the Grand Canyon area, and visited it on numerous occasions to hunt and enjoy the scenery.";
		break;
 
}
}


function bindEvents(){

document.getElementById("close").addEventListener('click',closeButton,false);
document.getElementById("btnmodal").addEventListener('click',openModal,false);

var listClicked =document.getElementsByClassName("front-end");
for(var i =0; i<listClicked.length;i++)
{
	listClicked[i].addEventListener('click',showDropdown,false);
}

var collapClicked = document.getElementsByClassName("collap-header");
for(var i =0; i<collapClicked.length;i++ )
{
	collapClicked[i].addEventListener('click',collapsible,false);
}

var tabClicked =document.getElementsByClassName("tabs-nav")[0].children;
for(var i=0;i<tabClicked.length;i++)
{
	tabClicked[i].addEventListener('click',tabsShow,false);
}
}

window.onload=bindEvents();
})();
