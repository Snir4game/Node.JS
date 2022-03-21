const { request } = require('express');
const express =require('express');
const { status } = require('express/lib/response');
const res = require('express/lib/response');
const router =express.Router();
const bcryptjs = require('bcryptjs')
let users=[

    {
       email:'Sniramsalem1995@gmail.com',
        password:'Qwerty1234',

    },
    {
        email: 'Amir1221@gmail.com',
        password:'Asd123'
    },
    {
        email:'aviv1999@walla.com',
        password:'123456'
    }

];


router.post('/register',(request,response)=>{
    //const user_email=request.body.email;
    //const user_password=request.body.password;
 
    //אופציה ב
    const {email, password} = request.body;
    const data = users.find(userEmail => users.email == email)
    if(data){
        return response.status(200).json({
            message: 'This email exist try another one'
        })
    } else {

        const hash_password=bcryptjs.hash(password,10);

        users.push({email:email, password: password})
        return response.status(200).json({
            message: `Accout created`,
            users_count:users.length,
            data:users
        })
    }
    // const temp=users.find(x=>x.users.email=='Sniramsalem1995@gmail.com');
    // if(email==users.email &&password==users.password)
    // {
    //     return response.status(200).json({
    //         message:'this email is already Exists'
    //     });
    // }
    // else
    // {
    //     return response.status(200).json({
    //         message:`Welcome ${x.temp}`
    //     })
    // }
    // const{email,password}=request.body;
    // users.push({email:email,password:password});
    
    // return response.status(200).json({
    // message:users
    // });
})

router.get('/Welcome',(request,response)=>{

    return response.status(200).json({
        message :'Welcome to my First Node.js API '
    });

});

router.get('/multi',(request,response)=>{
    return response.status(200).json({
        multi:200*10
    })
})

module.exports = router;