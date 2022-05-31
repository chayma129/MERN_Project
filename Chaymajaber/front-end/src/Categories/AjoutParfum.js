import React, { useState } from "react";
import api from "../axios/Api";
import { useNavigate } from "react-router";
import { useEffect } from "react";
export default function AjoutParfum() {
   const [_id, setid] = useState("");
 const [nomparfum, setnomparfum] = useState("");
 const [prixvente, setPrixvente] = useState();
 const [qtestock, setQtestock] = useState();
 const [specialite, setSpecialite] = useState();
 const [image, setImage] = useState();
 const [marque, setMarque] = useState();
 const [categorie, setCategorie] = useState();
 const [inputFile, setInputFile] = useState("");
 const [listmarque,setListmarque]=useState([]);
 const [listcatege,setCatege] =useState([]);
  let Navigate= useNavigate();
  useEffect(()=>{api.get('/marque').then((res)=>{setListmarque(res.data)}).catch((err)=>{console.log(err.message)});
  api.get('/categorie').then((res)=>{setCatege(res.data)}).catch((err)=>{console.log(err.message)})},[]);
console.log(listmarque);
 const handleSubmit = (event) => {
 event.preventDefault();

 const parf = {
    id:_id,
 nomparfum: nomparfum,
 prixvente:prixvente,
 qtestock:qtestock,
 specialite:specialite,
 image: image,
 marque:marque,
 categorie:categorie,
 };
 console.log(parf);
 api.post('/parfum',parf ) 
 .then(res => console.log(res.data));
Navigate("/parfum/liste")

 }
 return (
 <div>
 <h2>Ajout d'un Parfum </h2>
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
 placeholder="nom Parfum"
 type="text"
 value={nomparfum}
 onChange={e => setnomparfum(e.target.value)}
 />
 </div>
 <div>
 
 <input
 placeholder="Prix vente"
 type="text"
 value={prixvente}
 onChange={e => setPrixvente(e.target.value)}
 />
 </div>
 <div>
 
 <input
 placeholder="quantite de stock"
 type="text"
 value={qtestock}
 onChange={e => setQtestock(e.target.value)}
 />
 </div>
 <div>
 
 <input
 placeholder="Specialite"
 type="text"
 value={specialite}
 onChange={e => setSpecialite(e.target.value)}
 />
 </div>
 <div>
 
 <select
 placeholder="nom Marque"
 type="text"
 value={marque}
 onChange={e => setMarque(e.target.value)}
 >
 {listmarque.map(((l)=>(<option value={l._id}>{l.nommarque}</option>)))}
 </select>
 </div>
 <div>
 
 <select
 placeholder="Categorie"
 type="text"
 value={categorie}
 onChange={e => setCategorie(e.target.value)}>
    
    {listcatege.map(((lc)=>(<option value={lc._id}>{lc.nomcategorie}</option>)))}
 </select>
 </div>
 <div>
 <input
 placeholder="Image"
 type="file"
 value={inputFile}
 onChange={e => {setInputFile(e.target.value); setImage('/images/'+e.target.files[0].name)}}
 />
 </div>
 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}
