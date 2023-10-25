const joi = require('joi');

const alunoSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O nome do aluno é obrigatório.',
        'string.empty': 'O nome do aluno é obrigatório.',
        'string.base': 'O nome do aluno é obrigatório e requer um nome válido.'
    }),
    idade: joi.number().integer().required().positive().less(99).messages({
        'any.required': 'A idade é obrigatória.',
        'number.base': 'A idade é obrigatória e requer um número inteiro positivo.',
        'number.integer': 'A idade é obrigatória e requer um número inteiro positivo.',
        'number.positive': 'A idade é obrigatória e requer um número inteiro positivo.'
    }),
    nota_primeiro_semestre: joi.number().precision(2).required().min(0).max(10).messages({
        'any.required': 'A nota do primeiro semestre é obrigatória.',
        'number.base': 'A nota do primeiro semestre é obrigatória e requer um número entre 0 e 10.',
        'number.precision': 'A nota do primeiro semestre é obrigatória e requer um número entre 0 e 10 com até duas casas decimais',
        'number.min': 'A nota do primeiro semestre é obrigatória e requer um número entre 0 e 10.',
        'number.max': 'A nota do primeiro semestre é obrigatória e requer um número entre 0 e 10.',
    }),
    nota_segundo_semestre: joi.number().precision(2).required().min(0).max(10).messages({
        'any.required': 'A nota do segundo semestre é obrigatória.',
        'number.base': 'A nota do segundo semestre é obrigatória e requer um número entre 0 e 10.',
        'number.precision': 'A nota do primeiro semestre é obrigatória e requer um número entre 0 e 10 com até duas casas decimais',
        'number.min': 'A nota do segundo semestre é obrigatória e requer um número entre 0 e 10.',
        'number.max': 'A nota do segundo semestre é obrigatória e requer um número entre 0 e 10.',
    }),
    nome_professor: joi.string().required().messages({
        'any.required': 'O nome do professor é obrigatório.',
        'string.empty': 'O nome do professor é obrigatório.',
        'string.base': 'O nome do professor é obrigatório e requer um nome válido.'
    }),
    numero_sala: joi.number().integer().required().positive().messages({
        'any.required': 'O nome da sala é obrigatório.',
        'number.base': 'O nome da sala é obrigatório e requer um número inteiro.',
        'number.integer': 'O nome da sala é obrigatório e requer um número inteiro.',
        'number.positive': 'O nome da sala é obrigatório e requer um número inteiro positivo.'
    })
});

module.exports = alunoSchema;