var id;
var indice_selecionado;
var listaFuncionarios;

if(sessionStorage.getItem('primeiraExecucao') == null){
    sessionStorage.setItem('primeiraExecucao', 'false');
    id = 0;
    indice_selecionado = -1;
    listaFuncionarios = sessionStorage.getItem("listaFuncionarios");
    listaFuncionarios = JSON.parse(listaFuncionarios);
    if(listaFuncionarios == null) {
        listaFuncionarios = [];
    }
    sessionStorage.setItem("idFuncionario", id);
    sessionStorage.setItem("indice_selecionado", indice_selecionado);
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));

}


function Adicionar(){

    var idFuncionario = parseInt(sessionStorage.getItem("idFuncionario"))+ 1 ;

    var funcionario = JSON.stringify({
        Id : idFuncionario,
        Nome : document.getElementById('nomeFuncionario').value,
        Endereco : document.getElementById('endereco').value,
        Cargo : document.getElementById('cargo').value,
        Salario : document.getElementById('salario').value,
    });
    sessionStorage.setItem("idFuncionario", idFuncionario);
    let lista = sessionStorage.getItem("listaFuncionarios");
    let listaFuncionarios =JSON.parse(lista);
    listaFuncionarios.push(funcionario);
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));
        alert("ENTREIIIIII");
    alert("Registro adicionado.");
    return true;
}
 
function Editar(){
    listaFuncionarios[indice_selecionado] = JSON.stringify({
       Nome : document.getElementById('nomeFuncionario').value,
        Endereco : document.getElementById('endereco').value,
        Cargo : document.getElementById('cargo').value,
        Salario : document.getElementById('salario').value,
    });
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));
    let lista = sessionStorage.getItem("listaFuncionarios");
    let listaFuncionarios =JSON.parse(lista);

    listaFuncionarios.push(funcionario);
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));
    alert("Informações editadas.")
    return true;
}
 
function Excluir(){
    listaFuncionarios.splice(indice_selecionado, 1);
    sessionStorage.setItem("listaFuncionarios", JSON.stringify(listaFuncionarios));
    alert("Registro excluído.");
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
        "   <th style='text-align:center'>Nome</th>"+
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
    for(var i in lista){
        var Funcionario = JSON.parse(lista[i]);
        console.log(Funcionario);
        $("#tabelaFuncionario tbody").append("<tr>");
        $("#tabelaFuncionario tbody").append("<td style='text-align:center'>"+Funcionario.Id+"</td>");
        $("#tabelaFuncionario tbody").append("<td style='text-align:center'>"+Funcionario.Nome+"</td>");
        $("#tabelaFuncionario tbody").append("<td style='text-align:center'>"+Funcionario.Endereco+"</td>");
        $("#tabelaFuncionario tbody").append("<td style='text-align:center'>"+Funcionario.Cargo+"</td>");
        $("#tabelaFuncionario tbody").append("<td style='text-align:center'>"+Funcionario.Salario+"</td>");
        $("#tabelaFuncionario tbody").append("<td style='text-align:center'><a href='editar-Funcionario.html'><img src='img/editar-icone.png' alt='"+i+"'  class = 'btnEditar'></a></td>");
        $("#tabelaFuncionario tbody").append("<td style='text-align:center'><a href=''><img src='img/deletar-icone.png' alt='"+i+"' class = 'btnExcluir'></a></td>");
        $("#tabelaFuncionario tbody").append("</tr>");
    }
}

