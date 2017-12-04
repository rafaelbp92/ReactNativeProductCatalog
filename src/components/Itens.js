import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';


export default class ListaItens extends Component {


	render() {
		return (
			<View style={styles.item}>
				<View style={styles.foto}>
					<Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
				</View>
				<View style={styles.detalhesItens}>
					<Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
					<Text style={styles.txtValor}>{this.props.item.valor}</Text>
					<Text style={styles.txtDetalhes}>{this.props.item.local_anuncio}</Text>
					<Text>{this.props.item.data_publicacao}</Text>	
				</View>  			
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#FFF' 
	},
	foto: {
		width: 102,
		height: 102
	},
	detalhesItens: {
		marginLeft: 20,
		flex: 1
	},
	txtTitulo: {
		fontSize: 18,
		color: 'blue',
		marginBottom: 5
	},
	txtValor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	txtDetalhes: {
		fontSize: 16
	}
});