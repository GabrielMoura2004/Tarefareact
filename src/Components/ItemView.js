import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class ItemView extends Component {
    render() {
        return(
            <View style={{margin: 10, borderRadius: 5, padding: 10, borderWidth: 1, borderColor: 'grey'}}>
                <Text>ID: {this.props.id}</Text>
                <Text>Nome: {this.props.nome} </Text>
                <Text>Descrição: {this.props.descricao}</Text>
                <Text>Prioridade: {this.props.prioridade}</Text>
                <Text>Termino: {this.props.termino}</Text>
                <Text style={this.getEstilo()}>Status: {this.props.status}</Text>
                <Text></Text>

                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{flex: 1, backgroundColor: 'green', margin: 1, padding: 3, alignItems: 'center'}} onPress={() => this.props.fazendo(this.props.id)}>
                        <Text style={{color: 'white'}}>Fazendo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, backgroundColor: 'red', margin: 1, padding: 3, alignItems: 'center'}} onPress={() => this.props.deletar(this.props.id)}>
                        <Text style={{color: 'white'}}>Remover</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    getEstilo = () => {
        if(this.props.status == "Fazer") {
            return {color: 'blue'}
        } else if (this.props.status == "Fazendo") {
            return {color: 'green'}
        }
    }
}