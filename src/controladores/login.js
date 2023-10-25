const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const hash = process.env.JWT;
const knex = require('../conexao');

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await knex('usuarios')
            .where({ email })
            .first();

        if (!usuario) {
            return res.status(404).json({ mensagem: 'O usuario não foi encontrado.' });
        };

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(400).json({ mensagem: 'Usuário e/ou senha inválidos!' });
        }

        const token = jwt.sign({ id: usuario.id }, hash, { expiresIn: '8h' })

        const { senha: _, ...usuarioLogado } = usuario;

        return res.status(200).json({ usuario: usuarioLogado, token });
    }
    catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    };
};

module.exports = loginUsuario;