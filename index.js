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
    res.render('inicio.html')
})
app.get('/contatos' , (req, res) =>{
    res.render('contatos.html')
})
app.get('/projetos' , (req, res) =>{  
    res.render('projetos.html')
});
app.get('/contatos' , (req, res) =>{
    res.render('contatos.html')
})
app.get('/curriculo' , (req, res) =>{
    res.render('curriculo.html')
})
app.get('/testador' , (req, res) =>{
    console.log(req.query.conteudo)
    let lista = fs.readdirSync('templates')
    if(lista.includes(req.query.conteudo)){
        res.render('testador.html',{conteudo: req.query.conteudo})
    }else{
        res.render('projetos.html')
    }    
})
app.get('*' , (req, res) =>{
   
    res.render('pag_404.html')
})

app.listen(3000,() =>{
    console.log('ok')
} )
