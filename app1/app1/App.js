import React, { Component } from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import Caixas from './componentes/Caixas';
import C1 from './componentes/Caixas'
import Estilos from './estilos/Estilos.js'

function fexibir(vp1){
  if(vp1){
    return(<Text>Curso de React Native</Text>)
  }else{
    return(<Text> - - - </Text>)
  }
}
/*
Arrow Function
(n)=>{return n*2}
(n1,n2)=>{return n1+n2}


*/


const dobro=(n)=>{
  return n*2
}

const soma=(n1, n2)=>{
  return n1+n2
}

export default function App1(){
  let vexibir=true;
    return(
      <View style={Estilos.conteiner}>
        <Text>{dobro(2)}</Text>
        <Text>{soma(2,4)}</Text>
        <Image
          //source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png' }}
          source={require('./assets/notepad.png')}
          style={estilos.logo}
        /> 
        <Text style={Estilos.textoPadrao}>www.youtube.com.br</Text>
        <Text style={Estilos.textoTitulo}>www.cfbcursos.com.br</Text>
        {vexibir?<Text>Curso de React Native</Text>:<Text> - - - </Text>}
        {vexibir && <Text>Curso de React Native</Text>}
    </View>
    );
  };

  const estilos = StyleSheet.create({
    logo:{
      width:100,
      resizeMode:'contain',
      
    }
  })

/*
export default class App1 extends Component{
  render(){
    return(
      <View>
        <View>
          <Text>CFB Cursos</Text>
          <Text>Curso de React-Native</Text>
        </View>
        <View>
          <Text>Aula 3</Text>
          <Text>www.cfbcursos.com.br</Text>
        </View>   
    </View>
    );
  }
}*/

/*export default function App1(){
  return (
    <View>
      <View>
        <Text>CFB Cursos</Text>
        <Text>Curso de React-Native</Text>
      </View>
      <View>
        <Text>Aula 3</Text>
        <Text>www.cfbcursos.com.br</Text>
      </View>   
    </View>
  );
};*/