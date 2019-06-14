
if(sessionStorage.getItem('primeiraExecucao') == null){
    sessionStorage.setItem('primeiraExecucao', false);
    var id = 0;
    var indice_selecionado = -1;
    var listaProdutos = [];
    listaProdutos = JSON.parse(listaProdutos);
    if(listaProdutos == null) {
        listaProdutos = [];
    }
}


function Adicionar(){
    var produto = [];
    produto.push(document.getElementById('id').value);
    produto.push(document.getElementById('nomeProduto').value);
    produto.push(document.getElementById('dataValidadeProduto').value);
    produto.push(document.getElementById('taxaImpostoProduto').value);  
    produto.push(document.getElementById('quantidade').value);
    produto.push(document.getElementById('preco').value);
    produto.push(document.getElementById('funcionarioProduto').value);

    
    // Id : document.getElementById('id').value,
        // Nome : document.getElementById('nomeProduto').value,
        // DataDeValidade : document.getElementById('dataValidadeProduto').value,
        // TaxaImposto : document.getElementById('taxaImpostoProduto').value,
        // Quantidade : document.getElementById('quantidade').value,
        // Preco :  document.getElementById('preco').value,
        // FuncionarioRes : document.getElementById('funcionarioProduto').value
        
    console.log(produto);
    
    //listaProdutos.push(produto);
    //sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    alert("Registro adicionado.");
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
    alert("Informações editadas.")
    return true;
}
 
function Excluir(){
    listaProdutos.splice(indice_selecionado, 1);
    sessionStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    alert("Registro excluído.");
}

function Listar(){
    $(".tabelaProduto").html("");
    $(".tabelaProduto").html(
        "<thead>"+
        "   <tr>"+
        "   <th>Id</th>"+
        "   <th>Nome</th>"+
        "   <th>Data de validade</th>"+
        "   <th>Taxa de Imposto</th>"+
        "   <th>Quantidade</th>"+
        "   <th>Preço</th>"+
        "   <th>Funcionario</th>"+
        "   <th></th>"+
        "   <th></th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in listaProdutos){
        var produto = JSON.parse(listaProdutos[i]);
        $(".tabelaProduto tbody").append("<tr>");
        $(".tabelaProduto tbody").append("<td>"+produto.Id+"</td>");
        $(".tabelaProduto tbody").append("<td>"+produto.Nome+"</td>");
        $(".tabelaProduto tbody").append("<td>"+produto.DataDeValidade+"</td>");
        $(".tabelaProduto tbody").append("<td>"+produto.TaxaImposto+"</td>");
        $(".tabelaProduto tbody").append("<td>"+produto.Quantidade+"</td>");
        $(".tabelaProduto tbody").append("<td>"+produto.FuncionarioRes+"</td>");
        $(".tabelaProduto tbody").append("<td><a href='editar-produto.html'><img src='img/editar.png' alt='"+i+"'  class = 'btnEditar'></a></td>");
        $(".tabelaProduto tbody").append("<td><a href='editar-produto.html'><img src='img/editar.png' alt='"+i+"' class = 'btnExcluir'></a></td>");
        $(".tabelaProduto tbody").append("</tr>");
        
    }
}
 
$('#salvarProduto').on('click',function(){
   console.log("Entrou")
    Adicionar();
    Listar();
});
 
$(".tabelaProduto").on("click", ".btnEditar", function(){

    indice_selecionado = parseInt($(this).attr("alt"));
    var produto = JSON.parse(listaProdutos[indice_selecionado]);
    //editar nome classes 
    $("#txtCodigo").val(produto.Nome);
    $("#txtNome").val(produto.DataDeValidade);
    $("#txtTelefone").val(produto.TaxaImposto);
    $("#txtEmail").val(produto.Quantidade);
    $("#txtEmail").val(produto.funcionarioRes);
    $("#txtCodigo").attr("readonly","readonly");
    $("#txtNome").focus();
});

$(".formularioEditar").on("submit",function(){
    Editar();
    Listar();
});
 
$(".tabelaProduto").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    Excluir();
    Listar();
});





// var formProduto = $('.formulario-produto');
// var produtoNovo;
// sessionStorage.setItem("idProduto", 0);


// formProduto.submit(function (e) {

//     e.preventDefault();
//     var nomeProduto = document.getElementById('nomeProduto').value;
//     var dataDeValidade = document.getElementById('dataValidadeProduto').value;
//     var taxaImposto = document.getElementById('taxaImpostoProduto').value;
//     var quantidade = document.getElementById('quantidade').value;
//     var preco = document.getElementById('preco').value;
//     var funcionarioRes = document.getElementById('funcionarioProduto').value;
//     sessionStorage.setItem('idProduto', (sessionStorage.getItem() +1)).value;

//     var lista_produtos = JSON.parse(localStorage.getItem('lista-produtos') || '[]');
//     lista_produtos.push({
//         id = sessionStorage.getItem(),
//         nomeProduto = nomeProduto,
//         dataDeValidade = dataDeValidade,
//         taxaImposto = taxaImposto,
//         quantidade = quantidade,
//         preco = preco,
//         funcionarioRes = funcionarioRes
//     });
//     localStorage.setItem("lista-pessoas", JSON.stringify(lista_produtos));

//     console.log('Salva com sucesso.');
// });

// function Listar(){
//     $("#tblLiWistar tbody").append("</tr>");
// }