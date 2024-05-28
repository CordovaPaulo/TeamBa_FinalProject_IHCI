var current_slider_img = document.querySelector('.slider-img');
var next_slider_img = document.createElement('img');
next_slider_img.className = 'slider-img';
var template = document.getElementById('tryTemp');
var images = ['A.png', 'D.png', 'C.png'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    setImg('left');
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    setImg('right');
}

function setImg(direction) {
    let currentImgPath = "images/" + images[i];
    let nextImgPath = "images/" + images[(i + 1) % images.length]; // Next image path

    current_slider_img.src = currentImgPath;
    next_slider_img.src = nextImgPath;

    // Handle animation for current image
    if (direction === 'right') {
        current_slider_img.classList.add('slide-in-left');
        current_slider_img.addEventListener('animationend', function () {
            current_slider_img.classList.remove('slide-in-left');
        }, { once: true });
    } else if (direction === 'left') {
        current_slider_img.classList.add('slide-in-right');
        current_slider_img.addEventListener('animationend', function () {
            current_slider_img.classList.remove('slide-in-right');
        }, { once: true });
    }

    // Handle animation for next image
    next_slider_img.classList.add('slide-in-right');
    next_slider_img.addEventListener('animationend', function () {
        next_slider_img.classList.remove('slide-in-right');
        current_slider_img.src = nextImgPath; // Move next image to current position after animation
    }, { once: true });
}

function hamburger() {
    var x = document.getElementById("linkList");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function openTemplate() {
    setTemplate();
    template.click();  // Trigger a click event to open the template
}

function setTemplate() {
    let currentImgSrc = current_slider_img.src;
    if (currentImgSrc.includes('A.png')) {
        template.setAttribute('href', "template_j.html");
    } else if (currentImgSrc.includes('D.png')) {
        template.setAttribute('href', "template_m.html");
    } else if (currentImgSrc.includes('C.png')) {
        template.setAttribute('href', "template_l.html");
    }
}
