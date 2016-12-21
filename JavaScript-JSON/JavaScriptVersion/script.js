(function(){

var userNameList= new Array();
var userFollowersList= new Array();
var userLocationList= new Array();

var nameCount=0;
var followersCount=0;
var locationCount=0;


document.querySelector(".btn").addEventListener('click',function(){
	var user =document.querySelector("#search").value;
	document.querySelector("#search").value="";
	var userList = document.querySelector(".user h2");
	createUserList(user);

},false);

document.querySelector("#sortType").addEventListener('change', function()
{
	var sortType= document.querySelector("#sortType").value;
	userSort(sortType);
   	
},false);



document.querySelector("#user-container").addEventListener('click' , function(e)
	{
	if(e.target.className!=="user-container")
		{
			if(e.target.tagName==="IMG")
				{
					e.target.parentNode.getElementsByTagName("LI");
					var delNameUser = e.target.parentNode.getElementsByTagName("LI")[17].getElementsByTagName("P")[0].innerHTML;	
					var delLoginUser =e.target.parentNode.getElementsByTagName("LI")[0].getElementsByTagName("P")[0].innerHTML;
					deleteUser(delLoginUser ,delNameUser );
 				}
		}
	},false);


function sortOrder(a,b)
	{
	if (a[0] === b[0]) 
	{
        return 0;
    	}
    	else {
        	return (a[0] < b[0]) ? -1 : 1;
    	     }
	}


function createUserList(user)
	{
		var userDetail = new XMLHttpRequest();
		var userName = 'https://api.github.com/users/'+user;
		userDetail.open('GET',userName,true);
		userDetail.send();
		userDetail.onreadystatechange = function() {
		    if (userDetail.readyState == 4 && userDetail.status == 200) 
			{
			        var jsonObj =JSON.parse(userDetail.responseText);
    				var myUeserData =JSON.parse(userDetail.responseText) ;
			        userNameList[nameCount]=new Array(JSON.parse(userDetail.responseText).name,JSON.parse(userDetail.responseText));
			        userFollowersList[followersCount]=new Array(JSON.parse(userDetail.responseText).followers,JSON.parse(userDetail.responseText));
			        userLocationList[locationCount]=new Array(JSON.parse(userDetail.responseText).location,JSON.parse(userDetail.responseText));
			        nameCount+=1;
			        followersCount+=1;
        			locationCount+=1;
        			var sortType= document.querySelector("#sortType").value;
				userSort(sortType);
   		    }
	};

	}


function userSort(sortType){

	if(sortType==="Name"){
        
       				var mainContainer = document.querySelector("#user-container");
				console.log(mainContainer.children.length);
       			 		if (mainContainer.children.length===0) 
        					{
				       			 userNameList.sort(sortOrder);
        			        		 for(var i=0 ; i < userNameList.length;i++)
        							{
                 			           			 addUser(userNameList[i][1]);
             							}
        					} 
        				else
        					{
            
            						while (mainContainer.firstChild) 
								{
					    	  			 mainContainer.removeChild(mainContainer.firstChild);
								} 
							userNameList.sort(sortOrder);
        
        						for(var i=0 ; i < userNameList.length;i++)
        							{ 
							            addUser(userNameList[i][1]);
               							}

					        }
   			    }

   	else if (sortType==="Followers") {

   						var mainContainer = document.querySelector("#user-container");
       					        if (mainContainer.children.length===0) 
						{
        						userLocationList.sort(sortOrder);
        				        	for(var i=0 ; i < userFollowersList.length;i++)
        							{
                 	        					addUser(userFollowersList[i][1]);     
    								}
        					} 
   						else
        					{
            		            			while (mainContainer.firstChild) 
								{
    									mainContainer.removeChild(mainContainer.firstChild);
								}
           
       							userFollowersList.sort(sortOrder);
        					        for(var i=0 ; i < userFollowersList.length;i++)
       								 {
                 					            addUser(userFollowersList[i][1]);
               						         }

        					}

   					}
   	else				{

   	  					 var mainContainer = document.querySelector("#user-container");
       						 console.log(mainContainer.children.length);
       						 if (mainContainer.children.length===0) 
       							{
        							userLocationList.sort(sortOrder);
        						        for(var i=0 ; i < userLocationList.length;i++)
        							{
                             						addUser(userLocationList[i][1]);		      
    								}
        							} 
        				else{
					            var mainContainer = document.querySelector("#user-container");
            						while (mainContainer.firstChild) 
						        {
    								mainContainer.removeChild(mainContainer.firstChild);
							} 
					            userLocationList.sort(sortOrder);
        					    for(var i=0 ; i < userLocationList.length;i++)
        							{  
							            addUser(userLocationList[i][1]);
              							}
					    }

   	}



}


function deleteUser(loginUser, name)
	{
		console.log(userNameList[0][1].login );
		console.log(userNameList[0][1]);
		console.log(loginUser);
		for(var i = 0;userNameList.length ;i++)
			{
				if(loginUser===(userNameList[i][1].login))
					{
						userNameList.splice(i,1);
						nameCount-=1;
						break;
					}
			}

		for(var i = 0;userFollowersList.length ;i++)
			{
				if(loginUser===(userFollowersList[i][1].login))
					{
						userFollowersList.splice(i,1);
						followersCount-=1;
						break;
					}
			}

		for(var i = 0;userLocationList.length ;i++)
			{
				if((loginUser===userLocationList[i][1].login))
					{
						userLocationList.splice(i,1);
						locationCount-=1;
						break;
					}

			}

	var sortType= document.querySelector("#sortType").value;
	userSort(sortType);


	};




function addUser(user)
{
    	var myUser =document.querySelector("#user-container");
		var strg ="<div class=userCard><div class=row><div class =user_avatar box col-xs-6+><img class= img-thumbnail img-responsive src= "+user.avatar_url+"/></div><div class=userBio text-capitalize box col-xs-6><img id=cancelImg src=Cancel.png ><h1 class=text-capitalize>"+user.name+"</h1><h3>Login Id:"+ user.login+"</h3><h3>Location :" +user.location+"</h3><h3>Followers:"+ user.followers+"</h3></div></div></div>	";
		myUser.innerHTML=strg;
    	
 }

  })();
