import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F29979'
      },
      logo: {
        width: 150,
        height: 150,
        borderRadius: 100
      },
      input: {
          marginTop: 10,
          padding: 10,
          width: 300,
          backgroundColor: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          borderRadius: 3 
      },
      botao: {
          width: 300,
          height: 42,
          backgroundColor: '#000',
          marginTop: 10,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center'
      },
      botaoText: {
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white'
      }
})