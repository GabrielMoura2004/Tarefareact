import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput } from 'react-native';

import ItemDatabase from './src/Database/ItemDatabase';
import Item from './src/Models/Item';
import ItemView from './src/Components/ItemView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Não especificado",
      descricao: "",
      prioridade: "",
      termino: "",
      status: "Fazer",
      lista: []
    }
    this.Listar();
  }

  Listar = () => {
    const db = new ItemDatabase();
    db.Listar().then(
      data => {
        this.setState({ lista: data })
      }
    )
  }

  Cadastrar = (nome, descricao, prioridade, termino, status) => {
    const db = new ItemDatabase();
    const novoItem = new Item(nome, descricao,  prioridade, termino, status);
    db.Cadastrar(novoItem);
    this.Listar();
  }

  Atualizar = (id) => {
    const db = new ItemDatabase();
    db.Atualizar(id);
    this.Listar();
  }

  Remover = (id) => {
    const db = new ItemDatabase();
    db.Remover(id);
    this.Listar();
  }  
/*
  verificarDataCadastro = () => {
    let diaHoje = new Date().getDate();
    let mesHoje = new Date().getMonth() + 1;
    let anoHoje = new Date().getFullYear();
    return diaHoje + "/" + mesHoje + "/" + anoHoje;
  }
*/
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>Cadastro de tarefas</Text>
          <TextInput onChangeText={(textoDigitado) => this.setState({nome: textoDigitado})} placeholder="Nome" />
          <TextInput onChangeText={(textoDigitado) => this.setState({descricao: textoDigitado})} placeholder="Descrição" />
          <TextInput onChangeText={(textoDigitado) => this.setState({prioridade: textoDigitado})} placeholder="Prioridade" />
          <TextInput onChangeText={(textoDigitado) => this.setState({termino: textoDigitado})} placeholder="Término" />

          <Button title="Cadastrar"
            onPress={() => this.Cadastrar(
              this.state.nome,
              this.state.descricao,
              this.state.prioridade,
              this.state.termino,
              this.state.status)
            }
          />
        </View>
        <ScrollView>
          <Text>Lista de itens</Text>
          {
            this.state.lista.map(
              item => (
                <ItemView 
                  id={item.id} 
                  nome={item.nome} 
                  descricao={item.descricao}
                  prioridade={item.prioridade}
                  termino={item.termino}
                  status={item.status}

                  fazendo={this.Atualizar}
                  deletar={this.Remover}
                />
              )
            )
          }
        </ScrollView>
      </View>
    )
  }
}