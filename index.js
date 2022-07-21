    const express=require("express")
    const app=express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }));

    app.use("/api/bills",require('./Routes/billRouter'))

    app.listen(5002,()=>{console.log('Listening on port 5002...!')})