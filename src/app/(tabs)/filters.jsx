import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import { useState } from "react";
import useNotes from "../../hooks/useNotes";
import NoteCard from "../../components/NoteCard";

export default function Filter() {
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === null && styles.activeCategory,
          ]}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>

        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedCategory && (
        <Text style={styles.selectedText}>
          Selected: {selectedCategory}
        </Text>
      )}

      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            onTogglePin={togglePin}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
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

  categoryScroll: {
    marginBottom: 15,
  },

  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#cdbbcc",
    borderRadius: 20,
    marginRight: 8,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  activeCategory: {
    backgroundColor: "#287BEA",
  },

  selectedText: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});