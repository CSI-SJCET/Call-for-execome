// Import nodemailer module
const nodemailer = require('nodemailer');

// Create transporter object
function emailer(email){
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
  to: email,
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
    
 module.exports =emailer;