class Produto{
    id = 0;
    nomeVenda = ""
    nomeFuncionario = ""
    quantidade = 0
    preco = 0

    constructor(){
         
    }

    set id(id) {
        this.id = id;
        sessionStorage.setItem("idVenda", this.id);
    }

    get id() {
        return sessionStorage.getItem("idVenda");
    }

    set nomeVenda(nomeVenda) {
        this.nomeVenda = nomeVenda
        sessionStorage.setItem("nomeVenda", this.nomeVenda);
    }

    get nomeVenda() {
        return sessionStorage.getItem("nomeVenda");
    }

    set nomeFuncionario(nomeFuncionario) {
        this.nomeFuncionario = nomeFuncionario
        sessionStorage.setItem("nomeFuncionario", this.nomeFuncionario);
    }

    get nomeFuncionario() {
        return sessionStorage.getItem("nomeFuncionario");
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
    
}