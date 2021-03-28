const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
let user=models.User;
let categoria=models.Categoria;
let anotacao=models.Anotacao;

app.get('/create',async(req,res)=>{
    let create=await user.create({
        email: "mike@dev.com",
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuario criado com sucesso!');
});

app.get('/read', async (req,res)=>{
    let read=await user.findAll( options,{
        raw:true,
    });
    console.log(read);
});

let port=process.env.Port || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando')
});