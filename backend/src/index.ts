
import express, {Express, Request, Response} from 'express';
// three types  used in express , annote  with specific route
const port = 3000;

const app: Express = express();

const data =require ('../template.ts')




app.get('/', (req:Request, res:Response) => {

    res.send('Hello Worldd!');

});

app.get('/template', (req:Request, res:Response) => {

    res.status(200).json(data);

});



app.listen(port, () => {

    console.log(`Server listening on port ${port}`);

});