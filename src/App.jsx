
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from "./assets/Component/Main/main"
import List from "./assets/Component/List/list"
import Navbar from "./assets/Component/Navbar/navbar"

import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [roll, setRoll] = useState("");
  const [gurdian, setGurdian] = useState("");
  const [course, setCourse] = useState("");

  const [list, setList] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main showName={setName} showage={setAge} showroll={setRoll} showgurdian={setGurdian}
            showcourse={setCourse} showlist={setList} name={name} age={age} roll={roll} gurdian={gurdian}
            course={course} list={list}
            edit={editIndex}
            showedit={setEditIndex}
          />} />
          <Route path="/students" element={<List list={list} setlist={setList} edit={editIndex} showedit={setEditIndex} showName={setName} showage={setAge} showroll={setRoll} showgurdian={setGurdian} showcourse={setCourse} />} />
        </Routes>
      </BrowserRouter>
    </>

  )

}

export default App;


