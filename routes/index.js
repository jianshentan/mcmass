var emails = [];

exports.index = function(req, res){
    res.render('index');
};

exports.email = function(req, res){
    var email =  req.query.email; 
    emails.push( email );
    res.send( 200 );
};

exports.faq = function(req, res){
    res.render('faq');
};

exports.shop = function(req, res){
    res.render('shop');
};

exports.subscribers = function(req, res) {
    res.render('subscribers', { subscribers: emails });
};



