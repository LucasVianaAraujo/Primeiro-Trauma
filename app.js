import { listarFilmes } from "./repositories/filmes.js";
import { inserirFilme } from "./repositories/filmes.js";
import { listarLivros } from "./repositories/livros.js";
import { inserirLivro } from "./repositories/livros.js";
import { verSeries } from "./repositories/series.js";
import { inserirSerie } from "./repositories/series.js";
import { listarJogos } from "./repositories/jogos.js";
import { inserirJogo } from "./repositories/jogos.js";
import { listarAnimes } from "./repositories/animes.js";
import { inserirAnime } from "./repositories/animes.js";
import { listarTenis } from "./repositories/tenis.js";
import { inserirTenis } from "./repositories/tenis.js";
import { listarTimes } from "./repositories/times.js";
import { inserirTime } from "./repositories/times.js";
import { listarTrabalhosMotos } from "./repositories/motos.js";
import { inserirTrabalhoMoto } from "./repositories/motos.js";
import { listarCarros1 } from "./repositories/carros.js";
import { inserirCarro1 } from "./repositories/carros.js";
import { listarAlunos } from "./repositories/alunos.js";
import { inserirAluno } from "./repositories/alunos.js";

import express from "express";
const api = express();
api.use(express.json());


// filmes
api.get('/verfilmes', async (req, resp) => {
    let registros = await listarFilmes();
    resp.send(registros);
})

api.post('/inserirfilme', async (req, resp) => {
    let novoFilme = req.body;

    let id = await inserirFilme(novoFilme);
    resp.send({ novoId: id });
})

// séries
api.get('/verseries', async (req, resp) => {
    let registros = await verSeries();
    resp.send(registros);
})

api.post('/inserirserie', async (req, resp) => {
    let novaSerie = req.body;

    let id = await inserirSerie(novaSerie)
    resp.send({ novoId: id })
})

//livros
api.get('/verlivros', async (req, resp) => {
    let registros = await listarLivros();
    resp.send(registros)
})

api.post('/inserirlivro', async (req, resp) => {
    let novoLivro = req.body;

    let id = await inserirLivro(novoLivro);
    resp.send({ novoId: id });
})

// jogos
api.get('/verjogos', async (req, resp) => {
    let registros = await listarJogos();
    resp.send(registros);
})

api.post('/inserirjogo', async (req, resp) => {
    let novoJogo = req.body;

    let id = await inserirJogo(novoJogo);
    resp.send({ novoId: id });
})

// animes
api.get('/veranimes', async (req, resp) => {
    let registros = await listarAnimes();
    resp.send(registros);
})

api.post('/inseriranime', async (req, resp) => {
    let novoAnime = req.body;

    let id = await inserirAnime(novoAnime);
    resp.send({ novoId: id });
})

// tênis
api.get('/vertenis', async (req, resp) => {
    let registros = await listarTenis();
    resp.send(registros);
})

api.post('/inserirtenis', async (req, resp) => {
    let novoTenis = req.body;

    let id = await inserirTenis(novoTenis);
    resp.send({ novoId: id });
})

// times de futebol
api.get('/vertimes', async (req, resp) => {
    let registros = await listarTimes();
    resp.send(registros);
})

api.post('/inserirtime', async (req, resp) => {
    let novoTime = req.body;

    let id = await inserirTime(novoTime);
    resp.send({ novoId: id });
})

// trabalhos em motos
api.get('/vertrabalhosmotos', async (req, resp) => {
    let registros = await listarTrabalhosMotos();
    resp.send(registros);
})

api.post('/inserirtrabalhomoto', async (req, resp) => {
    let novoTrabalho = req.body;

    let id = await inserirTrabalhoMoto(novoTrabalho);
    resp.send({ novoId: id });
})

// carros1
api.get('/vercarros1', async (req, resp) => {
    let registros = await listarCarros1();
    resp.send(registros);
})

api.post('/inserircarro1', async (req, resp) => {
    let novoCarro = req.body;

    let id = await inserirCarro1(novoCarro);
    resp.send({ novoId: id });
})

// alunos
api.get('/veralunos', async (req, resp) => {
    let registros = await listarAlunos();
    resp.send(registros);
})

api.post('/inseriraluno', async (req, resp) => {
    let novoAluno = req.body;

    let id = await inserirAluno(novoAluno);
    resp.send({ novoId: id });
})

api.listen(5010, () => console.log("Connection Successful!"));