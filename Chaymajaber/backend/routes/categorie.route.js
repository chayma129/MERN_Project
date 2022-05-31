import express from 'express';
const router = express.Router();
import { getCategorie, getCategorieByID, createCategorie, updateCategorie, deleteCategorie }
from '../controlllers/categorie.controller.js';
import {auth} from "../middleware/auth.js"
router.get('/', getCategorie);

router.post('/',auth, createCategorie);

router.get('/:id', getCategorieByID);

router.put('/:id', updateCategorie);

router.delete('/:id', deleteCategorie);
export default router;