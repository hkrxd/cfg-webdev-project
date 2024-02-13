const map = document.getElementById('map');
const pointHolder = document.getElementById('points');

const pins = [{
    name: 'London',
    page: 'london.html',
    x: 0.81,
    y: 0.80,
}, {
    name: 'South East',
    page: 'southeast.html',
    x: 0.76,
    y: 0.83,
}, {
    name: 'Midlands',
    page: 'midlands.html',
    x: 0.73,
    y: 0.65,
}, {
    name: 'Yorks/Humber',
    page: 'yorkhum.html',
    x: 0.73,
    y: 0.54,
},{
    name: 'Scotland',
    page: 'scotland.html',
    x: 0.60,
    y: 0.30,
}];

const pinElements = [];

for (let i = 0; i < pins.length; i++) {
    const pin = document.createElement('div'); // <div></div>
    pin.className = "pin";  // <div class="pin"></div>

    // change the page when we click the pin
    pin.onclick = function() {
        location.href = pins[i].page;
    }

    /**
     * <div class="points">
     *     <div class="pin"></div>
     * </div>
     */
    pointHolder.appendChild(pin);

    const dot = document.createElement('div'); // <div></div>
    dot.className = "pin-dot"; // <div class="pin-dot"></div>

    /**
     * <div class="points">
     *     <div class="pin">
     *         <div class="pin-dot"></div>
     *     </div>
     * </div>
     */
    pin.appendChild(dot);

    pinElements.push(pin);
}

// pin position on screen
setInterval(function() {
    const viewBounds = document.documentElement.getBoundingClientRect();
    const mapBounds = map.getBoundingClientRect();
    const left = mapBounds.left - viewBounds.left;
    const top = mapBounds.top - viewBounds.top;
    const scale = (mapBounds.width / 600);
    for (let i = 0; i < pinElements.length; i++) {
        const pinBounds = pinElements[i].getBoundingClientRect();   
        pinElements[i].style.left = (left + mapBounds.width * pins[i].x - 0.5 * pinBounds.width / scale) + "px";
        pinElements[i].style.top = (top + mapBounds.height * pins[i].y - 0.5 * pinBounds.height / scale) + "px";
        pinElements[i].style.transform = 'scale(' + scale  + ')';
    }
});
