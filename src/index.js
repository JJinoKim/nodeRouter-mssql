require('dotenv').config();
var sql = require('mssql'); // mssql
const {USER,PASSWORD,SERVER,PORT,DATABASE} = process.env;




/*
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
var sql = require('mssql'); // mssql

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const {USER,PASSWORD,SERVER,PORT,DATABASE} = process.env;

const api = require('./api');

const app = new Koa();
const router = Router();

var config = {
    user : USER,
    password : PASSWORD,
    server : SERVER,
    port : PORT,
    database : DATABASE,
    stream : true
}

sql.connect(config, function(err){
    var request = new sql.Request();
    request.stream = true;
    request.query("select * from PRE_POSITION_X where collect_date = '2014-12-08'");
    request.on('row', function(row) {
        console.log('name      : '+ row); 
    });

    request.on('error', function(err) {
        console.log(err); 
    });
 
    request.on('done', function(returnValue) {
        console.log('Data End'); 
    });
})

// router setting
router.use('/api', api.routes()); // api 라우트 적용

// router 적용 전에 bodyparser 적용
app.use(bodyParser());

// api 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());


app.listen(4000, ()=>{
    console.log('Listening to port 4000');
});

*/