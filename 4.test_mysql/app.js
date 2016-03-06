var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '****'
});
//데이터베이스 서버 접속
connection.connect(function (err) {
    if(err) console.log(err);
});
// 새로운 nodejs 데이터베이스 만들기
connection.query('create database nodejs',function (err) {
    if(err) console.log(err);
});
// 데이베이스 선택하기
connection.query('use nodejs',function (err) {
    if(err) console.log(err);
});
// 테이블 생성
connection.query('create table family(id INT(3) AUTO_INCREMENT, name VARCHAR(20), PRIMARY KEY(id))',function (err) {
    if(err) console.log(err);
});
// family 테이블에 데이터 넣기
connection.query('insert into family (name) values (?)',"Metashower",function (err) {
    if(err) console.log(err);
});
connection.query('insert into family (name) values (?)',"쩌리",function (err) {
    if(err) console.log(err);
});
connection.query('insert into family (name) values (?)',"Yoon Hyunchul",function (err) {
    if(err) console.log(err);
});
 
// family 테이블에서 모든 테이터를 가져와 출력한다.
connection.query('select * from family',function (err, result, fields) {
    if(err) console.log(err);
    console.log("result");
    console.log(result);
    console.log("fields");
    console.log(fields);
})
 
connection.end();