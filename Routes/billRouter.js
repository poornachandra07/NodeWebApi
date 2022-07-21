    const express = require('express')
    const router = express.Router()

    var bills=[{id:1, amount: 100},{id:2, amount: 100},{id:3, amount: 100}]

    router.get('/',(req,resp)=>{
        resp.send(bills);
    })

    router.post("/",(req,resp)=>{
        const bill={
            id:bills.length+1,
            amount:req.body.amount
        }
        bills.push(bill);
        resp.send(bill);
    })

    router.put("/:id",(req,resp)=>{
        const bill=bills.find(b=>b.id===parseInt(req.params.id));

        if(!bill) return resp.status(404).send('Resource not Found.!');
        bill.amount=req.body.amount
        resp.send(bill)
    })
    
    router.delete("/:id",(req,resp)=>{
        const index=bills.findIndex(x=>x.id===parseInt(req.params.id));
        if(index<0) return resp.status(404).send('Resource not Found.!');
        bills.splice(index,1);
        resp.send(req.params.id);
    })

    module.exports = router