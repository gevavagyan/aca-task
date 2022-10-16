import {CustomerType} from "../types/general";

const StringRegex = new RegExp("^[a-zA-Z\\s]+$");
const mailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
const phoneRegex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$")

const errorMassages = {
    onEmpty: (field: string) =>  `Field ${field} required`,
    invalidAge: 'Invalid age',
    invalidRole: 'This role does not exist',
    invalidEmail: 'invalid email address',
    invalidAddress: 'Invalid address',
    invalidPhoneNumber: 'Invalid phone number',
    invalidFirstName: 'Invalid first name',
    invalidLastName: 'Invalid last name',
}

const validRoles = {
    admin: true,
    moderator: true,
    guest: true
}


const validator = (customer: CustomerType) => {
    const { age, role, address, phone, email, first_name, last_name } = customer
    const errors: any = {}

    age && (!(+age) || (+age < 18 || +age > 120)) && (errors.age = errorMassages.invalidAge);

    !role && (errors.role = errorMassages.onEmpty('Role'));
    role && !validRoles[role as keyof typeof validRoles] && (errors.role = errorMassages.invalidRole);

    address && !StringRegex.test(address) && (errors.address = errorMassages.invalidAddress);

    !phone && (errors.phone = errorMassages.onEmpty('Phone'));
    phone && !phoneRegex.test(phone) && (errors.phone = errorMassages.invalidPhoneNumber);

    !email && (errors.email = errorMassages.onEmpty('Email'));
    email && !mailRegex.test(email) && (errors.email = errorMassages.invalidEmail);

    !first_name && (errors.first_name = errorMassages.onEmpty('First name'));
    first_name && !StringRegex.test(first_name) && (errors.first_name = errorMassages.invalidFirstName);

    !last_name && (errors.last_name = errorMassages.onEmpty('Last name'));
    last_name && !StringRegex.test(last_name) && (errors.last_name = errorMassages.invalidLastName);

    errors.isErr = !!Object.keys(errors).length;

    return errors;
};

export default validator;
