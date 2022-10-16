import Table from 'react-bootstrap/Table';
import { headerFields } from '../../constants/customer';
import Row from './row';

import type { ModalAction } from '../modal/actions';
import type { CustomerType } from '../../types/general';

import useStyles from './styles';


interface PropTypes {
    rows: CustomerType[];
    controlAction: (action: ModalAction, customer: CustomerType) => void;
}


function BasicTable({ rows, controlAction}: PropTypes) {
    const { tableContent } = useStyles()
    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                { headerFields.map((item) => <th key={item.id}>{item.name}</th>)}
            </tr>
            </thead>
            <tbody className={tableContent}>
            { rows.map((row, index) => <Row controlAction={controlAction} number={index+1}  key={row.id} rowValues={row} />) }
            </tbody>
        </Table>
    );
}

export default BasicTable;
