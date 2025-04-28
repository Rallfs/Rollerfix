document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    // Gallery functionality
    if (window.location.pathname.includes('galerija.html')) {
        const photos = [
            'photo1.jpg',
            'photo2.jpg',
            'photo3.jpg',
            'photo4.jpg',
            'photo5.jpg',
            'photo6.jpg',
            'photo7.jpg',
            'photo8.jpg',
            'photo9.jpg',
            'photo10.jpg'
        ];
        
        let currentPhotoIndex = 0;
        const galleryImage = document.getElementById('galleryImage');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        function updatePhoto() {
            galleryImage.src = photos[currentPhotoIndex];
        }

        prevBtn.addEventListener('click', () => {
            currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
            updatePhoto();
        });

        nextBtn.addEventListener('click', () => {
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            updatePhoto();
        });
    }

    // News boxes hover effect
    let newsBoxes = document.querySelectorAll(".news-box");
    newsBoxes.forEach(box => {
        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        });
        box.addEventListener("mouseout", function() {
            box.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        });
    });
});