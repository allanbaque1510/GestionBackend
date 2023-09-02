import Recordatorio from "../models/Recordatorio.model.js";

export const getAllRecords = async(req,res)=>{
    const datos = await Recordatorio.find({
        user_id:req.user.id,
        status:1
    })
    
    res.json(datos)
}

export const createRecord = async(req,res)=>{

    const {fecha,tipo,titulo,descripcion,fondo,color} = req.body;
    if(fecha.length > 2){
        const newData = new Recordatorio({
            user_id:req.user.id,
            fecha:fecha+'T23:00:00.000+00:00',
            tipo,
            titulo,
            descripcion,
            fondo,
            color,
            status:1
        })
        const saveData = await newData.save();
        res.json(saveData)
    }else{
        const newData = new Recordatorio({
            user_id:req.user.id,
            fecha:null,
            tipo,
            titulo,
            descripcion,
            fondo,
            color,
            status:1
        })
        const saveData = await newData.save();
        res.json(saveData)
    }
        
}

export const getRecord = async(req,res)=>{
    const data = await Recordatorio.findOne({_id:req.params.id, status:1})
    if(!data) return res.status(400).json({message:'No se encontro recordatorio'})
    res.json(data)
}

export const deleteRecord = async(req,res)=>{
    const data = await Recordatorio.findOne({_id:req.params.id, status:1})
    if(!data) return res.status(400).json({message:'No se encontro recordatorio'})
    await Recordatorio.findByIdAndUpdate(req.params.id,{status:0},{new:true})
    res.sendStatus(204)
}
export const updateRecord = async(req,res)=>{
    const {fecha,tipo,titulo,descripcion} = req.body;

    const dataEncrypt = ({
        fecha,
        tipo,
        titulo,
        descripcion,
    })
    const data1 = await Recordatorio.findOne({_id:req.params.id, status:1})
    if(!data1) return res.status(401).json({message:'No se encontro el recordatorio'})

    const data = await Recordatorio.findByIdAndUpdate(req.params.id, dataEncrypt,{new:true})
    
    if(!data) return res.status(400).json({message:'No se encontro recordatorio'})
    res.json(data)
}
