import { useContext, useState } from 'react';
import { createFormContext } from '../FormContext';

import './Form.scss';

export const Form = () => {
  const [error, setError] = useState(false);

  const {
    inputName,
    setInputName,
    inputNumber,
    setInputNumber,
    inputMonth,
    setInputMonth,
    inputYear,
    setInputYear,
    inputCVC,
    setInputCVC,
  } = useContext(createFormContext);

  const formSubmit = (e) => {
    e.preventDefault();
    isError();
  };

  const isError = () => {
    if (
      inputName.length < 1 ||
      inputNumber.length < 19 ||
      inputMonth.length < 2 ||
      inputYear.length < 2 ||
      inputCVC.length < 3
    ) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleInputValue = (e) => {
    if (e.target.id === 'name') setInputName(e.target.value);
    if (e.target.id === 'number' && e.target.value.length <= 19) {
      const rawValue = e.target.value.replace(/ /g, ''); // Remove all spaces from the value
      const formattedValue = rawValue
        .replace(/\d{4}(?=\d)/g, '$& ') // Add a space after every four digits
        .trim(); // Remove leading and trailing spaces, if any
      setInputNumber(formattedValue);
    }

    if (e.target.id === 'month' && e.target.value.length <= 2)
      setInputMonth(e.target.value);

    if (e.target.id === 'year' && e.target.value.length <= 2)
      setInputYear(e.target.value);

    if (e.target.id === 'cvc' && e.target.value.length <= 3) {
      setInputCVC(e.target.value);
    }
  };

  return (
    <form className='form' onSubmit={formSubmit}>
      <div className='form__input-parent'>
        <label className='form__label' htmlFor='input'>
          CARDHOLDER NAME
        </label>
        <input
          id='name'
          className='form__input'
          type='text'
          placeholder='Full Name'
          maxLength={35}
          value={inputName}
          onChange={handleInputValue}
        />
      </div>

      <div className='form__input-parent'>
        <label className='form__label' htmlFor='input'>
          Card Number
        </label>
        <input
          id='number'
          className='form__input'
          type='text'
          placeholder='0000 0000 0000 0000'
          value={inputNumber}
          onChange={handleInputValue}
        />
      </div>

      <div className='form__inputs-holder'>
        <div className='form__input-parent'>
          <label className='form__label' htmlFor='input'>
            MM
          </label>
          <input
            id='month'
            className='form__input'
            type='number'
            placeholder='00'
            value={inputMonth}
            onChange={handleInputValue}
          />
        </div>

        <div className='form__input-parent'>
          <label className='form__label' htmlFor='input'>
            YY
          </label>
          <input
            id='year'
            className='form__input'
            type='number'
            placeholder='00'
            value={inputYear}
            onChange={handleInputValue}
          />
        </div>

        <div className='form__input-parent'>
          <label className='form__label' htmlFor='input'>
            CVC
          </label>
          <input
            id='cvc'
            className='form__input'
            type='number'
            value={inputCVC}
            placeholder='000'
            onChange={handleInputValue}
          />
        </div>
      </div>

      {error && <div className='error'>Fill all input</div>}

      <button className='form__button' type='submit'>
        SUBMIT
      </button>
    </form>
  );
};
