import express, { Application, Router } from "express";

const router = Router();

export const helloWordRoutes = (app:Application) =>{

    app.use(express.json())
    router.get('/hello', (req, res) => {
        res.send('Hello World!');
    })   

    app.use(router);
}