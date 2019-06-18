var id;
var indice_selecionado;
var listaProdutos;
if(sessionStorage.getItem('primeiraExecucao') == null){
    sessionStorage.setItem('primeiraExecucao', 'false');
    id = 0;
    indice_selecionado = -1;
    listaProdutos = sessionStorage.getItem("listaProdutos");
    listaProdutos = JSON.parse(listaProdutos);
    if(listaProdutos == null) {
        listaProdutos = [];
    }
    sessionStorage.setItem("idProduto", id);
    sessionStorage.setItem("indice_selecionado", indice_selecionado);
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

}


function Adicionar(){
    var idProduto = parseInt(sessionStorage.getItem("idProduto"))+ 1;

    var produto = JSON.stringify({
        Id : idProduto,
        Nome : document.getElementById('nomeProduto').value,
        DataDeValidade : document.getElementById('dataValidadeProduto').value,
        TaxaImposto : document.getElementById('taxaImpostoProduto').value,
        Quantidade : document.getElementById('quantidade').value,
        Preco :  document.getElementById('preco').value,
        FuncionarioRes : document.getElementById('funcionarioProduto').value
    });
    sessionStorage.setItem("idProduto", idProduto);
    let lista = sessionStorage.getItem("listaProdutos");
    let listaProdutos =JSON.parse(lista);

    listaProdutos.push(produto);
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    alert("Registro adicionado.");
    console.log(listaProdutos);
    return true;
}
 
function Editar(){
    listaProdutos[indice_selecionado] = JSON.stringify({
        Nome : document.getElementById('nomeProduto').value,
        DataDeValidade : document.getElementById('dataValidadeProduto').value,
        TaxaImposto : document.getElementById('taxaImpostoProduto').value,
        Quantidade : document.getElementById('quantidade').value,
        Preco :  document.getElementById('preco').value,
        FuncionarioRes : document.getElementById('funcionarioProduto').value
    });
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    let lista = sessionStorage.getItem("listaProdutos");
    let listaProdutos =JSON.parse(lista);

    listaProdutos.push(produto);
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    alert("Informações editadas.")
    return true;
}
 
function Excluir(){
    indexArray = sessionStorage.getItem("indice_selecionado");
    let lista = sessionStorage.getItem("listaProdutos");
    let listaProdutos =JSON.parse(lista);
    listaProdutos.splice(indexArray, 1);
    alert("Excluido");
    alert(listaProdutos);
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    alert("Registro excluído.");
}

function Listar(){
    let listaProdutos = sessionStorage.getItem("listaProdutos");
    let lista =JSON.parse(listaProdutos);
    
    console.log("Lista: "+lista);
    $("#tabelaProduto").html("");
    $("#tabelaProduto").html(
        "<thead class='thead-dark'>"+
        "   <tr>"+
        "   <th style='text-align:center'>Id</th>"+
        "   <th style='text-align:center'>Nome</th>"+
        "   <th style='text-align:center'>Data de validade</th>"+
        "   <th style='text-align:center'>Taxa de Imposto</th>"+
        "   <th style='text-align:center'>Quantidade</th>"+
        "   <th style='text-align:center'>Preço</th>"+
        "   <th style='text-align:center'>Funcionario</th>"+
        "   <th style='text-align:center'></th>"+
        "   <th style='text-align:center'></th>"+
        "   </tr >"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        )
    let variavel = "";
    for(var i in lista){
        var produto = JSON.parse(lista[i]);
        console.log(produto);
        variavel += "<tr>";
        variavel += "<td style='text-align:center'>"+produto.Id+"</td>";
        variavel += "<td style='text-align:center'>"+produto.Nome+"</td>";
        variavel += "<td style='text-align:center'>"+produto.DataDeValidade+"</td>";
        variavel += "<td style='text-align:center'>"+produto.TaxaImposto+"</td>";
        variavel += "<td style='text-align:center'>"+produto.Quantidade+"</td>";
        variavel += "<td style='text-align:center'>"+produto.Preco+"</td>";
        variavel += "<td style='text-align:center'>"+produto.FuncionarioRes+"</td>";
        variavel += "<td style='text-align:center'><a href='editar-produto.html'><img src='img/editar-icone.png' alt='"+i+"'  class = 'btnEditar'></a></td>";
        variavel += "<td style='text-align:center' class='icone_excluir'><a href=''><img src='img/deletar-icone.png' alt='"+i+"' class = 'btnExcluir'></a></td>";
        variavel += "</tr>";
        $("#tabelaProduto tbody").append(variavel);
        variavel = "";
    }
}
 
