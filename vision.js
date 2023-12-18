// Replaced Discovery View with World View, when appropriate
function setupWorldView() {
    if (primordialSightResearchCompleted) {
        var discoveryViewButton = document.getElementById('discoveryViewButton');
        if (discoveryViewButton) {
            discoveryViewButton.textContent = 'World View'; // Change the button text
            discoveryViewButton.onclick = function() { switchView('world'); }; // Change the onclick event
        }
    }
}


function makeWorldElementDraggable(container, canvases) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    container.addEventListener('mousedown', function(event) {
        isDragging = true;
        offsetX = event.clientX;
        offsetY = event.clientY;
    });

    document.addEventListener('mousemove', function(event) {
        if (!isDragging) return;
        let dx = event.clientX - offsetX;
        let dy = event.clientY - offsetY;
        offsetX = event.clientX;
        offsetY = event.clientY;

        canvases.forEach(canvas => {
            let style = window.getComputedStyle(canvas);
            let matrix = new DOMMatrix(style.transform);
            canvas.style.transform = `translate(${matrix.m41 + dx}px, ${matrix.m42 + dy}px)`;
        });
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
}


function initializeWorldView() {
    if (!initializeWorld) {
        const mapContainer = document.getElementById('mapcontainer');
        mapContainer?.remove();

        const backgroundCanvas = document.getElementById('backgroundCanvas');
        const cloud1Canvas = document.getElementById('cloud1Canvas');
        const cloud2Canvas = document.getElementById('cloud2Canvas');
        const wavesCanvas = document.getElementById('wavesCanvas');

        loadAndDrawImage('img/world_plain.png', backgroundCanvas.getContext('2d'), 0, 0);
        loadAndDrawImage('img/world_cloud1.png', cloud1Canvas.getContext('2d'), 0, 0);
        loadAndDrawImage('img/world_cloud2.png', cloud2Canvas.getContext('2d'), 0, 0);
        loadAndDrawImage('img/world_waves.png', wavesCanvas.getContext('2d'), 0, 0);

        makeWorldElementDraggable(document.getElementById('world'), [backgroundCanvas, cloud1Canvas, cloud2Canvas, wavesCanvas]);

        initializeWorld = true;
    }
}



function loadAndDrawImage(src, ctx, x, y) {
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, x, y);
    };
    img.onerror = function() {
        console.error('Error loading image:', src);
    };
    img.src = src;
}


function displayEndOfContentModal() {
    // Remove any existing modal
    var existingModal = document.getElementById('endOfContentModal');
    if (existingModal) {
        document.body.removeChild(existingModal);
    }

    // Create the modal container
    var endOfContentModal = document.createElement('div');
    endOfContentModal.id = 'endOfContentModal';
    endOfContentModal.className = 'modal';

    // Create the modal content container
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Add the title
    var title = document.createElement('h2');
    title.textContent = 'Welcome to the World View!';
    modalContent.appendChild(title);

    // Add message paragraphs
    var messages = [
        "As you step into the World View, a new chapter unfolds. Here, you are empowered to build a civilization, creating unique buildings and advancing in research, all guided by your evolution and soul choices. This journey is still being woven, with more content in active development. You've reached the end of what I've been able to develop so far.",
        "If you've enjoyed your experience and wish to support the ongoing creation of this world, please consider visiting my Patreon. Your support is the wind beneath the wings of this adventure, allowing continuous development and growth.",
        "A heartfelt thank you to all my Patreon supporters. Your generosity and encouragement are the pillars that uphold this dream. Without you, this game could not have reached the skies it soars in today.",
        "Every contribution, every word of support, is a step forward in this journey we share. Thank you for being a part of this world."
    ];

    messages.forEach(text => {
        var p = document.createElement('p');
        p.textContent = text;
        modalContent.appendChild(p);
    });

    // Add Patreon link
    var patreonLink = document.createElement('a');
    patreonLink.href = 'https://www.patreon.com/AminoIdle';
    patreonLink.textContent = 'Support on Patreon';
    patreonLink.className = 'patreonLink'; // Add a class for styling
    patreonLink.target = '_blank'; // Open in a new tab
    patreonLink.style.display = 'block'; // Ensure it's displayed as a block
    patreonLink.style.textAlign = 'center'; // Center the link
    patreonLink.style.marginTop = '20px'; // Add some top margin
    patreonLink.style.fontSize = '20px'; // Increase font size
    patreonLink.style.color = '#F96854'; // Use a color that stands out
    patreonLink.style.textDecoration = 'underline'; // Underline the text

    modalContent.appendChild(patreonLink);

    // Close button
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Got it!';
    closeButton.className = 'closeButton';
    closeButton.onclick = function() {
        endOfContentModal.style.display = 'none';
    };
    modalContent.appendChild(closeButton);

    endOfContentModal.appendChild(modalContent);
    document.body.appendChild(endOfContentModal);
    endOfContentModal.style.display = 'block';
}
