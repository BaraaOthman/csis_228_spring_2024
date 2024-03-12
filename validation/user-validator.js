const {check} = require('express-validator');


const insertUserValidation = [
    check('userName').notEmpty().withMessage('Username is required'),
    check('userEmail').notEmpty().withMessage('Email is required'),
    check('userEmail').isEmail().withMessage('Invalid Email format'),
    check('userPassword').notEmpty().withMessage('Password is required'),
    check('userPassword').isStrongPassword().withMessage('Weak password'),
    check('userPassword').isLength({min: 6}).withMessage('Password must be at least 6 characters.'),
    check('userDob').notEmpty().withMessage('userDOB is required'),
    check('userDob').isDate().withMessage('DOB must be a date'),
    check('userMobileNumber').isMobilePhone().withMessage('Invalid mobile phone number'),
];


module.exports={
    insertUserValidation,
}