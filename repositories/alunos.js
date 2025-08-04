import { conection } from "../connection.js";

export async function listarAlunos() {
    const comando = `
    SELECT *
    FROM alunos
    `

    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirAluno(novoAluno) {
    const comando = `
    INSERT INTO alunos (id, first_name, last_name, email, gender, salario, Cidade)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conection.query(comando, [novoAluno.id,novoAluno.first_name,novoAluno.last_name,novoAluno.email,novoAluno.gender,novoAluno.salario,novoAluno.Cidade])
    return info.insertId;
}