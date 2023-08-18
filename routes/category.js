const express=require('express');
const Category=require('../models/Category')
const Products=require('../models/Products')
const router=express.Router();
const { body, validationResult } = require('express-validator');
router.get('/category',async(req,res)=>{
    try{
    const cat=await Category.find();
    res.json(cat)
    } catch (error) {
        console.error(error.message);
    res.status(500).send("Some error occured.")
     }
})
router.post('/sell/:id',async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
     }
     try{
    const {title,price,description,availability,seller,details}=req.body;
    let category=req.params.id;
    const pro=new Products({title,price,description,availability,category,seller,details})
    const posted=await pro.save();
    res.json(posted)
     } catch (error) {
        console.error(error.message);
    res.status(500).send("Some error occured.")
     }
})

module.exports=router;