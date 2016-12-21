// global Variables

			var userNameList = new Array();
			var userLocationList = new Array();
			var userFollowersList = new Array();
			var count =0;


$(document).ready(function()
	{
		
		$('#searchUser').click(function()
		{	
			var searchUser = $('#search').val();
			if(searchUser===""||searchUser===" ")
				{
					alert("Please enter a user Login Id");
				}
			else{
			findUser(searchUser);
			$('#search').val("");}
			
				

		});

		$('#search').keypress(function(e)
		{	
			if(e.which == 13)
				{	var searchUser = $('#search').val();
					findUser(searchUser);
					$('#search').val("");
			
				}		
				

		});
		

})


$('input:radio').click(function()
	{
		var currSortType = $(this).attr("value");
		sortOrder(currSortType);
	})


function findUser(userLogin)
	{
		var loginUrl ="https://api.github.com/users/"+userLogin;
		 $.getJSON(loginUrl,function(result)
			{
			
				userNameList[count] =new Array(result.name,result);
				userLocationList[count]  = new Array(result.location , result);
				userFollowersList[count]  = new Array(result.followers , result);
				var sortType = $('input[checked=checked]').attr("value");
				sortOrder(sortType);
				count+=1;
			}).error(function(){
					alert("User not Found");
				});
	}





$('')


$('#user-container').on('click',"img#cancelImg",function()
	{
		 var loginId= $(this ).nextAll()[1].innerHTML;
		 var strLength =loginId.length;	
		 var userLoginId = loginId.substring(10,strLength);	
		console.log(userLoginId);
		deleteUser(userLoginId);
		 			
	});



function deleteUser(userLoginId)
	{
		for(var i=0;userNameList.length;i++)
			{
				if(userNameList[i][1].login===userLoginId)
					{
						userNameList.splice(i,1);
						break;
					}
			}		
	
		for(var i=0;userLocationList.length;i++)
			{
				if(userLocationList[i][1].login===userLoginId)
					{
						userLocationList.splice(i,1);
						break;
					}
			}	

		for(var i=0;userFollowersList.length;i++)
			{
				if(userFollowersList[i][1].login===userLoginId)
					{
						userFollowersList.splice(i,1);
						break;
					}
			}
	
		count-=1;
		var sortType = $('input[checked=checked]').attr("value");
		sortOrder(sortType);
		
	}





function sortFn(a,b)
	{
	if (a[0] === b[0]) 
	{
        return 0;
    	}
    	else {
        	return (a[0] < b[0]) ? -1 : 1;
    	     }
	}


function sortOrder(sortType)
	{
		if(sortType==="Name")
			{
			userNameList.sort(sortFn);
			if($('#user-container').children().length===0)
				{
					for(var i=0 ; i < userNameList.length;i++)
        					{
                 			         	createUser(userNameList[i][1]);
             					}
				}
			else
				{
					$('#user-container').empty();
					for(var i=0 ; i < userNameList.length;i++)
        					{
                 			         	createUser(userNameList[i][1]);
             					}
					
				}	
			}
		else if(sortType==="Followers")
			{
				
			userFollowersList.sort(sortFn);
			if($('#user-container').children().length===0)
				{
					
					for(var i=0 ; i < userFollowersList.length;i++)
        					{
                 			         	createUser(userFollowersList[i][1]);
             					}
				}
			else
				{
					$('#user-container').empty();
					for(var i=0 ; i < userFollowersList.length;i++)
        					{
                 			         	createUser(userFollowersList[i][1]);
             					}
					
				}		
			}
		else
			{
				
			userLocationList.sort(sortFn);
			if($('#user-container').children().length===0)
				{
					
					for(var i=0 ; i < userLocationList.length;i++)
        					{
                 			         	createUser(userLocationList[i][1]);
             					}
				}
			else
				{
					$('#user-container').empty();
					for(var i=0 ; i < userLocationList.length;i++)
        					{
                 			         	createUser(userLocationList[i][1]);
             					}
					
				}	
			}	
	}



//$("#user-container").on('click',".showMore", function()
//	{
//		var checkStatus= $(this).parent().parent().parent().children()[1].getAttribute("class");
//		var show ="fullBio  text-center text-capitalize showBio";
//		var hide="fullBio  text-center text-capitalize hideBio"
//		if(checkStatus ===hide)
//			{
//				$(this).parent().parent().parent().children()[1].setAttribute("class",show);
//				$(this).html("Show Less");
//			}
//		else
//			{
//				$(this).parent().parent().parent().children()[1].setAttribute("class",hide);
//				$(this).html("Show More");
//			}		
//		
//	})


function createUser(user)
	{
		var template=$("#userCardTpl").html();
		var userHtml =Mustache.to_html(template,user);
		$("#user-container").append(userHtml);	
		var count =1;
		var countModal=1;
		$("#user-container .userCard .fullBio").each(function(){  var idName="fullBio"+count;count+=1;  $(this).attr("id",idName)});
		$("#user-container .userCard .showMore").each(function(){  var idName="#fullBio"+countModal;countModal+=1;  $(this).attr("data-target",idName)})
	}