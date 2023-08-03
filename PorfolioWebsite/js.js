const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");

    const email = emailInput.value;
    const name = nameInput.value;

    console.log(`email: ${email} name: ${name}`);
});






