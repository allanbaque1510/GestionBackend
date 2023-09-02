import Pass from "../models/Passwords.model.js";
import { busqueda } from "../libs/scrapping.js";
import Cryptr from "cryptr";
export const getAllPasswords = async(req,res)=>{
    const cryptr = new Cryptr('CodeSecretAllanXd@123');
    const datos = await Pass.find({
        user_id:req.user.id,
        status:1
    })
    datos.forEach(element => {
        element.email = cryptr.decrypt(element.email)
        element.user = cryptr.decrypt(element.user)
        element.password = cryptr.decrypt(element.password)
    });
    
    res.json(datos)
}

export const createPassword = async(req,res)=>{
    const cryptr = new Cryptr('CodeSecretAllanXd@123');

    const {user,email,password,site,Aplicacion} = req.body;
    const imagen =await busqueda(Aplicacion)
    
    const passEncrypt = cryptr.encrypt(password)
    const userEncrypt = cryptr.encrypt(user)
    const emailEncrypt = cryptr.encrypt(email)

    const newData = new Pass({
        user:userEncrypt,
        user_id:req.user.id,
        email:emailEncrypt,
        password:passEncrypt,
        nameApp:Aplicacion,
        site,
        imagen:imagen,
        status:1
    })

    const saveData = await newData.save();
    res.json(saveData)
}

export const getPassword = async(req,res)=>{
    const data = await Pass.findOne({_id:req.params.id, status:1})
    if(!data) return res.status(400).json({message:'No se encontro contraseña'})
    res.json(data)
}

export const deletePassword = async(req,res)=>{
    const data = await Pass.findOne({_id:req.params.id, status:1})
    if(!data) return res.status(400).json({message:'No se encontro contraseña'})
    await Pass.findByIdAndUpdate(req.params.id,{status:0},{new:true})
    res.sendStatus(204)
}
export const updatePassword = async(req,res)=>{
    const cryptr = new Cryptr('CodeSecretAllanXd@123');
    const {user,email,password,site,nameApp} = req.body;
    const imagen =await busqueda(nameApp)
    
    const passEncrypt = cryptr.encrypt(password)
    const userEncrypt = cryptr.encrypt(user)
    const emailEncrypt = cryptr.encrypt(email)

    const dataEncrypt = ({
        user:userEncrypt,
        email:emailEncrypt,
        password:passEncrypt,
        nameApp,
        site,
        imagen:imagen,
    })
    const data1 = await Pass.findOne({_id:req.params.id, status:1})
    if(!data1) return res.status(401).json({message:'No se encontro la contraseña'})

    const data = await Pass.findByIdAndUpdate(req.params.id, dataEncrypt,{new:true})
    
    if(!data) return res.status(400).json({message:'No se encontro contraseña'})
    res.json(data)
}
