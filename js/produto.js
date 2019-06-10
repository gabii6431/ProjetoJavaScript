class Produto{
    id = 0;
    nome = ""
    dataDeValidade  = 0
    taxaImposto = 0
    quantidade = 0
    preco = 0
    funcionarioRes = ""

    constructor(){
         
    }

    set id(id) {
        this.id = id;
        sessionStorage.setItem("idProduto", this.id);
    }

    get id() {
        return sessionStorage.getItem("idProduto");
    }

    set nome(nome) {
        this.nome = nome
        sessionStorage.setItem("nomeProduto", this.nome);
    }

    get nome() {
        return sessionStorage.getItem("nomeProduto");
    }

    set dataDeValidade(dataDeValidade) {
        this.dataDeValidade = dataDeValidade
        sessionStorage.setItem("dataDeValidadeProduto", this.dataDeValidade);
    }

    get dataDeValidade() {
        return sessionStorage.getItem("dataDeValidadeProduto");
    }
    set taxaImposto(taxaImposto) {
        this.taxaImposto = taxaImposto
        sessionStorage.setItem("taxaImpostoProduto", this.taxaImposto);
    }

    get taxaImposto() {
        return sessionStorage.getItem("taxaImpostoProduto");
    }

    set quantidade(quantidade) {
        this.quantidade = quantidade
        sessionStorage.setItem("quantidadeProduto", this.quantidade);
    }
    get quantidade() {
        return sessionStorage.getItem("quantidadeProduto");
    }

    set preco(preco) {
        this.preco = preco
        sessionStorage.setItem("precoProduto", this.preco);
    }

    get preco() {
        return sessionStorage.getItem("precoProduto");
    }

    set funcionarioRes(funcionario) {
        this.funcionarioRes = funcionario
        sessionStorage.setItem("funcionarioProduto", this.funcionarioRes);
    }

    get funcionarioRes() {
        return sessionStorage.getItem("funcionarioProduto");
    }
    
}