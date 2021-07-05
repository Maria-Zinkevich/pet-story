// Map zooming

const ZOOM_IN_BUTTON = document.getElementById('zoom-in');
const ZOOM_OUT_BUTTON = document.getElementById('zoom-out');
const MAP = document.querySelector('.map');
const ZOOM_STEP = 0.1;
let zoom = 1;

ZOOM_IN_BUTTON.addEventListener('click', function(){
    zoom += ZOOM_STEP; 
    MAP.style.transform = `scale(${zoom})`;
});

ZOOM_OUT_BUTTON.addEventListener('click', function() {
    zoom -= ZOOM_STEP;
    MAP.style.transform = `scale(${zoom})`;
});

// Map moving

const MAP_CONTAINER = document.querySelector('.map__container');
const HEADER = document.querySelector('.header');
const FOOTER = document.querySelector('.footer');

MAP_CONTAINER.addEventListener('mousedown', function(event) {
    let shiftX = event.clientX - MAP_CONTAINER.getBoundingClientRect().left;
    let shiftY = event.clientY - MAP_CONTAINER.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        MAP_CONTAINER.style.left = pageX - shiftX + 'px';
        MAP_CONTAINER.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        if (event.pageX >= MAP.getBoundingClientRect().width || event.pageX <= 0) {
            document.removeEventListener('mousemove', onMouseMove);
        }

        FOOTER.addEventListener('mouseenter', function() {
            document.removeEventListener('mousemove', onMouseMove);
        });

        HEADER.addEventListener('mouseenter', function() {
            document.removeEventListener('mousemove', onMouseMove);
        });
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
    });
});



