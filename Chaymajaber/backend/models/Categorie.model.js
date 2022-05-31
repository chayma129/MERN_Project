import mongoose from "mongoose"
var CategorieSchema=mongoose.Schema({
    nomcategorie:String, 
  caracteristique:String

   })
  
const Categorie=mongoose.model('Categorie',CategorieSchema);
export default Categorie 