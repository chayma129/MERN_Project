import mongoose from 'mongoose';
import Parfum from '../models/Parfum.model.js';
export const getParfum = async (req, res) => {
 try { 
    const cat = await Parfum.find().populate('marque')
    .populate('categorie');
   ;
   
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
   }
   export const getParfumByID = async (req, res) => {
    try {
    const parfum = await Parfum.findById(req.params.id).populate('marque')
    .populate('categorie');

    res.status(200).json(parfum);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
   }
   export const createParfum = async (req, res) => {
    const {
   nomparfum,prixvente,qtestock,specialite,image,marque,categorie } =
   req.body;
   
    const newParfum = new Parfum({
        nomparfum:nomparfum,prixvente:prixvente,qtestock:qtestock,specialite:specialite,image:image,marque:marque,categorie: categorie})
    try {
    await newParfum.save();
    res.status(201).json(newParfum );
    } catch (error) {
    res.status(409).json({ message: error.message });
    }
   }
   export const updateParfum= async (req, res) => {
    const { id } = req.params;
    const {
        nomparfum,prixvente,qtestock,specialite,image,marque,categorie } =
   req.body; 
   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de parfum avec un id: ${id}`);
 const parf1 = {
    nomparfum:nomparfum,prixvente:prixvente,qtestock:qtestock,specialite:specialite,image:image,marque:marque,categorie: categorie, _id: id
};
 await Parfum.findByIdAndUpdate(id, parf1);
 res.json(parf1);
}
export const deleteParfum = async (req, res) => {
 const { id } = req.params;
 if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de parfum avec l'ID: ${id}`);
 await Parfum.findByIdAndDelete(id);
 res.json({ message: "parfum supprimé avec succès." });
} 
