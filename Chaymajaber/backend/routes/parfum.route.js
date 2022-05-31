import express from 'express';
const router = express.Router();
import { getParfum, createParfum, getParfumByID, updateParfum, deleteParfum } from '../controlllers/parfum.controller.js';
import {auth} from "../middleware/auth.js"

router.get('/', auth,getParfum); 

 router.post('/', createParfum);

 router.get('/:id', getParfumByID);

 router.put('/:id', updateParfum);

 router.delete('/:id', deleteParfum);
 export default router;