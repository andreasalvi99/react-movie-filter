import { useState } from "react";

const startingFilms = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

const genres = []; // ?? Questo è l'array che userò nel select

for (let i = 0; i < startingFilms.length; i++) {
  const currentGenre = startingFilms[i].genre;
  if (!genres.includes(currentGenre)) {
    genres.push(currentGenre);
    console.table(genres);
  }
}

export default function App() {
  const [films, setFilms] = useState(startingFilms);

  return (
    <>
      <section className="mt-5">
        <div className="container text-center p-5">
          <h1 className="text-start mb-3">Catalogo film:</h1>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected>Filtra</option>
            {genres.map((genre, index) => {
              return (
                <option key={index} value={genre}>
                  {genre}
                </option>
              );
            })}
          </select>
          <ul className="list-group list-group-flush text-start">
            {startingFilms.map((film, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{film.title}</span>
                  <div className="wrap text-center">
                    <p className="d-inline-block mb-0 flex-grow-1">
                      {film.genre}
                    </p>
                  </div>
                  <button>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
