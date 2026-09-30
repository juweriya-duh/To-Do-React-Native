import { createContext, useContext, useState } from "react";
import notesData from "../data/notes.json";

const NotesContext = createContext();

export function NotesProvider({children}){
    const [notes, setNotes] = useState(notesData);
    
    const addNote = (note) => {
 setNotes((currentNotes) => [...currentNotes, note]);
    };

    const togglePin = (id) => {  setNotes((currentNotes) =>
        currentNotes.map((note) => {
              if (note.id === id) {
        return {
          ...note,
          pinned: !note.pinned,
        };
      }
        return note;
    })
  );
};

   const deleteNote = (id) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id))
   }

const updateNote = (updatedNote) => {
  setNotes((currentNotes) =>
    currentNotes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    })
  );
};

   
    


    return (
        <NotesContext.Provider value = {{notes, addNote, togglePin , deleteNote, updateNote}}>
            {children}
        </NotesContext.Provider>
    );













};

export default function useNotes(){

return useContext(NotesContext);
}

