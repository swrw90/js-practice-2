const scrubber = document.querySelector('.scrubber');
const marker = document.querySelector('.marker');
const scrubberItems = document.querySelectorAll('.scrubber-item');
const timeline = document.querySelector('.timeline');
const scrubberMenu = document.querySelector('.scrubber-menu');
const timelineLength = Math.floor(Math.random() * 100) + 1;
const mainVideo = document.querySelector('.main-video');
console.log(mainVideo)

timeline.addEventListener('click', positionScrubber);

function showScrubMenu() {
    if (scrubber.className === 'show-scrubber') {
        scrubberMenu.className = 'show-scrubber-menu';
        scrubberItems.className = 'show-scrubber-items';
        marker.className = 'show-marker';
    }
}

function positionScrubber(e) {
    e.preventDefault();
    scrubber.className = 'show-scrubber';
    setTimeout(() => (showScrubMenu()), 1000);
}
