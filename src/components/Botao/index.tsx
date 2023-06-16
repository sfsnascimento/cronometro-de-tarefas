import React from 'react';
import style from './Botao.module.scss';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined,
  children?: React.ReactNode,
  onClick?: () => void
}

function Botao({ onClick, type, children }: IProps) {
  return (
    <button onClick={onClick} type={type}className={style.botao}>
      {children}
    </button>
  );
}

export default Botao;