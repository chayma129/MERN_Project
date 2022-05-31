import { useState,useEffect } from "react";
import * as React from 'react';
import Api from "../axios/Api";


const Promo=()=>{
    const[cat,setCat]=useState([]);
    useEffect(() => {
        Api.get('/parfum').then(res=>{
            setCat(res.data)
            console.log(cat)
        })
        .catch(function(error){
            console.log(error)
        })
    })
 
    

    return(

      <div class="container">
       <h3 >PRIX CHOC : </h3> 
       <div class="row">
        {cat.map((c) => (
   
       <div class="col-3"> 
<div class="card" >
  <img class="card-img-top" src ={c.image} alt="Card  cap" width="5" height="60"/>
  <div class="card-body">
    <h5 class="card-title"> {c.nomparfum}</h5>
    <p class="card-text">  {c.prixvente}</p>
    <button  class="btn btn-primary">PROMOTION20%</button>
 
  </div>
</div></div> 


    
))
},


        </div>
        </div>
      
      
        )
    
        
}
export default Promo ;