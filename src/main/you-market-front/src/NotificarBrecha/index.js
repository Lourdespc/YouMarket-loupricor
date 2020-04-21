import React from 'react';

import './styles.css';
import Header from '../Header';
import {
	  withRouter
	} from 'react-router-dom';

			
class NotificarBrecha extends React.Component{
		
		
		
		constructor(props){
		    super(props);
		    
		    this.state = {
		         estadoBrecha: false
		     };
		}
		
		hazFetch() {
			fetch('/brecha/alertar', {
		        headers: {
		            'Authorization': 'Bearer ' + localStorage.getItem('auth')
		        },
		        method: 'GET'
		    })
		    .then(
		    		fetch('/brecha/devuelveBrecha', {
				        headers: {
				            'Authorization': 'Bearer ' + localStorage.getItem('auth')
				        },
				        method: 'GET'
				    }).then(
				    	response => response.json()
				    ).then(
				    	res => {
				    		this.setState({estadoBrecha:res})
				    		if(this.state.estadoBrecha == true){
				    			window.alert("La notificaci�n de brecha se encuentra activada")
				    		} else {
				    			window.alert("La notificaci�n de brecha se encuentra desactivada")	
				    		}

				    	}
				    )
		    ).then(
		    	//this.props.history.push("asdasdsdas")
		    );
		}
		
		 componentWillMount() {
				fetch('/brecha/devuelveBrecha', {
			        headers: {
			            'Authorization': 'Bearer ' + localStorage.getItem('auth')
			        },
			        method: 'GET'
			    }).then(
			    	response => response.json()
			    ).then(
			    	res => {
			    		this.setState({estadoBrecha:res})
			    		if(this.state.estadoBrecha == true){
			    			window.alert("La notificaci�n de brecha se encuentra activada")
			    		} else {
			    			window.alert("La notificaci�n de brecha se encuentra desactivada")			    			
			    		}
			    	}
			    )
			    
		 }
		 
		render(){
			
			const estadoBrecha = this.state.estadoBrecha;
			
			return(
		<div >
		<Header/>
			<br/><br/>
			<center>
				<img src="https://www.lineex.es/wp-content/uploads/2018/06/alert-icon-red-11-1.png" alt="alert" id="alert"/>
			
			<div className="producto-detalle-container container clearfix" >
			
			<h1> USTED VA A NOTIFICAR UNA BRECHA DE SEGURIDAD </h1>
			
			<p>
				La brecha se encuentra: {this.state.estadoBrecha}
			</p>
		  	
			<a href="#" onClick={this.hazFetch}> Activar/desactivar notificaci�n de brecha </a>
		  	
		  </div>
		  </center>
		</div>
		);}

}
export default withRouter(NotificarBrecha);