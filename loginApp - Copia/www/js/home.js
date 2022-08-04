var db = openDatabase('senai','1.0','Senai TDS',2*1024*1024);
db.transaction(function (tx){
    var sql = 'CREATE TABLE IF NOT EXISTS usuarios';
    sql += '(iduser integer primary key,';
    sql += 'nome,login,senha)';
    sql  = 'INSERT INTO usuarios (nome,login,senha)';
    sql += ' values("Senai TDS - Noite","senaitdsn",123)'; 
    console.log(sql);
    //tx.executeSql(sql);
})

//não mexer no codigo acima;

function Acesso() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("senha").value;
    db.transaction(function (tx){
        var sql = 'Select * from usuarios ';
            sql += ' where login = ?';
        console.log(sql);

        tx.executeSql(sql,[user], function (tx,results){
            var nunReg = results.rows.length;
            if(nunReg == 0){
                alert("Usuario não cadastrado.")
            } else {
                window.location.assign('principal.html')
            }
        },null)
    }) 
}    