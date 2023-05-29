const btnHeader=document.querySelector('.btnheader');
const container=document.querySelector('.container');
const listAction=document.querySelector('.listaction');


btnHeader.addEventListener('click',()=>{
container.classList.add('active');
});
listAction.addEventListener('click',()=>{
	container.classList.remove('active');
});
