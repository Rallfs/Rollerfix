document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
    
    const userIcon = document.querySelector('.user-icon');
    if (userIcon) {
        userIcon.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Gallery functionality
    if (window.location.pathname.includes('galerija.html')) {
        const photos = [
            'pirms.png',
            'pec izp.jpg',
            'pirms rol.jpg',
            'pec rol.jpg',
            'nr1.jpg',
            'nr2.jpg',
            'nr3.jpg',
            'nr4.jpg',
            'nr5.jpg',
            'nr6.jpg',
            'youtube'
        ];
        
        let currentPhotoIndex = 0;
        const galleryImage = document.getElementById('galleryImage');
        const videoFrame = document.querySelector('iframe');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        function updatePhoto() {
            if (photos[currentPhotoIndex] === 'youtube') {
                galleryImage.style.display = 'none';
                videoFrame.style.display = 'block';
            } else {
                galleryImage.style.display = 'block';
                videoFrame.style.display = 'none';
                galleryImage.src = photos[currentPhotoIndex];
            }
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