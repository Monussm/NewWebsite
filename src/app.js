const express=require ('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const mypath=path.join(__dirname,"../public")
const mypartials=path.join(__dirname,"../partials")
app.use(express.static(mypath))
app.set("view engine","hbs")
hbs.registerPartials(mypartials)
app.get("/",(req,res)=>{

res.render('index')


})
app.listen(3000)