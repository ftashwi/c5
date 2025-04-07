var express = require("express");
require(`./db`)

var app=express();
var port=3000;
var empModel=require("./empolye")
app.use(express.json())
app.post('/',(req,res)=>{
    try{
        empModel(req.body).save();
        res.send("data added")
    }catch(error) {
        res.send(error)
console.log
    }
})

app.get('/',async(req,res)=>{
    try{
        var data = await empModel.find();
        res.send(data)
    }catch (err){
        res.send(err)
    } 

})
//to delete
app.delete('/:id', async(req,res)=>{
    try{
        await empModel.findByIdAndDelete(req.params.id);
        res.send("Data deleted")
    }catch(error) {
        res.send(error)
    }
})
//to update
app.put('/:id',async(req,res)=>{
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("Edited")
    } catch (error) {
        res.send(error)
    }
})
app.listen(port,()=>{
    console.log(`server is up and running in${port}`)
});