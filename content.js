// Assume getYoutubeShortsVideoId() remains unchanged

function createRedirectLink(videoId) {
    const targetElement = document.querySelector('ytd-shorts.style-scope');

    if (!targetElement) {
        console.warn('Target element not found.');
        return;
    }

    targetElement.style.position = 'relative';

    let redirectLink = document.getElementById('youtube-redirect-link');
    if (!redirectLink) {
        redirectLink = document.createElement('a');
        redirectLink.id = 'youtube-redirect-link';
        redirectLink.innerText = 'Go to Watch Page';
        redirectLink.className = 'youtube-redirect-link'; // Use class for styling
        targetElement.insertBefore(redirectLink, targetElement.firstChild);
    }
    
    redirectLink.href = `https://www.youtube.com/watch/${videoId}`;
}

const currentUrl = window.location.href;
const videoId = getYoutubeShortsVideoId(currentUrl);

if (videoId) {
    createRedirectLink(videoId);
}
