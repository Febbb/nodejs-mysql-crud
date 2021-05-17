
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const body = require('body-parser');
const db = require("./config/db");
const methodOverride = require("method-override");

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(methodOverride("_method"));
app.use(express.static('publik'));
app.use(body.urlencoded({extended:false}));

const crudRouter = require("./routes/crudRouter");
app.use("/crud",crudRouter);

server.listen(3010,function(){
	console.log('server 3010')
})