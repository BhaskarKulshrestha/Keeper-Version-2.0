import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

const backendServerURL = "http://localhost:3001";


function App() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    axios.get(backendServerURL + "/api/getAll").then(res => setNotes(res.data));
  }, [])


  function addNote(newNote) {

    if(newNote.title || newNote.content){
      axios.post(backendServerURL + "/api/addNew",newNote).then(res => setNotes(res.data))
    }

   
  }

  function deleteNote(obj) {

    // (prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== obj.id;
    //   });
    // }setNotes);

    setNotes(notes.filter((_, index) => index !== obj.id));

    axios.post(backendServerURL+"/delete",{title: obj.title, content: obj.content}).then(res => setNotes(res.data));
    
    
    // axios.post(backendServerURL+"/delete", {title: obj.title, content: obj.content})
    //   .catch((err) => console.log(err));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
