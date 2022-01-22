var botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function(event){
      event.preventDefault()
      console.log("deu certo o botão !!!!!!");

        
    var form = document.querySelector("#form-adiciona");

    var paciente = obterFormularioDopaciente(form);

    

    adicionarPacienteNaTela(paciente);
    
    form.reset();
});


function adicionarPacienteNaTela (paciente){
    var paciente = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(paciente);
}


function obterFormularioDopaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}



function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-peso");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr;
}

function montaTd(dado,classe){


    var td = document.createElement("td");
    td.textContent = dado
    td.classList.add(classe);
    
    var nometd = document.createElement("td");
    var pesotd = document.createElement("td");
    var alturatd = document.createElement("td");
    var gorduratd = document.createElement("td");
    var imctd = document.createElement("td");

    nometd.textContent = paciente.nome;
    pesotd.textContent = paciente.peso;
    alturatd.textContent = paciente.altura;
    gorduratd.textContent = paciente.gordura;
    imctd.textContent = paciente.imc

    return td;

}