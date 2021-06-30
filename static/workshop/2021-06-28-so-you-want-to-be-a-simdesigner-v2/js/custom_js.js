	$(".card").setAttribute("data-tilt","");
<script type="text/javascript" src="vanilla-tilt.js"></script>
<script type="text/javascript">
	VanillaTilt.init(document.querySelector(".card"), {
		max: 25,
		speed: 400
	});

	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".card"));
</script>
