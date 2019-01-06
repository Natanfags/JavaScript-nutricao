var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();
   
    var form = document.querySelector("#form-adiciona");
    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria funcao tr e td
   var pacienteTr = montaTr(paciente);

   var erros = validaPaciente(paciente);
   console.log(erros);
   if(erros.length > 0){
       exibeMensagemDeErro(erros);
       return;
   }


   if(!validaPaciente(paciente)){
        console.log("Paciente invalido");
        return;
   }

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTR;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");
    if(paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
    if(paciente.altura.length == 0) erros.push("O altura não pode ser em branco");
    

    return erros;
}