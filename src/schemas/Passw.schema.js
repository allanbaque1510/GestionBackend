import {z} from 'zod'
export const createSchema = z.object({
    Aplicacion: z.string({
        required_error: 'El nombre de la aplicacion es requerido'
        }),
    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        }),
        
})
export const updateSchema = z.object({

    nameApp: z.string({
        required_error: 'El nombre de la aplicacion es requerido'
        }),
    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        }),
}) 