$(document).ready(function() {

	$("#form-contact").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Ваша заявка будет рассмотрена в ближайшее время!");
			$("#form").trigger("reset");
		});
		return false;
	});

});
