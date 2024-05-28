function hamburger() {
	var x = document.getElementById("linkList");
	if (x.style.display === "flex") {
	  x.style.display = "none";
	} else {
	  x.style.display = "flex";
	}
  }

  function CVType(template) {
    // Get the source of the clicked image
    var imgSrc = event.target.parentNode.querySelector('.portSamp').src;

    // Store the image source in localStorage
    var portfolioImages = JSON.parse(localStorage.getItem('portfolioImages')) || [];
    portfolioImages.push(imgSrc);
    localStorage.setItem('portfolioImages', JSON.stringify(portfolioImages));

    // Redirect to the portfolio page
    window.location.href = 'portfolio.html';
}

document.addEventListener('DOMContentLoaded', function () {
    var portfolioImages = JSON.parse(localStorage.getItem('portfolioImages')) || [];
    var portfolioContainer = document.getElementById('portfolioContainer');

    // Loop through stored images and create <img> elements
    portfolioImages.forEach(function (imgSrc) {
        var img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'portfolio-image';
        portfolioContainer.appendChild(img);
    });
});