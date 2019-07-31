const express = require("express");

const server = express();

// global 'use' pipeline
server.use(logger);

server.get("/", (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
});

// custom middleware
function logger(req, res, next) {
    const now = new Date().toGMTString();
    console.log(req.method, req.url, now);
    next();
}

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = server;
