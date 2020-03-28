
let mySeconds;
let intervalHandle;

function resetPage(){
	document.getElementById("inputArea").style.display="none";	
	
}
function tick(){
	let timeDisplay=document.getElementById("time");
	let min=Math.floor(mySeconds/60);
	let sec=mySeconds-(min*60);
	
	if (sec < 10) {
		sec="0"+sec;
	}
	
	let message=min.toString()+":"+sec;
	
	timeDisplay.innerHTML=message;
    
    // send an alert when time runs out
	if(mySeconds===0){
		alert("Out Of Time!");
		clearInterval(intervalHandle);
		resetPage();
	}
	mySeconds--; // count down by one
}

function startCounter(){
	let myInput=document.getElementById("minutes").value;
	if (isNaN(myInput)){
		alert("Type a valid number please"); // sends message if user inputs a string
		return;
	}
    mySeconds=myInput; // if multiplied by 60 it will give minutes
    
	intervalHandle=setInterval(tick, 1000); // one second
	
	document.getElementById("inputArea").style.display="none";		
}

window.onload=function(){
	let myInput=document.createElement("input");
	myInput.setAttribute("type","text");
	myInput.setAttribute("id","minutes");
	
	let myButton=document.createElement("input");
	myButton.setAttribute("type","button");
	myButton.setAttribute("value","Start Timer");
	
	myButton.onclick=function(){
		startCounter();	
		
	}
	document.getElementById("inputArea").appendChild(myInput);
	document.getElementById("inputArea").appendChild(myButton);
	
	
}