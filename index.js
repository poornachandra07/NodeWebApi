var express=require("express")
const app=express()

app.listen(5002,()=>{console.log('Listening on port 5002...!')})

app.get("/",(req,resp)=>{
    resp.send("hello world..!");
})