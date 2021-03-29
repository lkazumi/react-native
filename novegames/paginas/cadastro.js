import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Text,
  Animated,
  Keyboard
} from 'react-native';

export default function login(){

  //Valor inserido na animacao
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 130, y: 155}))

  //Animacao dos campos input e se teclado esta aberto ou fechado
  useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
   
    Animated.parallel([
      Animated.spring(offset.y,{
        toValue: 0,
        speed: 4,
        bounciness: 30
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();
  }, [])

  //Diminui logo ao abrir teclado
  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 20,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 35,
        duration: 100,
      })
    ]).start();
  }

  //Aumenta logo ao fechar teclado
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
      })
    ]).start();
  }

  

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../imagens/logo.png')}
        />
      </View>
      <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              {translateY: offset.y }
            ]
          }
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={()=> {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=> {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          autoCorrect={false}
          onChangeText={()=> {}}
        />       
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={false}
              onValueChange={()=>{false}}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxText}>Deseja postar noticias?</Text>
          </View>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text 
            style={styles.submitText}
          >
            Criar conta
          </Text >
        </TouchableOpacity>
        
      </Animated.View>
    </KeyboardAvoidingView>
  );
}


//Estilos 
const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center'
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input:{
    backgroundColor: '#d9faff',
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize:17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#005792',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    color: '#fff',
    fontSize: 18
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  checkboxText:{
    marginTop:10,
    width: '80%',
    marginBottom:15,
    color: '#222',
  }
});