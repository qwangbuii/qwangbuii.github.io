document.addEventListener('DOMContentLoaded', (event) => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    noButton.addEventListener('click', (event) => {
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', (event) => {
        window.location.href = 'page-3.html';
    });
});