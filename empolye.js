var mongoose=require("mongoose");
var empSchema=mongoose.Schema({
    empName:String,
    empAge:Number,
    empDept:String,
    empSal:Number

})
var empModel= mongoose.model("employe",empSchema);
module.exports=empModel