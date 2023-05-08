import styles from "./Navbar.module.css"
import React, {useState} from "react";
import {useDispatch} from "react-redux"
import {getNames} from "../../redux/actions";


const Navbar =() =>{

  const [state, setState]=useState('');
  const dispatch= useDispatch();

  function handleChange(e){
    e.preventDefault()
    setState(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(state.length>1){
      dispatch(getNames(state))
      setState('')
    }else{
      alert('Ingrese un nombre para buscar')
    }
  }


   return(
    <div className={styles.navbar}>
      <form onSubmit={e=> handleSubmit(e)}>
        <input type="text"
        id="name"
        autoComplete="off"
        value={state}
         placeholder="Buscar juego"
         onChange={e=> handleChange(e)} className={styles.searchbar}/>
        <button type="submit" className={styles.Button}>Buscar</button>
      </form>
    </div>
    
   )
}

export default Navbar;