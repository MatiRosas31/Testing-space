const emailhtml = document.getElementById('email');
const passwordhtml = document.getElementById('password');
const signbuttonhtml = document.getElementById('signbutton');
const formhtml = document.getElementById('form');
const formgrandehtml = document.getElementById('formgrande');



function login(e) {
  if (emailhtml.value === "matirosas@hotmail.com" & passwordhtml.value === "1234"){
        emailhtml.classList.toggle('bg-success');
  }
else {
  e.preventDefault();
  emailhtml.style.background = "red";
  console.log("Contrase;a invalida");
  let alerta = document.createElement("label");
  alerta.className = "text-danger";
  alerta.textContent = "Email or Password incorrect";
  formgrandehtml.appendChild(alerta)
  //emailhtml.classList.add('bg-danger');
}
};

signbuttonhtml.addEventListener("click", login);
