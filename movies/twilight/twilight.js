function ImageChange(anything){
	const Body=document.getElementById('body');
	Body.style.backgroundImage=anything;
	Body.style.backgroundSize="cover";
	Body.style.backdropFilter="2px";
}
function PlayMovies(anyLinks){
	window.location.href=anyLinks;
}