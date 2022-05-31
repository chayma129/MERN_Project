import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Api from "../axios/Api";
export default function ModifProduits({match}){
 const [nomcategorie, setnomcategorie] = useState("");
 const [caracteristique, setcaracteristique] = useState("");

 let Navigate = useNavigate();
 const {_id} = useParams();
 useEffect(()=>{
Api.get('/categorie/'+_id).then(res => {
 setnomcategorie(res.data.nomcategorie);
setcaracteristique(res.data.caracteristique);
 })
 },[_id]);
 const handleSubmit = (event) => {
 event.preventDefault();
 const produitObject = {
 _id:_id ,
nomcategorie: nomcategorie,
caracteristique:caracteristique

 };
Api.put('categorie/'+_id,produitObject ) 
 .then(res => console.log(res.data));
 Navigate("/categorie/liste")
 
 }
 return (
 <div>
 <h2>Modification d'une categorie </h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="nom categorie"
 type="text"
 value={nomcategorie}
 onChange={e => setnomcategorie(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="caracteristique"
 type="text"
 value={caracteristique}
 onChange={e => setcaracteristique(e.target.value)}
 />
 </div>

 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}