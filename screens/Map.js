import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Map() {
  const region = {
    latitude: 42.6629,
    longitude: 21.1655,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView style={styles.map} initialRegion={region}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});