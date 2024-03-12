// Function Toggle Button
document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var navbar = document.getElementById('navbar');

    toggleBtn.addEventListener('click', function () {
        // Toggle display property of the navbar
        navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
    });

    document.addEventListener('click', function () {
        // Check if click event occurs outside the navbar
        if (!navbar.contains(event.target) && event.target !== toggleBtn) {
            navbar.style.display = 'none';
        }
    });
});



// Function Aside Scroll
const aside = document.getElementById('aside');

function updateAsidePosition(){
    if(window.scrollY > 0){
        aside.style.transition = 'top 1s';
        aside.style.top = '20px';
    } else {
        aside.style.transition = 'top 1s';
        aside.style.top = 'inherit';
    }
};
function animate(){
    updateAsidePosition();
    requestAnimationFrame(animate);
};
animate();