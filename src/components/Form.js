import { useState, useMemo, useCallback, memo } from 'react';
import { Button } from './Button';
import { dataValidator } from '../helpers';
import { preloadedState } from '../store'

export const Form = ({ onSubmit }) => {
    const [data, setData] = useState(preloadedState);
    const [error, setError] = useState(preloadedState);

    const hasError = useMemo(() => Object.values(error).some(boolean => !boolean), [JSON.stringify(Object.values(error))]);

    const handleChange = useCallback((e) => {
        const { id, value } = e.target;
        setError((prevState) => ({ ...prevState, [id]: dataValidator(id, value) }))
        setData((prevState) => ({ ...prevState, [id]: value }));
    }, []);

    const handleSubmit = useCallback(() => {
        onSubmit(data);
        setData(preloadedState);
        setError(preloadedState);
        alert('Data successfully added to the storage');
    }, [data, onSubmit]);

    return (
        <div>
            <Item label='First name' id='firstName' value={data.firstName} onChange={handleChange} />
            <Item label='Last name' id='lastName' value={data.lastName} onChange={handleChange} />
            <Item label='Email' id='email' value={data.email} onChange={handleChange} />
            <Item label='Message' id='message' value={data.message} onChange={handleChange} />
            <Button label='Submit' onClick={handleSubmit} disabled={hasError} />
        </div>
    )
};

const Item = memo(({ label, id, value, onChange }) => {
    return (
        <label>
            <p>{label}</p>
            <input
                id={id}
                value={value}
                onChange={onChange}
            />
        </label>
    )
});