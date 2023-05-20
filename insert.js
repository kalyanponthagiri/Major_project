const {Client}=require('pg')
const client=new Client({
    host:"localhost",
    port:5432,
    user:'postgres',
    password:'Kalyan:"',
    database:'onlinevidya'
})
client.connect()
client.query("INSERT INTO students VALUES (01,'Kalyan',7093354346,'kalyanponthagiri@gmail','Web development')",(err,result)=>{
    if(!err){
        console.log("Data Inserted successfully")
    }
    client.end()
})