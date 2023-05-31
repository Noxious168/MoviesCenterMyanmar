function left_scroll(){
	var left=document.querySelector(".scroll-images");
	left.scrollBy(-350,0);
}
function right_scroll(){
	var right=document.querySelector(".scroll-images");
	right.scrollBy(350,0);
}
function changeImage(anything){
	var background=document.getElementById('changebackground');
	background.style.backgroundImage=anything;
	background.style.backgroundSize="100% 100vh";
	background.style.backdropFilter="blur(5px)";
}