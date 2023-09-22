// src/components/AssinanteClube.tsx
import React from 'react';

interface AssinanteClubeProps {
  isAssinanteClube: boolean;
  setIsAssinanteClube: React.Dispatch<React.SetStateAction<boolean>>;
  bonusAdicional: number;
  setBonusAdicional: React.Dispatch<React.SetStateAction<number>>;
  descontoAdicional: number;
  setDescontoAdicional: React.Dispatch<React.SetStateAction<number>>;
}

const AssinanteClube: React.FC<AssinanteClubeProps> = (props) => {
  const {
    isAssinanteClube,
    setIsAssinanteClube,
    bonusAdicional,
    setBonusAdicional,
    descontoAdicional,
    setDescontoAdicional,
  } = props;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAssinanteClube}
          onChange={(e) => setIsAssinanteClube(e.target.checked)}
        />
        É Assinante Clube
      </label>
      {isAssinanteClube && (
        <>
          <label>
            Bônus Adicional (%):
            <input
              type="number"
              value={bonusAdicional}
              onChange={(e) => setBonusAdicional(Number(e.target.value))}
            />
          </label>
          <br />
          <label>
            Desconto Adicional (%):
            <input
              type="number"
              value={descontoAdicional}
              onChange={(e) => setDescontoAdicional(Number(e.target.value))}
            />
          </label>
          <br />
        </>
      )}
    </div>
  );
};

export default AssinanteClube;