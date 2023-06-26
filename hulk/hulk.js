function ImageChange(any){
	var background=document.getElementById('bghulk');
	background.style.backgroundImage=any;
	background.style.backgroundSize="100% 100vh";
	background.style.backdropFilter="blur(5px)";
}