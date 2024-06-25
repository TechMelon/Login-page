import express, { Request, Response } from 'express';
import dotenv,{config} from 'dotenv';
import cors from 'cors';
// cross origin resource sharing.
import connectDB from './config/db';
import authRoutes from './routes/authRoute';

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/auth',authRoutes)

app.get('/',(req: Request, res: Response) => {
    res.send('<h1>Hii from backend</h1>');
})

app.listen(process.env.PORT, () => {
    console.log(`server Running on ${process.env.PORT}`);
    
})