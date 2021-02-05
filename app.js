const { static } = require('express');
const express  = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = '8001'

const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//For EXPRESS ----
app.use('/static', express.static('static'));  //for static file in app using predefined Static file 
//app.use(express.urlencoded);  //To extract the data from the website to the app.js file

//app.use('/css',express.static(__dirname +'/css'));

//For PUG ----
app.set('views', path.join(__dirname, 'views'));  //setting views/template directory for pug
app.set('view engine', 'pug');  //Pug is a template engine for Node. js


//END Points---
app.get('/', (req, res)=>{
    const con = "This is the best website to order the food"
    const params = {'title': 'Food delivery website', "content": con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req,res) =>{
    names = req.body.names
    email= req.body.email
    phone= req.body.phone
    message= req.body.message

    let outputToWrite = `customer name is ${names}, email id ${email}, phone no ${phone} and message ${message}`
        fs.writeFileSync('output.txt', outputToWrite)
        const params = {'message': 'Your form has been submitted successfully'}
        res.status(200).render('index.pug', params);
})

app.listen(port, () => {
    console.log(`listening to port no ${port}`);
});
