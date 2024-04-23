const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', function(req, res) {
    res.render('index'); // Assuming you have an index.ejs file in your views directory
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
