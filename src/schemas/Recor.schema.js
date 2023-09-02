import {z} from 'zod'
export const createSchema = z.object({
    titulo: z.string({
        required_error: 'El titulo es requerido'
        }),
    descripcion: z.string({
        required_error: 'La descripcion es requerida'
        }),
})


export const updateSchema = z.object({
    titulo: z.string({
        required_error: 'El titulo es requerido'
        }),
    descripcion: z.string({
        required_error: 'La descripcion es requerida'
        }),
}) 