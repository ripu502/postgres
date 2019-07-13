const { Client } = require('pg');
const keys = require('../config/keys')

module.exports =  client = new Client({
    user: "postgres",
    password: keys.password,
    host: "localhost",
    port: 5432,
    database: "learn502"
})