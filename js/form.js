var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();



    //extraindo informações do form
    var form = document.querySelector('#form-adiciona')
    var paciente = obtemPaciente(form);
    // cria Tr e TD do paciente
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensErro(erros)


        return;
    }
    // adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente)
    form.reset();

    var mensagemErro = document.querySelector('#mensagem-erro')
    mensagemErro.innerHTML = "";
    ul
});

function obtemPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }

    return paciente;

}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push('Preencher o campo nome!')
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso Inválido')
    }


    if (!validaAltura(paciente.altura)) {
        erros.push('Altura Inválida');
    }

    if (paciente.gordura.length == 0) {
        erros.push('Preencher o campo gordura!')
    }
    if (paciente.peso.length == 0) {
        erros.push('Preencher o campo peso!')
    }
    if (paciente.altura.length == 0) {
        erros.push('Preencher o campo altura!')
    }

    return erros;
}

function exibeMensagensErro(erros) {

    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}