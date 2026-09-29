import { View, Text, StyleSheet } from "react-native";

export default function NoteDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Note Detail</Text>
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