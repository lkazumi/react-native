import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Categoria, Anotacao} from './src/pages/Home'

export default function App(){
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home" 
          component={Home} 
          options={{
            title:"Bem Vindo!",
            headerStyle:{backgroundColor:"#F58634"},
            headerTintColor: '#333',
            headerTitleStyle:{fontWeight:'bold', alignSelf: 'center'}
          }}
        />
        <Stack.Screen name = "Login" component={Login} />
        <Stack.Screen name = "Categoria" component={Categoria} />
        <Stack.Screen name = "Anotacao" component={Anotacao} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
const Pilha=createStackNavigator();

function TelaHome({navigation}){
  return(
  <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
      <Text>Tela Home</Text>
      <Text>Tela 1 </Text>
      <Button 
        title="Tela Canal"
        onPress={()=>navigation.navigate('Canal')}
      />
  </View>
  );
}

function TelaCanal({navigation}){
  return(
  <View style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
      <Text>Tela Canal</Text>
      <Text>Tela 2 </Text>
      <Button 
        title="Home"
        onPress={()=>navigation.navigate('Home')}
      />
      <Button 
        title="Voltar"
        onPress={()=>navigation.goBack()}
      />
  </View>
  );
}

export default function App1(){
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="TelaHome">
        <Pilha.Screen 
          name="Home"
          component={TelaHome}
          options={{title:'Tela Inicial'}}
        />
         <Pilha.Screen 
          name="Canal"
          component={TelaCanal}
          options={{title:'Tela Canal'}}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}

const estilos = StyleSheet.create({

})*/