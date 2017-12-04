import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

	/*

	constructor(props) {
		super(props);
		console.log('Construindo a aplicação');
	}

	componentWillMount() {
		console.log('Fazer alguma coisa antes de renderizar');
	}

	componentDidMount() {
		console.log('Fazer alguma coisa depois de renderizar');
	}

  	render() {
  		console.log('Componente é renderizado');
		return (
		<Text>teste de importação</Text>
		);
  	}
  	*/
  	constructor(props) {
		super(props);
		this.state = { listaItens : [] };
	}

 	componentWillMount() {
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
		.then(response => { this.setState({ listaItens : response.data }); })
		.catch(() => { console.log('Erro ao recuperar dados'); });
	}

  	render() {
  		return (
  			<ScrollView style={{ backgroundColor: '#DDD' }}>
  			{ this.state.listaItens.map( item =>   (<Itens key={item.titulo} item={item} />))}
  			</ScrollView>
  		);
 	}
}
