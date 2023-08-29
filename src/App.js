import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Table } from './components';
import { updateForm } from './store';
import './App.css';

function App() {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleOnSubmit = useCallback((data) => {
    dispatch(updateForm(data));
  }, []);

  return (
      <div className='center'>
        <Form onSubmit={handleOnSubmit} />
        <Table data={data} />
      </div>
  );
}

export default App;
