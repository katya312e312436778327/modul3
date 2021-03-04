var hippo_completed = false;
var kapusta_completed = false;
var chill_mouse_clicked = false;

var kapusta_clicked = 0;

dragElement(document.getElementById('map')); //Перемещение "как по карте". Украдено из интернета.

function dragElement(el) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(el.id + "header")) {
        document.getElementById(el.id + "header").onmousedown = dragMouseDown;
    } else {
        el.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
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
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function closeWindow(e) {
    document.getElementById(e).style.visibility = "hidden";
}

function show(e) {
    document.getElementById(e).style.visibility = "visible";
}

function hover(e, d){
    // console.log(e,d);
    document.getElementById(e).style.visibility = d == 1 ? "visible" : "hidden"; 
    // console.log(document.getElementById(e).style.visibility);
    // console.log(document.getElementById(e));
}

function hippo() { //Бегемот, показать конфеты и окрасить в другой цвет
    console.log(hippo_completed);
    if (!hippo_completed) {
        show('windowY');
        var bucket = document.getElementById('bucket');
        bucket.classList.add('button');
        bucket.onclick = ()=>{
            show('candy');
            show('color0');
            show('color1');
            // closeWindow('color3');
            closeWindow('windowY');
            hippo_completed = true;
            bucket.onclick = null;
            bucket.classList.remove('button');
            unclickable('animal12');
        }
    }
}



function kapusta() {
    if (!kapusta_completed) {
        show('window1');
        for (let i = 1; i <=5; ++i) {
            let el = document.getElementById(`kap${i}`);
            el.classList.add('button');
            el.onclick = ()=>{
                kapusta_clicked++;
                closeWindow(`kap${i}`);
                if (kapusta_clicked == 5) {
                    kapusta_completed = true;
                    closeWindow('window1');
                    unclickable('animal0');
                }
            }
        }
    }
}

function unclickable(id) {
    let e = document.getElementById(id);
    e.onmouseover = null;
    e.classList.remove('button');
}

function mouse() {
    if (!chill_mouse_clicked) {
        show('window8');
        document.getElementById('rect330').onclick = ()=>{
            closeWindow('window8');
            chill_mouse_clicked = true;
            unclickable('animal4');
        }
    }
}