var ItemBuy = document.getElementById("BuyButton")
ItemBuy.addEventListener("click", Buy)
ItemBuy.addEventListener("mouseenter", MouseIn)
ItemBuy.addEventListener("mouseout", MouseOut)

function Buy() {
    window.location.href = "/Home/Login"
}

function MouseIn() {
    document.body.style.cursor = 'pointer'
}

function MouseOut() {
    document.body.style.cursor = 'default'
}