import { conection } from "../connection.js";

export async function listarTrabalhosMotos() {
    const comando = `
    SELECT *
    FROM trabalhos_motos
    `

    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirTrabalhoMoto(novoTrabalho) {
    const comando = `
    INSERT INTO trabalhos_motos (placa_moto, modelo, descricao_trabalho, data_entrada, data_saida, status, valor)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conection.query(comando, [novoTrabalho.placa_moto,novoTrabalho.modelo,novoTrabalho.descricao_trabalho,novoTrabalho.data_entrada,novoTrabalho.data_saida,novoTrabalho.status,novoTrabalho.valor])
    return info.insertId;
}