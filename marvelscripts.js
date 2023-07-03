const ironMan=document.getElementById('ironman');
const captainAmerica=document.getElementById('captainAmerica');
const hulk=document.getElementById('hulk');
const doctorStrange=document.getElementById('doctorStrange');
const spiderMan=document.getElementById('spiderMan');
const thor=document.getElementById('thor');
const antMan=document.getElementById('antMan');
const wakanda=document.getElementById('wakanda');
const captainMarvel=document.getElementById('captainMarvel');
const ghostRider=document.getElementById('ghostRider');
const guardians=document.getElementById('guardians');
const series=document.getElementById('series');
const allMoviesBtn=document.getElementById('all_movies');

allMoviesBtn.addEventListener("click",()=>{
	window.location.href="all_movies_list.html";
});
ironMan.addEventListener("click",()=>{
	window.location.href="ironman/ironman.html";
});
captainAmerica.addEventListener("click",()=>{
	window.location.href="captainamerica/captainamerica.html";
});
spiderMan.addEventListener("click",()=>{
	window.location.href="spiderman/spiderman.html";
});
hulk.addEventListener("click",()=>{
	window.location.href="hulk/hulk.html";
});
doctorStrange.addEventListener("click",()=>{
	window.location.href="doctorstrange/doctorstrange.html";
});
thor.addEventListener("click",()=>{
	window.location.href="thor/thor.html";
});
antMan.addEventListener("click",()=>{
	window.location.href="antman/antman.html";
});
wakanda.addEventListener("click",()=>{
	window.location.href="wakanda/wakanda.html";
});
captainMarvel.addEventListener("click",()=>{
	window.location.href="captainmarvel/captainmarvel.html";
});
ghostRider.addEventListener("click",()=>{
	window.location.href="ghostrider/ghostrider.html";
});
guardians.addEventListener("click",()=>{
	window.location.href="guardians/guardians.html";
});
series.addEventListener("click",()=>{
	window.location.href="series/series.html";
});
function PlayMoviesXMen(anyLinkForPlay){
	window.location.href=anyLinkForPlay;
}