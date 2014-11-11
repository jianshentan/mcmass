var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'themcmassproject@gmail.com',
        pass: 'mik3yDunc#'
    }
});

var mailOptions = {
    from: 'McMass ✔ <themcmassproject@gmail.com>', // sender address
    to: 'themcmassproject@gmail.com', // list of receivers
    subject: 'NEW SUBSCRIBER ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '' // html body
};

exports.index = function(req, res){
    res.render('index');
};

exports.email = function(req, res){
    var email =  req.query.email; 
    console.log( email );

    mailOptions.subject = "NEW SUBSCRIBER: " + email;
    mailOptions.text = email;

    res.send( 200 );
    /*
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
    */
};

exports.faq = function(req, res){
    res.render('faq');
};


