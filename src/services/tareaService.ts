import Tarea from "../models/tareaModel";
import { Request, Response } from "express";
export class TareaService {
    list_all_tarea(req: Request, res: Response) {
        Tarea.find({}).exec((err, tarea) => {
            if (err) {
                return res.send(err);
            }
            res.json(tarea);
        })
    };
    store_tarea = (req: Request, res: Response) => {
        const new_tarea = new Tarea(req.body);
        new_tarea.save(function (err, tarea) {
            if (err) {
                res.send(err);
            }
            res.json(tarea);
        });
    };
    read_tarea = (req: Request, res: Response) => {
        const id = req.params.id;
        Tarea.findById(id).exec((err, tarea)=>{
            if (err)
                res.send(err);
            res.json(tarea);
        })
    };
    update_tarea = (req:Request, res:Response) => {
        Tarea.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, tarea) {
            if (err)
                res.send(err);
            res.json(tarea);
        })
    };
    delete_tarea = (req: Request, res:Response) => {
        Tarea.remove({ _id: req.params.id }).exec(function (err, tarea) {
            if (err)
                res.send(err);
            res.json({message : "La tarea se elimino correctamente"})
        });
    };
}