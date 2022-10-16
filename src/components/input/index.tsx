import { SyntheticEvent } from 'react';
import useStyles from './styles';

interface PropTypes {
    id: string;
    error: string | undefined;
    name: string;
    value: string;
    type: string;
    placeholder: string;
    onChange: (e: SyntheticEvent) => void;
}

const Input = ({ id, error, name, value, type, placeholder, onChange }: PropTypes) => {
    const { wrapper ,input, errorMassage } = useStyles();
    return (
        <div className={wrapper}>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                className={input}
                onChange={onChange}
                placeholder={placeholder}
                style={{ borderColor: error ? 'red' : 'lightgray' }}
            />
            {error && <span className={errorMassage}>{error}</span>}
        </div>
    )
}

export default Input;
