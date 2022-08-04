function salvaruser(pnome,pusuario,psenha){
    var db = openDatabase('senai','1.0','Senai TDS',2*1024*1024);
    
    db.transaction(function (tx){

        var sql  = "insert into usuarios (nome,login,senha) ";
            sql += "values(?,?,?)"

        tx.executeSql(sql,[pnome,pusuario,psenha]);    
    })
    window.location.href='index.html'
}

function validarDados() {
    var nome  = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("senhaC").value;
    
    if(nome.length > 0 && email.length > 0 && senha.length > 0 && confirmaSenha.length > 0){
       senha == confirmaSenha ? salvaruser(nome, email, senha) : alert('Senhas Incorretas!!!')
    } else {
        alert('Todos Os Campos Devem Ser Preenchidos!!')
    }

    }