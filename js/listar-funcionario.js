
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

/*$(".tabelaProduto").on("click", ".btnEditar",function(){
    alert("editar");
    Listar();
});
 
$(".tabelaProduto").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    alert("excluir");
    Excluir();
    Listar();
});*/

$(document).ready(function(){
    Listar();
    $(".icone_excluir").on("click",function(){
        let btn = $(this);
        let indice_selecionado;

        indice_selecionado = parseInt(btn.parent().text()[0]);
        console.log(indice_selecionado);
        let lista = sessionStorage.getItem("listaFuncionarios");
        let listaFuncionarios =JSON.parse(lista);
        let indexArray = listaFuncionarios.map(function(e) { return (JSON.parse(e).Id); }).indexOf(indice_selecionado);
        sessionStorage.setItem("indice_selecionado", indexArray);
        btn.parent().remove();
        Excluir();
        //Listar();
    });

 });
