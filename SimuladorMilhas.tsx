// src/components/SimuladorMilhas.tsx
import React, { useState } from 'react';
import AssinanteClube from './AssinanteClube';
import ResultadoCompra from './ResultadoCompra';

const SimuladorMilhas: React.FC = () => {
  const [precoMilheiro, setPrecoMilheiro] = useState(70);
  const [desconto, setDesconto] = useState(40);
  const [bonus, setBonus] = useState(200);
  const [isAssinanteClube, setIsAssinanteClube] = useState(false);
  const [bonusAdicional, setBonusAdicional] = useState(30);
  const [descontoAdicional, setDescontoAdicional] = useState(5);

  const calcularPrecoFinal = () => {
    let precoFinal = precoMilheiro * (1 - desconto / 100);
    if (isAssinanteClube) {
      precoFinal *= (1 + (bonus + bonusAdicional) / 100);
      precoFinal *= (1 - (desconto + descontoAdicional) / 100);
    }
    return precoFinal;
  };

  const classificarCompra = (precoFinal: number) => {
    if (precoFinal <= 14 * 1.1) {
      return 'EXCELENTE (Compre!)';
    } else if (precoFinal >= 17.5) {
      return 'BOA (Ainda vale a pena)';
    } else if (precoFinal <= 35) {
      return 'RUIM (Só compre se forem poucas e urgentes)';
    } else {
      return 'PÉSSIMA (Não compre!)';
    }
  };

  return (
    <div>
        <h1>Simulador de Milhas</h1>
        <div>
      <label>Preço Milheiro (R$):</label>
        <input
          type="number"
          value={precoMilheiro}
          onChange={(e) => setPrecoMilheiro(Number(e.target.value))}
        />
    </div> 

    <div>  
      <label>Desconto (%):</label>
        <input
          type="number"
          value={desconto}
          onChange={(e) => setDesconto(Number(e.target.value))}
        />
    </div>    

    <div>
      <label>Bônus (%):</label>
        <input
          type="number"
          value={bonus}
          onChange={(e) => setBonus(Number(e.target.value))}
        />
    </div>

    <div>
      <label>Desconto Adicional (%):</label>
        <input
          type="number"
          value={descontoAdicional}
          onChange={(e) => setDescontoAdicional(Number(e.target.value))}
        />
    </div>

    <div>
      <label>Bônus Adicional (%):</label>
        <input
          type="number"
          value={bonusAdicional}
          onChange={(e) => setBonusAdicional(Number(e.target.value))}
        />
    </div>

      <AssinanteClube
        isAssinanteClube={isAssinanteClube}
        setIsAssinanteClube={setIsAssinanteClube}
        bonusAdicional={bonusAdicional}
        setBonusAdicional={setBonusAdicional}
        descontoAdicional={descontoAdicional}
        setDescontoAdicional={setDescontoAdicional}
      />
      <button onClick={() => calcularPrecoFinal()}>Calcular</button>
      <ResultadoCompra
        precoFinal={calcularPrecoFinal()}
        classificacao={classificarCompra(calcularPrecoFinal())}
      />
    </div>    
  );
};

export default SimuladorMilhas;