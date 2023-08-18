const express=require('express');
const router=express.Router();
const Cart=require('../models/Cart');
const fetchuser=require('../middleware/fetch');
const { body, validationResult } = require('express-validator');

router.post('/add/:id',body('quantity').isLength({min: 1}),fetchuser,async (req,res)=>{
    const quantity=req.body.quantity;
    const productid=req.params.id;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
     }
    try {
        const car=new Cart({productid,quantity,user:req.user.id})
        const saved=await car.save();
        res.json(saved);
     } catch (error) {
        console.error(error.message);
    res.status(500).send("Some error occured.")
     }
})
router.get('/view',fetchuser,async(req,res)=>{
    try {
        const crt=await Cart.find({user: req.user.id})
        res.json(crt)   
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured.")
    }
})
router.put('/update/:id',fetchuser,async(req,res)=>{
    const newNode={}
    const quantity=req.body.quantity;
    if(quantity){newNode.quantity=quantity}
            let crt=await Cart.findById(req.params.id);
            if(!crt){
                return res.status(404).send("Not found")
            }
            crt = await Cart.findByIdAndUpdate(req.params.id,{$set:newNode})
            res.json(crt);
})
router.delete('/remove/:id',fetchuser,async (req, res)=>{
    let crt=await Cart.findById(req.params.id);
    if(!crt){
        return res.status(404).send("Not found")
    }
    crt = await Cart.findByIdAndDelete(req.params.id)
    res.json(crt);
})
module.exports=router;