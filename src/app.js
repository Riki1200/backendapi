const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
//const { graphql } = require('graphql');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//const schema = {}


const Schema = require('./schema');
app.use('/__graphql', graphqlHTTP({
    graphiql: true,
    schema: Schema
}))






module.exports = app;