import express from 'express';
const router = express.Router();
import { getMarque, getMarqueByID, createMarque, updateMarque, deleteMarque }from '../controlllers/marque.controller.js';
import {auth} from "../middleware/auth.js"

router.get('/',auth,getMarque);

router.post('/', createMarque);

router.get('/:id', getMarqueByID);

router.put('/:id', updateMarque);

router.delete('/:id', deleteMarque);
export default router;