import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import psswRoutes from './routes/pssw.routes.js'
import recordRoutes from './routes/record.routes.js'

import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();

app.use(cors({
    origin: 'https://gestion.up.railway.app , https://gestion-production.up.railway.app/', // Reemplaza con tu origen específico
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilitar credenciales
  optionsSuccessStatus: 204, 
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api',authRoutes);
app.use('/api',psswRoutes);
app.use('/api',recordRoutes);
export default app;
