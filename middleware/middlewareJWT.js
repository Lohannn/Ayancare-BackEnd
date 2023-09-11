/**************************************************************************************************************
* Objetivo: Responsável pelo token de segurança JWT.
* Autor: Lohannes da Silva Costa
* Data: 11/09/2023
* Versão: 1.0
**************************************************************************************************************/

const jwt = require('jsonwebtoken');
const SECRET = 'dQaWrEiusR';
const EXPIRES = 600;

const createJWT = async function (payLoad){
    const token = jwt.sign({userID: payLoad}, SECRET, {expiresIn: EXPIRES})

    return token;
}

const validateJWT = async function (token){
    let status = false;

    jwt.verify(token, SECRET, async function (err, decode){
        if(!err){
            status = true;
        }
        return status;
    })
}

module.exports = {
    createJWT,
    validateJWT
}