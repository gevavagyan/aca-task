import axios from '../axiosConfig';
import {CustomerType} from "../../types/general";

type ResponseType = {
    success: boolean;
    data: any;
}

const  RESPONSE_MESSAGES = {
    DEFAULT: 'something went wrong',
}

export const add = async (newCustomer: CustomerType): Promise<ResponseType>=> {
    try {
        const { status, data } = await axios.post('/customers', newCustomer);

        if (status === 201) {
            return { success: true, data} ;
        } else {
            return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
        }

    } catch (e) {
        console.trace(`get customers:: error ${e}`);
        return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
    }
}


export const get = async (): Promise<ResponseType> => {
    try {
        const { status, data } = await axios.get('/customers')

        if (status === 200) {
            return { success: true, data} ;
        } else {
            return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
        }

    } catch (e) {
        console.trace(`get customers:: error ${e}`);
        return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
    }
}

export const update = async (id: string, editCustomer: CustomerType): Promise<ResponseType> => {
    try {
        const {status, data } = await axios.put(`customers/${id}`, editCustomer);

        if (status === 200) {
            return { success: true, data: data } ;
        } else {
            return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
        }

    } catch (e) {
        console.trace(`get customers:: error ${e}`);
        return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
    }
}

export const remove = async (customerId: string): Promise<ResponseType> => {
    try {
        const { status, data } = await axios.delete(`customers/${customerId}`);

        if (status === 200) {
            return { success: true, data} ;
        } else {
            return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
        }

    } catch (e) {
        console.trace(`delete customers:: error ${e}`);
        return { success: false, data: { msg: RESPONSE_MESSAGES.DEFAULT } } ;
    }
}
