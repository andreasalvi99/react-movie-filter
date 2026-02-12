const films = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

const genres = []; // ?? Questo è l'array che userò nel select

for (let i = 0; i < films.length; i++) {
  const currentGenre = films[i].genre;
  if (!genres.includes(currentGenre)) {
    genres.push(currentGenre);
    console.table(genres);
  }
}

export default function App() {
  return (
    <>
      <section className="mt-5">
        <div className="container text-center p-5">
          <h1 className="text-start mb-2">Catalogo film:</h1>

          <ul className="list-group list-group-flush text-start">
            {films.map((film, index) => {
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
