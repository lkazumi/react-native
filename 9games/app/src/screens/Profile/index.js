import React, { useState, useEffect } from 'react';
import {Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import Swiper from 'react-native-swiper';

import { 
    Container,
    Scroller,
    PageBody,
    LoadingIcon,

    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    FakeSwiper,

    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserInfoEmail
} from './style';
import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const [userInfo, setUserInfo] = useState({
        id: "01",
        avatar: null,
        name: "Mike Morais",
        email: "mm@gmail.com"
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //Faz requisição para pegar informações do barbeiro
        const getUserInfo = async () => {
            setLoading(true);

          //  setLoading(false);
        }
        getUserInfo();
    }, [])

    // Deslogar
    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    return(
        <Container>
            <Scroller>
                {userInfo.photos && userInfo.photos.length > 0 ? //if ternario verifica se há fotos da barbearia
                    <Swiper
                        style={{height: 240}}
                        dot={<SwipeDot />}
                        sctiveDot={<SwipeDotActive />}
                        paginationStyle={{top: 15, right: 15, bottom: null, left: null}} //local do ponto
                        autoplay={true} //transicao automatica das imagens
                    >
                        {userInfo.photos.map((item,key)=>(
                            <SwipeItem key={key}> 
                                <SwipeImage source={{uri:item.url}} resizeMode="cover" /*redimenciona a imagem*//> 
                            </SwipeItem>
                        ))}
                    </Swiper>
                    :
                    <FakeSwiper></FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{uri:userInfo.avatar}} />
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <UserInfoEmail>{userInfo.email}</UserInfoEmail>
                        </UserInfo>                      
                    </UserInfoArea>

                    {loading &&
                        <LoadingIcon size="large" color="#000000" />
                    }

                </PageBody>
            </Scroller>

            <Button title="Sair" onPress={handleLogoutClick} />
        </Container>
    );
}