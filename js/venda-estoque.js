var id;
var indice_selecionado;
var listaVendas;
var quantidadeProdutosVendidos = 0;
if(sessionStorage.getItem('primeiraExecucao1') == null){
    sessionStorage.setItem('primeiraExecucao1', 'false');
    id = 0;
    quantidadeProdutosVendidos = 0;
    indice_selecionado = -1;
    listaVendas = sessionStorage.getItem("listaVendas");
    listaVendas = JSON.parse(listaVendas);
    if(listaVendas == null) {
        listaVendas = [];
    }
    sessionStorage.setItem("idVenda", id);
    sessionStorage.setItem("quantidadeProdutosVendidos", quantidadeProdutosVendidos);
    sessionStorage.setItem("indice_selecionado", indice_selecionado);
    sessionStorage.setItem("listaVendas",JSON.stringify(listaVendas));

}


function Adicionar(){
    let quantidadeProdutoAtualizada = 0;
    let lista1 = sessionStorage.getItem("listaProdutos");
    let listaProdutos =JSON.parse(lista1);
    let indexArrayProduto = listaProdutos.map(function(e) { return(JSON.parse(e).Nome); }).indexOf(document.getElementById('nomeVenda').value);
    
    if(indexArrayProduto ==-1){
        alert("Produto não cadastrado!");
    }
    else{
        quantidadeProdutoAtualizada = parseInt(JSON.parse(listaProdutos[indexArrayProduto]).Quantidade) - parseInt(document.getElementById('quantidade').value);

        if(quantidadeProdutoAtualizada < 0)
        {
            alert("Não é possível realizar a venda desse produto, quantidade inválida. Em estoque temos apenas: " + JSON.parse(listaProdutos[indexArrayProduto]).Quantidade);
        }
        else
        {
            if(quantidadeProdutoAtualizada == 0){
            
                var idVenda = parseInt(sessionStorage.getItem("idVenda"))+ 1 ;
                
                var venda = JSON.stringify({
                    Id : idVenda,
                    NomeVenda : document.getElementById('nomeVenda').value,
                    NomeFuncionario : document.getElementById('nomeFuncionario').value,
                    Quantidade : document.getElementById('quantidade').value,
                    Preco :  document.getElementById('preco').value
                });
                sessionStorage.setItem("idVenda", idVenda);
                let lista = sessionStorage.getItem("listaVendas");
                let listaVendas = JSON.parse(lista);
                listaVendas.push(venda);
                //console.log("Perda:" + parseInt(sessionStorage.getItem("quantidadePerda")));
                quantidadeProdutosVendidos = parseInt(sessionStorage.getItem("quantidadeProdutosVendidos", quantidadeProdutosVendidos)) + (parseInt(document.getElementById('quantidade').value) * document.getElementById('preco').value) - (JSON.parse(listaProdutos[indexArrayProduto]).TaxaImposto + parseInt(sessionStorage.getItem("quantidadePerda")));
                sessionStorage.setItem("quantidadeProdutosVendidos", quantidadeProdutosVendidos);
                sessionStorage.setItem("listaVendas", JSON.stringify(listaVendas));
                listaProdutos.splice(indexArrayProduto, 1);
                sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
                alert("Registro adicionado.");
                return true;
            }
            else{
                var idVenda = parseInt(sessionStorage.getItem("idVenda"))+ 1 ;
                
                var venda = JSON.stringify({
                    Id : idVenda,
                    NomeVenda : document.getElementById('nomeVenda').value,
                    NomeFuncionario : document.getElementById('nomeFuncionario').value,
                    Quantidade : document.getElementById('quantidade').value,
                    Preco :  document.getElementById('preco').value
                });
                sessionStorage.setItem("idVenda", idVenda);
                let lista = sessionStorage.getItem("listaVendas");
                let listaVendas = JSON.parse(lista);
                listaVendas.push(venda);
                
                var produto = JSON.stringify({
                    Id : JSON.parse(listaProdutos[indexArrayProduto]).Id,
                    Nome : JSON.parse(listaProdutos[indexArrayProduto]).Nome,
                    DataDeValidade : JSON.parse(listaProdutos[indexArrayProduto]).DataDeValidade,
                    TaxaImposto : JSON.parse(listaProdutos[indexArrayProduto]).TaxaImposto,
                    Quantidade : quantidadeProdutoAtualizada,
                    Preco :  JSON.parse(listaProdutos[indexArrayProduto]).Preco,
                    FuncionarioRes : JSON.parse(listaProdutos[indexArrayProduto]).FuncionarioRes
                });
                listaProdutos.push(produto);
                listaProdutos.splice(indexArrayProduto, 1);
                sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
                //console.log("Perda:" + parseInt(sessionStorage.getItem("quantidadePerda")));
                quantidadeProdutosVendidos = parseInt(sessionStorage.getItem("quantidadeProdutosVendidos", quantidadeProdutosVendidos)) + (parseInt(document.getElementById('quantidade').value) * document.getElementById('preco').value) - (JSON.parse(listaProdutos[indexArrayProduto]).TaxaImposto +parseInt(sessionStorage.getItem("quantidadePerda")));
                sessionStorage.setItem("quantidadeProdutosVendidos", quantidadeProdutosVendidos);
                sessionStorage.setItem("listaVendas", JSON.stringify(listaVendas));
                alert("Registro adicionado.");
                return true;
            }
            
        }
    }
    
  
}
 
function Editar(){
    venda = JSON.stringify({
        Id : parseInt(sessionStorage.getItem("IdVendaEditar")),
        NomeVenda : document.getElementById('nomeVendaEditar').value,
        NomeFuncionario : document.getElementById('nomeFuncionarioEditar').value,
        Quantidade : document.getElementById('quantidadeEditar').value,
        Preco :  document.getElementById('precoEditar').value
    });

    let lista = sessionStorage.getItem("listaVendas");
    let listaVendas = JSON.parse(lista);
    listaVendas.push(venda);
    sessionStorage.setItem("listaVendas", JSON.stringify(listaVendas));

    alert("Informações editadas.");

    return true;
}
 
function Excluir(){
    indexArray = sessionStorage.getItem("indice_selecionado");
    let lista = sessionStorage.getItem("listaVendas");
    let listaVendas =JSON.parse(lista);
    listaVendas.splice(indexArray, 1);
    sessionStorage.setItem("listaVendas", JSON.stringify(listaVendas));
    if(sessionStorage.getItem("verifica") == "true")
    {
        alert("Registro excluído.");
    }
}

function Listar(){
    let listaVendas = sessionStorage.getItem("listaVendas");
    let lista =JSON.parse(listaVendas);

    $("#tabelaVenda").html("");
    $("#tabelaVenda").html(
        "<thead class='thead-dark'>"+
        "   <tr>"+
        "   <th style='text-align:center'>Id</th>"+
        "   <th style='text-align:center'>Nome do produto</th>"+
        "   <th style='text-align:center'>Nome do funcionário</th>"+
        "   <th style='text-align:center'>Quantidade</th>"+
        "   <th style='text-align:center'>Preço</th>"+
        "   <th style='text-align:center'></th>"+
        "   <th style='text-align:center'></th>"+
        "   </tr >"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        )
        let variavel = "";
    for(var i in lista){
        var venda = JSON.parse(lista[i]);
        console.log(venda);
        variavel += "<tr>";
        variavel += "<td style='text-align:center'>"+venda.Id+"</td>";
        variavel += "<td style='text-align:center'>"+venda.NomeVenda+"</td>";
        variavel += "<td style='text-align:center'>"+venda.NomeFuncionario+"</td>";
        variavel += "<td style='text-align:center'>"+venda.Quantidade+"</td>";
        variavel += "<td style='text-align:center'>"+venda.Preco+"</td>";
        variavel += "<td style='text-align:center' class= 'icone_editar'><a href='editar-venda.html'><img src='img/editar-icone.png' alt='"+i+"'  class = 'btnEditar'></a></td>";
        variavel += "<td style='text-align:center' class='icone_excluir'><a href=''><img src='img/deletar-icone.png' alt='"+i+"' class = 'btnExcluir'></a></td>";
        variavel += "</tr>";
        $("#tabelaVenda tbody").append(variavel);
        variavel = "";
    }
}

