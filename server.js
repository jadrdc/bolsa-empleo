const express = require('express');
const parameter = require('./config/parameter');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const ejsmate = require('ejs-mate');
//Routes Import
const categoryRouting = require('./routes/categoryRouter');
const permissionRouting = require('./routes/permissionRouter');
const jobsRouting = require('./routes/jobRouter');
const mainRouting = require('./routes/mainRouter');

const app = new express();


app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(categoryRouting);
app.use(permissionRouting);
app.use(jobsRouting);
app.use(mainRouting);

app.use(express.static(__dirname+'/static'));

// Global Connection to Databaseññ
parameter.mongoose.connect(parameter.database, function(err) {
    if (err) {
        console.log('Unable to Connect due to ' + err)
    } else {

        console.log('Connected')
    }
});


app.listen(parameter.port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The App is up and running");
    }
});
