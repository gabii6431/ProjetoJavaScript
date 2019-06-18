class Funcionario{
    id = 0;
    nomeFuncionario = ""
    endereco = 0
    cargo = 0
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

    set nomeFuncionario(nomeFuncionario) {
        this.nomeFuncionario = nomeFuncionario
        sessionStorage.setItem("nomeFuncionario", this.nomeFuncionario);
    }

    get nomeFuncionario() {
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