import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('./src/assets/login_1login-removebg-preview.png')}
      />

      <View style={styles.container2}>
        <Text style={styles.label}>EMAIL</Text>

        <TextInput
          style={styles.input}
          defaultValue='Email'
        />

        <Text style={styles.label}>SENHA</Text>

        <TextInput
          style={styles.input}
          defaultValue='Senha'
        />


      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  container2: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 17
  },

  label: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
  },
  input: {
    color: '#8C8A97',
    fontWeight: 'semibold',
    width: '85%',
    height: 55,
    borderWidth: 2,
    borderColor: '#825CF7',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  logo: {
    marginBottom: 90
  },

  containerButton: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    marginTop: 60,
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#825CF7',
    borderRadius: 5
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#825CF7',
    padding: 10,
    borderWidth: 1,
    borderColor: '#825CF7',
    borderRadius: 5
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
