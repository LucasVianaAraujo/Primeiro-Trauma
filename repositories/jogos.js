import { conection } from "../connection.js";

export async function listarJogos() {
    const comando = `
    SELECT *
    FROM jogos_video_game
    `

    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirJogo(novoJogo) {
    const comando = `
    INSERT INTO jogos_video_game (titulo, genero, plataforma, data_lancamento, preco, classificacao_etaria, desenvolvedora)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await conection.query(comando, [novoJogo.titulo,novoJogo.genero,novoJogo.plataforma,novoJogo.data_lancamento,novoJogo.preco,novoJogo.classificacao_etaria,novoJogo.desenvolvedora])
    return info.insertId;
}