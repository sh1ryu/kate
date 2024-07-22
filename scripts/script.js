function showImage(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightbox.style.display = 'block';
    lightboxImage.src = element.querySelector('img').src;
}

function hideLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}