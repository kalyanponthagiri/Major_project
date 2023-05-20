const {Client}=require('pg')
const client=new Client({
    host:"localhost",
    port:5432,
    user:'postgres',
    password:'Kalyan:"',
    database:'onlinevidya'
})
client.connect()
client.query("SELECT * FROM students",(err,result)=>{
    if(!err){
        console.log(result.rows)
    }
    client.end()
})