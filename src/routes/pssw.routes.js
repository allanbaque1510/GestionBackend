import { Router } from "express";
import {authRequire} from '../middlewares/validateToken.js'
import {createPassword,getAllPasswords,getPassword,updatePassword,deletePassword} from "../controllers/gestion.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createSchema, updateSchema } from "../schemas/Passw.schema.js";

const router = Router();

router.get('/gestion', authRequire, getAllPasswords);
router.get('/gestion/:id', authRequire,getPassword);
router.post('/gestion', authRequire,validateSchema(createSchema),createPassword);
router.delete('/gestion/:id', authRequire,deletePassword);
router.put('/gestion/:id', authRequire,validateSchema(updateSchema),updatePassword);


export default router