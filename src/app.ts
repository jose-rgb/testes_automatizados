import 'reflect-metadata';
import express from 'express';
import createConnection from "./database";
import { router } from './routes';

createConnection();
const app = express();

//habilitando server para json
app.use(express.json());

//rotas
app.use(router);

export { app };