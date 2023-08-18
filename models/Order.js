const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    itemid:{
        type: String,
    },
    name:{
        type: String,
    },
    city:{
        type: String,
    },
    district:{
        type: String,
    },
    state:{
        type: String,
    },
    pin:{
        type:String
    },
    payment:{
        type: String,
    }
})
const Order=mongoose.model("order", UserSchema);
module.exports=Order;