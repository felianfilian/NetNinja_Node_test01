var express = require('express');
var app = express();

app.get('/profile/:name', function (req, res) {
  var data = {
    age: 29,
    job: 'ninja',
    hobbies: ['eating', 'fighting', 'jumping'],
  };
  res.render('profile.ejs', { person: req.params.name, data: data });
});

app.listen(3000);
