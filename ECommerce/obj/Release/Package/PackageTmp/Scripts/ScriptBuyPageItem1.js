var ItemBuy = document.getElementById("BuyButton")
ItemBuy.addEventListener("click", Buy)
ItemBuy.addEventListener("mouseout", MouseOut)

function Buy() {
    window.location.href = "/Home/Bought"
}

function MouseOut() {
    document.body.style.cursor = 'default'
}