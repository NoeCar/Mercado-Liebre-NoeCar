const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));

/* app.listen(3001, () => { console.log('Servidor corriendo')}); */
const port = process.env.PORT || 3001;
app.listen(port,() => console.log('servidor corriendo en el puerto ${port}'));

app.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, './views/home.html'))}); 

app.get('/register', (req,res) => { res.sendFile(path.resolve(__dirname, './views/register.html'))});

app.post('/register', (req,res) => { res.send('Recibiendo el formulario de registro')});

app.get('/login', (req,res) => { res.sendFile(path.resolve(__dirname,'./views/login.html'))});

app.post('/login', (req, res) => { res.send('Recibiendo el formulario de login')});