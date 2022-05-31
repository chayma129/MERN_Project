import React, { useState } from "react";
import api from "../axios/Api";
import { useNavigate } from "react-router";
export default function AjoutCategorie() {
const [_id, setid] = useState("");
 const [nomcategorie, setnomcategorie] = useState("");
 const [caracteristique, setcaracteristique] = useState("");
 let Navigate= useNavigate();
 const handleSubmit = (event) => {
 event.preventDefault();

 const produitObject = {
 _id:_id,
 nomcategorie: nomcategorie,
 caracteristique: caracteristique
 };
 api.post('/categorie/',produitObject ) 
 .then(res => console.log(res.data));
Navigate('/categorie/liste')

 }
 return (
 <div>
 <h2>Ajout d'une categorie</h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="id"
 type="text"
 value={_id}
 onChange={e => setid(e.target.value)}
 />
 </div>

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
