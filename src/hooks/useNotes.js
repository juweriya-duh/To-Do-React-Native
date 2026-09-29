import { createContext, useContext, useState } from "react";
import notesData from "../data/notes.json";

const NotesContext = createContext();

export function NotesProvider({children}){
    const [notes, setNotes] = useState(notesData);
    
    const addNote = (note) => {
 setNotes((currentNotes) => [...currentNotes, note]);
    };

    return (
        <NotesContext.Provider value = {{notes, addNote}}>
            {children}
        </NotesContext.Provider>
    );
};

export default function useNotes(){

return useContext(NotesContext);
}

