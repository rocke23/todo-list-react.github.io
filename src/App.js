import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState ([
    {
      sno: 1,
      title: "You need to go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "You need to go to the mall",
      desc: "You need to go to the mall to get this job done2"
    },
    {
      sno: 3,
      title: "You need to go to the ghat",
      desc: "You need to go to the ghat to get this job done3"
    },
  ]);
  return (
    <>
       <Header title="My Todos List" searchBar={false}/>
       <Todos todos={todos} onDelete={onDelete}/>
       <Footer/>
    </>
  );
}

export default App;
