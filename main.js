import anime from 'animejs/lib/anime.es.js';

const animation = anime({
    targets: '.el',
    translateX: 250,
    rotate: 180,
    background: '#ff0',
    autoplay: false,
    duration: 10000
});

animation.play();