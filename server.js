const express = require('express');
const app = express();

const appRouter = require('./routes/routes');
app.use('/', appRouter);

const PORT = process.env.PORT || 5005; 
// Port 5005 is indicated as the proxy in /client/package.json
app.listen(PORT);
console.log(`server.js: listening to (port) ${PORT}`);
