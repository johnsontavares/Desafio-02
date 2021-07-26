function cadastrado(){
    alert("Dados cadastrados com sucesso !")
    window.location.href= "../Home/Home.html"

    var Produto = document.getElementById("campo1").value
    var CPF = document.getElementById("campo2").value
    var quantidade = document.getElementById("campo3").value


    localStorage.setItem("Produto", Produto)
    localStorage.setItem("CPF", CPF)
    localStorage.setItem("Quantidade", quantidade)

    
    console.log(Produto)
}