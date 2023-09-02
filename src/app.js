import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import psswRoutes from './routes/pssw.routes.js'
import recordRoutes from './routes/record.routes.js'

import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();
const Cliente = process.env.FRONT_END ||'http://localhost:5173'
app.use(cors({
    origin:Cliente,
    credentials:true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',psswRoutes);
app.use('/api',recordRoutes);
export default app;