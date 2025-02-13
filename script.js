// Wait for 2 seconds, then fade out the loading screen and show the main content
setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
  
    // Fade out the loading screen
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 2s ease';
  
    // After the fade-out, hide the loading screen and show the main content
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1000); // Wait for the fade-out transition to complete
    }, 2000); // Wait for 2 seconds before starting the fade-out
  
    // Redirect to index.html when the button is clicked
    document.getElementById('begin-button').addEventListener('click', () => {
        window.location.href = 'index-fake.html';
});
