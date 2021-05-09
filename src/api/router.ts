import { TareaService } from '../services/tareaService';
import { Application } from 'express';

export class Routeres{
    constructor(app: Application) {
        const service = new TareaService();
        app.get('/tarea',service.list_all_tarea);
        app.post('/tarea', service.store_tarea);
        
        app.get('/tarea/inf/:id',service.read_tarea);
        app.put('/tarea/update/:id',service.update_tarea);
        app.delete('/tarea/delete/:id',service.delete_tarea);
    }
}