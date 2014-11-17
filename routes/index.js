var fs = require( 'fs' ),
    api_key = fs.readFileSync( 'send_grid_api_key', 'utf8' ),
    api_key = api_key.replace(/(\r\n|\n|\r)/gm,"")
    sendgrid  = require('sendgrid')("mcmass", api_key);

exports.index = function(req, res){
    res.render('index');
};

exports.email = function(req, res){
    var email =  req.query.email; 

    var sgEmail = new sendgrid.Email({
        to:       email,
        bcc:      'themcmassproject@gmail.com',
        from:     'themcmassproject@gmail.com',
        subject:  "Thanks for Subscribing to the McMass Campaign: " + email,
        text:     "Thanks for subscribing! \n We'll keep you posted with only our most exciting updates! \n"
    });

    sendgrid.send(sgEmail, function(err, json) {
        if (err) { return console.error(err); }
            console.log(json);
    });

    res.send( 200 );
};

exports.faq = function(req, res){
    res.render('faq');
};

exports.shop = function(req, res){
    res.render('shop');
};


