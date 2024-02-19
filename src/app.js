import express  from "express";
import morgan from "morgan";
import rutaEquipos from "../src/routes/equipos.routes";

const app = express();

app.set("port", 5000);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/equipo", rutaEquipos);


export default app;