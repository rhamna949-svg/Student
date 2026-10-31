
import React from "react";
import "./list.css";
import { useNavigate } from "react-router-dom";

function List(props) {
  const navigate = useNavigate();
  function handleClick(student , index){
    props.showedit(index);
    props.showName(student.name)
    props.showage(student.age)
    props.showcourse(student.course)
    props.showroll(student.roll)
    props.showgurdian(student.gurdian)
   navigate("/")
  }
   
  function handleDelete(index) {
    props.setlist(
      props.list.filter((student, i) => {
        return i !== index;
      })
    );
  }

    
   
  return (
    <div className="student-list">
      <h2>Students List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Roll No</th>
            <th>Guardian</th>
            <th>Course</th>
            <th>Admission No</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.list.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.roll}</td>
              <td>{student.gurdian}</td>
              <td>{student.course}</td>
              <td>{student.admissionNo}</td>

              <td className="actions">
                <button className="edit-btn" onClick={() => handleClick(student,index)}>Edit</button>
                <button className="delete-btn" onClick={()=> handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
