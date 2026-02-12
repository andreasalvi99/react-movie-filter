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
  console.log(currentGenre);
  if (genres.includes(currentGenre)) {
    break;
  } else {
    {
      genres.push(currentGenre);
    }
  }
  console.table(genres);
}

export default function App() {
  return (
    <>
      <section>
        <div className="container text-center">
          <h1>CIAOOOO</h1>
        </div>
      </section>
    </>
  );
}
