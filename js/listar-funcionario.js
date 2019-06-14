$(".tabelaFuncionario").on("click", ".btnEditar", function(){
    
    indice_selecionado = parseInt($(this).attr("alt"));
    var funcionario = JSON.parse(listaProdutos[indice_selecionado]);
    //editar nome classes 
    $("#txtCodigo").val(funcionario.Nome);
    $("#txtNome").val(funcionario.Nome);
    $("#txtEndereco").val(funcionario.Endereco);
    $("#txtCargo").val(funcionario.Cargo);
    $("#txtSalario").val(funcionario.Salario);
    $("#txtCodigo").attr("readonly","readonly");
    $("#txtNome").focus();
});

$(".tabelaFuncionario").on("click", ".btnEditar",function(){
    alert("editar");
    Listar();
});
 
$(".tabelaFuncionario").on("click", ".btnExcluir",function(){
    indice_selecionado = parseInt($(this).attr("alt"));
    alert("excluir");
    Excluir();
    Listar();
});

$(document).ready(function(){
    Listar();
});
