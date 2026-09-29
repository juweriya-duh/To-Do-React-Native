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

    return (
        <NotesContext.Provider value = {{notes, addNote, togglePin}}>
            {children}
        </NotesContext.Provider>
    );
};

export default function useNotes(){

return useContext(NotesContext);
}

