document.getElementById('cadastroForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('mensagem-confirmacao').innerText = `Cadastro realizado com sucesso, ${result.nome}!`;
        } else {
            document.getElementById('mensagem-confirmacao').innerText = 'Erro ao enviar o formulário.';
        }
    } catch (error) {
        document.getElementById('mensagem-confirmacao').innerText = 'Erro de conexão.';
    }
});
