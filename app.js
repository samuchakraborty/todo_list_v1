const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const date = require(__dirname +'/date.js');
//console.log(date);

app.set('view engine', 'ejs');

var items = ["Buy food", "Eat lunch", "go to gym"];
var workList = [];

app.get('/', function (req, res) {

    //var num = 3+5;
    // res.write(num.toString());
    
    //var day = "";
    // if (today.getDay() === 5) {
    //     day = "Sunday";
    // } else {
    //     day = "Sunday";
    // }

    // switch (today.getDay()) {
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thursday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         break;
    // }

let day = date.getDay();
 

    res.render('list', {
        listOfTitle: day, newListItem: items
    });

    //res.send();

})


app.post('/', function (req, res) {
   console.log(req.body);
    var item = req.body.name;
    //console.log(heelo.toString());
    //  console.log(heelo);
   
if(req.body.save === "Work"){
    workList.push(item);
    res.redirect('/work');
}
else{
    items.push(item);
    res.redirect('/');
}

    

    //res.sendFile(__dirname + "/index.html");
})


app.get('/work', function (req, res) {

    res.render('list', {
        listOfTitle: 'Work List',
        newListItem: workList
    })
});

app.post('/work', function (req, res) {

    var item = req.body,name;
    workList.push(item);

    res.redirect('/work');


})
app.get('/about', function (req, res){

    res.render('about');
})


app.listen(port, function () {

    console.log('listening on port ' + port);
})