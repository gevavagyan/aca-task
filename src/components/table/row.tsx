import deleteRow from '../../assets/delete.png';
import editRow from '../../assets/edit.png';
import {CustomerType, TableActions} from '../../types/general';
import { deleteCustomer, editCustomer } from '../modal/actions';


interface PropTypes {
    rowValues: CustomerType;
    number: number;
    controlAction: (action: ActionTypes, values: CustomerType) => void;
}

type ActionTypes = {
    isOpen: boolean;
    action: TableActions;
}

const Row = ({ rowValues, number, controlAction}: PropTypes) => {
    const { age, role, email, phone, address, first_name, last_name } = rowValues;



    const handleSelect = (action: ActionTypes) => {
        controlAction(action, rowValues);
    }

    return (
        <tr>
            <th>{number}</th>
            <th>{age}</th>
            <th>{email}</th>
            <th>{phone}</th>
            <th>{address}</th>
            <th>{first_name}</th>
            <th>{last_name}</th>
            <th>{role}</th>
            <tr style={{ display: 'flex', columnGap: '8px' }}>
                <tr onClick={() => handleSelect(deleteCustomer)} style={{ cursor: 'pointer' }}>
                    <img src={deleteRow} alt="...Loading"/>
                </tr>
                <tr onClick={() => handleSelect(editCustomer)} style={{ cursor: 'pointer' }}>
                    <img src={editRow} alt="...Loading"/>
                </tr>
            </tr>
        </tr>
    )
}

export default Row;
