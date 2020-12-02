import "./App.css";
import { Container, ListGroup } from "react-bootstrap";
import { Icon } from "./Icon/Icon";
import { useState } from "react";
import { ItemCreate } from "./ItemCreate/ItemCreate";
import { useItems } from "./LocalStorage/localStorage";

function App() {
  const [edit, setEdit] = useState(false);
  const [items, addItem, removeItem] = useItems();
  return (
    <Container>
      <h1 className="header">Odkazy</h1>
      <ListGroup>
        {items.map((action, idx) => (
          <ListGroup.Item
            action
            style={{
              display: "flex",
              alignItems: "center",
            }}
            key={idx}
          >
            <Icon link={action.link} />
            {action.name}
            {edit && <span style={{ color: "red" }} onClick={() => removeItem(idx)}>smazat</span>}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {edit && <ItemCreate onItemCreate={(item) => addItem(item)} />}
      <span
        onClick={() => setEdit(!edit)}
        style={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        editovat
      </span>
    </Container>
  );
}

export default App;
