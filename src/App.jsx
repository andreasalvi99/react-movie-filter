import { useEffect, useState } from "react";

const startingFilms = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

const startingGenres = []; // ?? Questo è l'array che userò nel select

for (let i = 0; i < startingFilms.length; i++) {
  const currentGenre = startingFilms[i].genre;
  if (!startingGenres.includes(currentGenre)) {
    startingGenres.push(currentGenre);
  }
}

export default function App() {
  const [films, setFilms] = useState(startingFilms); // ? Stato della lista all'inizio
  const [selectedGenre, setSelectedGenre] = useState(""); // ? Stato del select all'inizio
  const [filteredFilms, setFilteredFilms] = useState(films); // ? Stato della lista filtrata
  const [userInputFilter, setUserInputFilter] = useState(""); // ? Stato dell'input filtro per nome all'inizio
  const [userInputTitleAdd, setUserInputTitleAdd] = useState(""); // ? Stato dell'input aggiungi titolo all'inizio
  const [userInputGenreAdd, setUserInputGenreAdd] = useState(""); // ? Stato dell'input aggiungi genere all'inizio

  useEffect(() => {
    let filteredList = films;

    // ? Filtro per genere(select)
    if (startingGenres.includes(selectedGenre)) {
      filteredList = filteredList.filter((film) => {
        return film.genre === selectedGenre;
      });
    }

    // ? Filtro per titolo(input)
    const sanifiedInput = userInputFilter.toLowerCase().trim();
    if (sanifiedInput !== "") {
      filteredList = filteredList.filter((film) => {
        const sanifiedTitle = film.title.toLowerCase().trim();
        return sanifiedTitle.includes(sanifiedInput);
      });
    }

    setFilteredFilms(filteredList);
  }, [films, userInputFilter, selectedGenre]);

  return (
    <>
      <section className="mt-5">
        <div className="container text-center p-5">
          <h1 className="text-start mb-3">Catalogo film:</h1>
          <select
            className="form-select mb-3 text-muted"
            aria-label="Default select example"
            value={selectedGenre}
            onChange={(e) => {
              setSelectedGenre(e.target.value);
            }}
          >
            <option className="text-muted">Filtra...</option>
            {startingGenres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <input
            value={userInputFilter}
            onChange={(e) => {
              setUserInputFilter(e.target.value);
            }}
            className="form-control my-3"
            type="text"
            placeholder="Cerca per nome..."
            aria-label=".form-control-sm example"
          ></input>
          <ul className="list-group list-group-flush text-start">
            {filteredFilms.map((film, index) => (
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
            ))}
          </ul>
          <form
            className="input-group my-3 form"
            onSubmit={(e) => {
              e.preventDefault();
              setFilms([
                ...films,
                { title: userInputTitleAdd, genre: userInputGenreAdd },
              ]);
              console.log(userInputTitleAdd);
            }}
          >
            <input
              value={userInputTitleAdd}
              onChange={(e) => {
                setUserInputTitleAdd(e.target.value);
              }}
              type="text"
              className="form-control title"
              placeholder="Inserisci il titolo..."
              aria-label="Recipient’s username"
              aria-describedby="button-addon2"
            />

            <input
              value={userInputGenreAdd}
              onChange={(e) => {
                setUserInputGenreAdd(e.target.value);
              }}
              type="text"
              className="form-control genre"
              placeholder="Inserisci il genere..."
              aria-label="Recipient’s username"
              aria-describedby="button-addon2"
            />
          </form>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFilms([
                ...films,
                { title: userInputTitleAdd, genre: userInputGenreAdd },
              ]);
              console.log(userInputTitleAdd);
            }}
            className="btn btn-outline-primary"
            type="button"
            id="button-addon3"
          >
            + Aggiungi
          </button>
        </div>
      </section>
    </>
  );
}
