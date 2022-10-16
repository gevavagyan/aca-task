import Modal, {ModalProps} from 'react-bootstrap/Modal';
import AddOrEdit from './children/addOrEdit';
import Delete from './children/delete';
import useStyles from './children/styles';

const modalTitles = {
    add: 'Add customer',
    edit: 'Edit customer',
    delete: 'Delete customer'
}
//
// interface PropTypes {
//     selectedCustomer: () => void;
//     modalAction:  string;
//     show:  () => void;
//     onHid:  boolean;
// }

function CustomerControlModal(props: any) {
    const { modalAction, selectedCustomer } = props;
    const { modalTitle } = useStyles();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className={modalTitle}>{modalTitles[modalAction as keyof typeof modalTitles]}</h2>
                </Modal.Title>
            </Modal.Header>
            {
                modalAction === 'delete' ? <Delete customerId={selectedCustomer.id} closeModal={props.onHide}/> :
                <AddOrEdit selectedCustomer={selectedCustomer} action={modalAction} closeModal={props.onHide}/>
            }
        </Modal>
    );
}

export default CustomerControlModal;
