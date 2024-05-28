function hamburger() {
	var x = document.getElementById("linkList");
	if (x.style.display === "flex") {
	  x.style.display = "none";
	} else {
	  x.style.display = "flex";
	}
}
let uploadedImageData; // Declare a variable to store the image data

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const imagePreview = document.getElementById('photo-preview');
    imagePreview.style.backgroundImage = `url(${reader.result})`;
    uploadedImageData = reader.result; // Store the image data in the variable
  }

  if (file) {
    reader.readAsDataURL(file);
  }
}
// localstorage user input memory
function saveInputToLocalStorage() {
	const name = document.getElementById('name-input').value;
  	const about = document.getElementById('about-me-input').value;
	const email = document.getElementById('email-input').value;
	const phone = document.getElementById('phone-input').value;
	const degree = document.getElementById('degree-input').value;
	const uni = document.getElementById('university-input').value;
	const year = document.getElementById('year-input').value;
	const pos = document.getElementById('position-input').value;
	const co = document.getElementById('company-input').value;
	const dur = document.getElementById('duration-input').value;
	const desc = document.getElementById('description-input').value;
  	const skill1 = document.getElementById('skill1-input').value;
  	const skill2 = document.getElementById('skill2-input').value;
  	const skill3 = document.getElementById('skill3-input').value;
	
	// creates inputs and stores in local storage
	localStorage.setItem('cv_name', name);
  	localStorage.setItem('cv_about', about);
	localStorage.setItem('cv_email', email);
	localStorage.setItem('cv_phone', phone);
	localStorage.setItem('cv_degree', degree);
	localStorage.setItem('cv_uni', uni);
	localStorage.setItem('cv_year', year);
	localStorage.setItem('cv_pos', pos);
	localStorage.setItem('cv_co', co);
	localStorage.setItem('cv_dur', dur);
	localStorage.setItem('cv_desc', desc);
  	localStorage.setItem('cv_skill1', skill1);
  	localStorage.setItem('cv_skill2', skill2);
  	localStorage.setItem('cv_skill3', skill3);
}

// gets previous user input
function loadInputFromLocalStorage() {
	const name = localStorage.getItem('cv_name');
  	const about = localStorage.getItem('cv_about');
	const email = localStorage.getItem('cv_email');
	const phone = localStorage.getItem('cv_phone');
	const degree = localStorage.getItem('cv_degree');
	const uni = localStorage.getItem('cv_uni');
	const year = localStorage.getItem('cv_year');
	const pos = localStorage.getItem('cv_pos');
	const co = localStorage.getItem('cv_co');
	const dur = localStorage.getItem('cv_dur');
	const desc = localStorage.getItem('cv_desc');
  	const skill1 = localStorage.getItem('cv_skill1');
  	const skill2 = localStorage.getItem('cv_skill2');
  	const skill3 = localStorage.getItem('cv_skill3');
	
	// populate fields
	document.getElementById('name-input').value = name || '';
  	document.getElementById('about-me-input').value = about || '';
	document.getElementById('email-input').value = email || '';
	document.getElementById('phone-input').value = phone || '';
	document.getElementById('degree-input').value = degree || '';
	document.getElementById('university-input').value = uni || '';
	document.getElementById('year-input').value = year || '';
	document.getElementById('position-input').value = pos || '';
	document.getElementById('company-input').value = co || '';
	document.getElementById('duration-input').value = dur || '';
	document.getElementById('description-input').value = desc || '';
  	document.getElementById('skill1-input').value = skill1 || '';
  	document.getElementById('skill2-input').value = skill2 || '';
  	document.getElementById('skill3-input').value = skill3 || '';
}
window.onload = function() {
	loadInputFromLocalStorage();
};

// updates input using eventlistener pag nagbago input
document.getElementById('name-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('about-me-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('email-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('phone-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('degree-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('university-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('year-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('position-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('company-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('duration-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('description-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('skill1-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('skill2-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('skill3-input').addEventListener('input', saveInputToLocalStorage);


function setTranslate(x, y) {
	container.style.transform = `translate(${x}px, ${y}px)`;
}

// meaty download function
async function downloadCV() {
const name = document.getElementById('name-input').value;
const about = document.getElementById('about-me-input').value;
const email = document.getElementById('email-input').value;
const phone = document.getElementById('phone-input').value;
const degree = document.getElementById('degree-input').value;
const university = document.getElementById('university-input').value;
const year = document.getElementById('year-input').value;
const position = document.getElementById('position-input').value;
const company = document.getElementById('company-input').value;
const duration = document.getElementById('duration-input').value;
const description = document.getElementById('description-input').value;
const skill1 = document.getElementById('skill1-input').value;
const skill2 = document.getElementById('skill2-input').value;
const skill3 = document.getElementById('skill3-input').value;
const photo = document.getElementById('photo-preview').src;

const doc = new jsPDF();

// font size and style edit willy nilly
doc.setFontSize(12);
doc.setFont('helvetica', 'normal');
doc.setTextColor(0, 0,  0);
doc.setFillColor(244, 237, 237); // Set the fill color (Turquoise in this example)
doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');
// shapes
// vertical
doc.setFillColor(84, 79, 78);
doc.setDrawColor(0);
doc.rect(0, 0, 90, doc.internal.pageSize.getHeight(), 'F');

// inserts image pwede iadjust for realignment and stuff
if (uploadedImageData) {
	const imgData = await getImageData(uploadedImageData);
	doc.addImage(imgData, 'JPEG', 10, 10, 70, 70);
}

// name mali ata pagkakaformat q pero its easily adjustable
doc.setFontSize(35);
doc.setFontStyle('bold');
doc.text(name, 100, 35, 0, 0);
doc.setFontSize(24);
doc.text('Personal Information', 110, 50);
doc.setFontStyle('bold');
doc.setFontSize(24);
doc.text('Education', 110, 105);
doc.setFontSize(18);
doc.setFontStyle('normal');
doc.text(`${degree}`, 120, 120);
doc.text(`${university}`, 120, 135);
doc.text(`${year}`, 120, 150);
doc.setFontStyle('bold');
doc.setFontSize(24);
doc.text('Experience', 110, 175);
doc.setFontSize(18);
doc.setFontStyle('normal');
doc.text(`${position}`, 120, 190);
doc.text(`${company}`, 120, 205);
doc.text(`${duration}`, 120, 220);
doc.setFontSize(24);
doc.setTextColor(255, 255, 255);
doc.setFontStyle('bold');
doc.text('Skills', 15, 105);
doc.setFontSize(18);
doc.setFontStyle('normal');
doc.text(`${skill1}`, 25, 120);
doc.text(`${skill2}`, 25, 135);
doc.text(`${skill3}`, 25, 150);
doc.setFontSize(24);
doc.setFontStyle('bold');
doc.text('Contact', 15, 175);
doc.setFontSize(18);
doc.setFontStyle('normal');
doc.text(`Email:`, 25, 190);
doc.text(`${email}`, 25, 205);
doc.text(`Phone Number:`, 25, 225);
doc.text(`${phone}`, 25, 240);
doc.setTextColor(0, 0, 0);
doc.setFontSize(14);
doc.setFontStyle('bold');
doc.setFontSize(24);
doc.text('Additional Information', 110, 240);
doc.text('and Achievments', 110, 250);
doc.setFontSize(16);
doc.setFontStyle('normal')
var textLines = doc.splitTextToSize(about, 80);
var lineHeight = 5;
var y = 60;
for (var i = 0; i < textLines.length; i++) {
	doc.text(120, y, textLines[i]);
	y += lineHeight;
}
var textLines = doc.splitTextToSize(description, 80);
var lineHeight = 5;
var y = 265;
for (var i = 0; i < textLines.length; i++) {
	doc.text(110, y, textLines[i]);
	y += lineHeight;
}

doc.save('Curriculum Vitae.pdf');
}
// for embedded images lng i2
function getImageData(url) {
return new Promise((resolve, reject) => {
	const img = new Image();
	img.crossOrigin = 'Anonymous';
	img.onload = function() {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		canvas.width = this.width;
		canvas.height = this.height;
		ctx.drawImage(this, 0, 0);
		const dataURL = canvas.toDataURL('image/jpeg');
		resolve(dataURL);
	};
	img.onerror = function(error) {
		reject(error);
	};
	img.src = url;
});
}