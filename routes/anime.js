const express = require('express');
const router = express.Router();

const anime = require('../controllers/anime');
const catchAsync = require('../utils/catchAsync');

router.get('/', catchAsync(anime.index));
// router.post('/anime/search', catchAsync(anime.searchAnime));
// router.get('/aired', catchAsync(anime.airedAnime));
// router.get('/upcoming', catchAsync(anime.upcomingAnime));
// router.get('/favorite', catchAsync(anime.favoriteAnime));
// router.get('/:id', catchAsync(anime.showAnime));
// router.get('/characters/top', catchAsync(anime.topCharacters));
// router.post('/characters', catchAsync(anime.searchCharacter));
// router.get('/:id/characters', catchAsync(anime.getCharacter));

module.exports = router;