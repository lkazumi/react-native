import React, {Component} from 'react';
import {Alert, StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import estilos from '../estilos/estilos.js'

export default class App extends Component {
    render(){
        return(
            <View style={estilos.container}>
                <Text>Bem Vindo a Anotacao do app</Text>
            </View>
        )
    }
}