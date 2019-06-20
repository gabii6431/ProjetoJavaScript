$(document).ready(function(){
    Listar();

    $(".icone_excluir").on("click",function(){
        let btn = $(this);
        let indice_selecionado;
        let verifica = true;

        sessionStorage.setItem("verifica", verifica);

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
        let verifica = false;

        sessionStorage.setItem("verifica", verifica);

        indice_selecionado = parseInt(btn.parent().text()[0]);
        sessionStorage.setItem("IdVendaEditar", indice_selecionado);
        let lista = sessionStorage.getItem("listaVendas");
        let listaVendas = JSON.parse(lista);
        let indexArray = listaVendas.map(function(e) { return(JSON.parse(e).Id); }).indexOf(indice_selecionado);
        
        sessionStorage.setItem("indice_selecionado", indexArray);
        sessionStorage.setItem("nomeVendaEditado", JSON.parse(listaVendas[indexArray]).NomeVenda);
        sessionStorage.setItem("nomeFuncionarioEditado", JSON.parse(listaVendas[indexArray]).NomeFuncionario);
        sessionStorage.setItem("precoEditado", JSON.parse(listaVendas[indexArray]).Preco);
        sessionStorage.setItem("quantidadeEditado", JSON.parse(listaVendas[indexArray]).Quantidade);

        btn.parent().remove(); 
    });

});
