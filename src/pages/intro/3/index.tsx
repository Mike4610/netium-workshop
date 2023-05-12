import { Button } from "@/components/Button";
import React, { FC, useEffect, useState } from "react";

/**
 * useEffect hook
 * Outro hook bastante importante em React
 * Este hook possui um array de dependencias, que caso esteja vazio, irá correr assim que o component renderizar
 * Se possuir alguma dependencia, irá correr sempre que a dependencia mude de valor
 */

const IntroPage3: FC = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     if (count < 0) {
  //       alert("Atenção! Count é menor que 0");
  //     }
  //   }, [count]);

  //   useEffect(() => {
  //     alert("Count tem o valor 0!");
  //   }, []);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">{count}</h1>
      </div>
      <div className="flex flex-row gap-8 mt-12">
        <Button onClick={() => setCount((previousCount) => previousCount + 1)}>
          Incrementar
        </Button>
        <Button onClick={() => setCount((previousCount) => previousCount - 1)}>
          Decrementar
        </Button>
      </div>
    </div>
  );
};

export default IntroPage3;
