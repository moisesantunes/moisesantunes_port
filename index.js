const express = require('express');
const path = require('path');
const fs = require('fs')
const app = express();
const nunjucks= require('nunjucks')
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.use(express.static('public'));
app.use('/templates', express.static(path.join(__dirname, 'templates')))

//app.use('templates',express.static('templates'));

app.get('/' , (req, res) =>{
    res.render('index.html')
})
app.get('/inicio' , (req, res) =>{
    res.render('inicio.html')
})
app.get('/projetos' , (req, res) =>{
   
    res.render('projetos.html')
})

app.get('/testador' , (req, res) =>{
    console.log(req.query.conteudo)
    let lista = fs.readdirSync('templates')
    if(lista.includes(req.query.conteudo)){
        console.log('tem')
        res.render('testador.html',{conteudo: req.query.conteudo})
    }else{
        console.log('nao tem')
        res.render('projetos.html')

    }
    // console.log(lista)

    
})


app.listen(3000,() =>{
    console.log('ok')
} )
