const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");

    const email = emailInput.value;
    const name = nameInput.value;

    if (email === "" || name === "") {
        alert("Fields are mandatory");
    } else {
        console.log(`email: ${email} name: ${name}`);
        // You can add additional code here to submit the form or perform other actions.
    }
});






