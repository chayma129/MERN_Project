import React from "react";
import { Link } from "react-router-dom";
function Aboutus(){
    return(
<div className="home">
<div className="headerContainer" style={{backgroundImage:`url()`}}>
<div className="center"><p > BEAUTY STORE TUNISIE : VENTE DE MAQUILLAGE EN LIGNE</p></div>
<Link to="/home">
<button>LET'S START</button>
</Link>
<h3 > BEAUTY STORE</h3>
<p>Beautystore.tn a pour objectif de permettre à toutes les beautés partout en Tunisie de s’offrir les dernières nouveautés dans la cosmétique, en ne sacrifiant pas la qualité et à petit budget.

Donner accès à ses clientes la possibilité d’avoir des produits tendances, de hautes qualités tout ce qui touche au maquillage et à la beauté avec des prix raisonnables.

Beautystore.tn offre à ses clientes pour la première fois en Tunisie une large gamme de produits de marques internationales reconnu par les professionnels et les particuliers et cela à portée d’un clic.</p>

</div>
<div className="media">
    
<img src="./images/beautystoreee.jpg" className="align-self-start mr-3 " alt=" Generic placeholder " />
  <div className="media-body">
    <h5 className="mt-0" >NOTRE ENTREPRISE</h5>
    <p>Beautystore.tn a pour objectif de permettre à toutes les beautés partout en Tunisie de s’offrir les dernières nouveautés dans la cosmétique, en ne sacrifiant pas la qualité et à petit budget.

Donner accès à ses clientes la possibilité d’avoir des produits tendances, de hautes qualités tout ce qui touche au maquillage et à la beauté avec des prix raisonnables.

Beautystore.tn offre à ses clientes pour la première fois en Tunisie une large gamme de produits de marques internationales reconnu par les professionnels et les particuliers et cela à portée d’un clic.</p>
   
  </div>
</div>
</div>


    )
}
export default Aboutus;