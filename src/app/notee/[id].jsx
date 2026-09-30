import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import useNotes from "../../hooks/useNotes";


export default function NoteDetail() {

      const { id } = useLocalSearchParams();
      const {notes , togglePin , deleteNote} = useNotes();
      const note = notes.find((item) => item.id ===id);
       
      if (!note) {
  return (
    <View style={styles.container}>
      <Text>Note not found</Text>
    </View>
  );
}
   return (
  <View style={styles.container}>

    <View style={styles.header}>

    <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>‹</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => togglePin(note.id)}>
        <Text style={styles.pin}>
            {note.pinned ? "📌 Pinned" : "📍 Unpinned"}
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
  onPress={() => router.push(`/notee/create?id=${note.id}`)}
>
  <Text>Edit</Text>
</TouchableOpacity>

    </View>

    <Text style={styles.title}>{note.title}</Text>

    <Text style={styles.category}>{note.category}</Text>

    <Text style={styles.content}>{note.content}</Text>

    <Text style={styles.date}>{note.createdAt}</Text>

    <TouchableOpacity style = {styles.deleteButton}
    onPress={() => {
        deleteNote(note.id);
        router.back();
    }}>

        <Text style={styles.deleteText}>Delete Note</Text>
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

  title: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  category: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
  },

  content: {
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 20,
  },

  date: {
    fontSize: 15,
  },header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 25,
},

back: {
    marginTop:20,
  fontSize: 35,
},

pin: {
    marginTop: 20,
  fontSize: 16,
  fontWeight: "bold",
},

deleteButton: {
  marginTop: 30,
  padding: 14,
  borderRadius: 10,
  alignItems: "center",
  backgroundColor: "#ffdddd",
},

deleteText: {
  fontSize: 16,
  fontWeight: "bold",
},
});