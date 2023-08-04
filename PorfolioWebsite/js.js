const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const textareaInput = document.getElementById("textBox");

    const email = emailInput.value;
    const name = nameInput.value;
    const textarea = textareaInput.value;

    const errorMessage = document.getElementById("error-message");
    if (!email || !name || !textarea) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        console.log(`email: ${email} name: ${name} textarea: ${textarea}`);
    }
});






