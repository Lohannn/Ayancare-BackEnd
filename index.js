/**************************************************************************************************************
* Objetivo: API para integração entre Back e Banco de dados para o App AyanCare.
* Autor: Lohannes da Silva Costa
* Data: 04/09/2023
* Versão: 1.0
**************************************************************************************************************/

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const bodyParserJSON = bodyParser.json()

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())

    next()
})

//CRUD (Create, Read, Update, Delete)
/*************************************************************************************
 * Objetibo: API de controle de Doenças Crônicas.
 * Autor: Lohannes da Silva Costa
 * Data: 04/09/2023
 * Versão: 1.0
 *************************************************************************************/



    /*************************************************************************************
     * Objetibo: API de controle de Comorbidades.
     * Autor: Lohannes da Silva Costa
     * Data: 04/09/2023
     * Versão: 1.0
     *************************************************************************************/



        /*************************************************************************************
         * Objetibo: API de controle de Pacientes.
         * Autor: Lohannes da Silva Costa
         * Data: 04/09/2023
         * Versão: 1.0
         *************************************************************************************/



            /*************************************************************************************
             * Objetibo: API de controle de Humor.
             * Autor: Lohannes da Silva Costa
             * Data: 04/09/2023
             * Versão: 1.0
             *************************************************************************************/



                /*************************************************************************************
                 * Objetibo: API de controle de Generos.
                 * Autor: Lohannes da Silva Costa
                 * Data: 04/09/2023
                 * Versão: 1.0
                 *************************************************************************************/



                    /*************************************************************************************
                     * Objetibo: API de controle de Cidades.
                     * Autor: Lohannes da Silva Costa
                     * Data: 04/09/2023
                     * Versão: 1.0
                     *************************************************************************************/



                        /*************************************************************************************
                         * Objetibo: API de controle de Estados.
                         * Autor: Lohannes da Silva Costa
                         * Data: 04/09/2023
                         * Versão: 1.0
                         *************************************************************************************/



                            /*************************************************************************************
                             * Objetibo: API de controle de Sintomas.
                             * Autor: Lohannes da Silva Costa
                             * Data: 04/09/2023
                             * Versão: 1.0
                             *************************************************************************************/



                                /*************************************************************************************
                                 * Objetibo: API de controle de Exercícios.
                                 * Autor: Lohannes da Silva Costa
                                 * Data: 04/09/2023
                                 * Versão: 1.0
                                 *************************************************************************************/



                                    /*************************************************************************************
                                     * Objetibo: API de controle de Respostas de Humor.
                                     * Autor: Lohannes da Silva Costa
                                     * Data: 04/09/2023
                                     * Versão: 1.0
                                     *************************************************************************************/



                                        /*************************************************************************************
                                         * Objetibo: API de controle de Contato.
                                         * Autor: Lohannes da Silva Costa
                                         * Data: 04/09/2023
                                         * Versão: 1.0
                                         *************************************************************************************/



                                            /*************************************************************************************
                                             * Objetibo: API de controle de Responsável.
                                             * Autor: Lohannes da Silva Costa
                                             * Data: 04/09/2023
                                             * Versão: 1.0
                                             *************************************************************************************/



                                                /*************************************************************************************
                                                 * Objetibo: API de Tipos de Telefone.
                                                 * Autor: Lohannes da Silva Costa
                                                 * Data: 04/09/2023
                                                 * Versão: 1.0
                                                 *************************************************************************************/



                                                    /*************************************************************************************
                                                     * Objetibo: API de controle de Medidas.
                                                     * Autor: Lohannes da Silva Costa
                                                     * Data: 04/09/2023
                                                     * Versão: 1.0
                                                     *************************************************************************************/



                                                        /*************************************************************************************
                                                         * Objetibo: API de controle de Medicamentos.
                                                         * Autor: Lohannes da Silva Costa
                                                         * Data: 04/09/2023
                                                         * Versão: 1.0
                                                         *************************************************************************************/



                                                            /*************************************************************************************
                                                             * Objetibo: API de controle de Tipos de Eventos.
                                                             * Autor: Lohannes da Silva Costa
                                                             * Data: 04/09/2023
                                                             * Versão: 1.0
                                                             *************************************************************************************/



                                                                /*************************************************************************************
                                                                 * Objetibo: API de controle de Eventos.
                                                                 * Autor: Lohannes da Silva Costa
                                                                 * Data: 04/09/2023
                                                                 * Versão: 1.0
                                                                 *************************************************************************************/



                                                                    /*************************************************************************************
                                                                     * Objetibo: API de controle de Cuidadores.
                                                                     * Autor: Lohannes da Silva Costa
                                                                     * Data: 04/09/2023
                                                                     * Versão: 1.0
                                                                     *************************************************************************************/



                                                                        /*************************************************************************************
                                                                         * Objetibo: API de controle de Turnos.
                                                                         * Autor: Lohannes da Silva Costa
                                                                         * Data: 04/09/2023
                                                                         * Versão: 1.0
                                                                         *************************************************************************************/



                                                                            /*************************************************************************************
                                                                             * Objetibo: API de controle de Dias.
                                                                             * Autor: Lohannes da Silva Costa
                                                                             * Data: 04/09/2023
                                                                             * Versão: 1.0
                                                                             *************************************************************************************/



                                                                                /*************************************************************************************
                                                                                 * Objetibo: API de controle de Horas.
                                                                                 * Autor: Lohannes da Silva Costa
                                                                                 * Data: 04/09/2023
                                                                                 * Versão: 1.0
                                                                                 *************************************************************************************/



                                                                                    /*************************************************************************************
                                                                                     * Objetibo: API de controle de Relatórios.
                                                                                     * Autor: Lohannes da Silva Costa
                                                                                     * Data: 04/09/2023
                                                                                     * Versão: 1.0
                                                                                     *************************************************************************************/



                                                                                        /*************************************************************************************
                                                                                         * Objetibo: API de controle de Respostas do Relatório.
                                                                                         * Autor: Lohannes da Silva Costa
                                                                                         * Data: 04/09/2023
                                                                                         * Versão: 1.0
                                                                                         *************************************************************************************/



                                                                                            /*************************************************************************************
                                                                                             * Objetibo: API de controle de Perguntas do Relatório.
                                                                                             * Autor: Lohannes da Silva Costa
                                                                                             * Data: 04/09/2023
                                                                                             * Versão: 1.0
                                                                                             *************************************************************************************/
                                                                                            

                                                                                            

app.listen(8080, function () {
    console.log('Aguardando requisições na porta 8080...');
})