var RegisterButton = document.getElementById("Register")
RegisterButton.addEventListener("click", GoToRegisterPage)

function GoToRegisterPage() {
    window.location.href = "/Home/RegisterPage"
}