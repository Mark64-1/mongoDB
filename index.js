const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/key');
const {User} =  require("./models/User");

//application/x-www-form-urlencoded 아마..?
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log("MongoDB Connected...")).catch(err=>console.log(err));

app.get('/',((req, res) => res.send('hello World!')));

app.post('/register',((req, res) => {

    const user = new User(req.body)

    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })

}))

app.post('/login',(req,res)=>{

    User.findOne({email:req.body.email},(err,user)=>{
        if(!user){
            return res.json({
                loginSuccess: false,
                message:"제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
<<<<<<< HEAD:index.js

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch)return res.json({loginSuccess:false,message:"비밀번호가 틀렸습니다."})
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie("x_auth",user.token)
                    .status('200')
                    .json({loginSuccess: true,userId: user._id})
            })


        })
    })




=======
        User.findOne({password:req.body.password},(err,user)=>{
            if(!user)return res.json({loginSuccess:false,message:"비밀번호가 틀렸습니다."})
            res.json({message:"로그인에 성공했습니다."})
        })

        // user.comparePassword(req.body.password,(err,isMatch)=>{
        //     if(!isMatch)return res.json({loginSuccess:false,message:"비밀번호가 틀렸습니다."})
        //     user.generateToken((err,user)=>{
        //         if(err) return res.status(400).send(err);
        //         res.cookie("x_auth",user.token)
        //             .status('200')
        //             .json({loginSuccess: true,userId: user._id})
        //     })
        // })
    })




>>>>>>> parent of 5a3439c... 클라이언트/서버 구분:server/index.js
})

app.listen(port,()=>console.log('Example app listening on port ${port}!'));
