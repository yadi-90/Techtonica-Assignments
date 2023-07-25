function countCheckboxes() {
    let a =document.forms["main"];
    let x = a.querySelectorAll('input[type = "checkbox"]: checked');
    alert(x.lenght);
}



