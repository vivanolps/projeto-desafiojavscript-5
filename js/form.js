class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {
    const botao = form.querySelector("button[type='submit']");

    const nome = form.elements.namedItem("nome").value.trim();
    const sobrenome = form.elements.namedItem("sobrenome").value.trim();
    const email = form.elements.namedItem("email").value.trim();
    const cpf = form.elements.namedItem("cpf").value.trim();
    const telefone = form.elements.namedItem("telefone").value.trim();
    const contatoValor = form.elements.namedItem("contato").value.trim();

    if (!nome || !sobrenome || !email || !cpf || !telefone || !contatoValor || contatoValor === "Como você deseja ser contatado?") {
        botao.classList.add('pular');
        setTimeout(() => botao.classList.remove('pular'), 400);
        return false;
    }

    let data = new contato(nome, sobrenome, email, cpf, telefone, contatoValor);

    botao.classList.add('enviado');

    setTimeout(() => {
        alert(`Obrigado sr(a) ${nome}, os seus dados foram encaminhados com sucesso!`);
        botao.classList.remove('enviado');
        form.reset();
    }, 500);

    return false;
}

document.addEventListener('DOMContentLoaded', function () {  /* para mostrar o exemplo de como colocar as informações */
    const cpfInput = document.getElementById('cpfid');
    const telefoneInput = document.getElementById('telefoneid');

    cpfInput.addEventListener('input', function () {  /* amostra dp cpf */
        let v = cpfInput.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpfInput.value = v;
    });

    telefoneInput.addEventListener('input', function () { /* amostra do telefone */
        let v = telefoneInput.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        telefoneInput.value = v;
    });
});
