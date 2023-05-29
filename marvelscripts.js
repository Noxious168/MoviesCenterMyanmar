var bodySpan=document.querySelector('.bodymovies');
var itemselect=document.querySelectorAll('.xmanitems');
const titleright=document.querySelector('.titleright');
const bodyview=document.querySelector('.bodyview')
/*
itemselect.addEventListener('click',()=>{
	bodyview.classList.add('active');
});*/

itemselect.forEcah((items)=>{
	items.addEventListener('click',(e)=>{
		bodyview.classList.add('active');
		bodySpan.style.setProperty('img',"image/hulk.jpg");
	})
})
