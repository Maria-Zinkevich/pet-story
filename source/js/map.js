// Map zoom

let zoomInButton = document.getElementById('zoom-in');
let zoomOutButton = document.getElementById('zoom-out');
let map = document.querySelector('.map');
let zoom = 1;
let zoomStep = 0.1;

zoomInButton.addEventListener('click', function(){
    zoom += zoomStep; 
    map.style.transform = `scale(${zoom})`;
});

zoomOutButton.addEventListener('click', function() {
    zoom -= zoomStep;
    map.style.transform = `scale(${zoom})`;
});




