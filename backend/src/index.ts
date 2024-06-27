
import express, {Express, Request, Response} from 'express';
// three types  used in express , annote  with specific route
const port = 3000;

const app: Express = express();



app.get('/', (req:Request, res:Response) => {

    res.send('Hello Worldd2');

});

app.listen(port, () => {

    console.log(`Server listening on port ${port}`);

});