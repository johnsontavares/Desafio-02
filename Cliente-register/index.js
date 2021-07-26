function clicou(){
    alert("Hellow")
    window.location.href= "../Cliente-register.html"
}

function cadastrado(){
    alert("Dados cadastrados com sucesso !")
    window.location.href= "../Home.html"


    var Nome = document.getElementById("campo1").value
    var CPF = document.getElementById("campo2").value
    var Sobrenome = document.getElementById("campo3").value
    var Telefone = document.getElementById("campo4").value
    var Bairro = document.getElementById("campo5").value
    var Rua = document.getElementById("campo6").value

    localStorage.setItem("Nome",Nome )
    localStorage.setItem("Produto", Produto)
    localStorage.setItem("CPF", CPF)
    localStorage.setItem("Quantidade", quantidade)
    localStorage.setItem("Sobrenome",Sobrenome )
    localStorage.setItem("Telefone",Telefone )
    localStorage.setItem("Bairro", Bairro)
    localStorage.setItem("Rua",Rua )




}