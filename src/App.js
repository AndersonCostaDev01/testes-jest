import { useState } from "react";

function App() {
  const [tarefas , setTarefas] = useState([]);
  const [tempTarefa, setTempTarefa] = useState("");

  function cadastrarTarefa() {
    setTarefas([...tarefas, tempTarefa]);
    setTempTarefa("");
  }
  return (
    <div className="App">
      <input 
        type="text" 
        value={tempTarefa}
        onChange={(e) => setTempTarefa(e.target.value)}
        data-testid="campo-tarefa"
      />
      <button 
        type="button"
        onClick={cadastrarTarefa}
        data-testid="btn-cadastrar"
      >Cadastrar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
