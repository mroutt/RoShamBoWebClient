$(document).ready(function(){

	$("button").click(function(){
		
		var player1URL = $("#Player1URL").val();
		var player2URL = $("#Player2URL").val();

		var playerUrls = { 
							"Player1URL" : player1URL,
							"Player2URL" : player2URL							
						 };

		var playerUrlsJson = JSON.stringify(playerUrls); 

		$.post("https://mrouttroshambo.azurewebsites.net/api/GameEngine",
				playerUrlsJson,
				ShowGameEvents
		).fail(function(data, status){
			var jsonData = JSON.parse(data);
			alert("fail with data: " + jsonData + "\nStatus: " + status);
		});
	});

	function ShowGameEvents(gameEvents){
		for(var i in gameEvents)
		{
			$("#gameEvents").append('<li>' + gameEvents[i] + '</li>');
		}
	};

});