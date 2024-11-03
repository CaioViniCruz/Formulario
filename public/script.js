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

    // Exibir os dados em um alerta
    alert(`Nome: ${nome}\nSobrenome: ${sobrenome}\nE-mail: ${email}\nGênero: ${genero}\nTelefone: ${telefone}\nData de Nascimento: ${dataNascimento}\nCPF: ${cpf}`);

    // Aqui, você pode fazer uma requisição para o servidor, se desejar
    // const formData = new FormData(this);
    // fetch('/submit-form', {
    //     method: 'POST',
    //     body: formData,
    // });
});
