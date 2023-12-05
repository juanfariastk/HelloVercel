import express from "express";
import { helloWordRoutes } from "./routes";

const app = express();

helloWordRoutes(app)

export default app;