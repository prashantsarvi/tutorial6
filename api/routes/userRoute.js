const express= require('express');
const router= express.Router();

const searchUser= require('../controllers/userController');

const userData = require('../model/userModel');

const userController = require('./controllers/userController');

router.get('/', (req,res)=>{
    res.status(200).json(userData)
})

router.get('/specific/:uuid', (req,res)=>{
    try
    {let userId = req.params.uuid;
    const user= searchUser("uuid", userId);
    // console.log(user);
    res.status(200).json(user);}
    catch (err){
        console.log(err);
        res.status(406).json({
            success: false,
            message: "user not found"
        })
    }
})

router.put('/user/:email', controllers.userController.updatedUser);

router.post('/user', controllers.userController.addingUser);

router.get(['/user/:username', '/user'], controllers.userController.getUserName);

module.exports = router;