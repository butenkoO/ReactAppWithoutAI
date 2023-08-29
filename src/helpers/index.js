import validator from 'validator';

const validationSchema = {
    firstName: (value) => validator.isLength(value, { min: 1, max: undefined }),
    lastName: (value) => validator.isLength(value, { min: 1, max: undefined }),
    email: (value) => validator.isEmail(value),
    message: (value) => validator.isLength(value, { min: 10, max: undefined }),
};

export const dataValidator = (key, value) => {
    return validationSchema[key](value);
};