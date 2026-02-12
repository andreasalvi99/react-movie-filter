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
          <h1 className="text-start mb-4">Catalogo film:</h1>
          <ul className="list-group list-group-flush text-start">
            {films.map((film, index) => {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                >
                  {film.title}
                  <p className="d-inline">{film.genre}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
