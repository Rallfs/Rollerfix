document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    // Example: Add hover effect to news boxes dynamically
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