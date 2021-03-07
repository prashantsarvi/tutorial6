const express = require('express')
const app= express();
const http= require('http');
const port= process.env.PORT || 3000;

const userRoute= require('./api/routes/userRoute');

app.use('/', (req,res)=> {
    res.status(200).json({
        message: "It Works :D !"
    })
})

app.use('/user', userRoute)

const server= http.createServer(app);
server.listen(port);