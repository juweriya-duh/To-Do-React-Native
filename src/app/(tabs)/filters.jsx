import { View, Text, StyleSheet } from "react-native";

export default function Filters() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Filter Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});