import './reset.scss';
import './App.scss';

import { FormContext } from './FormContext';
import { Form } from './components/Form';
import { Card } from './components/Card';

function App() {
  return (
    <FormContext
      children={
        <div className='App'>
          <Card />
          <Form />
        </div>
      }
    />
  );
}

export default App;
