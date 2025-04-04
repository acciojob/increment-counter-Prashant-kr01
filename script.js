//your JS code here. If required.
let count = 0;
document.getElementById("btn").addEventListener("click", function(){
	alert("Previous count: " + count);
	count++;
	document.getElementById("counter").textContent = count;
});