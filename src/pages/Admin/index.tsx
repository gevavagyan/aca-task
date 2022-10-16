import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';

import BasicTable from '../../components/table';
import CustomerControlModal from '../../components/modal';

import { ModalAction } from '../../components/modal/actions'

import { addCustomer, initialAction } from '../../components/modal/actions';

import useStyles from './styles';
import {CustomerType} from "../../types/general";

const AdminPage = () => {
    const { wrapper, tablePanel, tableContainer } = useStyles();

    const customers = useSelector((state: any) => state.customerReducer.customers);
    const [selectedCustomer, setSelectedCustomer] = useState({});

    const [modalShow, setModalShow] = useState<ModalAction>({
        isOpen: false,
        action: null
    });

    const controlAction = (action: ModalAction, customer: CustomerType) => {
        setModalShow(action)
        setSelectedCustomer(customer);
    }

    const handleCloseModal = () => {
        setModalShow(initialAction)
    }

    return (
        <div className={wrapper}>
            <div className={tableContainer}>
                <div className={tablePanel}>
                    <Button variant="dark" onClick={() => setModalShow(addCustomer)}>Add Customer</Button>
                </div>
                { customers.length &&
                    <BasicTable
                      rows={customers}
                      controlAction={controlAction}
                    />
                }
            </div>
            <CustomerControlModal
                selectedCustomer={selectedCustomer}
                modalAction={modalShow.action}
                show={modalShow.isOpen}
                onHide={handleCloseModal}
            />
        </div>
    )
}

export default AdminPage;
