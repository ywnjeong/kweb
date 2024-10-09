const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

//get
app.get('/', (req, res) => {
    if (Object.keys(req.query).length>0){
        res.send(Object.keys(req.query).map(k => `${k}: ${req.query[k]}`).join('\n'));
    } else {
        res.send('No query parameters');
    }
});

//post, put, delete
app.post('/', (req, res) => {
    if (Object.keys(req.body).length>0){
        res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
    } else {
        res.send('No body parameters');
    }
    //res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
});
app.put('/', (req, res) => {
    if (Object.keys(req.body).length>0){
        res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
    } else {
        res.send('No body parameters');
    }
    //res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
});
app.delete('/', (req, res) => {
    if (Object.keys(req.body).length>0){
        res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
    } else {
        res.send('No body parameters');
    }
    //res.send(Object.keys(req.body).map(k => `${k}: ${req.body[k]}`).join('\n'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});


