// Elemen container untuk bintang
const starsContainer = document.querySelector('.stars');

// Fungsi untuk menghasilkan bintang secara acak
function createStars() {
    for (let i = 0; i < 500; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        starsContainer.appendChild(star);
    }
}

// Gerakan bintang mengikuti mouse
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const speed = Math.random() * 0.5; // Kecepatan gerakan acak
        const x = ((window.innerWidth / 2) - e.clientX) * speed;
        const y = ((window.innerHeight / 2) - e.clientY) * speed;

        star.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Panggil fungsi untuk membuat bintang
createStars();
