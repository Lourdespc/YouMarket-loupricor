import React,  { useFetch, useCallback, useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import style from './styles.css';
import Cesta from '../Cesta';
import Header from '../Header';

function ShowCesta() {
const [cesta, setCesta] = useState();

const { id } = useParams();

	const fetchCesta = useCallback(() => {
	    return fetch(`../../../cesta/${id}`)
	      .then(res => res.json())
	      .then(cesta => {
	        setCesta(cesta)
	       
	      });
	  }, []);

	
	useEffect(() => {
	    fetchCesta(cesta);
	  }, []);

if (!cesta){
	return null;
}
  return(	
<div>
  <Header/>
  
	  <div className="cestas-container-show">
	  
	  <Cesta nombre={cesta.nombre} id={cesta.id} productos="" total=""/>     
	  </div>
	  		
  </div>
 );
}
export default ShowCesta;