class billModel{
    constructor(id,amount,billDate,dueDate,name){
        this.id=id;
        this.amount=amount;
        this.billDate=billDate;
        this.dueDate=dueDate;
        this.name=name;
    }
}

module.exports=bill;