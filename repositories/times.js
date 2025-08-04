import { conection } from "../connection.js";

export async function listarTimes() {
    const comando = `
    SELECT *
    FROM times_futebol
    `

    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirTime(novoTime) {
    const comando = `
    INSERT INTO times_futebol (nome, cidade, estado, pais, ano_fundacao, estadio, capacidade_estadio, tecnico, liga)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conection.query(comando, [novoTime.nome,novoTime.cidade,novoTime.estado,novoTime.pais,novoTime.ano_fundacao,novoTime.estadio,novoTime.capacidade_estadio,novoTime.tecnico,novoTime.liga])
    return info.insertId;
}