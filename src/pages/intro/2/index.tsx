import React, { FC, useState } from "react";

/**
 * useState hook
 * Provavelmente o "hook" mais importante de React, permite-nos declarar e modificar estados locais
 * Assim que o estado é atualizado, o React efetua uma comparação da component tree
 * E re-renderiza os componentes que mudaram o seu valor
 */

/**
 * Conditional rendering
 * Forma como no React renderizamos certos componentes baseando-nos num estado
 * Neste exemplo, se o valor de count for superior a zero, renderizamos um ✅
 * Se o valor de count for inferior a zero, renderizamos um ❌
 */

const IntroPage2: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* {count > 0 ? <p>✅</p> : <p>❌</p>} */}
        <h1 className="text-xl font-bold">{count}</h1>
      </div>
      <div className="flex flex-row gap-8 mt-12">
        <button
          onClick={() => setCount((previousCount) => previousCount + 1)}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount((previousCount) => previousCount - 1)}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default IntroPage2;
