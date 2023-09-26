const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const database=require("mysql")

const connect=express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))

let databaseconnection=database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Boo#1234",
    database:"emp"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
})

connect.get('/getdata',(request,response)=>{
    let sql='select * from admins'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.get('/getsingle/:aid',(request,response)=>{
    let {aid}=request.params
    let sql='select * from admins where aid=?'
    databaseconnection.query(sql,[aid],(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.post('/inserted',(request,response)=>{
    let {firstname,lastname,phoneno,email,city,password,roll}=request.body
    let sql='insert into register(firstname,lastname,phoneno,email,city,username,password,roll)values(?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql,[firstname,lastname,phoneno,email,city,email,password,roll],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

connect.post('/login',(request,response)=>{
    let {username,password}=request.body
    let sql='select * from register where username=?'
    databaseconnection.query(sql,[username],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
        }
        else if(result.length>0){
            let dbusername=result[0].username
            let dbpassword=result[0].password
            let id=result[0].id
            var roll=result[0].roll
            if(dbusername===username && dbpassword===password){
                response.send({"status":"success","id":id,"roll":roll})
            }
            else{
                response.send({"status":"invalid_user"})
            }
        }
        else{
            response.send({"status":"error"})
        }
    })
})

connect.post('/delete',(request,response)=>{
    let aid=request.body.aid
    let sql='delete from admins where aid=?'
    databaseconnection.query(sql,[aid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"sucess"})
        }
    })
})

connect.put('/update/:aid',(request,response)=>{
    let {aid}=request.params
    let {image,title,detail,price}=request.body
    let sql='update admins set image=?,title=?,detail=?,price=? where aid=?'
    databaseconnection.query(sql,[image,title,detail,price,aid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})

connect.listen(1011,()=>{
    console.log("Your server is running in port 1011")
})