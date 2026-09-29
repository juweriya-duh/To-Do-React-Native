import { View, Text,TouchableOpacity ,StyleSheet } from "react-native";
import { router } from "expo-router";


export default function NoteCard({ note, onTogglePin }){
    return (


           <TouchableOpacity
            style={styles.noteCard}
            onPress={() => router.push(`/notee/${note.id}`)}
           >



  <View style={styles.header}>
 <Text style={styles.title}>{note.title}</Text>

 <TouchableOpacity onPress={() => onTogglePin(note.id)}>
        <Text style={styles.pin}>
             {note.pinned ? "📌" : "📍"}
        </Text>
 </TouchableOpacity>
 </View>


            <Text style={styles.content}>{note.content}</Text>
            <Text style={styles.category}>{note.category}</Text>
            <Text style={styles.createdAT}>{note.createdAt}</Text>

          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
noteCard: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#bcc4e9",
    borderRadius: 10,
  },
  
   header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

   title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
   content: {
    fontSize: 16,
    marginBottom: 10,
  },

  category: {
    fontSize: 14,
    fontWeight: "bold",
  },

  date: {
    fontSize: 12,
    marginTop: 5,
  },
});
