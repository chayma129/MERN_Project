import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,Navbar,Container,NavDropdown}from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import AjoutParfum from "./Categories/AjoutParfum";
import ModifParfum from "./Categories/ModifParfum";
import ListeParfum from './Categories/ListeParfum';
import AjoutMarque from "./Categories/AjoutMarque";
import ModifMarque from "./Categories/ModifMarque";
import ListeMarque from './Categories/ListeMarque';
import AjoutCategorie from "./Categories/AjoutCategorie";
import ModifCategorie from "./Categories/ModifCategorie";
import ListeCategorie from './Categories/ListeCategorie';
import Login from './Authentification/Login'; 
import  Home from './Categories/Home';
import  Aboutus from './Categories/Aboutus';
import  Promo from './Categories/Promo';
import Logout from "./Authentification/Logout";
function App() {
  return (
    <div className="App">
   <Router>
      
      <div className="App">
        <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">



        <Nav className="me-auto">
        <Nav.Link as ={Link}to="/aboutus">About Us </Nav.Link>
        <Nav.Link as ={Link}to="/home">Home </Nav.Link>
        <Nav.Link as ={Link}to="/promo">Promo </Nav.Link>
          <Nav.Link as ={Link}to="/parfum/liste">Perfume List</Nav.Link>
          <Nav.Link as ={Link}to="/marque/liste">Brand List</Nav.Link>
          <Nav.Link as ={Link}to="/categorie/liste">Category List</Nav.Link>
          <NavDropdown title="Add" id="basic-nav-dropdown">
            <NavDropdown.Item ><Nav.Link as ={Link}to="/ajoutParfum">Add Perfume</Nav.Link></NavDropdown.Item>
            <NavDropdown.Item ><Nav.Link as ={Link}to="/ajoutMarque">Add Brand</Nav.Link></NavDropdown.Item>
            <NavDropdown.Item ><Nav.Link as ={Link}to="/ajoutCategorie">Add Category</Nav.Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">HELP</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
        <Nav.Link as ={Link}to="/logout">Logout</Nav.Link>
      </Navbar.Collapse>
    </Container>
 
  </Navbar>
  
      </div>
<Routes>
<Route path="/" element={<Login/>}></Route>
<Route exact path="/promo" element={<Promo/>}/>
<Route exact path="/home" element={<Home/>}/>
<Route exact path="/aboutus" element={<Aboutus/>}/>
<Route exact path="/Parfum/liste" element={<ListeParfum/>}/>
<Route exact path="/AjoutParfum" element={<AjoutParfum/>}/>
<Route extact path="/ModifParfum/:_id" element={<ModifParfum/>} />
<Route exact path="/Marque/liste" element={<ListeMarque/>}/>
<Route exact path="/AjoutMarque" element={<AjoutMarque/>}/>
<Route extact path="/ModifMarque/:_id" element={<ModifMarque/>} />
<Route exact path="/Categorie/liste" element={<ListeCategorie/>}/>
<Route exact path="/AjoutCategorie" element={<AjoutCategorie/>}/>
<Route extact path="/ModifCategorie/:_id" element={<ModifCategorie/>} />
<Route extact path="/logout" element={<Logout/>} />

</Routes>
</Router>
    </div>
  );
}
export default App;
