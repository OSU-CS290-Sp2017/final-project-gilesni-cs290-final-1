var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var groupPosts = require('./groupPosts.json');
var groupData = require('./groupData.json');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
    console.log("== root path requested");
    var postData = groupPosts['general'];
    console.log("", postData);
    if (postData) {
        var templateArgs = {
            groupPost: postData.posts,
            groupInfo: groupData,
            title: "CS 290 Final - general"
        };
        res.render('mainPage', templateArgs);
    } else {
        console.log("Direct path requested.");
        next()
    }


});

app.get('/:group', function (req, res, next) {
    var group = req.params.group;
    if (group == '')
        group = 'general'
    console.log("== url params for request:", req.params);
    var postData = groupPosts[group];
    if (postData) {
        var templateArgs = {
            groupPost: postData.posts,
            groupInfo: groupData,
            title: "CS 290 Final - " + group
        };
        res.status(200).render('mainPage', templateArgs);
    } else {
        next();
    }
});

app.post('/:groups/newMessage', function (req, res, next) {
    if (req.params.groups == '')
        group = 'general'
    else
        var group = groupPosts[req.params.groups];
    if (group) {
        if (req.body && req.body.user) {
            var post = {
                user: req.body.user,
                text: req.body.text
            };
            console.log("post: ", post);
            group.posts= group.posts|| [];

            group.posts.push(post);
            fs.writeFile('groupPosts.json', JSON.stringify(groupPosts), function (err) {
                if (err) {
                    res.status(500).send("Unable to save post to \"database\".");
                } else {
                    res.status(200).send();
                }
            });

        } else {
            res.status(400).send("Person must have a name.");
        }

    } else {
        next();
    }
});


app.get('*', function (req, res) {
    res.status(404).render('404Page');
});

var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("Server listening on port", port);
});
