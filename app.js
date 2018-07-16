let express = require('express');

let svgCaptcha = require('svg-captcha');

let path = require('path');

let app = express();

//设置静态托管资源
app.use(express.static('static'));

//使用get方法  访问登陆页面
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/views/login.html'));
})

//生成验证码图片 
app.get('/login/captchaImg',(req,res)=>{
    var captcha = svgCaptcha.create();
    //打印验证码
    console.log(captcha.text);
    res.type('svg');
    res.status(200).send(captcha.data);
})

//开启监听
app.listen(8080,'127.0.0.1',()=>{
    console.log('success');
})