require ('dotenv').config();
const cors = require('cors');
const express = require("express");

const app = express();
const port = process.env.PORT;
const logers = require('./middlewares/loggers.js');
const errors = require('./middlewares/errors.js');
const connectToMongoDB = require('./config/mongoDB.js');


app.use(cors())
app.use(express.json())
app.use(logers.urlLogger)

app.use("/api/users",require('./routes/usersRouter.js'));
app.use("/api/auth", require('./routes/authRouter.js'));

//connect to database
connectToMongoDB();
//not found page
app.all(/.*/,errors.notFoundError)
//global error handler
app.use(errors.ErrorHandler)


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})