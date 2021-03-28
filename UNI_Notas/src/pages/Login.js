import React, {Component} from 'react';
import {Alert, StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import estilos from '../estilos/estilos.js'

export default class App extends Component {

  clicou = () => {
    Alert.alert("Login","Você clicou")
  }

  render(){
    return(
      <View style={estilos.container}>
        
        <Image
          source={require('../assets/logo.png')}
          style={estilos.logo}
        />

        <TextInput
          style={estilos.input}      
          placeholder="Digite seu e-mail"
        />

        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => {this.clicou()}}
        >
          <Text style={estilos.botaoText}>Login</Text>
        </TouchableOpacity>

      </View>
    )
  }
}