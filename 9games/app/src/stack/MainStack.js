import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from '../stack/MainTab';


const Stack = createStackNavigator();

export default () =>(
    <Stack.Navigator
        initialRouteName="Preload" //tela de carregamento
        screenOptions={{
            headerShown: false //remove cabeçalho
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
);