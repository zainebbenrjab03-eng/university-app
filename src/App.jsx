
import './App.css'
import img from './assets/img.jpg'
import studentCard from "./components/studentCard";
const etudiant = {
  nom: "Zaineb",
  prenom: "Ben Rjab",
  age: "20",
  email: "zainebbenrja03@gmail.com",
  telephone: "24768870",
  Filière: "Génie Logiciel",
  Année: "2026/2027",
  Groupe: "GLSI A",
  Ville: "Kelibia",
  image: img,
}

function App() {
  return (
    <div className='container'>
      <studentCard/>

    </div>
  );
}

export default App
