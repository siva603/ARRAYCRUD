const express=require('express');
const app=express();
const cors=require("cors");
const {v4} =require('uuid');

app.use(express.json());
app.use(cors({origin:"*"}))

let users=[];
function values(){
    const data=[
        {
            name:"siva",
            age:20,
            roll:"student",
            id:""
        },
        {
            name:"ravi",
            age:20,
            roll:"student",
            id:""
        },
        {
            name:"manoj",
            age:20,
            roll:"student",
            id:""
        },
        {
            name:"anil",
            age:20,
            roll:"student",
            id:""
        },
        {
            name:"balaji",
            age:20,
            roll:"student",
            id:""
        },
        {
            name:"hemanth",
            age:20,
            roll:"student",
            id:""
        },
        {
            name:"hitesh",
            age:20,
            roll:"student",
            id:""
        }
    ];
    data.map(item=>{
        item.id=v4();
    })
    data.map(item=>{
        users.push(item)
    })
}
values();
app.get('/',(req,res)=>{
    return res.send('welcome to server');
})
app.get('/users',(req,res)=>{
    res.status(200).send(users);
});
app.get('/user/:id',(req,res)=>{
    let uid=req.params.id;
    users.filter(item=>{
        if(item.id===uid)
        return    res.status(200).send(item)
    })
});
app.post('/user', async (req,res)=>{
   try{
    if(req.body.name&&req.body.age&&req.body.roll){
    await users.map(item=>{
        if(item.name===req.body.name){
            return res.status(400).send("User already existed");
        }
    })
    users.push({...req.body,id:v4()})
    return res.send('user added succussfully');
    }
    else{
    return res.status(400).send("Empty details");
    }
    
   }
   catch(err){
    console.log(err)
    if(err)
    return res.status(500).send("Server error");
   }
});

app.put('/user/:id',(req,res)=>{
    try{
    const item=users.find((user)=> user.id===req.params.id)
    if(!item){
        return res.status(400).send("user doesn't existed");
    }
    item.name=req.body.name;
    item.age=req.body.age;
    item.roll=req.body.roll;
    return res.status(200).send("user updated succussfully")
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).send("server error")
    }
    
});
app.delete('/user/:id',(req,res)=>{
    var uid=req.params.id;
    users=users.filter(item=>item.id!==uid);
    res.status(200).send('user deleted succussfully')
})
app.listen(4000,()=> console.log(`server is running on ${4000}`))