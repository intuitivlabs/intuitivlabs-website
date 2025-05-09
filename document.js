document.addEventListener('DOMContentLoaded', function() {
    const desktopImage = document.getElementById('desktopImage');
    const mobileImage = document.getElementById('mobileImage');
    
    // Handle image loading errors
    desktopImage.addEventListener('error', function() {
        console.error('Error loading desktop image');
    });
    
    mobileImage.addEventListener('error', function() {
        console.error('Error loading mobile image');
    });
});
