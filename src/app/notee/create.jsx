import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

import { useState } from "react";
import { router } from "expo-router";
import useNotes from "../../hooks/useNotes";

export default function CreateNote() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
        const { addNote } = useNotes();

    return (

        <View style={styles.container}>
                <View style= {styles.header}>

                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.back}>‹</Text>
                </TouchableOpacity>

                <Text style={styles.heading}>New Note</Text>

                <TouchableOpacity style={styles.saveButton}
                onPress={() => {
                    const newNote = {
                        id: Date.now().toString(),
                        title: title,
                        content: content,
                        category: category,
                        pinned: false,
                    };
                    addNote(newNote);
                     router.back();
                  
                }}
                >
                    <Text style = {styles.saveText}>Save</Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.label}>Title</Text>
                <TextInput
                 style={styles.input}
                 placeholder="Note Tile"
                 value={title}
                 onChangeText={setTitle}
                 />

                <Text style={styles.label}>Content</Text>
                <TextInput
                 style={styles.contentInput}
                 placeholder="Write your note..."
                 value={content}
                 onChangeText={setContent}
                 multiline
                 />

                 <Text style={styles.label}>Category</Text> 
                 <TextInput
                 style={styles.input}
                 placeholder="Anything could do.."
                 value={category}
                 onChangeText={setCategory}
                 />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  back: {
    fontSize: 35,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },

  saveButton: {
    backgroundColor: "#287BEA",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },

  contentInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    height: 180,
    textAlignVertical: "top",
    fontSize: 16,
  },
});