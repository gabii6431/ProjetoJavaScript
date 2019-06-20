var id;
var indice_selecionado;
var listaVendas;
if(sessionStorage.getItem('primeiraExecucao1') == null){
    sessionStorage.setItem('primeiraExecucao1', 'false');
    id = 0;
    indice_selecionado = -1;
    listaVendas = sessionStorage.getItem("listaVendas");
    listaVendas = JSON.parse(listaVendas);
    if(listaVendas == null) {
        listaVendas = [];
    }
    sessionStorage.setItem("idVenda", id);
    sessionStorage.setItem("indice_selecionado", indice_selecionado);
    sessionStorage.setItem("listaVendas",JSON.stringify(listaVendas));

}


function Adicionar(){
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
    sessionStorage.setItem("listaVendas", JSON.stringify(listaVendas));
    alert("Registro adicionado.");
    return true;
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
    
    console.log("Lista: "+lista);
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

