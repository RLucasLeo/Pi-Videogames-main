import styles from "./Navbar.module.css"
const Navbar =() =>{
   return(
    <div className={styles.navbar}>
      <form >
        <input placeholder="Buscar por nombre" className={styles.searchbar}/>
        <button className={styles.Button}>Buscar</button>
      </form>
    </div>
    
   )
}

export default Navbar;