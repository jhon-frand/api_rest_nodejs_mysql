import { Router } from "express";
import { funciones as controllerEquipos } from "../controllers/equipos.controller";

const rutas = Router();

rutas.get("/", controllerEquipos.getEquipo);
rutas.post("/", controllerEquipos.addEquipo);
rutas.get("/:id", controllerEquipos.searchEquipo);
rutas.put("/:id", controllerEquipos.updateEquipo);
rutas.delete("/:id", controllerEquipos.deleteEquipo);

export default rutas;