function ImageChange(anyimage){
	const Body=document.getElementById('body');
	Body.style.backgroundImage=anyimage;
	Body.style.backgroundSize="cover";
	Body.style.backgroundRepeated="no-repead";
	Body.style.backdropFilter="5px";
}
function PlayMovies(anylinks){
window.location.href=anylinks;
}