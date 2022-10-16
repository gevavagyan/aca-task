import { TableActions } from '../../types/general';

export interface ModalAction {
    isOpen: boolean;
    action: TableActions | null;
}

export const initialAction = {
    isOpen: false,
    action: null
}

export const addCustomer = {
    isOpen: true,
    action: TableActions.ADD
}

export const editCustomer = {
    isOpen: true,
    action: TableActions.EDIT,
}

export const deleteCustomer = {
    isOpen: true,
    action: TableActions.DELETE
}
