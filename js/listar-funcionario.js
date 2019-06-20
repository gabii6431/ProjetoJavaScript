$(document).ready(function(){
    Listar();
    $(".icone_excluir").on("click",function(){
        let btn = $(this);
        let indice_selecionado;
        let verifica = true;

        sessionStorage.setItem("verifica", verifica);

        indice_selecionado = parseInt(btn.parent().text()[0]);
        let lista = sessionStorage.getItem("listaFuncionarios");
        let listaFuncionarios =JSON.parse(lista);
        let indexArray = listaFuncionarios.map(function(e) { return (JSON.parse(e).Id); }).indexOf(indice_selecionado);
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
        sessionStorage.setItem("IdFuncionarioEditar", indice_selecionado);
        let lista = sessionStorage.getItem("listaFuncionarios");
        let listaFuncionarios = JSON.parse(lista);
        let indexArray = listaFuncionarios.map(function(e) { return(JSON.parse(e).Id); }).indexOf(indice_selecionado);
        sessionStorage.setItem("indice_selecionado", indexArray);
        sessionStorage.setItem("nomeFuncionarioEditado", JSON.parse(listaFuncionarios[indexArray]).NomeFuncionario);
        sessionStorage.setItem("enderecoEditado", JSON.parse(listaFuncionarios[indexArray]).Endereco);
        sessionStorage.setItem("salarioEditado", JSON.parse(listaFuncionarios[indexArray]).Salario);
        btn.parent().remove(); 
    });

 });
