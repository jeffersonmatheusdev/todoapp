import { useState } from 'react';

export default function Home() {

  const [todo, setTodo] = useState([]);
  const [lang, setLanguage] = useState('en');
  const [todoText, setTodoText] = useState('');

  return (
    <div
      className="text-center absolute w-full h-full bg-purple-100"
    >
      <div className="absolute splace-between inline-flex bg-purple-200 rounded-lg w-16 h-5 left-2 top-1 place-content-between">
        <div className={`relative ${lang === 'pt' ? 'bg-purple-400' : 'bg-purple-300'} w-7 h-5  text-gray-700 text-center rounded-l-lg cursor-pointer`}>
          <h1
            onClick={() => setLanguage('pt')}
          >
            PT
          </h1>
        </div>
        <div className={`relative ${lang === 'en' ? 'bg-purple-400' : 'bg-purple-300'} w-7 h-5 text-gray-700 text-center rounded-r-lg cursor-pointer`}>
          <h1
            onClick={() => setLanguage('en')}
          >
            EN
          </h1>
        </div>
      </div>

      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Trispace:wght@800&display=swap" rel="stylesheet"
        />

        <h1
          className="text-purple-300 font-['Trispace'] text-9xl mt-4"
        >TODOS
        </h1>

      </div>

      <div
        className="relative mt-10">
        <input
          className="shadow-lg border-2 border-purple-200 p-2 text-center"
          type="text"
          placeholder={lang === 'en' && todoText === '' ? 'Add a todo' : 'Adicionar um todo'}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyPress={(e) => {
            if (e.charCode === 13 && todoText !== '') {
              setTodo([...todo, todoText]);
              setTodoText('');
            }
          }}
        />
      </div>

      <div className="inline-grid mt-1" onContextMenu="return false;">
        {
          todo.map((td, index) => (
            <div
              key={index}
              className="flex items-center border-2 border-purple-200 p-1 text-center w-fit h-fit ml-auto mr-auto m-1 cursor-pointer"
              onMouseDown={(e) => {
                if (e.button === 2) {
                  setTodo(
                    todo.filter(function (item) { return item != td })
                  )
                }
                else if (e.button === 0) {
                  const line_style = document.getElementById(index).style.textDecoration;
                  if (line_style === 'line-through') {
                    document.getElementById(index).style.textDecoration = 'none'
                  }
                  else {
                    document.getElementById(index).style.textDecoration = 'line-through'
                  }
                }
              }}
            >
              <a
                id={index}
              >
                {td}
              </a>
            </div>
          ))
        }
      </div>

      <div className="mt-4 text-gray-400">
        <h4>{lang === 'en' ? 'Left click to toggle complete.' : 'Clique com o lado esquerdo para marcar como completo o todo.'}</h4>
        <h4>{lang === 'en' ? 'Right click to delete the todo.' : 'Clique com o lado direito para excluir o todo.'}</h4>
      </div>

    </div>
  )
}
