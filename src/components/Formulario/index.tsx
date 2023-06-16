import React, { useState } from 'react';
import { ITarefa } from '../../interfaces/ITarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Iprops {
  setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Iprops) {
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00');
  
  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas(tarefasAntigas => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ]);
    setTarefa('');
    setTempo('00:00');
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          value={tarefa}
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          onChange={evento => setTarefa(evento.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;
