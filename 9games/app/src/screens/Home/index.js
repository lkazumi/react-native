import React, { useState, useEffect } from 'react';
import { Platform, Text } from 'react-native'; //Lib para verificar plataforma
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';



import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,

    SearchArea,
    SearchInput,
    GameFinder,

    LoadingIcon,
    ListArea
} from './style';

import SearchIcon from '../../assets/search.svg';


export default () => {

    const navigation = useNavigation();

    const [searchText, setSearchText] = useState('');
    const [ loading, setLoading] = useState(false);
    const [list, setList] = useState([]); 
    
    const handleGameFinder = async () => {
        if(searchText.toUpperCase() != "VALORANT"){
            navigation.navigate('Search');
        }else {
            alert("Mostra noticia de jogo favoritado!")
        }      
    }

    const getGames = () => {
        setLoading(true);
        //<Text>"Lista com ultimas noticias de games em geral"</Text>
       // setLoading(false);
    }

    useEffect(()=>{
        getGames();
    },[]);

    return (
        <Container>
            <Scroller>

                <HeaderArea> 
                    <HeaderTitle numberOfLines={2}>Noticias de seu interesse!</HeaderTitle>
                </HeaderArea>

                <SearchArea>
                    <SearchInput 
                        placeholder="Pesquise seu jogo favorito?"
                        placeholderTextColor="#FFFFFF"
                        value={searchText}
                        onChangeText={t=>setSearchText(t)}
                    />
                    <GameFinder onPress={handleGameFinder}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </GameFinder>
                </SearchArea>
                {loading && 
                    <LoadingIcon size="large" color="#FFFFFF" />
                }

                <ListArea>
                    <Text>...</Text>
                </ListArea>

            </Scroller>
        </Container>
    );
}