import { useContext } from 'react';
import { createFormContext } from '../FormContext';

export const Card = () => {
  const { inputName, inputNumber, inputMonth, inputYear, inputCVC } =
    useContext(createFormContext);

  return (
    <div className='card'>
      <h3 className='card__name'>{inputName}</h3>
      <div className='card__number'>{inputNumber}</div>
      <div className='card__date'>
        {inputMonth} / {inputYear}
      </div>
      <div className='card__cvc'>{inputCVC}</div>
    </div>
  );
};
