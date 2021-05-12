const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
//const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//middleware (use)
//app.use(express.static('./assets'));
//app.use(expressLayouts);


//app.set('layout-extractStyles',true);
//app.set('layout extractScripts',true);

app.use(express.urlencoded());
app.use(cookieParser());


app.use('/',require('./routes/index'))


app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
   if(err)
   console.log(`Error occured ${err}`);
   else
   console.log(`Server is running at port ${port}`);
});