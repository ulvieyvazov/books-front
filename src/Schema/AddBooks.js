import * as yup from 'yup';

export const AddBooks = yup.object().shape({
    img: yup.string().required(),
    name: yup.string().required(),
    author: yup.string().required(),
    price: yup.number().required(),
})