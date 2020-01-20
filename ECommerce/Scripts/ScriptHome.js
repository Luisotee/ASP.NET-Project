var div1 = document.getElementById("Item1")
div1.addEventListener("click", BuyItem1)
div1.addEventListener("mouseenter", MouseIn)
div1.addEventListener("mouseout", MouseOut)

var div2 = document.getElementById("Item2")
div2.addEventListener("click", BuyItem2)
div2.addEventListener("mouseenter", MouseIn)
div2.addEventListener("mouseout", MouseOut)

function BuyItem1() {
    window.location.href = "/Home/BuyPageNote"
}

function BuyItem2() {
    window.location.href = "/Home/BuyPageCell"
}

function MouseIn() {
    document.body.style.cursor = 'pointer'
}

function MouseOut() {
    document.body.style.cursor = 'default'
}