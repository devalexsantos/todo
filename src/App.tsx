import { useState } from 'react'
import { PlusCircle } from "phosphor-react";

import logo from './assets/logo.png'
import clipboard from './assets/clipboard.png'

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App flex flex-col">
      <header className="bg-[#0D0D0D] h-[200px] flex justify-center">
        <div className="mt-[72px]">
          <img src={logo} alt="Logo"/>
        </div>
      </header>
      <main className="bg-[#1A1A1A] h-[100vh] flex flex-col items-center">
        <div className="w-[100%] max-w-[736px]">
          <form className="flex gap-2 mt-[-27px]">
            <input type="text" placeholder="Adicione uma nova tarefa" className="flex-1 rounded-lg bg-[#262626] border border-[#0D0D0D] p-4 text-[#808080] outline-none"/>
            <button type="submit" className="bg-[#1E6F9F] p-4 rounded-lg text-[#F2F2F2] flex items-center gap-2">Criar <PlusCircle size={16} weight="bold" /></button>
          </form>

          <div className="flex justify-between mt-16">
            <div className="flex gap-4 ">
              <span className="font-bold text-[#4EA8DE]">Tarefas criadas</span><span className="px-2 py-[2px] bg-[#333333] rounded-xl font-bold text-[#D9D9D9]">{todos.length}</span>
            </div>

            <div className="flex gap-4 ">
              <span className="font-bold text-[#8284FA]">Concluídas</span><span className="px-2 py-[2px] bg-[#333333] rounded-xl font-bold text-[#D9D9D9]">0</span>
            </div>
          </div>

          {(todos.length === 0) &&
            <div className="flex flex-col items-center border-t-[0.5px] border-[#333333] rounded-t-[8px] mt-6">
              <div className="flex flex-col my-16 gap-4 items-center">
                <img src={clipboard} alt="clipboard" width={56} height={56}/>
                <div className="flex flex-col text-[#808080]">
                  <span className="font-bold">Você ainda não tem tarefas cadastradas</span>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  )
}

export default App
