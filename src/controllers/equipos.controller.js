import {getConnection} from "../database/database";

const getEquipo  = async (peticion, respuesta) => {
    try {
        const conexion = await getConnection();
        const sql = await conexion.query("SELECT equipos.*, ubicacion.sitio as ubicacion_nombre, categoria.categoria as categoria_nombre FROM equipos JOIN ubicacion ON equipos.fk_ubicacion = ubicacion.id_ubicacion JOIN categoria ON equipos.fk_categoria = categoria.id_categoria ");
        respuesta.json({msg:"Lista de equipos registrados", equipos: sql});
    } catch (error) {
        respuesta.status(500);
        respuesta.send(error.message);
    }
};
const addEquipo = async (peticion, respuesta) => {
    try {
        const equipo = peticion.body;
        const conexion = await getConnection();
        const sql = await conexion.query("INSERT INTO equipos SET ?", equipo);
        respuesta.json({msg: "REGISTRO EXITOSO", equipo: sql});
    } catch (error) {
        respuesta.status(500);
        respuesta.send(error.message);
    }
};

const searchEquipo = async (peticion, respuesta) => {
    try {
        const {id} = peticion.params;
        const conexion = await getConnection();
        const sql = await conexion.query("SELECT equipos.*, ubicacion.sitio as ubicacion, categoria.categoria as categoria FROM equipos JOIN ubicacion ON equipos.fk_ubicacion = ubicacion.id_ubicacion JOIN categoria ON equipos.fk_categoria = categoria.id_categoria WHERE id_equipo = ?", id);
        respuesta.json({msg: "EQUIPO ENCONTRADO", equipo: sql});
    } catch (error) {
        respuesta.status(500);
        respuesta.send(error.message);
    }
};

const updateEquipo = async (peticion, respuesta) => {
    try {
        const {id} = peticion.params;
        const equipo = peticion.body;
        const conexion = await getConnection();
        const sql = await conexion.query("UPDATE equipos  SET ? WHERE id_equipo = ?", [equipo, id]);
        respuesta.json({msg: "EQUIPO ACTUALIZADO", equipo:sql});
    } catch (error) {
        respuesta.status(500);
        respuesta.send(error.message);
    }
};

const deleteEquipo =  async (peticion, respuesta) => {
     try {
        const {id} = peticion.params;
        const conexion = await getConnection();
        const sql = await conexion.query("DELETE FROM equipos WHERE id_equipo = ?", id);
        respuesta.json({msg: "EQUIPO ELIMINADO", equipo: sql});
     } catch (error) {
        respuesta.status(500);
        respuesta.send(error.message);
     }
};

export const funciones = {
    getEquipo,
    addEquipo,
    searchEquipo,
    updateEquipo,
    deleteEquipo
};