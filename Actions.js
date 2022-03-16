const { request } = require('express');
const express =require('express');
const res = require('express/lib/response');
const router =express.Router();

let users=[];


router.post('/register',(request,response)=>{
    //const user_email=request.body.email;
    //const user_password=request.body.password;
 
    //אופציה ב
    const{email,password}=request.body;

    users.push({email:email,password:password});
    return response.status(200).json({
    message:users
    });
})

router.get('/Welcome',(request,response)=>{

    return response.status(200).json({
        message :'Welcome to my First Node.js API '
    });

});


module.exports = router;