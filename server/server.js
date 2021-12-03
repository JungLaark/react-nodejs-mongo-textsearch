const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongodb = require('./Database/MongoDB');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
dotenv.config({path: './Configuration/config.env'});
const PORT = process.env.PORT || 5000;

mongodb();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());

app.use('/', require('./routes/Router'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
