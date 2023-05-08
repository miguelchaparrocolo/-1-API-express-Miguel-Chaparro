const express = require('express');
const morgan = require('morgan') ;

     const {
    handleGetAllData,
    handleGetDataById,
    handleCreateData,
    handleUpdateData,
    handleDeleteData,
    handleLogin,
     } = require('./controlador');

const app = express();
const port = 3001;

app.use(express,json());

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.send('Phonebook has infp for 4 people');    
});

app.get('/', (req, res)=>{
    let now = new Date();
    res.send(now);
});

app.get('/api/persons', handleGetAllData);

app.get('/api/persons/:id', handleGetDataById);

app.post('/api/persons', handleCreateData);

app.patch('/api/persons/:id', handleUpdateData);

app.delete('/api/persons/:id', handleDeleteData);

app.post('/login', handleLogin);

app.listen(port, () => {
    console.log(`Runing at http://localhost:${port}`);
});
