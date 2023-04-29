import styles from "./landing.module.css";
import {Link} from "react-router-dom"

export const landingPage = () => {

  
    return (
          <div className={styles.containerCentral}>
            <div className={styles.containerSubtitulo}>
              <h3>Bienvenido a mi pagina!!</h3>
            </div>
            <div className={styles.containerButton}><Link to="/home"><button >Ingresar!</button></Link></div>
          </div>
    )
  }