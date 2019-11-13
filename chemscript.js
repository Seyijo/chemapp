window.onload=()=>{
	const dropDown = document.getElementsByClassName("down");
	const btn1 =document.querySelector("#btn1");
	let i=0;
btn1.addEventListener("click",()=>{
	 for(let item of dropDown){
		 if(i%2===0)item.style.display="block";
		 else item.style.display="none";
 }
 i++;
});


		
		
	
}

