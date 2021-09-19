var botaoBuscar = document.querySelector('#buscar-paciente')

botaoBuscar.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Buscando Pacientes')
    var xhr = new XMLHttpRequest();
    xhr.open("get", 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector('.erro-ajax')
        if (xhr.status == 200) {
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove('invisivel');
        }

    });

    xhr.send();
});