const express =require('express');
const router =express.Router();

router.get('/Welcome',(request,response)=>{

    return response.status(200).json({
        message :'Welcome to my First Node.js API '
    });

});


module.exports = router;