function ImageChange(anyImage){
	var backgroundAll=document.getElementById('bgironman');
	backgroundAll.style.backgroundImage=anyImage;
	backgroundAll.style.backgroundSize="cover";
	backgroundAll.style.width="100%";
	backgroundAll.style.minHeight="100vh";
	backgroundAll.style.backdropFilter="blur(5px)";
}