document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    var mensagem = document.getElementById('mensagem');

    if (senha !== confirmarSenha) {
        mensagem.textContent = 'As senhas não coincidem!';
        mensagem.style.color = 'red';
    } else {
        mensagem.textContent = 'Cadastro concluído!';
        mensagem.style.color = 'green';
    }

    
});




