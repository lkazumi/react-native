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
  Keyboard,
  Alert
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
        toValue: 70,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 95,
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
        <View style={styles.containerSenha}>
          <Text style={styles.titleText}>
            Esqueci a senha
          </Text>
          <Text style={styles.subtitleText}>
            Insira seu email ou nome de usuário.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail ou nome de usuário"
            autoCorrect={false}
            onChangeText={()=> {}}
          />
          <TouchableOpacity style={styles.btnSubmit}
            onPress={() => Alert.alert('Redefinir senha','Link para alteração da senha enviado por e-mail.')}
          >
            <Text style={styles.submitText}>
              Redefinir senha
            </Text>
          </TouchableOpacity>
        </View>
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
    flex:0,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'black'
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
  },
  titleText:{
    fontSize: 20,
    marginTop: 15,
  },
  subtitleText:{
    marginTop:10,
    marginBottom: 10,
  },
  containerSenha:{
    flex:1,
    alignItems:'center',
    justifyContent: 'flex-start',
    width: '100%',
  }
});