var div1 = document.getElementById("Item1")
div1.addEventListener("click", Buy)
div1.addEventListener("mouseenter", MouseIn)
div1.addEventListener("mouseout", MouseOut)

var div2 = document.getElementById("Item2")
div2.addEventListener("click", Buy)
div2.addEventListener("mouseenter", MouseIn)
div2.addEventListener("mouseout", MouseOut)

function Buy() {
    window.alert("Open page to buy")
}

function MouseIn() {
    document.body.style.cursor = 'pointer'
}

function MouseOut() {
    document.body.style.cursor = 'default'
}