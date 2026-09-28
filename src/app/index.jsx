import {View, Text, FlatList , StyleSheet, TouchableOpacity, TextInput } from "react-native";

import { useState } from "react"

import notesData from "../data/notes.json"
import NoteCard from "../components/NoteCard"

export default function Index(){

 const [searchText, setSearchText] = useState("");
 const [notes, setNotes] = useState(notesData);
 const [filter, setFilter] = useState("all")
const [showForm, setShowForm] = useState(false);


const togglePin = (id) => {
   const updatedNotes = notes.map((note) => {
    if(note.id === id){
      return {
        ...note, pinned: !note.pinned,
      };
    }
    return note;
  })
setNotes(updatedNotes);
};


  const filteredNotes =
  filter === "pinned" ? notes.filter((note) => note.pinned) : notes;

  const searchedNotes= filteredNotes.filter((note) => 
  note.title.toLowerCase().includes(searchText.toLowerCase()) || 
  note.content.toLowerCase().includes(searchText.toLowerCase())
)


  return (
    <View style = {styles.container}>

      <Text style={styles.heading}>Notes</Text>

      <TextInput
  style={styles.searchInput}
  placeholder="Search notes..."
  value={searchText}
  onChangeText={setSearchText}
/>


      <View style = {styles.filerContainer}>

        <TouchableOpacity
            onPress={() => setFilter("all")}
            style={styles.filterButton}>

              <Text>All</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => setFilter("pinned")}
            style={styles.filterButton}>

              <Text>Pinned</Text>
              </TouchableOpacity>
      </View>

      <FlatList

        // data={notes}
        data={searchedNotes}
        keyExtractor={(item)=> item.id}

        renderItem={({item}) => (
          
             <NoteCard note={item} 
             onTogglePin={togglePin}
            /> 
             )}
      />

      {showForm && (

        <View style={styles.form}>
          <TextInput
          style={styles.input}
          placeholder="Note title"
        />

        <TextInput
          style={styles.input}
          placeholder="Note content"
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Category"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Note</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowForm(false)}>
          <Text>Cancel</Text>
        </TouchableOpacity>

        </View>
      )}

       <TouchableOpacity
      style={styles.addButton}
      onPress={() => setShowForm(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>




      <Text>Total Notes: {notes.length}</Text>
    </View>
  );
}


const styles = StyleSheet.create({

container: {
  flex: 1,
  padding: 20,
  backgroundColor: "#efe4f3"
}, 

heading: {

  paddingTop: 25,
  fontSize: 32,
  fontWeight:"bold",
  textAlign: "left"
},
filterContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },

  filterButton: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },

  searchInput: 
  {
    marginTop: 15,
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 12,
  borderRadius: 8,
  marginBottom: 15,
},

addButton: {
  position: "absolute",
  right: 20,
  bottom: 30,

  width: 60,
  height: 60,

  borderRadius: 30,

  backgroundColor: "#222",

  justifyContent: "center",
  alignItems: "center",
  elevation: 5,
},

addButtonText: {
  color: "#fff",
  fontSize: 32,
  fontWeight: "bold",
},

form: {
  marginBottom: 20,
},

input: {
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 12,
  borderRadius: 8,
  marginBottom: 10,
},

saveButton: {
  padding: 12,
  backgroundColor: "green",
  borderRadius: 8,
  marginBottom: 10,
},

saveButtonText: {
  color: "#fff",
  textAlign: "center",
  fontWeight: "bold",
},
});