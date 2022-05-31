import React, { useState } from "react";
import api from "../axios/Api";
import { useNavigate } from "react-router";
export default function AjoutMarque() {
const [_id, setid] = useState("");
 const [nommarque, setnommarque] = useState("");
 const [numtel, setnumtel] = useState("");
 const [email, setemail] = useState("");
 let Navigate= useNavigate();
 const handleSubmit = (event) => {
 event.preventDefault();

 const produitObject = {
 _id:_id,
 nommarque: nommarque,
 numtel:numtel,
 email:email
 };
 api.post('/marque/',produitObject ) 
 .then(res => console.log(res.data));
Navigate('/marque/liste')

 }
 return (
 <div>
 <h2>Ajout d'une marque </h2>
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
 placeholder="nom Marque"
 type="text"
 value={nommarque}
 onChange={e => setnommarque(e.target.value)}
 />
 </div>
 <div>
 
 <input
 placeholder="num tel"
 type="text"
 value={numtel}
 onChange={e => setnumtel(e.target.value)}
 />
 </div>
 <div>
 
 <input
 placeholder="email "
 type="text"
 value={email}
 onChange={e => setemail(e.target.value)}
 />
 </div>
 <div>
 <button>Submit</button>
 </div> 
 </form>
 
 </div>
 );
}
