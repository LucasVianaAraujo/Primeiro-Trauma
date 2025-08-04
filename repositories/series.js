import { conection } from "../connection.js";

export async function verSeries() {
    const comando = ` 
    SELECT *
    FROM SERIES
    `

    const [registros] = await conection.query(comando)
    return registros;
}

export async function inserirSerie(novaSerie) {
    const comando = `
    INSERT INTO SERIES (titulo, ano_lancamento, genero, temporadas, criador, avaliacao)
    VALUES (? , ? , ? , ? , ? , ?);
    `

    const [info] = await conection.query(comando, [novaSerie.titulo, novaSerie.ano_lancamento, novaSerie.genero, novaSerie.temporadas, novaSerie.criador, novaSerie.avaliacao])
    return info.insertId;
}