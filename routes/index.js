/*Author Akhil*/
var express = require('express');
var router = express.Router();
const db=require('../connection/db')
const mailer=require('./mailer')
const nodemailer=require('nodemailer')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSI' });
  console.log(next);
});
router.post('/home',(req,res,next)=>{
  console.log(req.body)
  form_name=req.body.name;
  form_email=req.body.email;
  form_phone=req.body.phone;
  form_year=req.body.year;
  form_brach=req.body.branch;
  form_college=req.body.college;
  form_programming_knowledge=req.body.programming_knowledge;
  form_web_know=req.body.web_knowledge;
  form_reach=req.body.Reach;
  form_question=req.body.questions;
  
   const date=new Date()
  console.log(date)
  const admin=[[req.body.name,req.body.email,req.body.year,req.body.college,req.body.Reach,req.body.questions,date,req.body.branch,req.body.phone]]
  console.log(admin)
  var view_sql="select * from web_reg where email=?"
  db.query(view_sql,form_email,function(err,result){
    if(err){
      console.log(err)
    }else{
      if(result.length>0){
            
            console.log(result[0].email)
            const msg='Email id already exist';
            res.render('index',{msg})
      }else
      {
        
        var view_sql="select * from web_reg where mob=?"
        db.query(view_sql,form_phone,function(err,result){
          if(err){
            console.log(err)
          }
          else{
            
            if(result.length>0){
              console.log("Phone number already exist");
              const msg2="Phone number already exist";
              console.log(result[0].mob)
              res.render('index',{msg2})
            }else{   
              var sql="INSERT INTO web_reg (name,email,YEAR,Batch,reac,questions,time_date,branch,mob) VALUES ?";
        db.query(sql,[admin],function(err,result){
        if(err){
      
        console.log(err);
     
      
        }else{
     // console.log(result[0])
       console.log('inserted')
       var msg3='successfully registered';
       res.render('success',{msg3})

       const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'csi@sjcetpalai.ac.in',
          pass: 'csi@sjcet123'
        }
      });
      
      // Create email message
      const message = {
        from: 'yourgmailaccount@gmail.com',
        to: form_email,
        subject: 'Registration Confirmation',
        text: 'Hello, Thank you for registering on our website!'
      };
      
      // Send email
      transporter.sendMail(message, function(err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      

        }
      })

          }
          }
          
        })


   
      }
    }
  })





 
    })
module.exports = router;
