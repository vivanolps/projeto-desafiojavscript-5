document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); //ta evitando o envio padrão

    //validação básica
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tipoContato = document.getElementById('tipo-contato').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !tipoContato || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    //simulação do envio do formulario
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.releasePointerCapture(); //limpa o formulário
})