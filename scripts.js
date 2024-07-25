document.addEventListener('DOMContentLoaded', function() {
    // Código JavaScript para interatividade, se necessário
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hitMagazineTitle = document.getElementById('hitMagazineTitle');
    const hitMagazineContent = document.getElementById('hitMagazineContent');

    hitMagazineTitle.addEventListener('click', () => {
        hitMagazineContent.classList.toggle('show');
    });
});
    