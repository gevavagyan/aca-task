export enum TableActions {
    EDIT = 'edit',
    DELETE = 'delete',
    ADD = 'add',
}

export interface Customers {
    customers: CustomerType[];
}

export type CustomerType = {
    id: number | string,
    age?: string,
    role: string
    phone: string,
    email: string,
    address?: string,
    first_name: string,
    last_name: string,
}

export interface State {
    customerReducer: () => ({
        customers: Customers
    })
}
