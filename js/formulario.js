const validaFormulario = () => {
  let nombre = document.getElementById("nombre").value;
  let nombreError = document.getElementById("nombreError");
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("emailError");

  if (nombre === "") {
    nombreError.innerHTML = "alert";
    return false;
  }
};
