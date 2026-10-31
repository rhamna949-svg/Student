import { useState } from "react";
import "./main.css"
import { useNavigate } from "react-router-dom";


function Main(props) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const admissionNo = 1000 + (props.list.length + 1);
  function addStudents() {
    if (
      !props.name.trim() ||
      !props.age ||
      !props.roll.trim() ||
      !props.course.trim() ||
      !props.gurdian.trim()
    ) {
      setMessage("Please fill all the required fields!");
      return;
    }
    const student = {
      name: props.name,
      age: props.age,
      course: props.course,
      roll: props.roll,
      gurdian: props.gurdian,
      admissionNo: admissionNo,
    };
    if (props.edit === -1) {
      props.showlist((prevlist) => [...prevlist, student]);
    } else {

      props.showlist((prevlist) =>
        prevlist.map((oldStudent, index) =>
          index === props.edit ? student : oldStudent
        )
      );

      props.showedit(-1);
    }
    props.showName("");
    props.showage("");
    props.showcourse("");
    props.showgurdian("");
    props.showroll("");
    navigate("/students");


  }


  return (
    <>
      <div className="app">
        <main className="container">
          <h1>Student Management</h1>
          <p className="subtitle">Manage your student records in one place.</p>

          <section className="card" id="add-student">
            <h2>Add New Student</h2>

            <div className="form-grid">
              <label>Student Name
                <input
                  value={props.name}
                  onChange={(e) => props.showName(e.target.value)}
                  type="text" placeholder="Enter full name" />
              </label>

              <label>Age
                <input
                  value={props.age}
                  onChange={(e) => props.showage(e.target.value)}
                  type="number" placeholder="Enter age" />

              </label>

              <label>Course
                <input
                  value={props.course}
                  onChange={(e) => props.showcourse(e.target.value)}
                  type="text" placeholder="Enter course" />
              </label>

              <label>Roll Number
                <input
                  value={props.roll}
                  onChange={(e) => props.showroll(e.target.value)}
                  type="text" placeholder="Enter roll number" />
              </label>

              <label className="full-width">Guardian's Number
                <input
                  value={props.gurdian}
                  onChange={(e) => props.showgurdian(e.target.value)}
                  type="tel" placeholder="Enter guardian's number" />
              </label>
            </div>

            <div className="admission">
              Admission Number: <strong>Auto-generated</strong>
            </div>

            <button className="add-btn" onClick={addStudents}>+ Add Student</button>
          </section>
          {message && (
            <div className="popup">
              <h3>🎓 StudentHub</h3>
              <p>{message}</p>
              <button onClick={() => setMessage("")}>OK</button>
            </div>
          )}
        </main>
      </div>
    </>

  );
}

export default Main;
