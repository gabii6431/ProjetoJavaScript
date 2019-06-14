class Funcionario{
    id = 0;
    nome = ""
    endereco  = 0
    salario = 0

    constructor(){
         
    }

    set id(id) {
        this.id = id;
        sessionStorage.setItem("idFuncionario", this.id);
    }

    get id() {
        return sessionStorage.getItem("idFuncionario");
    }

    set nome(nome) {
        this.nome = nome
        sessionStorage.setItem("nomeFuncionario", this.nome);
    }

    get nome() {
        return sessionStorage.getItem("nomeFuncionario");
    }

    set endereco(endereco) {
        this.endereco = endereco
        sessionStorage.setItem("endereco", this.endereco);
    }

    get endereco() {
        return sessionStorage.getItem("endereco");
    }

    set cargo(cargo) {
        this.cargo = cargo
        sessionStorage.setItem("cargo", this.cargo);
    }

    get cargo() {
        return sessionStorage.getItem("cargo");
    }

    set salario(salario) {
        this.salario = salario
        sessionStorage.setItem("salario", this.salario);
    }

    get salario() {
        return sessionStorage.getItem("salario");
    }    
}