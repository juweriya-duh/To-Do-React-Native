import { View, Text, StyleSheet } from "react-native";
import useNotes from "../../hooks/useNotes";
import { useState } from "react";


export default function Filter() {

    const { notes } = useNotes();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [];

// notes.forEach((note) => {
//   if (!categories.includes(note.category)) {
//     categories.push(note.category);
//   }
// });

{categories.map((category) => (
  <TouchableOpacity
    key={category}
    onPress={() => setSelectedCategory(category)}
  >
    <Text>{category}</Text>
  </TouchableOpacity>
))}



  return (
    //  <View style={styles.container}>
    //   <Text style={styles.heading}>Filters</Text>

    // {categories.map((category) => (
    //     <Text key={category}>
    //       {category}
    //     </Text>
    //   ))}

    // </View>

    <View style={styles.container}>
    <Text style={styles.heading}>Filters</Text>

    {categories.map((category) => (
      <TouchableOpacity
        key={category}
        onPress={() => setSelectedCategory(category)}
      >
        <Text>{category}</Text>
      </TouchableOpacity>
    ))}

    {selectedCategory && (
      <Text style={styles.selectedText}>
        Selected: {selectedCategory}
      </Text>
    )}
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#efe4f3",
  },

  heading: {
    paddingTop: 25,
    fontSize: 32,
    fontWeight: "bold",
  },
  selectedText: {
  marginTop: 20,
  fontSize: 18,
  fontWeight: "bold",
},
});