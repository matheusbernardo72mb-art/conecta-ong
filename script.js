function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const tipo = document.getElementById("tipo").value;

    if (email === "" || senha === "" || tipo === "") {
        alert("Preencha todos os campos.");
        return;
    }

    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("tipoUsuario", tipo);

    window.location.href = "painel.html";
}

function cadastrar() {
    alert("Área de cadastro será disponibilizada em breve.");
}