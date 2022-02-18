import Home from '../screens/Home'
import Anime from '../screens/Anime'
import Character from '../screens/Character'

const build = (path, component) => ({
  path,
  component,
})

export const Paths = Object.freeze({
  home: '/',
  latest: '/latest',
  longest: '/longest',
  bestRated: '/bestRated',
  anime: {
    get: '/anime/:id',
    to: animeId => `/anime/${animeId}`,
  },
  character: {
    get: '/character/:id',
    to: characterId => `/character/${characterId}`,
  },
})

const MediaListing = [
  build(Paths.home, <Home sort="POPULARITY_DESC" />),
  build(Paths.latest, <Home sort="UPDATED_AT_DESC" />),
  build(Paths.longest, <Home sort="EPISODES_DESC" />),
  build(Paths.bestRated, <Home sort="SCORE_DESC" />),
]

const AppRoutes = [
  ...MediaListing,
  build(Paths.anime.get, <Anime />),
  build(Paths.character.get, <Character />),
]

export default AppRoutes
