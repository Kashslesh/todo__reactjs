import logo from "./logo.svg";
import "./App.css";
import Form from "./Form/Form";
import List from "./TodoList/List";
import { useState } from "react";

function App() {
  const [buts, setbuts] = useState([
    {
      text: "Faire du sport ce soir",
      id: 1,
    },
    {
      text: "texte simplement factice de lindustrie de limpression et de la composition",
      id: 2,
    },
  ]);
  const ajouterFunction = (textArrive) => {
    setbuts((preAjout) => {
      const updateBut = [...preAjout];
      updateBut.unshift({ text: textArrive, id: Math.random().toString() });
      return updateBut;
    });
  };
  const deleteItemsHandler = (itemsId) => {
    setbuts((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== itemsId);
      return updatedGoals;
    });
  };
  let content = (
    <p className="text-center  text-white">Pas de but. Ajoutez un?</p>
  );
  if (buts.length > 0) {
    content = <List items={buts} onDeleteItem={deleteItemsHandler} />;
  }
  return (
    <div className="App h-screen bg-gray-500">
      <Form onAddBut={ajouterFunction}></Form>
      {content}
    </div>
  );
}

export default App;
