var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var groupPosts = require('./groupPosts.json');
var groupData = require('./groupData.json');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
    next();
})

/
app.get('/:group', function (req, res, next) {
    console.log("== url params for request:", req.params);
    var group = req.params.group;
    var postData = groupPosts[group];
    if (postData) {
        var templateArgs = {
            groupPost: postData.posts,
            groupInfo: groupData,
            title: "CS 290 Final - " + group
        };
        res.render('mainPage', templateArgs);
    } else {
        next();
    }
});

app.get('/groups/:group', function (req, res, next) {
	console.log("== url params for request:", req.params);
	var group = req.params.group;
	var grupData = groupData[group];
	if (grupData) {
		var templateArgs = {
			name: grupData.name,
			photo: grupData.photo,
			posts: grupData.posts
		}
		res.render('???', templateArgs);
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
