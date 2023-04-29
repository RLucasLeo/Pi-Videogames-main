import styles from "./landing.module.css";
import {Link} from "react-router-dom"
import React from "react";

const LandingPage =()=> {

    return (
          <div className={styles.containerCentral}>
              <div className={styles.containerSubtitulo}>
                  <h3>Bienvenido a mi pagina!!</h3>
              </div>
            <Link to="/home"><button >Ingresar!</button></Link>
          </div>
    )
  }
  export default LandingPage;