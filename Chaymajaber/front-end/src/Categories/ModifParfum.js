import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Api from "../axios/Api";
export default function ModifParfum({match}){
    const [nomparfum, setNomparfum] = useState("");
    const [prixvente, setPrixvente] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [image, setImage] = useState("");
    const [marque, setMarque] = useState("");
    const [categorie, setCategorie] = useState("");
    const [inputFile, setInputFile] = useState("");
 let Navigate = useNavigate();
 const {_id} = useParams();
 useEffect(()=>{
Api.get('/parfum/'+_id).then(res => {
 setNomparfum(res.data.nomparfum);
 setPrixvente(res.data.prixvente);
 setQtestock(res.data.qtestock);
 setSpecialite(res.data.specialite);
 setImage(res.data.imageartpetitf);
 setMarque(res.data.marque.nommarque);
 setCategorie(res.data.categorie.nomcategorie);
 })
 },[_id]);
 const handleSubmit = (event) => {
 event.preventDefault();
 const parf = {
 _id:_id ,
nomparfum: nomparfum,
prixvente:prixvente,
qtestock:qtestock,
specialite:specialite,
 image: image,
 marque:marque ,
 categorie :categorie,
 };
Api.put('parfum/'+_id,parf ) 
 .then(res => console.log(res.data));
 Navigate("/parfum/liste");
 
 }
 return (
 <div>
 <h2>Modification d'un parfum </h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="nom Parfum"
 type="text"
 value={nomparfum}
 onChange={e => setNomparfum(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="prix vente"
 type="text"
 value={prixvente}
 onChange={e => setPrixvente(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="quantite  "
 type="text"
 value={qtestock}
 onChange={e => setQtestock(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="specialite "
 type="text"
 value={specialite}
 onChange={e => setSpecialite(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="marque "
 type="text"
 value={marque}
 onChange={e => setMarque(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="categorie "
 type="text"
 value={categorie}
 onChange={e => setCategorie(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="Image"
 type="file"
 value={inputFile}
 onChange={e => { setInputFile(e.target.value);setImage(e.target.files[0].name)}}
 />
 </div>
 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}