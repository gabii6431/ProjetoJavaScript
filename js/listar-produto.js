$(document).ready(function(){
    Listar();
    $(".icone_excluir").on("click",function(){
        let btn = $(this);
        let indice_selecionado;
        let verifica = true;

        sessionStorage.setItem("verifica", verifica);
        indice_selecionado = parseInt(btn.parent().text()[0]);
        console.log(indice_selecionado);
        let lista = sessionStorage.getItem("listaProdutos");
        let listaProdutos =JSON.parse(lista);
        let indexArray = listaProdutos.map(function(e) { return (JSON.parse(e).Id); }).indexOf(indice_selecionado);
        sessionStorage.setItem("indice_selecionado", indexArray);
        btn.parent().remove();
        Excluir();
    });

    $(".icone_editar").on("click",function(){
        let btn = $(this);
        let indice_selecionado;
        let verifica = false;

        sessionStorage.setItem("verifica", verifica);

        indice_selecionado = parseInt(btn.parent().text()[0]);
        sessionStorage.setItem("IdProdutoEditar", indice_selecionado);
        let lista = sessionStorage.getItem("listaProdutos");
        let listaProdutos = JSON.parse(lista);
        let indexArray = listaProdutos.map(function(e) { return(JSON.parse(e).Id); }).indexOf(indice_selecionado);
        
        sessionStorage.setItem("indice_selecionado", indexArray);
        
        sessionStorage.setItem("nomeEditado", JSON.parse(listaProdutos[indexArray]).Nome);
        sessionStorage.setItem("dataValidadeEditada", JSON.parse(listaProdutos[indexArray]).DataDeValidade);
        sessionStorage.setItem("taxaEditada", JSON.parse(listaProdutos[indexArray]).TaxaImposto);
        sessionStorage.setItem("qtdEditada", JSON.parse(listaProdutos[indexArray]).Quantidade);
        sessionStorage.setItem("precoEditado", JSON.parse(listaProdutos[indexArray]).Preco);
        sessionStorage.setItem("funcEditado", JSON.parse(listaProdutos[indexArray]).FuncionarioRes);

        btn.parent().remove(); 
        
    });

 });
