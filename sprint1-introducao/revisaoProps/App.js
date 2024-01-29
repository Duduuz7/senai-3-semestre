
import { FlatList, SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import Person from './src/components/Person/Person';

import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins'
import { PoorStory_400Regular } from '@expo-google-fonts/poor-story'

import Games from './src/components/Games/Games';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    PoorStory_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    {
      id: 1,
      name: 'Eduardo',
      age: 18,
    },
    {
      id: 2,
      name: 'Guti',
      age: 17,
    },
    {
      id: 3,
      name: 'Vinicius',
      age: 18,
    }
  ];

  const gamesList = [
    {
      id: 1,
      name: 'RDR2',
      genre: 'FPS',
      releaseYear: 2018
    },
    {
      id: 2,
      name: 'GTA 5',
      genre: 'Mundo Aberto',
      releaseYear: 2013
    },
    {
      id: 3,
      name: 'Minecraft',
      genre: 'Mundo Aberto',
      releaseYear: 2011
    }
  ];

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Pessoas: </Text>

      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Person name={item.name} age={item.age} />
        )}
      />

      <Text style={styles.title}>Jogos: </Text>

      <FlatList
        data={gamesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Games name={item.name} genre={item.genre} releaseYear={item.releaseYear} />
        )}
      />

      <StatusBar style="auto" />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    opacity: 0.8,
    width: '100%',
    backgroundColor: 'black'
  },

  title: {
    color: 'white',
    fontSize: 25,
    paddingLeft: 147,
    paddingTop: 25,
    paddingBottom: 25,
  }
})
