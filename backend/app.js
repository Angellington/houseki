const express = require('express');
const app = express();
const logger = require('morgan');

//libs
require('dotenv').config();
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggrJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hello World',
            version: '1.0.0',
        },
    },
    apis: ['./app.js', './routes/*.js'],
};

const swaggerDocs = swaggrJsDoc(swaggerOptions);

//Router
const Router = express.Router();

//Routes
const HousekiRoute = require("./routes/Houseki")

//app.set
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//routes imports

//Middlewares
app.use(logger("tiny"))
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/v1", Router)

const port = process.env.PORT || 3000

//Routers

Router.use("/houseki", HousekiRoute);


//Default routes
 

app.listen(port, () => {
    console.log(`Server is listening at PORT ${port}`)
})