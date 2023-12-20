const express = require('express');
var cors = require('cors');
var path = require('path');
var projectDBRouter = require('./routes/projectDB');
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/sampleAPI');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/projectDB', projectDBRouter);
app.use('/', indexRouter);
app.use('/sampleAPI', apiRouter);

// app.get('/', (req, res) => {
//     res.send('Project Database Backend')
// });

app.listen(9000, () => {
    console.log('running on port 9000');
});

module.exports = app;