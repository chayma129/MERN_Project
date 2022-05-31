import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
<div className="home">
<div className="headerContainer" style={{backgroundImage:`url()`}}>
<h1> BEAUTY STORE</h1>
<div className="center"><p > Achetez Ton Parfum vous souhaite la bienvenue</p></div>


<Link to="/promo">
<button>SHOP NOW</button>
</Link>
<img src="./images/beautystore.jpg" className="img-fluid" alt="Responsive " />
</div>
</div>

    )
}
export default Home;