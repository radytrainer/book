
const express = require('express');
const app = express();
const {idList} = require('./check_id')

app.listen( process.env.PORT || 5000, () => console.log("Server starting..."))
app.use(express.json());

let items = [
    {id: 1, name: 'book 1'},
    {id: 2, name: 'book 2'},
    {id: 3, name: 'book 3'},
]

app.get('/items', (req, res) => {
    res.send(items);
});


app.post('/items', (req, res) => {
    let newItem = req.body;
    let id = req.body.id;
    if (!idList.includes(id)) {
        items.push(newItem);
    }else {
       console.log("ID Already Exist!")
    }
    res.send(items);
});

app.use(express.static('public'))