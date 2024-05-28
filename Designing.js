function hamburger() {
	var x = document.getElementById("linkList");
	if (x.style.display === "flex") {
	  x.style.display = "none";
	} else {
	  x.style.display = "flex";
    }
}
function showInForm() {
	var cvC = document.getElementById("cv-container");
	if (cvC.style.display === "block") {
	  cvC.style.display = "none";
	} else {
	  cvC.style.display = "block";
	}
}