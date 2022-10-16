import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useStyles from "./styles";

import { useDispatch } from "react-redux";

import { remove } from '../../../server/requests/customer';
import { remove as deleteCustomer } from '../../../store/actions/customer';

const Delete = ({ customerId, closeModal }: { customerId: string; closeModal: any }) => {
    const dispatch = useDispatch();

    const { modalMassage, btn } = useStyles();

    const removeCustomer = async () => {
        console.log('customerId:: ', customerId);
        const { success, data } = await remove(customerId);

        if (success) {
            dispatch(deleteCustomer(customerId));
            closeModal();
        } else {
            closeModal();
        }

    }
    return (
        <>
            <Modal.Body>
                <h3 className={modalMassage}>
                    Are you sure you want to delete this user?
                </h3>
            </Modal.Body>
            <Modal.Footer>
                <Button className={btn} variant='secondary' onClick={() => closeModal()}>Close</Button>
                <Button className={btn} variant='danger' onClick={removeCustomer}>Delete</Button>
            </Modal.Footer>
        </>
    )
}

export default Delete;
