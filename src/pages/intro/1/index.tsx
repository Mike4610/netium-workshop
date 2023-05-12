import React, { FC } from "react";

// interface ItemProps {
//   title: string;
// }

/**
 * Como passamos dados para dentro de um componente?
 * Através de props
 * Quando um ou vários dos props de um componente mudam, o React "reage" a esta mudança
 * E atualiza o UI
 */

const Item: FC<{ title: string }> = ({ title }) => {
  return <h1>{title}</h1>;
};

/**
 * Isto é uma página do Next.js
 * O Next.js lida com a navegação entre páginas por nós, através de um metodo chamado de
 * File system routing
 * O nome dos nossos ficheiros vão-se traduzir para uma rota que podemos introduzir no URL
 */

const IntroPage1: FC = () => {
  return (
    <div>
      <Item title="Todo item 1"></Item>
    </div>
  );
};

export default IntroPage1;
