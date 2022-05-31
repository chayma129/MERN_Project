import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Api from "../axios/Api";
export default function ModifProduits({match}){
 const [nommarque, setnommarque] = useState("");
 const [email, setEmail] = useState("");
 const [numtel, setNumtel] = useState("");

 let Navigate = useNavigate();
 const {_id} = useParams();
 useEffect(()=>{
Api.get('/marque/'+_id).then(res => {
 setnommarque(res.data.nommarque);
 setNumtel(res.data.numtel);
setEmail(res.data.email);
 })
 },[_id]);
 const handleSubmit = (event) => {
 event.preventDefault();
 const produitObject = {
 _id:_id ,
nommarque: nommarque,
numtel:numtel,
email:email
 };
Api.put('marque/'+_id,produitObject ) 
 .then(res => console.log(res.data));
 Navigate("/marque/liste")
 
 }
 return (
 <div>
 <h2>Modification d'une marque </h2>
 <form onSubmit={handleSubmit}>
 <div>
 <input
 placeholder="nom marque"
 type="text"
 value={nommarque}
 onChange={e => setnommarque(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="numtel"
 type="text"
 value={numtel}
 onChange={e => setNumtel(e.target.value)}
 />
 </div>
 <div>
 <input
 placeholder="email"
 type="text"
 value={email}
 onChange={e => setEmail(e.target.value)}
 />
 </div>
 
 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}