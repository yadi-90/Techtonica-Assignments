let button = document.getElementById("submit");
button.addEventListener("click", (event) => {
  event.preventDefault();
    //validation
  // let userput=username = document.getElementId('username')
  //userInput.setAttribute('required', 'required')
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value
    //console.log(username);
  //console.log(email);
//const firstErrorDiv = document.getElementByClassName("error")[0];
  if (email == "" || name == "" ){
    alert("field mandatory");// firstErrorDiv.innerText = "Please enter Both fields"
  } else{
    // firstErrorDiv.innerText = "";
    console.log(`email:${email} name:${name}`)