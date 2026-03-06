import React, { useState } from "react";

function App() {

  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const addBook = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Book name cannot be empty");
      return;
    }

    const newBook = {
      id: books.length + 1,
      name,
      author,
      date
    };

    setBooks([...books, newBook]);

    setName("");
    setAuthor("");
    setDate("");
  };

  const deleteBook = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  const startEdit = (book) => {
    setEditId(book.id);
    setName(book.name);
    setAuthor(book.author);
    setDate(book.date);
  };

  const saveEdit = () => {

    if (name === "") {
      alert("Book name cannot be empty");
      return;
    }

    const updated = books.map(b =>
      b.id === editId ? { ...b, name, author, date } : b
    );

    setBooks(updated);
    setEditId(null);

    setName("");
    setAuthor("");
    setDate("");
  };

  const cancelEdit = () => {
    setEditId(null);
    setName("");
    setAuthor("");
    setDate("");
  };

  const filteredBooks = books.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding:"20px"}}>

      <h2>Book List Management</h2>

      {/* Form */}

      <form onSubmit={addBook}>

        <input
          placeholder="Book Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Author Name"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />

        {editId === null ? (
          <button type="submit">Add Book</button>
        ) : (
          <>
            <button type="button" onClick={saveEdit}>Save</button>
            <button type="button" onClick={cancelEdit}>Cancel</button>
          </>
        )}

      </form>

      <br/>

      {/* Search */}

      <input
        placeholder="Search books..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <br/><br/>

      {/* Table */}

      {filteredBooks.length === 0 ? (
        <p>No books found</p>
      ) : (

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredBooks.map(book => (

            <tr key={book.id}>

              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.date}</td>

              <td>

                <button onClick={()=>startEdit(book)}>
                  Edit
                </button>

                <button onClick={()=>deleteBook(book.id)}>
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