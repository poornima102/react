import React, { useState } from "react";

function App() {

  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [className, setClassName] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || roll === "" || className === ""){
      alert("All fields required");
      return;
    }

    const exists = students.some(s => s.roll === roll);
    if(exists){
      alert("Roll number must be unique");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name,
      roll,
      className
    };

    setStudents([...students, newStudent]);

    setName("");
    setRoll("");
    setClassName("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const startEdit = (student) => {
    setEditId(student.id);
    setName(student.name);
    setRoll(student.roll);
    setClassName(student.className);
  };

  const saveEdit = () => {

    const updated = students.map(s =>
      s.id === editId ? { ...s, name, roll, className } : s
    );

    setStudents(updated);
    setEditId(null);

    setName("");
    setRoll("");
    setClassName("");
  };

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding:"20px"}}>

      <h2>Student List</h2>

      {/* Form */}

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Roll Number"
          value={roll}
          onChange={(e)=>setRoll(e.target.value)}
        />

        <input
          placeholder="Class"
          value={className}
          onChange={(e)=>setClassName(e.target.value)}
        />

        {editId === null ? (
          <button type="submit">Add Student</button>
        ) : (
          <button type="button" onClick={saveEdit}>Save</button>
        )}

      </form>

      <br/>

      {/* Search */}

      <input
        placeholder="Search by name"
        onChange={(e)=>setSearch(e.target.value)}
      />

      <br/><br/>

      {/* Table */}

      {filtered.length === 0 ? (
        <p>No students found</p>
      ) : (

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filtered.map(student => (

            <tr key={student.id}>

              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.className}</td>

              <td>

                <button onClick={()=>startEdit(student)}>
                  Edit
                </button>

                <button onClick={()=>deleteStudent(student.id)}>
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      )}

    </div>
  );
}

export default App;