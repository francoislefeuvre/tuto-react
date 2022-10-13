import { useState } from "react";

function App() {
  //state
  const [fruits, setFruits] = useState([
    { id: 1, name: "Banane" },
    { id: 2, name: "Pomme" },
    { id: 3, name: "Orange" }
  ]);

  // const inputRef = useRef();
  const [newFruit, setNewFruit] = useState("");

  //comportement
  const handleDelete = (fruitId) => {
    setFruits([...fruits].filter((f) => f.id !== fruitId));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFruits((fruits) => [
      ...fruits,
      { id: new Date().getTime() + 1, name: newFruit }
    ]);
    setNewFruit("");
  };

  const handleChange = (event) => {
    setNewFruit(event.target.value);
  };

  //render
  return (
    <div className="App">
      <h1>Liste des fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.name}{" "}
              <button onClick={() => handleDelete(fruit.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        {/* <input ref={inputRef} type="text" placeholder="Ajouter un fruit" /> */}
        <input
          value={newFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;
