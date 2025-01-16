// create web server
const express = require('express');
const app = express();
const port = 3000; // default port to listen
const router = express.Router();
const commentController = require('./controllers/commentController');

app.use(express.json());
