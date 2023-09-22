// src/components/ResultadoCompra.tsx
import React from 'react';

interface ResultadoCompraProps {
  precoFinal: number;
  classificacao: string;
}

const ResultadoCompra: React.FC<ResultadoCompraProps> = (props) => {
  const { precoFinal, classificacao } = props;

  return (
    <div>
      <h2>Resultado da Compra</h2>
      <p>Preço Final: R$ {precoFinal.toFixed(2)}</p>
      <p>Classificação: {classificacao}</p>
    </div>
  );
};

export default ResultadoCompra;