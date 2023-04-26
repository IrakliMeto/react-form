import { useContext } from 'react';
import { createFormContext } from '../FormContext';

import './Card.scss';

export const Card = () => {
  const { inputName, inputNumber, inputMonth, inputYear, inputCVC } =
    useContext(createFormContext);

  return (
    <div className='card'>
      <h3 className='card__number'>{inputNumber || '0000 0000 0000 0000'} </h3>
      <div className='card__box'>
        <h3 className='card__name'>{inputName || 'full name'}</h3>
        <h3 className='card__date'>
          {inputMonth || '00'} / {inputYear || '00'}
        </h3>
      </div>
      <h3 className='card__cvc'>{inputCVC || '000'}</h3>
    </div>
  );
};
