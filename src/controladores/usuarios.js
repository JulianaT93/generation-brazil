const bcrypt = require('bcrypt');
const knex = require('../conexao');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const usuarioEncontrado = await knex('usuarios')
            .where({ email })
            .first();

        if (usuarioEncontrado) {
            return res.status(400).json({ mensagem: 'Já existe usuário cadastrado com o e-mail informado.' });
        };

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios')
            .insert({
                nome,
                email,
                senha: senhaCriptografada
            }).returning('*');

        const { senha: _, ...dadosUsuario } = usuario[0];

        return res.status(201).json(dadosUsuario);
    }
    catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

const detalharUsuario = async (req, res) => {
    try {
        return res.json(req.usuario);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

const atualizarUsuario = async (req, res) => {
    const { id } = req.usuario;
    const { nome, email, senha } = req.body;

    try {
        const quantidadeEncontrada = await knex('usuarios')
            .where({ email })
            .where('id', '!=', id)
            .count();

        if (quantidadeEncontrada[0].count > 0) {
            return res.status(400).json({ mensagem: 'Já existe usuário cadastrado com o e-mail informado.' });
        };

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        await knex('usuarios')
            .where({ id })
            .update({
                nome,
                email,
                senha: senhaCriptografada
            });

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

module.exports = {
    cadastrarUsuario,
    detalharUsuario,
    atualizarUsuario
}