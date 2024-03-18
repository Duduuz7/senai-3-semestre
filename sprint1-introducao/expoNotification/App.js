import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

//importar os recursos do expo-notifications
import *  as Notifications from "expo-notifications"

//solicigta permissões de notificações ao iniciar o app
Notifications.requestPermissionsAsync();

//define como  as notificações devem ser tratados quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({

    //mostrar o alerta quando a notificação for recebida
    shouldShowAlert: true,

    //reproduz som ao receber notificação
    shouldPlaySound: true,

    //número de notificações no ícone do app
    shouldSetBadge: true,


  })
})

export default function App() {

  //função para lidar com a chamada de notificação
  const handleCallNotifications = async () => {

    //obtém o status da permissão
    const { status } = await Notifications.getPermissionsAsync();

    //verifica se o usuário concedeu permissão
    if (status !== "granted") {

      alert("Você não deixou as notificações ativas !!!")

      return;

    }

    //agenda uma notificação
    await Notifications.scheduleNotificationAsync({

      content: {

        title: "Bem vindo ao SENAI !!!",

        body: "Notificação recebida."

      },

      trigger: null,

    })

  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>

        <Text style={styles.text}>Clique Aqui !!!</Text>

      </TouchableOpacity>

      <StatusBar style="auto" />

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
  button: {
    width: "80%",
    height: 50,

    backgroundColor: "black",

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
  },
  text: {
    color: "#fff",

    fontWeight: "bold",
    fontSize: 20,
  }
});
