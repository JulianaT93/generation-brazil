const knex = require('../conexao');

const cadastrarAluno = async (req, res) => {
    const {
        nome,
        idade,
        nota_primeiro_semestre,
        nota_segundo_semestre,
        nome_professor,
        numero_sala
    } = req.body;

    try {
        const novoAluno = await knex('alunos')
            .insert({
                nome,
                idade,
                nota_primeiro_semestre,
                nota_segundo_semestre,
                nome_professor,
                numero_sala
            })
            .returning('*');

        return res.status(201).json(novoAluno[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
};

const listarAlunos = async (req, res) => {
    try {
        const todosAlunos = await knex('alunos');

        return res.json(todosAlunos);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const detalharAluno = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id || isNaN(id)) {
            return res.status(400).json({ mensagem: 'Informe um id válido.' });
        };

        const alunoEncontrado = await knex('alunos')
            .where({ id })
            .first()
            ;

        if (!alunoEncontrado) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado.' })
        };

        return res.json(alunoEncontrado);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const atualizarAluno = async (req, res) => {
    const { id } = req.params;
    const {
        nome,
        idade,
        nota_primeiro_semestre,
        nota_segundo_semestre,
        nome_professor,
        numero_sala
    } = req.body;

    try {
        if (!id || isNaN(id)) {
            return res.status(400).json({ mensagem: 'Informe um id válido.' });
        };

        const alunoEncontrado = await knex('alunos')
            .where({ id })
            .first()
            ;

        if (!alunoEncontrado) {
            return res.status(404).json({ mensagem: 'Aluno não encontrado.' })
        };

        await knex('alunos')
            .where({ id })
            .update({
                nome,
                idade,
                nota_primeiro_semestre,
                nota_segundo_semestre,
                nome_professor,
                numero_sala
            });

        return res.json({ mensagem: 'Os dados do aluno foram atualizados com sucesso.' });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
}

const deletarAluno = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id || isNaN(id)) {
            return res.status(400).json({ mensagem: 'Informe um id válido.' });
        };

        const alunoEncontrado = await knex('alunos')
            .where({ id })
            .first();

        if (!alunoEncontrado) {
            return res.status(404).json({ mensagem: 'Não foi possível encontrar aluno com o id informado.' })
        };

        await knex('alunos')
            .where({ id })
            .delete();

        return res.json({ mensagem: 'Os dados do aluno foram excluídos com sucesso.' });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    }
};

module.exports = {
    cadastrarAluno,
    listarAlunos,
    detalharAluno,
    atualizarAluno,
    deletarAluno
}