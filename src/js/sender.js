$(document).ready(function() {

	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail2.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {				
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
