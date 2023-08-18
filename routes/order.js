const express=require('express');
const router=express.Router();
const Order=require('../models/Order');
const fetchuser=require('../middleware/fetch');
const { body, validationResult } = require('express-validator');

router.post('/place/:id',fetchuser,async (req, res)=>{
    const{name,city,district,state,pin,payment}=req.body;
    const itemid=req.params.id;
    const ord=new Order({name,city,district,state,pin,payment,itemid,user:req.user.id});
    const placed=await ord.save();
    res.json(placed)
})
router.get('/history',fetchuser,async (req, res)=>{
    try{
    const ord=await Order.find({user: req.user.id});
    res.json(ord);
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Some error occured.")
     }
})
router.get('/details/:id',fetchuser,async (req, res)=>{
    try{
    const ord=await Order.findById(req.params.id);
    res.json(ord);
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Some error occured.")
     }
})
module.exports=router;