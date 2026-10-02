import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import useNotes from "../../hooks/useNotes";
import { useState } from "react";
import NoteCard from "../../components/NoteCard";

export default function Filter() {
  // const { notes } = useNotes();
  const { notes, togglePin } = useNotes();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [];

  notes.forEach((note) => {
    if (!categories.includes(note.category)) {
      categories.push(note.category);
    }
  });

  const filteredNotes = selectedCategory
  ? notes.filter((note) => note.category === selectedCategory)
  : notes;

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Filters</Text>

      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => setSelectedCategory(category)}
          style={styles.categoryButton}
        >
          <Text style={styles.categoryText}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}

      {selectedCategory && (
        <Text style={styles.selectedText}>
          Selected: {selectedCategory}
        </Text>
      )}


{filteredNotes.map((note) => (
  <NoteCard
    key={note.id}
    note={note}
    onTogglePin={togglePin}
  />
      ))}

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
    marginBottom: 20,
  },

  categoryButton: {
    padding: 15,
    backgroundColor: "#cdbbcc",
    borderRadius: 10,
    marginBottom: 10,
  },

  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  selectedText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});