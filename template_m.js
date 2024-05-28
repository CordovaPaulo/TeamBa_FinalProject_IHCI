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
	const email = document.getElementById('email-input').value;
	const phone = document.getElementById('phone-input').value;
	const degree = document.getElementById('degree-input').value;
	const uni = document.getElementById('university-input').value;
	const year = document.getElementById('year-input').value;
	const pos = document.getElementById('position-input').value;
	const co = document.getElementById('company-input').value;
	const dur = document.getElementById('duration-input').value;
	const desc = document.getElementById('description-input').value;
	
	// creates inputs and stores in local storage
	localStorage.setItem('cv_name', name);
	localStorage.setItem('cv_email', email);
	localStorage.setItem('cv_phone', phone);
	localStorage.setItem('cv_degree', degree);
	localStorage.setItem('cv_uni', uni);
	localStorage.setItem('cv_year', year);
	localStorage.setItem('cv_pos', pos);
	localStorage.setItem('cv_co', co);
	localStorage.setItem('cv_dur', dur);
	localStorage.setItem('cv_desc', desc);
}

// gets previous user input
function loadInputFromLocalStorage() {
	const name = localStorage.getItem('cv_name');
	const email = localStorage.getItem('cv_email');
	const phone = localStorage.getItem('cv_phone');
	const degree = localStorage.getItem('cv_degree');
	const uni = localStorage.getItem('cv_uni');
	const year = localStorage.getItem('cv_year');
	const pos = localStorage.getItem('cv_pos');
	const co = localStorage.getItem('cv_co');
	const dur = localStorage.getItem('cv_dur');
	const desc = localStorage.getItem('cv_desc');
	
	// populate fields
	document.getElementById('name-input').value = name || '';
	document.getElementById('email-input').value = email || '';
	document.getElementById('phone-input').value = phone || '';
	document.getElementById('degree-input').value = degree || '';
	document.getElementById('university-input').value = uni || '';
	document.getElementById('year-input').value = year || '';
	document.getElementById('position-input').value = pos || '';
	document.getElementById('company-input').value = co || '';
	document.getElementById('duration-input').value = dur || '';
	document.getElementById('description-input').value = desc || '';
}
window.onload = function() {
	loadInputFromLocalStorage();
};

// updates input using eventlistener pag nagbago input
document.getElementById('name-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('email-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('phone-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('degree-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('university-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('year-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('position-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('company-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('duration-input').addEventListener('input', saveInputToLocalStorage);
document.getElementById('description-input').addEventListener('input', saveInputToLocalStorage);


function setTranslate(x, y) {
	container.style.transform = `translate(${x}px, ${y}px)`;
}

// meaty download function
async function downloadCV() {
const name = document.getElementById('name-input').value;
const email = document.getElementById('email-input').value;
const phone = document.getElementById('phone-input').value;
const degree = document.getElementById('degree-input').value;
const university = document.getElementById('university-input').value;
const year = document.getElementById('year-input').value;
const position = document.getElementById('position-input').value;
const company = document.getElementById('company-input').value;
const duration = document.getElementById('duration-input').value;
const description = document.getElementById('description-input').value;
const photo = document.getElementById('photo-preview').src;

const doc = new jsPDF();

// font size and style edit willy nilly
doc.setFontSize(12);
doc.setFont('helvetica', 'normal');
doc.setTextColor(255, 255, 255);
doc.setFillColor(76, 100, 68); // Set the fill color (Turquoise in this example)
doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');
// shapes
// vertical
doc.setFillColor(16, 40, 32);
doc.setDrawColor(0);
doc.rect(0, 0, 35, doc.internal.pageSize.getHeight(), 'F');
// horizontal
doc.setFillColor(76, 100, 68);
doc.setDrawColor(0);
doc.rect(0, 7.5, doc.internal.pageSize.getWidth(), 35, 'F');


// inserts image pwede iadjust for realignment and stuff
if (uploadedImageData) {
	const imgData = await getImageData(uploadedImageData);
	doc.addImage(imgData, 'JPEG', 2.5, 10, 30, 30);
}

// name mali ata pagkakaformat q pero its easily adjustable
doc.setFontSize(16);
doc.setFontStyle('bold');
doc.text(name, 40, 20);
doc.setFontSize(12);
doc.text('Personal Information', 40, 30);
doc.setFontStyle('normal');
doc.text(`Email: ${email}`, 40, 50);
doc.text(`Phone: ${phone}`, 40, 60);
doc.setFontStyle('bold');
doc.text('Education', 40, 80);
doc.setFontStyle('normal');
doc.text(`${degree}`, 50, 90);
doc.text(`${university}`, 50, 100);
doc.text(`${year}`, 50, 110);
doc.setFontStyle('bold');
doc.text('Experience', 40, 130);
doc.setFontStyle('normal');
doc.text(`${position}`, 50, 140);
doc.text(`${company}`, 50, 150);
doc.text(`${duration}`, 50, 160);
// description loop to print na naka paragraph
var textLines = doc.splitTextToSize(description, 155);
var lineHeight = 10;
var y = 170;
for (var i = 0; i < textLines.length; i++) {
	doc.text(50, y, textLines[i]);
	y += lineHeight;
}

doc.save('CV-Template-A.pdf');
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