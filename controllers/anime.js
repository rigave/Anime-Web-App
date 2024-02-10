const fetch = require('node-fetch');

const BASE_URL = 'https://api.jikan.moe/v4';

async function fetchData(url) {
    let response = await fetch(`${BASE_URL}/${url}`);
    let data = await response.json()
    let animeData = data.data
    return animeData;
}

module.exports.index = async(req, res) => {
    try {;
        const url = "top/anime?filter=bypopularity";
        const anime = await fetchData(url);
        res.render('anime/index', { anime });
    } catch (error) {
        console.log(error);
    }
};

// module.exports.airedAnime = async (req, res) => {
//     try {
//         const url = "top/anime?filter=airing";
//         const anime = await fetchData(url);
//         res.render('anime/index', { anime });
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports.upcomingAnime = async (req, res) => {
//     try {
//         const url = "top/anime?filter=upcoming";
//         const anime = await fetchData(url);
//         res.render('anime/index', { anime });
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports.favoriteAnime = async (req, res) => {
//     try {
//         const url = "top/anime?filter=favorite";
//         const anime = await fetchData(url);
//         res.render('anime/index', { anime })
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports.searchAnime = async(req, res) => {
//     const title = req.body.title;
//     try {
//         const url = `${BASE_URL}/anime?q=${title}`
//         const response = await fetch(url);
//         const data = await response.json()
//         const anime = data.data;
//         res.render('anime/index', { anime })
//     } catch (error) {
//         console.log(error)
//     }
// };

// module.exports.topCharacters = async (req, res) => {
//     try {
//         const url = "top/characters";
//         const characters = await fetchData(url);
//         res.render('characters/index', { characters })
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports.searchCharacter = async(req, res) => {
//     try {
//         const character = req.body.character;
//         const url = `${BASE_URL}/characters?q=${character}`;
//         const response = await fetch(url);
//         const data = await response.json();
//         const characters = data.data;
//         res.render('characters/index', { characters });
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports.showAnime = async(req, res) => {
//     try {
//         const { id } = req.params;
//         const animeUrl = `${BASE_URL}/anime/${id}/full`;
//         const animeResponse = await fetch(animeUrl);
//         const data = await animeResponse.json();
//         const anime = data.data;

//         const animeCharactersUrl = `${BASE_URL}/anime/${id}/characters`;
//         const animeCharactersResponse = await fetch(animeCharactersUrl);
//         const charactersData = await animeCharactersResponse.json();
//         const characters = charactersData.data;
//         res.render('anime/show', { anime, characters });
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports.getCharacter = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const url = `${BASE_URL}/characters/${id}/full`;
//         const response = await fetch(url);
//         const data = await response.json();
//         const character = data.data

//         const characterPicUrl = `${BASE_URL}/characters/${id}/pictures`;
//         const characterPicResponse = await fetch(characterPicUrl);
//         const characterPicData = await characterPicResponse.json();
//         res.render('characters/character', { character, characterPicData, id });
//     } catch (error) {
//         console.log(error);
//     }
// };

