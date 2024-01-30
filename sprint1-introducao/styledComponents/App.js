import { useEffect, useState } from 'react';
import { Alert, StatusBar, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Container, ContainerCounter } from './src/components/Container/Container';
import { ButtonDecrement, ButtonIncrement } from './src/components/Btn/Btn';
import { Title, TitleButton, TitleIncrement } from './src/components/Title/Title';
import { ImageMais } from './src/components/Image/Image';


export default function App() {

  //hook de state
  const [count, setCount] = useState(0)

  //funcao para incremento
  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.warn(`Contador Atualizado: ${count}`)
  }, [count])

  const decrement = () => {
    if(count > 0){
      setCount(count - 1)
    }
    else{
      Alert.alert('Contador não pode ser menor que 0 !!!')
    }
    
  }

  return (
    <Container>

      <ContainerCounter>

        <ImageMais source={require('./src/assets/download-removebg-preview.png')}/>

        <Title>Contador: {count}</Title>

        <ButtonIncrement onPress={increment}>
          <TitleButton>Incrementar</TitleButton>
        </ButtonIncrement>

        <ButtonDecrement onPress={decrement}>
          <TitleButton>Decrementar</TitleButton>
        </ButtonDecrement>

        <StatusBar style="auto" />
      </ContainerCounter>

    </Container>
  );
}
