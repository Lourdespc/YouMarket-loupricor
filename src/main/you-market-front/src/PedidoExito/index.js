import React from 'react';

import './styles.css';
import Header from '../Header';
import {
	  withRouter
	} from 'react-router-dom';

			
class PedidoExito extends React.Component{
	 componentWillMount() {
		 if(!localStorage.getItem('pedido')){
				this.props.history.push('/');	
			}else{
				localStorage.removeItem('pedido');
			}
		  }
		render(){
			return(


		<div >
		<Header/>
			<br/><br/>
			<center>
				<img src="https://www.irelandwebsitedesign.com/images/request-a-quote/thumbs-up.gif" alt="alert" id="alert"/>
			
			<div className="producto-detalle-container container clearfix" >
			
			
			<h1> Pedido/s realizado/s con Éxito </h1>
			
		  </div>
		  </center>
		</div>
		);}

}
export default withRouter(PedidoExito);