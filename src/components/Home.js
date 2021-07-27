import React from "react";
import { connect } from "react-redux";
import authToken from "../utils/authToken";
import { Alert } from "react-bootstrap";

const Home = (props) => {
  if (localStorage.Authorization) {
    authToken(localStorage.Authorization);
  }
  return (
		<div className="contenedor">
			<header>
            	<h1>Bienvenido</h1>
				<p>Nuestro objetivo es mejorar la experiencia del usuario redirigiendo al mismo a nuestras
				empresas asociadas para poder optimizar la conectividad entre las mismas, los clientes y el
			    mayorista de viajes. </p>
			</header>
			<section>	
				Destino: <input type="text" required=""/>
          Fecha: <input type="date" required=""/>
          Cantidad de pasajeros: <input type="number" required=""/>
				<input type="submit" value="Buscar"/>
				CODIGO POSTAL(INGRESAR)<input type="number" required=""/>
				<br/><p>¿NO SABE USAR SU CÓDIGO? <a href="https://login.aero.tur.ar/login?service=https%3A%2F%2Fsitio.aero.tur.ar%2Fhome">ENTRE AQUI(PULSAR)</a></p>
			
        </section>
   
				
					<h4>Nuestras empresas asociadas</h4>
					<a href="https://www.delfos.tur.ar/"><img src="aeroimage.png" width="100xp" height="100xp" alt=""></img></a>
	                <a href="https://www.ola.com.ar/"><img src="aeroimage.png" width="100xp" height="100xp" alt=""></img></a>
	                <a href="https://www.freeway.com.ar/"><img src="aeroimage.png" width="100xp" height="100xp" alt=""></img></a>
	                <a href="https://www.vietur.com.ar/"><img src="aeroimage.png" width="100xp" height="100xp" alt=""></img></a>
	                <a href="https://www.delfos.tur.ar/"><img src="aeroimage.png" width="100xp" height="100xp" alt=""></img></a>
	                <a href="https://www.ola.com.ar/"><img src="aeroimage.png" width="100xp" height="100xp" alt=""></img></a>
	                <a href="https://www.freeway.com.ar/"><img src="aeroimage.png" width="100xp" height="100xp" alt=""></img></a>
				
<br/>
<h4>"Oportunidades increibles, experiencias inolvidables".</h4>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="carousel1.png" width="100px" height="500px" className="d-block w-100" alt="banner 1"/>
      </div>
      <div className="carousel-item">
        <img src="carousel2.png" width="100px" height="500px" className="d-block w-100" alt="banner 2"/>
      </div>
      <div className="carousel-item">
        <img src="aeroimage.png" width="100px" height="500px" className="d-block w-100" alt="banner 3"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
<br/>
		
				<h5>Seguinos en nuestras redes sociales: </h5>
				<br/>
				
  <button type="button" className="btn btn-primary">Facebook</button>
  <button type="button" className="btn btn-primary">Instagram</button>
  <button type="button" className="btn btn-primary">Youtube</button>
		
		
    
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossOrigin="anonymous"></script>
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Home);
