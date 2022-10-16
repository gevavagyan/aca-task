import {
    LOAD_CUSTOMERS,
    ADD_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
} from '../actionTypes/customer';

import {CustomerType} from "../../types/general";

export const load = (customers: CustomerType[]) => ({
    type: LOAD_CUSTOMERS,
    customers
});

export const add = (customer: CustomerType) => ({
    type: ADD_CUSTOMER,
    customer
});

export const remove = (customerId: string) => ({
    type: DELETE_CUSTOMER,
    customerId
})

export const update = (editedCustomer: CustomerType) => ({
    type: UPDATE_CUSTOMER,
    editedCustomer
});
