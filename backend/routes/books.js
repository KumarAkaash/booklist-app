const express = require('express');
const requirelogin = require('../middleware/requirelogin');
const router = express.Router();
const BOOK = require('../models/book');

// post books
router.post('/addnote', requirelogin,async (req,res)=>{
    try{        
        const book = await BOOK.create(req.body);
        return res.status(200).json({
        book,
        message: "Note added successfully"
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })  
    }
})

// display all books
router.get('/book', requirelogin, async (req,res)=>{
    try{
        const book = await BOOK.find();
        return res.status(200).json({
            status: "success",            
            book,        
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})

// find specific book
router.get('/book/:id', requirelogin,async (req, res)=>{
    try{
        const book = await BOOK.findById({_id: req.params.id});
        return res.status(200).json({
            status: "success",            
            book,        
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})
// update book
router.put('/update/:id', async (req,res)=>{
    try{
        const book = await BOOK.findByIdAndUpdate({_id: req.params.id}, req.body);
        const updatedData = await BOOK.findById({_id: req.params.id})
        return res.status(200).json({
            status: "success",            
            updatedData,        
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})

router.delete('/deleteall', requirelogin, async (req,res)=>{
    try{
        const book = await BOOK.deleteMany();
        return res.status(200).json({
            status: "success",            
            message: "Deleted Successfully"     
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})
// delete book
router.delete('/delete/:id', async (req,res)=>{
    try{
        const book = await BOOK.findByIdAndDelete({_id: req.params.id});
        return res.status(200).json({
            status: "success",            
            message: "Deleted Successfully"     
    })
    }
    catch(e){
        return res.status(422).json({    
            status: "failure",        
            error: e.error
        })
    }
})
module.exports = router