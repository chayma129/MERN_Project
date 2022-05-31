import mongoose from "mongoose"
var parfumSchema = mongoose.Schema({
 nomparfum: String,
 prixvente: Number,
 qtestock: Number,
specialite :String,
image:String,
 marque: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Marque'
 },
 categorie: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Categorie'
 },
})
const Parfum = mongoose.model('parfum', parfumSchema);
export default Parfum 