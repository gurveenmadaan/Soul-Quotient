module.exports.homepage = function(req,res){
    return res.render('home',{
        title:'SoulQuoτient | Home Page'
    }); 
}

//pages rendered - functions defined - links directed 
module.exports.home = function(req, res){
    return res.render('index',{
        title:"SoulQuoτient | Home Page"
    }); 
}

module.exports.meetingroom = function(req,res){
    return res.render('meetingroom',{
        title:'SoulQuoτient | Meeting Room'
    }); 
}

module.exports.wellness = function(req,res){
    return res.render('wellness',{
        title:'SoulQuoτient | Wellness Statistics'
    }); 
}

module.exports.subscribe = function (req,res){
    return res.render('subscribe',{
        title:'Join us', 
        message: 'Subscribe to us'
    });
}

module.exports.about = function (req,res){
    return res.render('about');
}

module.exports.mindfuliving = function(req,res){
    return res.render('mindfuliving'); 
}

module.exports.connection = function (req, res) {
    return res.render('subscribe',{
        title: 'Connect With us', 
        message:"Let's Connect"
    }); 
}

// control links on the studyroom page 
module.exports.wellnessresources = function (req, res) {
    return res.render('syllabus'); 
}

module.exports.meditation = function (req, res) {
    return res.render('meditation'); 
}

module.exports.yoga = function (req, res) {
    return res.render('yoga'); 
}

module.exports.manifestation = function (req, res) {
    return res.render('manifestation'); 
}

module.exports.blockchain = function (req, res) {
    return res.render('block'); 
}

module.exports.devops = function (req, res) {
    return res.render('devo'); 
}