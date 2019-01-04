var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();
   
    var form = document.querySelector("#form-adiciona");
    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria funcao tr e td
   var pacienteTr = montaTr(paciente);

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){

    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTR.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTR.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gorduraTd"));
    pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTR;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}