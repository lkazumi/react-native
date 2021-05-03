import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox  from '@react-native-community/checkbox';

import { UserContext } from '../../contexts/UserContext';

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold, 
    CustomCheckbox,
    CheckboxText
} from './style';

import SignInput from '../../components/SignInput';

import Api from '../../Api';

import Logo from '../../assets/logo.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';


export default () => {

    //Manda informações para o context
    const { dispatch: userDispatch } = useContext(UserContext);

    //Instancia Navigation para utilizar nos metodos
    const navigation = useNavigation();

    //capta dados da tela de cadastro
    const [nameField, setNameField ] = useState('');
    const [emailField, setEmailField ] = useState('');
    const [passwordField, setPasswordField ] = useState('');
    const [checkpasswordField, setCheckPasswordField ] = useState('');
    const [isSelected, setSelected] = useState(false); 

    //Valida dados inseridos e insere no banco de dados(API)
    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '' && checkpasswordField != '') {
            if(passwordField === checkpasswordField){
                let res = await Api.signUp(nameField, emailField, passwordField); //cadastra os dados
                

                if(res.token) {
                    //Salva token do usuário
                    await AsyncStorage.setItem('token', res.token);

                    //Salva informação do avatar/imagem  no context
                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }
                    });

                    //Envia usuário para tela principal apos o login
                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });
                    
                }else {
                    alert("Erro: " + res.error);
                }
            }else {
                alert('Senhas estão diferentes!')
            }
        } else {
            alert('Preencha os campos!')
        }
    }

    //Direciona para tela de login
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <Logo width="100%" height="90" />     

            <InputArea>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu usuário"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Confirme sua senha"
                    value={checkpasswordField}
                    onChangeText={t=>setCheckPasswordField(t)}
                    password={true}
                />

                <CustomCheckbox>
                <CheckBox
                    disabled={false}
                    value={isSelected}
                    onValueChange={() => setSelected(!isSelected)}
                />
                    <CheckboxText>Deseja postar notícias?</CheckboxText>
                </CustomCheckbox>

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}