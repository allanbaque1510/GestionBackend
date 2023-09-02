import { Router } from "express";
import {authRequire} from '../middlewares/validateToken.js'
import { getAllRecords,createRecord,getRecord,deleteRecord,updateRecord} from "../controllers/record.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createSchema, updateSchema } from "../schemas/Recor.schema.js";

const router = Router();

router.get('/recordatorios', authRequire, getAllRecords);
router.get('/recordatorio/:id', authRequire,getRecord);
router.post('/recordatorio', authRequire,validateSchema(createSchema),createRecord);
router.delete('/recordatorio/:id', authRequire,deleteRecord);
router.put('/recordatorio/:id', authRequire,validateSchema(updateSchema),updateRecord);


export default router