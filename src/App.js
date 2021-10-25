import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import { useState } from 'react'
import RateMovie from './RateMovie';
import AddMovie from './AddMovie';

function App() {

  const [movies, setMovies] = useState([
    {
      title : "Star wars La menace phantome",
      description : "Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l'âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. Le maître Jedi Qui-Gon Jinn le découvre et entrevoit alors son immense potentiel. Pendant ce temps, l'armée de droïdes de l'insatiable Fédération du Commerce a envahi Naboo dans le cadre d'un plan secret des Sith visant à accroître leur pouvoir.",
      posterUrl : "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      rating : 2
    },
    {
      title : "Star wars L'attaque des clones",
      description : "Depuis le blocus de la planète Naboo, la République, gouvernée par le Chancelier Palpatine, connaît une crise. Un groupe de dissidents, mené par le sombre Jedi comte Dooku, manifeste son mécontentement. Le Sénat et la population intergalactique se montrent pour leur part inquiets. Certains sénateurs demandent à ce que la République soit dotée d'une armée pour empêcher que la situation ne se détériore. Padmé Amidala, devenue sénatrice, est menacée par les séparatistes et échappe à un attentat.",
      posterUrl : "https://m.media-amazon.com/images/I/51BGV8AJ4RL.jpg",
      rating : 3
    },
    {
      title : "Star wars La revenge des Sith",
      description : "La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d'un pouvoir sans précédent, tenté par le côté obscur de la Force, il prête allégeance au maléfique Darth Sidious et devient Dark Vador.Les Seigneurs Sith s'unissent alors pour préparer leur revanche, qui commence par l'extermination des Jedi.",
      posterUrl : "https://flxt.tmsimg.com/assets/p35273_v_v13_bg.jpg",
      rating : 5
    }
  ])
  const [search, setSearch] = useState('')
  const [ rate, setRate ] = useState(1)
  const addInMovies=(movie)=> {
    setMovies([...movies,movie])
  }
  console.log(movies)
  return (
    <div className="App">
      <Filter setSearch={setSearch} search={search} />
      <RateMovie setRate={setRate}/>
      <MovieList movies={movies} search={search} rate={rate}/>
      <AddMovie addInMovies={addInMovies}  />
    </div>
  );
}

export default App;