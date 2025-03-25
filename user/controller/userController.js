const asynchandler = require('express-async-handler')
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports.register = asynchandler(async(req , res) =>{
    const{name,email,password} = req.body;
    const user = await userModel.findOne({email});

    if(user){
        return res.status(400).json({message: "user already exists"});
    }

    const hash = await bcrypt.hash(password,10);
    const newuser = new userModel({name,email,password:hash});
    await newuser.save();

    const token = jwt.sign({id: newuser._id }, process.env.JWT_SECRET,{expiresIn :'1h'}  )

    res.cokkie('token',token );
    res.status(201).json({ message: "User registered successfully", token });
})

