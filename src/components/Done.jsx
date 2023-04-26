import './Done.scss';

import { useContext } from 'react';
import { createFormContext } from '../FormContext';

import done from '../icons/done.svg';

export const Done = () => {
  const {
    setInputName,
    setInputNumber,
    setInputMonth,
    setInputYear,
    setInputCVC,
    setIsFormDone,
  } = useContext(createFormContext);

  const resetForm = () => {
    setIsFormDone(false);
    setInputCVC('');
    setInputMonth('');
    setInputName('');
    setInputNumber('');
    setInputYear('');
  };

  return (
    <div className='done'>
      <img src={done} alt='Done Icon' />
      <h2 className='done__title'>thank you</h2>
      <p className='done__text'>We've added your card details</p>
      <button
        onClick={() => {
          resetForm();
        }}
        className='done__button'
      >
        Continue
      </button>
    </div>
  );
};
