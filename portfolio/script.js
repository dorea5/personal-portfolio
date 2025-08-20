// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const close = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = img.src;
            modalImage.alt = img.alt;
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer le modal en cliquant en dehors de l'image
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});