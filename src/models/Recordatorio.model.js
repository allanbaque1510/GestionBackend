import mongoose from "mongoose";

const recordSchema = new  mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    titulo:{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        required:true,
        trim:true,
    },
    fondo:{
        type:String,
        required:true,
        trim:true,
    },
    color:{
        type:String,
        required:true,
        trim:true,
    },
    tipo:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
    },
    status:{
        type:Number,
        required:true
    },

},{
    timestamps:true
})

export default mongoose.model('Recordatorio',recordSchema);