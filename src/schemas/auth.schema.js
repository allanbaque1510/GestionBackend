import {z} from 'zod'
export const registerSchema = z.object({
    firstName:z.string({
        required_error:'Username es requerido'
        }),
    email: z.string({
        required_error:'Email es requerido'
        }).email({
            message: 'Email invalido'
        }),
    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        })
})
export const loginSchema = z.object({
    email: z.string({
        required_error:'Email es requerido'
        }).email({
            message: 'Email invalido'
        }),
    password: z.string({
        required_error: 'La contraseña es requerida'
        }).min(6,{
            message:'La contraseña debe tener minimo 6 caracteres'
        })
}) 