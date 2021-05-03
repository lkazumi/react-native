import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },   
    signIn: async (email, password) => { //capta dados inseridos nos campos
        const req = await fetch(`${BASE_API}/auth/login`,{  //requisição dos dados de login
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})  //conteudo que sera mandado
        });
        const json = await req.json();    //transforma em json 
        return json;    //retorna requisição
    },

    signUp: async (name, email, password) => {  
        const req = await fetch(`${BASE_API}/user`,{ 
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password}) 
        });
        const json = await req.json(); //
        return json;
    },
    getBarbers: async () => {
        //Pega lista de barbeiros na api
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/barbers?token=${token}`);
        const json = await req.json();
        return json;
    }
};