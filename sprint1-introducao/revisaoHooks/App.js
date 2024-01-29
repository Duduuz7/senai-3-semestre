import { useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //hook de state
  const [count, setCount] = useState(0)

  //funcao para incremento
  const increment = () => {
    setCount(count + 1)
  }

  useEffect (() => {
    console.warn(`Contador Atualizado: ${count}`)
  }, [count])

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Contador: {count}</Text>

      <TouchableOpacity onPress={increment} style={styles.increment}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement} style={styles.decrement}>
        <Text style={styles.buttonText}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 30
  },
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decrement: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '85%',
    height: 43,
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'red',
    opacity: 0.8
  },
  increment: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '85%',
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'green',
    opacity: 0.7
  },
  buttonText: {
    fontSize: 18
  }
});
