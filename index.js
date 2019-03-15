const express = require('express');
const app = express();



app.use(express.static('public'));
app.get('/file/:arq' , (req, res) =>{
    let arquivo = req.params.arq;
    console.log(arquivo)
    res.sendFile( __dirname+"/public/"+arquivo)

})



app.listen(3000,() =>{
    console.log('ok')
} )
