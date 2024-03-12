import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {
  requestForegroundPermissionsAsync, //solicitar a permissão de localização

  getCurrentPositionAsync, //Captura a localização atual

  watchPositionAsync, //Captura em tempos a localização

  LocationAccuracy //Precisão da captura

} from 'expo-location'
import MapViewDirections from 'react-native-maps-directions';


import { mapsKey } from './utils/mapsKey';


export default function App() {

  const mapReference = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const[finalPosition, setFinalPosition] = useState({
    latitude: -23.629205,
    longitude: -46.471853
  })

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()

      setInitialPosition(currentPosition)

      console.log(initialPosition);
    }
  }

  async function RecarregarVizualizacaoMapa(){
    if (mapReference.current && initialPosition) 
    {
      await mapReference.current.fitToCoordinates(
        [
          {latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude},
          {latitude: finalPosition.latitude, longitude: finalPosition.longitude}
        ],
        {
          edgePadding: {top:60 , right: 60, bottom: 60 , left: 60},
          animated: true
        }
      )
    }
  }

  useEffect(() => {

    CapturarLocalizacao()

    //Capturar local em tempo real
    watchPositionAsync({
      accuracy : LocationAccuracy.High,
      timeInterval : 1000,
      distanceInterval : 1
    }, async (response) => {

      await setInitialPosition(response)
      
      // ao aproximar a tela mexe na angulacao da tela, a inclinando

      mapReference.current?.animateCamera({
        pitch : 60,
        center : response.coords
      })
    })

  }, [100000])

  useEffect(() => {
    RecarregarVizualizacaoMapa()
  }, [initialPosition])

  return (
    <View style={styles.container}>

      {
        initialPosition != null
          ? (
            <MapView
            ref={mapReference}
              initialRegion={{
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
              }}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              customMapStyle={grayMapStyle}
            >

              <Marker
                coordinate={{
                  latitude: -23.615018,
                  longitude: -46.570744
                }}
                title='Exemplo de  outro local'
                description='Qualquer lugar no meu mapa'
                pinColor='#FF1493'
              />

              <MapViewDirections
                origin={initialPosition.coords}
                destination={{
                  latitude: -23.629205,
                  longitude: -46.471853,
                  latitudeDelta: 0.001,
                  longitudeDelta: 0.001
                }}
                apikey={mapsKey}
                strokeWidth={5}
                strokeColor='#00FFFF'
              />

              <Marker
                coordinate={{
                  latitude: finalPosition.latitude,
                  longitude: finalPosition.longitude
                }}
                title='Exemplo de  outro local'
                description='Qualquer lugar no meu mapa'
                pinColor='#00FF00'
              />

            </MapView>
          ) : (

            <>
              <Text>Localização não encontrada ! </Text>

              <ActivityIndicator />

            </>
          )
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

  map: {
    flex: 1,
    width: '100%'
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    // height: 300,
  },

});

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },]



// import { StatusBar } from "expo-status-bar";
// import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// import {
//   requestForegroundPermissionsAsync,
//   getCurrentPositionAsync,
// } from "expo-location";

// import MapViewDirections from "react-native-maps-directions";

// import { useEffect, useState } from "react";
// import { mapskey } from "./utils/mapsKey";

// export default function App() {
//   const [initialPosition, setInitialPosition] = useState(null);

//   async function captureLocation() {
//     const { granted } = await requestForegroundPermissionsAsync();

//     if (granted) {
//       const currentPosition = await getCurrentPositionAsync();

//       setInitialPosition(currentPosition);
//     }
//   }

//   useEffect(() => {
//     captureLocation();
//   }, []);

//   if (!initialPosition) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Carregando...</Text>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   const origin = {
//     latitude: initialPosition.coords.latitude,
//     longitude: initialPosition.coords.longitude,
//   };
//   const destination = {
//     latitude: -23.564381,
//     longitude: -46.652458,
//   };

//   const midpoint = {
//     latitude: (origin.latitude + destination.latitude) / 2,
//     longitude: (origin.longitude + destination.longitude) / 2,
//   };iew
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={{
//           latitude: midpoint.latitude,
//           longitude: midpoint.longitude,
//           latitudeDelta: Math.abs(origin.latitude - destination.latitude) * 2,
//           longitudeDelta:
//             Math.abs(origin.longitude - destination.longitude) * 2,
//         }}
//       >
//         <MapViewDirections
//           origin={origin}
//           destination={destination}
//           apikey={mapskey}
//           strokeColor="blue"
//           strokeWidth={3}
//           timePrecision="now"
//           optimizeWaypoints={true}
//         />

//   return (
//     <View style={styles.container}>
//       <MapV
//         {/* Criando um marcador no mapa */}
//         <Marker
//           coordinate={{
//             latitude: -23.564381,
//             longitude: -46.652458,
//           }}
//           title="FIAP - Paulista"
//           description="Localização aproximada"
//         />
//         <Marker
//           coordinate={{
//             latitude: -23.562951,
//             longitude: -46.654699,
//           }}
//           title="Metro - Trianon Masp"
//           description="Localização aproximada"
//         />
//         <Marker
//           coordinate={origin}
//           title="Você"
//           description="Localização aproximada"
//         />
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     flex: 1,
//     width: "100%",
//   },
//   loadingContainer: {
//     ...StyleSheet.absoluteFillObject,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
