import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import "./main.css";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function fetchUsers() {
    return fetch("http://localhost:8000/users");
  }

  function postUser(person) {
    return fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(person),
    });
  }

  function deleteUser(id) {
    return fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
  }

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json.users_list || []))
      .catch((error) => console.log(error));
  }, []);

  function updateList(person) {
    postUser(person)
      .then((res) => {
        if (res.status !== 201) return;
        return res.json();
      })
      .then((saved) => {
        if (!saved) return;
        setCharacters([...characters, saved]);
      })
      .catch((error) => console.log(error));
  }

  function removeOneCharacter(index, id) {
    deleteUser(id)
      .then((res) => {
        if (res.status !== 204) return;
        const updated = characters.filter((_, i) => i !== index);
        setCharacters(updated);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;

