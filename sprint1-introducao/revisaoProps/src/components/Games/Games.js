import { Text, View, StyleSheet } from "react-native";
 
const Games = ({name, genre, releaseYear})  => {
    return(     
        <View style={styles.container}>
            <Text style={styles.name}>Nome: {name}</Text>
            <Text style={styles.genre}>Gênero: {genre}</Text>
            <Text style={styles.releaseYear}>Ano de lançamento: {releaseYear}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#cccc',
        opacity: 0.7,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 5
    },
    name: {
        fontSize: 20,
        color: 'purple',
        fontFamily: 'Poppins_300Light'
    },
    genre: {
        fontSize: 15,
        fontFamily: 'Poppins_300Light',
        color: 'black'
    },
    releaseYear: {
        fontSize: 15,
        fontFamily: 'Poppins_300Light',
        color: 'black'
    }
})

export default Games;
