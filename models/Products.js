const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    title:{
        type: String,
    },
    price:{
        type: String,
    },
    description:{
        type: String,
    },
    availabitlity:{
        type: String,
    },
    category:{
        type: String
    },
    seller:{
        type: String
    },
    details:{
        type: String
    }
})
const Products=mongoose.model("products", UserSchema);
module.exports=Products;