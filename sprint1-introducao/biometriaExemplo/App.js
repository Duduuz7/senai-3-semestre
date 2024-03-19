
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import { useEffect, useState } from 'react';

export default function App() {
  //Salvar o status de autenticado
  const [authenticated, setAuthenticated] = useState(false)
  //Salvar a referencia de suporte a biometria
  const [isBiometricSupported, setIsBiometricSupported] = useState(false)
  //Salva o obj com historico
  const [dateHistory, setDateHistory] = useState({})

  //Funcao para verificar se existe biometria no aparelho
  async function CheckExistAuthentications() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    //Salvando o status de compatibilidade com a biometria
    setIsBiometricSupported(compatible);
  }

  //Salva o historico da ultima autenticacao
  async function SetHistory() {
    const objAuth = {
      dataAuthentication : moment().format('DD/MM/YYYY HH:mm:ss')
    }

    await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth))
    setDateHistory(objAuth)
  }

  //Recebe o historico da ultima autenticacao
  async function GetHistory(){
    const objAuth = await AsyncStorage.getItem('authenticate');
    if (objAuth) {
      setDateHistory(JSON.parse(objAuth))
    }
  }

  async function handleAuthentication() {
    //verificar se existe uma biometria cadastrada
    const biometricExist = await LocalAuthentication.isEnrolledAsync();

    if (!biometricExist) {
      return Alert.alert('Falha ao logar','Não foi encontrada nenhuma biometria cadastrada')
    }

    //Caso exista
    const auth = await LocalAuthentication.authenticateAsync();
    setAuthenticated(auth.success);

    //Verifcar se está autenticado e salvar a data atual
    if (auth.success) {
      SetHistory();
    }

  }

  useEffect(() => {
    CheckExistAuthentications();
    GetHistory(); //Busca a ultima autenticacao
  },[])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {
        isBiometricSupported ? 
        'Seu dispositivo é compartivel com a biometria'
        : 'O seu dispositivo não suporta a biometria / face id'
        }</Text>

        <TouchableOpacity style={styles.btnAuth} onPress={handleAuthentication}>
          <Text style={styles.txtAuth}>Autenticar acesso</Text>
        </TouchableOpacity>

        <Text style={ [styles.txtReturn, {color: authenticated ? 'green' : 'red'}]}>
          {
            authenticated 
            ? 'Autenticado'
            : 'Não autenticado' 
          }
        </Text>

        {
          dateHistory.dataAuthentication
          ? <Text style={styles.txtHistory}>
            Ultimo acesso em { dateHistory.dataAuthentication }
          </Text>
          : null
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30
  },
  btnAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'magenta'
  },
  txtAuth:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  txtReturn:{
    fontSize: 22,
    marginTop: 50,
    fontWeight: 'bold',
  },
  txtHistory:{
    fontSize: 16,
    color: '#858383',
    marginTop: 5,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 30
  },
});
