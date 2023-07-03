function ImageChange(anyImage){
	var backgroundAll=document.getElementById('bg');
	backgroundAll.style.backgroundImage=anyImage;
	// backgroundAll.style.backgroundRepeated="no-repeated";
	backgroundAll.style.backgroundSize="cover";
	backgroundAll.style.backdropFilter="blur(1px)";
}
function PlayMovies(anylink){
	window.location.href=anylink;
}