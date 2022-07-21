const express=require("express")
const app=express()
var bills=[{id:1, amount: 100},{id:2, amount: 100},{id:3, amount: 100}]

app.listen(5002,()=>{console.log('Listening on port 5002...!')})

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.get("/api/bills",(req,resp)=>{
    resp.send(bills);
})

app.get("/api/bills/:id",(req,resp)=>{
    const bill=bills.find(b=>b.id===parseInt(req.params.id));
    if(!bill) return resp.status(404).send('Resource not Found.!');
    resp.send(bill);
})

app.post("/api/bills",(req,resp)=>{
    const bill={
        id:bills.length+1,
        amount:req.body.amount
    }
    bills.push(bill);
    resp.send(bill);
})

app.put("/api/bills/:id",(req,resp)=>{
    const bill=bills.find(b=>b.id===parseInt(req.params.id));

    if(!bill) return resp.status(404).send('Resource not Found.!');
    bill.amount=req.body.amount
    resp.send(bill)
})

app.delete("/api/bills/:id",(req,resp)=>{
    const index=bills.findIndex(x=>x.id===parseInt(req.params.id));
    if(index<0) return resp.status(404).send('Resource not Found.!');
    bills.splice(index,1);
    resp.send(req.params.id);
})
