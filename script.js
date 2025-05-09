document.addEventListener('DOMContentLoaded', function() {
    const desktopImage = document.getElementById('desktopImage');
    const mobileImage = document.getElementById('mobileImage');
    
    // Make sure images load properly
    desktopImage.addEventListener('error', function() {
        console.error('Error loading desktop image');
        this.src = 'fallback-desktop.jpg'; // Optional: provide a fallback image
    });
    
    mobileImage.addEventListener('error', function() {
        console.error('Error loading mobile image');
        this.src = 'fallback-mobile.jpg'; // Optional: provide a fallback image
    });
});
