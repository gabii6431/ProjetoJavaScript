
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
$(".tabelaProduto").on("click", ".btnEditar",function(){
    alert("editar");
    Listar();
});
 
$(".tabelaProduto").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    alert("excluir");
    Excluir();
    Listar();
});
$(document).ready(function(){
    Listar();
 });
