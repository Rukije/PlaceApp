import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList() {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet-start adding some!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({}) => <PlaceItem place={item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
  },
});
