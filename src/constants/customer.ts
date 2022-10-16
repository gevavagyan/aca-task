export const inputsForm = [
    {
        id: '1',
        type: 'text',
        name: 'age',
        placeholder: 'Age',
    },
    {
        id: '2',
        type: 'text',
        name: 'address',
        placeholder: 'Address',
    },
    {
        id: '3',
        type: 'text',
        name: 'role',
        placeholder: 'Role',
    },
    {
        id: '4',
        type: 'email',
        name: 'email',
        placeholder: 'Email',
    },
    {
        id: '5',
        type: 'text',
        name: 'phone',
        placeholder: 'Phone',
    },
    {
        id: '6',
        type: 'text',
        name: 'first_name',
        placeholder: 'First Name',
    },
    {
        id: '7',
        type: 'text',
        name: 'last_name',
        placeholder: 'Last Name',
    }
];

export const headerFields = [
    {
        id: '0',
        name: '#'
    },
    {
        id: '1',
        name: 'Age'
    },
    {
        id: '3',
        name: 'Email'
    },
    {
        id: '4',
        name: 'Phone'
    },
    {
        id: '5',
        name: 'Address'
    },
    {
        id: '6',
        name: 'First Name'
    },
    {
        id: '7',
        name: 'Last Name'
    },
    {
        id: '2',
        name: 'Role'
    },
    {
        id: '8',
        name: 'Actions'
    }
]

export interface InputsForm {
    id: string;
    name: string;
    type: string;
    placeholder: string
}
