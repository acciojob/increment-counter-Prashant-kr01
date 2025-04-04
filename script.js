//your JS code here. If required.
let counter = 0;
document.getElementById("incrementBtn").addEventListener("click", function(){
	alert("" + counter);
	counter++;
	document.getElementById("counter").textContent = counter;
});