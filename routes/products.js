const express=require('express');
const Products=require('../models/Products')
const router=express.Router();
router.get('/fetchproducts/:id',async(req,res)=>{
    try{
    const pro=await Products.find({category: req.params.id},{"details":0, "seller": 0, "category":0});
    res.json(pro)
    }
    catch (error) {
        console.error(error.message);
    res.status(500).send("Some error occured.")
     }
})
router.get('/details/:id',async(req,res)=>{
    try{
    const pro=await Products.findById(req.params.id)
    res.json(pro)
    }catch (error) {
        console.error(error.message);
    res.status(500).send("Some error occured.")
     }
})
module.exports=router;