import { ITarefa } from '../../../interfaces/ITarefa';
import style from '../Lista.module.scss';

interface IProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: IProps) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => selecionaTarefa({
        tarefa,
        tempo,
        selecionado,
        completado,
        id
      })}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}