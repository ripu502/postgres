const express = require('express');
const client = require('./config/database');
const router = require('./routes/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, () => {
    client.connect()
        .then(() => {
            console.log('connected to database');
            console.log(`server is running at http://localhost:3000`);
        }).catch(err => {
            console.log(`some err is occures ${err}`);
        })
})

app.use(router);