import React from 'react';
import './styles.css';
import plus from '../assets/plus.svg'
import less from '../assets/less.svg'

interface Props {
	id: number,
	imagen: string,
	nombre: string,
	supermercado: string,
	precio: number,
	unidad: string,
	cantidad: number
}

function Producto({id, imagen, nombre, supermercado, precio, unidad, cantidad = 0}: Props) {
	
	var idContador = "contador-"+id
	var idMenos = "menos-"+id
	//var pStyle

	function lessProduct(){
		if(cantidad > 0){
			cantidad = cantidad - 1
			document.getElementById(idContador).textContent = cantidad
			//updateLessStyle()
		}
	}
	
	function plusProduct() {
		cantidad = cantidad + 1
		document.getElementById(idContador).textContent = cantidad
		//updateLessStyle()
	}

/* 	function updateLessStyle(){
		if(cantidad == 0){
			pStyle = {
				cursor: 'initial',
				opacity: '50%'
			}
		} else {
			pStyle = {
				cursor: 'pointer',
				opacity: '100%'
			}
		}
		return pStyle
	} */

  return(
  <div className="producto-container">
  	<img className="producto-imagen" src={imagen} alt="Imagen"/>
  	<div className="producto-info">
  		<p className="producto-precio">{precio} {unidad}</p>
  		<p className="producto-nombre">{nombre}</p>
  		<p className="producto-supermercado">{supermercado}</p>
		<div className="producto-editar-cantidad">
			<img id={idMenos} className="menos" src={less} onClick={lessProduct}/>
			<p id={idContador} className="contador">{cantidad}</p>
			<img className="mas" src={plus} onClick={plusProduct}/>
		</div>
  	</div>
  </div>
 );
}

export default Producto;