$("a").on('click' , b => {
	window.location.href = `/login.html`;
});

$("input").on('keyup' , c => {
	if (event.which == 13) {
		QueryString.k = $("input")[0].value;
		window.location.href = `/?k=${QueryString.k}`;
	}
});