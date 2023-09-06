/**************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos PACIENTES no Banco de Dados.
 * Data: 19/05/2023
 * Autor: Lohannes da Silva Costa
 * Versão: 1.0
 **************************************************************************************/

//Import da biblioteca do prisma client
import { PrismaClient } from '@prisma/client';

//Instância da classe PrismaClient
var prisma = new PrismaClient()

const selectAllPacientes = async function () {

    //scriptSQL para buscar todos os itens do BD
    let sql = 'SELECT * FROM tbl_paciente'

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('SELECT * FROM tbl_aluno') - Executa diretamente o script dentro do método
    let rsPaciente = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsPaciente.length > 0) {
        return rsPaciente
    } else {
        return false
    }

}

const selectPacienteById = async function (idPaciente) {
    let sql = `SELECT * FROM tbl_paciente where id = ${idPaciente}`

    let rsPaciente = await prisma.$queryRawUnsafe(sql)

    if (rsPaciente.length > 0) {
        return rsPaciente
    } else {
        return false
    }
}

/****************************************************************************************
VVVVV Depois fazer o tratamento para caso exista um paciente com dados parecidos!!! VVVVV
****************************************************************************************/
const insertPaciente = async function (dadosPaciente) {
    let sql = `insert into tbl_paciente(
        nome,
        data_nascimento,
        email,
        senha,
        cpf,
        id_endereco_paciente,
        id_genero
    ) values (
        '${dadosPaciente.nome}',
        '${dadosPaciente.data_nascimento}',
        '${dadosPaciente.email}',
        '${dadosPaciente.senha}',
        '${dadosPaciente.cpf}',
        ${dadosPaciente.id_endereco_paciente},
        ${dadosPaciente.id_genero}
    )`
    //talvez ID de endereco e de genero mudem de nome
}

const updatePaciente = async function (dadosPaciente) {
    let sql = `update tbl_paciente set
            nome = ${dadosPaciente.nome},
            data_nascimento = ${dadosPaciente.data_nascimento},
            email = ${dadosPaciente.email},
            senha = ${dadosPaciente.senha}
        where id = ${dadosPaciente.id}`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

const deletePaciente = async function (idPaciente) {
    let sql = `delete from tbl_paciente where id = ${idPaciente}`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}