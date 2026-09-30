import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import useNotes from "../../hooks/useNotes";

export default function CreateNote() {

    const { id } = useLocalSearchParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [pinned, setPinned] = useState(false);
        const { notes, addNote, updateNote } = useNotes();

        const note = notes.find((item) => item.id === id);
    

useEffect(() => {
  if (note) {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setPinned(note.pinned);
  }
}, [note]);


    return (

        <View style={styles.container}>
                <View style= {styles.header}>

                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.back}>‹</Text>
                </TouchableOpacity>

                <Text style={styles.heading}>
                {id ? "Edit Note" : "New Note"}
                </Text>

                <TouchableOpacity style={styles.saveButton}
                onPress={() => {
                 if (id) {
                    const updatedNote = {
                        ...note,
                        title: title,
                        content: content,
                        category: category,
                        pinned: pinned,
                    };

                    updateNote(updatedNote);
                    } else {
                    const newNote = {
                        id: Date.now().toString(),
                        title: title,
                        content: content,
                        category: category,
                        pinned: false,
                    };

                    addNote(newNote);
                    }

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

                    <TouchableOpacity
            style={styles.pinButton}
            onPress={() => setPinned(!pinned)}
            >
            <Text style={styles.pinText}>
                {pinned ? "📌 Pinned" : "📍 Not Pinned"}
            </Text>
            </TouchableOpacity>

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

  pinButton: {
  padding: 12,
  borderRadius: 10,
  marginTop: 10,
  backgroundColor: "#eee",
  alignItems: "center",
},

pinText: {
  fontSize: 16,
  fontWeight: "bold",
},
});