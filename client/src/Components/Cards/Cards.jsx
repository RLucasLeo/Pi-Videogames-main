import s from "./Cards.module.css"
import Card from "../Card/Card"
import { useDispatch } from "react-redux"
import React from "react";
import { useState } from "react";
import { getAllvideogames } from "../../redux/actions";

const Cards = ({currentGames}) => {
   const dispatch = useDispatch()
   const [carga, setCarga] = useState(true);

   React.useEffect(() => {
       dispatch(getAllvideogames()).then(() => setCarga(false)) //me traigo la action creators q me trae todos mis videojuegos de la API
   }, [dispatch])

   //const allVideogames = useSelector(state => state.allVideogames) //me traigo del reducer el estado en donde guarde todos mis videojuegos
   if(carga){
      return(
         <p>error carga</p>
      )
   }

   return (
       <div className={s.containerCard}>
           {currentGames.length > 0 ?
           currentGames?.map(v => {
               return (<Card
                   key={v.id}
                   id={v.id}
                   image={v.image ? v.image : "IMAGEN AQUI"}
                   name={v.name}
                   genres={v.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                   rating={v.rating}
                   />)}) : "AQUI IMAGEN DE Q NO SE RENDERIZÓ LAS CARDS"}

       </div>
   )
}

export default Cards;