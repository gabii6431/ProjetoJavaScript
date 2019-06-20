var id;
var indice_selecionado;
var listaFuncionarios;

if(sessionStorage.getItem('primeiraExecucao2') == null){
    sessionStorage.setItem('primeiraExecucao2', 'false');
    id = 0;
    indice_selecionado = -1;
    listaFuncionarios = sessionStorage.getItem("listaFuncionarios");
    listaFuncionarios = JSON.parse(listaFuncionarios);
    if(listaFuncionarios == null) {
        listaFuncionarios = [];
    }
    sessionStorage.setItem("idFuncionario", id);
    sessionStorage.setItem("indice_selecionado", indice_selecionado);
    sessionStorage.setItem("listaFuncionarios",JSON.stringify(listaFuncionarios));

}


function Adicionar(){
    var idFuncionario = parseInt(sessionStorage.getItem("idFuncionario"))+ 1 ;
    var salario = parseInt(document.getElementById('salario').value);
    var cargo;
    if(salario >= 10000)
    {
        cargo = "Gerente";
    }else if(salario >= 5000 && salario < 10000)
    {
        cargo = "Supervisor";
    }
    else if(salario >= 1000 && salario < 5000)
    {
        cargo = "Vendedor";
    }
    else
    {
        cargo = "Trainee";
    }
    var funcionario = JSON.stringify({
        Id : idFuncionario,
        NomeFuncionario : document.getElementById('nomeFuncionario').value,
        Endereco : document.getElementById('endereco').value,
        Cargo : cargo,
        Salario :  document.getElementById('salario').value
    });
    sessionStorage.setItem("idFuncionario", idFuncionario);
    let lista = sessionStorage.getItem("listaFuncionarios");
    let listaFuncionarios = JSON.parse(lista);
    listaFuncionarios.push(funcionario);
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));
    alert("Registro adicionado.");
    return true;
}
 
function Editar(){
    var salario = parseInt(document.getElementById('salarioEditar').value);
    var cargo;
    if(salario >= 10000)
    {
        cargo = "Gerente";
    }else if(salario >= 5000 && salario < 10000)
    {
        cargo = "Supervisor";
    }
    else if(salario >= 1000 && salario < 5000)
    {
        cargo = "Vendedor";
    }
    else
    {
        cargo = "Trainee";
    }
    var funcionario = JSON.stringify({
        Id : parseInt(sessionStorage.getItem("IdFuncionarioEditar")),
        NomeFuncionario : document.getElementById('nomeFuncionarioEditar').value,
        Endereco : document.getElementById('enderecoEditar').value,
        Cargo : cargo,
        Salario :  document.getElementById('salarioEditar').value
    });

    let lista = sessionStorage.getItem("listaFuncionarios");
    let listaFuncionarios = JSON.parse(lista);
    listaFuncionarios.push(funcionario);

    console.log(listaFuncionarios);
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));
    alert("Informações editadas.");
    return true;
}
 
function Excluir(){
    indexArray = sessionStorage.getItem("indice_selecionado");
    let lista = sessionStorage.getItem("listaFuncionarios");
    let listaFuncionarios = JSON.parse(lista);
    listaFuncionarios.splice(indexArray, 1);
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));
    if(sessionStorage.getItem("verifica") == "true")
    {
        alert("Registro excluído.");
    }
    
}

function Listar(){
    let listaFuncionarios = sessionStorage.getItem("listaFuncionarios");
    let lista =JSON.parse(listaFuncionarios);
    
    console.log("Lista: "+lista);
    $("#tabelaFuncionario").html("");
    $("#tabelaFuncionario").html(
        "<thead class='thead-dark'>"+
        "   <tr>"+
        "   <th style='text-align:center'>Id</th>"+
        "   <th style='text-align:center'>Nome do funcionário</th>"+
        "   <th style='text-align:center'>Endereço</th>"+
        "   <th style='text-align:center'>Cargo</th>"+
        "   <th style='text-align:center'>Salário</th>"+
        "   <th style='text-align:center'></th>"+
        "   <th style='text-align:center'></th>"+
        "   </tr >"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        )
        let variavel = "";
    for(var i in lista){
        var funcionario = JSON.parse(lista[i]);
        console.log(funcionario);
        variavel += "<tr>";
        variavel += "<td style='text-align:center'>"+funcionario.Id+"</td>";
        variavel += "<td style='text-align:center'>"+funcionario.NomeFuncionario+"</td>";
        variavel += "<td style='text-align:center'>"+funcionario.Endereco+"</td>";
        variavel += "<td style='text-align:center'>"+funcionario.Cargo+"</td>";
        variavel += "<td style='text-align:center'>"+funcionario.Salario+"</td>";
        variavel += "<td style='text-align:center' class='icone_editar'><a href='editar-funcionario.html'><img src='img/editar-icone.png' alt='"+i+"'  class = 'btnEditar'></a></td>";
        variavel += "<td style='text-align:center' class='icone_excluir'><a href=''><img src='img/deletar-icone.png' alt='"+i+"' class = 'btnExcluir'></a></td>";
        variavel += "</tr>";
        $("#tabelaFuncionario tbody").append(variavel);
        variavel = "";
    }
}

