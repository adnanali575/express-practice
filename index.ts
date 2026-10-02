import 'dotenv/config'
import { createApp } from './app'
import express, {Request, Response} from 'express'

const app = createApp();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log(req)
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})