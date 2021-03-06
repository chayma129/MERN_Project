import mongoose from 'mongoose';
import Marque from '../models/Marque.model.js';
export const getMarque = async (req, res) => {
try {
const cat = await Marque.find();
res.status(200).json(cat);
} catch (error) {
res.status(404).json({ message: error.message });
}
}
export const getMarqueByID = async (req, res) => {
    try {
    const cat = await Marque.findById(req.params.id);
    res.status(200).json(cat);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    }
    export const createMarque = async (req, res) => {
    const { nommarque , email, numtel} = req.body;
    const newMarque = new Marque({ nommarque:nommarque, email:email,
    numtel:numtel })
    try {
    await newMarque.save();
    res.status(201).json(newMarque );
    } catch (error) {
    res.status(409).json({ message: error.message });
    }
    }
    export const updateMarque= async (req, res) => {
    const { id } = req.params;
    const { nommarque, email, numtel} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de marque avec un id: ${id}`);
    const marq1 = { nommarque:nommarque, email:email,numtel:numtel, _id: id };
    await Marque.findByIdAndUpdate(id, marq1);
    res.json(marq1);
    }
    export const deleteMarque = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas
    de marque avec l'ID: ${id}`);
    await Marque.findByIdAndDelete(id);
    res.json({ message: "auteur supprimé avec succès." });}