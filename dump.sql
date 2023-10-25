CREATE DATABASE escola;

CREATE TABLE usuarios (
	id serial primary key unique,
    nome text not null,
    email text not null unique,
    senha text not null
);

CREATE TABLE alunos (
    id serial primary key unique,
    nome text not null,
    idade char(2) not null,
    nota_primeiro_semestre integer not null,
    nota_segundo_semestre integer not null,
    nome_professor text not null,
    numero_sala text not null
);