
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
       
        if (email === 'admin@rollerfix.com' && password === '123') {
            alert('Jūs esat veiksmīgi pieslēdzies!');
            window.location.href = 'index.html';
        } else {
            alert('Nepareizs e-pasts vai parole!');
        }
    });
});
