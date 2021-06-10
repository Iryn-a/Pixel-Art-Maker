// When size is submitted by the user, call makeGrid()
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeGrid(event) {

    removeAllChildNodes(document.getElementById("pixelCanvas"));
    
    // Select size input
    const _inputWidth = document.getElementById("inputWidth").value; 
    const _inputHeight = document.getElementById("inputHeight").value; 
    
    // Generate Table Grid 
    for (i = 0; i < _inputHeight; i++) {    

        var newTR = document.createElement("TR");
        newTR.setAttribute("id", 'myTr-' + i);
        document.getElementById("pixelCanvas").appendChild(newTR);
        
        for (j = 0; j < _inputWidth; j++) {
            var newTD = document.createElement("TD");
            newTD.setAttribute("onclick", "toggleColor(this)");
            document.getElementById('myTr-' + i).appendChild(newTD);               
        }
    }

    event.preventDefault();
}


function toggleColor(el) {
    // Select color input
    var _color = document.getElementById("colorPicker").value;
    el.style.backgroundColor = _color;
}


document.getElementById('sizePicker').addEventListener('submit',makeGrid); 