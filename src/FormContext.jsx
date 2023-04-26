import { createContext, useState } from 'react';

export const createFormContext = createContext();

export const FormContext = ({ children }) => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [inputMonth, setInputMonth] = useState('');
  const [inputYear, setInputYear] = useState('');
  const [inputCVC, setInputCVC] = useState('');

  const [isFormDone, setIsFormDone] = useState(false);

  return (
    <createFormContext.Provider
      value={{
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
        isFormDone,
        setIsFormDone,
      }}
    >
      {children}
    </createFormContext.Provider>
  );
};
