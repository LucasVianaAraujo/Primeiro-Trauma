import { conection } from "../connection.js";

export async function listarCarros1() {
    const comando = `
    SELECT *
    FROM Carros1
    `

    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirCarro1(novoCarro) {
    const comando = `
    INSERT INTO Carros1 (id, Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conection.query(comando, [novoCarro.id,novoCarro.Valor,novoCarro.Placa,novoCarro.modelo,novoCarro.ano_fabricacao,novoCarro.cor,novoCarro.ar_condicionado])
    return info.insertId;
}