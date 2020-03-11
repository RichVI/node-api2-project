const express = require('express');

const postsRouter = require('../posts/posts-router');

const server = express();

// The router handles endpoints that begin with /api/hubs
server.use('/api/posts', postsRouter);

server.use(express.json());

module.exports = server;





// const postsRouter = require("../posts/posts-router");

// const server = express();

// server.use(express.json());

// server.get("/", (req, res) => {
//   res.send(`<p>API server for posts<p>`);
// });

// server.use("/api/posts", postsRouter);

// module.exports = server;