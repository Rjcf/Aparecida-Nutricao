          var pacientes = document.querySelectorAll(".paciente");



          for (i = 0; i < pacientes.length; i++) {
              var paciente = pacientes[i];

              var tdpeso = paciente.querySelector(".info-peso");
              var peso = tdpeso.textContent;

              var tdaltura = paciente.querySelector(".info-altura");
              var altura = tdaltura.textContent;
              var imc = paciente.querySelector(".info-imc");
              var validarPeso = validaPeso(peso);

              if (!validaPeso(peso)) {
                  paciente.classList.add('valor-invalido');
                  imc.textContent = 'Peso inválido';

              } else if (!validaAltura(altura)) {

                  paciente.classList.add('valor-invalido');
                  imc.textContent = 'Altura inválida';
              } else {
                  imc.textContent = calculaImc(peso, altura);
              }



          }



          function calculaImc(peso, altura) {
              var imc = 0;
              imc = peso / (altura * altura);

              return imc.toFixed(2);
          }

          function validaPeso(peso) {
              if (peso > 0 && peso <= 800) {
                  return true;
              } else {
                  return false;
              }
          }

          function validaAltura(altura) {
              if (altura > 0 && altura < 3.0) {
                  return true;
              } else {
                  return false;
              }
          }