dragElement(document.getElementById('map')); //Перемещение "как по карте". Украдено из интернета.

function dragElement(el) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(el.id + "header")) {
        document.getElementById(el.id + "header").onmousedown = dragMouseDown;
    } else {
        el.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        console.log(e);
        console.log("drag");
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag; 
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        console.log("close");
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function closeWindow(e) {
    console.log(e);
    var svgObject = document.getElementById('svg4');
    for (i = 0; i < e.length; i++)
        svgObject.getElementById(e[i]).style.visibility = "hidden";
}