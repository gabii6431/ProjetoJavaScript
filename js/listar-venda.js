$(".tabelaVenda").on("click", ".btnEditar", function(){
    
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

$(document).ready(function(){
    Listar();

    $(".icone_excluir").on("click",function(){
        let btn = $(this);
        let indice_selecionado;

        indice_selecionado = parseInt(btn.parent().text()[0]);
        let lista = sessionStorage.getItem("listaVendas");
        let listaVendas =JSON.parse(lista);
        let indexArray = listaVendas.map(function(e) { return (JSON.parse(e).Id); }).indexOf(indice_selecionado);
        sessionStorage.setItem("indice_selecionado", indexArray);
        btn.parent().remove();
        Excluir();
        Listar();
    });

    $(".icone_editar").on("click",function(){
        let btn = $(this);
        let indice_selecionado;
        alert("asd");
        // indice_selecionado = parseInt(btn.parent().text()[0]);
        // let lista = sessionStorage.getItem("listaVendas");
        // let listaVendas =JSON.parse(lista);
        // let indexArray = listaVendas.map(function(e) { return (JSON.parse(e).Id); }).indexOf(indice_selecionado);
        // sessionStorage.setItem("indice_selecionado", indexArray);
        // btn.parent().remove();
        // Excluir();
        // Listar();
    });

});
