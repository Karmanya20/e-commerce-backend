const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    category: String
})
const Category=mongoose.model("category", UserSchema);
module.exports=Category;