import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { Form } from './components';
import { updateForm } from './store';

function App() {
  const dispatch = useDispatch();

  const handleOnSubmit = useCallback((data) => {
    dispatch(updateForm(data));
  }, []);
  
  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Form onSubmit={handleOnSubmit} />
      </div>
  );
}

export default App;
