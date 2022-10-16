import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Input from '../../input';
import { inputsForm, InputsForm } from '../../../constants/customer';

import validator from '../../../validation/customer';

import { add } from '../../../server/requests/customer';
import { update } from '../../../server/requests/customer';
import { add as addCustomer } from '../../../store/actions/customer';
import { update as  updateCustomer } from '../../../store/actions/customer';

import useStyles from './styles';


interface PropTypes {
    action: string;
    closeModal: () => void;
    selectedCustomer: any;
}

const AddOrEdit = ({ action, closeModal, selectedCustomer }: PropTypes) => {
    const { wrapper } = useStyles();
    const dispatch = useDispatch();

    const [customerState, setCustomerState] = useState<any>({
        age: '',
        role: '',
        address: '',
        phone: '',
        email: '',
        first_name: '',
        last_name: ''
    });
    const [errors, setErrors] = useState({})

    const handleCustomerChange = (e: any) => {
        setCustomerState({
            ...customerState,
            [e.target.name]: e.target.value
        })
    };

    const createCustomer = async () => {
        const { isErr, ...errors } = validator(customerState);
        if (isErr) {
            setErrors(errors);
        } else {
            const { success, data } = await add(customerState);
            if (success) {
                dispatch(addCustomer(data));
                closeModal();
            }
        }
    }

    const editCustomer = async () => {
        const { isErr, ...errors } = validator(customerState);
        if (isErr) {
            setErrors(errors);
        } else {
            const { success, data } = await update(selectedCustomer.id, customerState);
            if (success) {
                dispatch(updateCustomer(data));
                closeModal();
            }
        }
    }

    useEffect(() => {
        if (action === 'edit') {
            setCustomerState(selectedCustomer)
        }
    }, [action]);



    return (
        <>
            <Modal.Body>
                <div className={wrapper}>
                    {
                        inputsForm.map((item:InputsForm) => {
                            return <Input
                                key={item.id}
                                error={errors[item.name as keyof typeof errors]}
                                value={customerState[item.name as keyof typeof customerState]}
                                {...item} onChange={handleCustomerChange}
                            />
                        })
                    }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={closeModal}>Close</Button>
                <Button onClick={action === 'add' ? createCustomer : editCustomer}>Save</Button>
            </Modal.Footer>
        </>
    )
}

export default AddOrEdit;
