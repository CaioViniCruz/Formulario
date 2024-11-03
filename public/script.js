document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os dados do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const genero = document.getElementById('genero').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;

    // Confirmar se o usuário deseja enviar os dados
    const confirmacao = confirm(`Você tem certeza que deseja enviar os dados?\n\nNome: ${nome}\nSobrenome: ${sobrenome}\nE-mail: ${email}\nGênero: ${genero}\nTelefone: ${telefone}\nData de Nascimento: ${dataNascimento}\nCPF: ${cpf}`);

    if (confirmacao) {
        // Exibir os dados em um alerta
        alert(`Dados enviados:\nNome: ${nome}\nSobrenome: ${sobrenome}\nE-mail: ${email}\nGênero: ${genero}\nTelefone: ${telefone}\nData de Nascimento: ${dataNascimento}\nCPF: ${cpf}`);
        
        // Mensagem de agradecimento
        document.getElementById('mensagem-confirmacao').innerText = 'Obrigado pelo seu cadastro!';

        // Limpar o formulário
        this.reset();
    }
});
