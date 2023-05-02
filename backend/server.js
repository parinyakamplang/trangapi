const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection ({
      host: "localhost",
      user: "admintrang_pkyoo",
      password: "@Trang_123456.",
      database: "trang_db"  
})

app.get('/',(req, res)=> {
    db.query("SELECT * FROM alert_tb",(err, result)=>{
        if (err){console.log(err);}
        else{res.send(result);}
    });
   
});

app.listen('3001', ()=>{console.log('sever is runing on 3001')})