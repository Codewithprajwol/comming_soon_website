//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "May 26, 2026 14:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	