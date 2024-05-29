import express from 'express';
import con from './database/connection.js'
import routes from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes);
const port = 9000;
con();
app.listen(port, () => console.log(`server is running on port ${port}`));

