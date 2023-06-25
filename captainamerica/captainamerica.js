
function changeImage(anything){
	var background=document.getElementById('changebackground');
	background.style.backgroundImage=anything;
	background.style.backgroundSize="100% 100vh";
	background.style.backdropFilter="blur(5px)";
	console.log("click one");
}