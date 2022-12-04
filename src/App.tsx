import React, { useState } from 'react'
import { Check, Circle, PlusCircle, Trash } from "phosphor-react";

import logo from './assets/logo.png'
import clipboard from './assets/clipboard.png'

function App() {

  const [inputTodo, setInputTodo] = useState("")

  const [todos, setTodos] = useState([{
    id: 0,
    text: "Tarefa de exemplo",
    completed: false
  }])

  const completedToDos = todos.filter((obj)=>{return obj.completed === true});

  function handleCreateToDo(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    todos.push(
      {
        id: todos.length + 1,
        text: inputTodo,
        completed: false
      }
    )
    setTodos([...todos])
    setInputTodo("")
  }

  function handleCheckToDo(index: number){
    return(event: React.MouseEvent)=> {
      todos[index].completed = !todos[index].completed;
      setTodos([...todos]);
    }
  }

  function handleDeleteToDo(index: number){
    return(event: React.MouseEvent)=> {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  }

  return (
    <div className="App flex flex-col">
      <header className="bg-[#0D0D0D] h-[200px] flex justify-center">
        <div className="mt-[72px]">
          <img src={logo} alt="Logo"/>
        </div>
      </header>
      <main className="bg-[#1A1A1A] min-h-[100vh] flex flex-col items-center md: p-2">
        <div className="w-[100%] max-w-[736px]">
          <form onSubmit={handleCreateToDo} className="flex flex-col sm:flex-row gap-2 mt-[-27px]">
            <input type="text" 
                name="todo" 
                onChange={(e)=>setInputTodo(e.target.value)}
                placeholder="Adicione uma nova tarefa"
                value={inputTodo}
                required 
                className="flex-1 rounded-lg bg-[#262626] border border-[#0D0D0D] p-4 text-[#808080] outline-none"/>
            <button type="submit" className="bg-[#1E6F9F] p-4 rounded-lg text-[#F2F2F2] flex items-center justify-center gap-2">Criar <PlusCircle size={16} weight="bold" /></button>
          </form>

          <div className="flex justify-between mt-16 mb-6">
            <div className="flex gap-4 ">
              <span className="font-bold text-[#4EA8DE]">Tarefas criadas</span><span className="px-2 py-[2px] bg-[#333333] rounded-xl font-bold text-[#D9D9D9]">{todos.length}</span>
            </div>

            <div className="flex gap-4 ">
              <span className="font-bold text-[#8284FA]">Concluídas</span><span className="px-2 py-[2px] bg-[#333333] rounded-xl font-bold text-[#D9D9D9]">{completedToDos.length}</span>
            </div>
          </div>

          {(todos.length === 0) &&
            <div className="flex flex-col items-center border-t-[0.5px] border-[#333333] rounded-t-[8px]">
              <div className="flex flex-col my-16 gap-4 items-center">
                <img src={clipboard} alt="clipboard" width={56} height={56}/>
                <div className="flex flex-col text-[#808080]">
                  <span className="font-bold">Você ainda não tem tarefas cadastradas</span>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            </div>
          }
          {todos.map((item, index)=>(
            <div key={index} className="flex justify-between gap-3 p-4 bg-[#262626] rounded-lg mb-3">
              {item.completed ?
                <button onClick={handleCheckToDo(index)}><Check size={24} weight="bold" className="text-[#F2F2F2] rounded-full p-1 bg-[#5E60CE]" /></button>
                :
                <button onClick={handleCheckToDo(index)}><Circle size={24} weight="bold" className="text-[#4EA8DE]" /></button>
              }
              {item.completed ?
                <p className="text-sm text-[#808080] line-through">
                {item.text}
                </p>
                :
                <p className="text-sm text-[#F2F2F2]">
                {item.text}
                </p>
              }
              <button onClick={handleDeleteToDo(index)} className="flex items-start"><Trash size={24} weight="bold" className="text-[#808080]" /></button>
            </div>
          ))}
        </div>
        <footer className="">
          <span className="text-[#808080] text-sm">Com amor 🖤 <a href="https://github.com/devalexsantos" target="_blank" className="hover:text-[#F2F2F2]">Alex Santos</a></span>
        </footer>
      </main>
    </div>
  )
}

export default App
