const express = require('express');
const app = express();
const port = 8000;

//middleware (use)
app.use('/',require('./routes/index'))


app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
   if(err)
   console.log(`Error occured ${err}`);
   else
   console.log(`Server is running at port ${port}`);
});