import mongoose, { Schema, Document } from 'mongoose';

export interface ITarea extends Document{
    name: string;
    descripcion: string;
    status: string;
}
 const TareaSchema: Schema = new Schema({
    name: {
        type: String
    },
    descripcion: {
        type: String
    },
    status: {
        type: String
    }
})

export default mongoose.model<ITarea>('tarea', TareaSchema);