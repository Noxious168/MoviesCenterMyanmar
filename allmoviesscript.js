function PlayMovies(anylink){
	window.location.href=anylink;
}
function ImageChange(anyImage){
	var backgroundAll=document.getElementById('bgall');
	backgroundAll.style.backgroundImage=anyImage;
	backgroundAll.style.backgroundAttachment="fixed";
	backgroundAll.style.backgroundRepeated="no-repeated";
	backgroundAll.style.backgroundSize="cover";
	backgroundAll.style.backdropFilter="blur(5px)";
}