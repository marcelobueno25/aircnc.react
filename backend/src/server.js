const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://oministack:oministack@cluster0-shard-00-00-mkve6.mongodb.net:27017,cluster0-shard-00-01-mkve6.mongodb.net:27017,cluster0-shard-00-02-mkve6.mongodb.net:27017/semana09?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(3333);
