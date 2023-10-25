const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swagger = require('./documentacao/swagger.json');
const verificarUsuarioLogado = require('./intermediarios/autenticacaoLogin');
const validarRequisicao = require('./intermediarios/validarRequisicao');
const loginSchema = require('./validacoes/loginSchema');
const usuarioSchema = require('./validacoes/usuarioSchema');
const alunoSchema = require('./validacoes/alunoSchema');
const loginUsuario = require('./controladores/login');
const {
    cadastrarUsuario,
    detalharUsuario,
    atualizarUsuario } = require('./controladores/usuarios');
const {
    detalharAluno,
    listarAlunos,
    cadastrarAluno,
    atualizarAluno,
    deletarAluno
} = require('./controladores/alunos');

const rotas = express();

rotas.use('/documento', swaggerUi.serve, swaggerUi.setup(swagger));
rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema), loginUsuario);
rotas.use(verificarUsuarioLogado);
rotas.get('/usuario', detalharUsuario);
rotas.put('/usuario', validarRequisicao(usuarioSchema), atualizarUsuario);
rotas.get('/alunos', listarAlunos);
rotas.post('/aluno', validarRequisicao(alunoSchema), cadastrarAluno);
rotas.get('/aluno/:id', detalharAluno);
rotas.put('/aluno/:id', validarRequisicao(alunoSchema), atualizarAluno);
rotas.delete('/aluno/:id', deletarAluno);
rotas.use(function (req, res, next) {
    res.status(404).json({ mensagem: 'Erro ao acessar a rota.' });
});

module.exports = rotas;