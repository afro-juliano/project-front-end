import "./App.css";
import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [buttonDisable, setButtonDisable] = React.useState(true);

  React.useEffect(() => {
    if (name === "" || email === "" || description === "") {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [name, email, description]);

  return (
    <div className="App">
      <div className="Form">
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
            value={name}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            id="email"
            value={email}
          />
        </div>
        <div className="description">
          <label htmlFor="description">Description:</label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            id="description"
            rows="4"
            cols="50"
            value={description}
          />
        </div>

        <div>
          <button
            onClick={() => {
              setUsers([
                ...users,
                ...[{ name: name, email: email, description: description }],
              ]);

              setName("");
              setEmail("");
              setDescription("");
            }}
            type="button"
            disabled={buttonDisable}
          >
            Add
          </button>
        </div>
      </div>

      <div className="Cards">
        {users.map((item) => (
          <div className="Card" key={item.name}>
            {item.name}
            <br />
            {item.description}
            <br />
            {item.email}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
