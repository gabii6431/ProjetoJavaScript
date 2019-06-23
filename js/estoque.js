var id;
var indice_selecionado;
var listaProdutos;
var quantidadePerda = 0;
if(sessionStorage.getItem('primeiraExecucao') == null){
    sessionStorage.setItem('primeiraExecucao', 'false');
    id = 0;
    indice_selecionado = -1;
    quantidadePerda = 0;
    listaProdutos = sessionStorage.getItem("listaProdutos");
    listaProdutos = JSON.parse(listaProdutos);
    if(listaProdutos == null) {
        listaProdutos = [];
    }
    sessionStorage.setItem("idProduto", id);
    sessionStorage.setItem("indice_selecionado", indice_selecionado);
    sessionStorage.setItem("quantidadePerda", quantidadePerda);
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

}


function Adicionar(){
    var verificaData = 1;
    var now = new Date;
    var dia = parseInt(now.getDate());
    var mes = parseInt(now.getMonth() +1);
    var ano = parseInt(now.getFullYear());
    var dataValidade  = document.getElementById('dataValidadeProduto').value;
    dataValidade = dataValidade.split("/");

    if((dataValidade[0] <= 31 && dataValidade[0] > 0) && (dataValidade[1] >0 && dataValidade[1]<=12)){
        if (ano < parseInt(dataValidade[2])){
            verificaData = 1;
        }
        else if(ano == parseInt(dataValidade[2]))
        {
            if(mes < parseInt(dataValidade[1])){
               verificaData = 1;
            }
            else if(mes == parseInt(dataValidade[1])){
                if(dia < parseInt(dataValidade[0])){
                    verificaData = 1;
                }
                else{
                    verificaData = 0;
                }
            }
            else{
                verificaData = 0;
            }
        }
        else{
            verificaData = 0;
        }
    }
    else{
        verificaData = 0;
    }
    

    if(verificaData == 1){
        sessionStorage.setItem("verificaData", verificaData);
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
        let listaProdutos = JSON.parse(lista);
    
        listaProdutos.push(produto);
        sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
        alert("Registro adicionado.");
        return true;
    }
    else{
        quantidadePerda = parseInt(sessionStorage.getItem("quantidadePerda")) + 1;
        sessionStorage.setItem("quantidadePerda", quantidadePerda);
        sessionStorage.setItem("verificaData", verificaData);
        alert("Data de validade inválida");
    }
    
}
 
function Editar(){
    var verificaData = 1;
    var now = new Date;
    var dia = parseInt(now.getDate());
    var mes = parseInt(now.getMonth() +1);
    var ano = parseInt(now.getFullYear());
    var dataValidade  = document.getElementById('dataValidadeEditar').value;
    dataValidade = dataValidade.split("/");

    if((dataValidade[0] <= 31 && dataValidade[0] > 0) && (dataValidade[1] >0 && dataValidade[1]<=12)){
        if (ano < parseInt(dataValidade[2])){
            verificaData = 1;
        }
        else if(ano == parseInt(dataValidade[2]))
        {
            if(mes < parseInt(dataValidade[1])){
               verificaData = 1;
            }
            else if(mes == parseInt(dataValidade[1])){
                if(dia < parseInt(dataValidade[0])){
                    verificaData = 1;
                }
                else{
                    verificaData = 0;
                }
            }
            else{
                verificaData = 0;
            }
        }
        else{
            verificaData = 0;
        }
    }
    else{
        verificaData = 0;
    }

    if(verificaData == 1){
        sessionStorage.setItem("verificaData", verificaData);
        produto = JSON.stringify({
            Id : parseInt(sessionStorage.getItem("IdProdutoEditar")),
            Nome : document.getElementById('nomeEditar').value,
            DataDeValidade : document.getElementById('dataValidadeEditar').value,
            TaxaImposto : document.getElementById('taxaEditar').value,
            Quantidade : document.getElementById('qtdEditar').value,
            Preco :  document.getElementById('precoEditar').value,
            FuncionarioRes : document.getElementById('funcEditar').value
        });
        let lista = sessionStorage.getItem("listaProdutos");
        let listaProdutos = JSON.parse(lista);
        listaProdutos.push(produto);
        sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
        alert("Informações editadas.");
        return true;
    }
    else{
        quantidadePerda = parseInt(sessionStorage.getItem("quantidadePerda")) + 1;
        sessionStorage.setItem("quantidadePerda", quantidadePerda);
        sessionStorage.setItem("verificaData", verificaData);
        alert("Data de validade inválida");
    }
}
 
function Excluir(){
    indexArray = sessionStorage.getItem("indice_selecionado");
    let lista = sessionStorage.getItem("listaProdutos");
    let listaProdutos =JSON.parse(lista);
    listaProdutos.splice(indexArray, 1);
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    if(sessionStorage.getItem("verifica") == "true")
    {
        alert("Registro excluído.");
    }
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
        variavel += "<tr>";
        variavel += "<td style='text-align:center'>"+produto.Id+"</td>";
        variavel += "<td style='text-align:center'>"+produto.Nome+"</td>";
        variavel += "<td style='text-align:center'>"+produto.DataDeValidade+"</td>";
        variavel += "<td style='text-align:center'>"+produto.TaxaImposto+"</td>";
        variavel += "<td style='text-align:center'>"+produto.Quantidade+"</td>";
        variavel += "<td style='text-align:center'>"+produto.Preco+"</td>";
        variavel += "<td style='text-align:center'>"+produto.FuncionarioRes+"</td>";
        variavel += "<td style='text-align:center' class='icone_editar'><a href='editar-produto.html'><img src='img/editar-icone.png' alt='"+i+"'  class = 'btnEditar'></a></td>";
        variavel += "<td style='text-align:center' class='icone_excluir'><a href=''><img src='img/deletar-icone.png' alt='"+i+"' class = 'btnExcluir'></a></td>";
        variavel += "</tr>";
        $("#tabelaProduto tbody").append(variavel);
        variavel = "";
    }
}
 
