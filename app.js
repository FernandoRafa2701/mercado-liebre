const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

const port = 5000;

app.listen(port, () => console.log('Server up: ' + port) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.post('/register',  (req,  res) =>{
    res.redirect('/');
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.post('/login',  (req,  res) =>{
    res.redirect('/');
});
app.post('/', (req, res) =>{
    res.redirect('/')
})