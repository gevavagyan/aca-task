import {
    LOAD_CUSTOMERS,
    ADD_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER
} from '../actionTypes/customer';

import {Customers} from '../../types/general';

const initialState = {
    customers: []
}

const customerReducer = (state: Customers = initialState, action: any) => {
    switch(action.type) {
        case LOAD_CUSTOMERS: {
            return { ... state, customers: action.customers };
        }
        case ADD_CUSTOMER: {
            return {
                ...state,
                customers: [ ...state.customers, action.customer]
            }
        }
        case UPDATE_CUSTOMER: {
            const editCustomerIndex = state.customers.findIndex((item) => item.id === action.editedCustomer.id);
            const customers = [...state.customers];
            customers.splice(editCustomerIndex, 1, action.editedCustomer);
            return { ...state, customers }
        }
        case DELETE_CUSTOMER: {
            const deleteCustomerIndex = state.customers.findIndex((item) => item.id === action.customerId);
            const customers = [...state.customers];
            customers.splice(deleteCustomerIndex, 1);
            return { ...state, customers };
        }
        default : {
            return state;
        }
    }
}

export default customerReducer;
