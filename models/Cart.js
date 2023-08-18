const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productid:{
        type: String,
    },
    quantity:{
        type: String,
    }
})
const Cart=mongoose.model("cart", UserSchema);
module.exports=Cart;