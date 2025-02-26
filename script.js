const loginForm = document.getElementById("loginForm");

const validCredentials = [
    { email: "alexandraSESI@gmail.com", senha: "prof123", redirectTo: "prof.html" },
    { email: "luizSESI@gmail.com", senha: "aluno123", redirectTo: "aluno.html" }
];

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const user = validCredentials.find(user => user.email === email && user.senha === senha);

    if (user) {
        window.location.href = user.redirectTo;
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
