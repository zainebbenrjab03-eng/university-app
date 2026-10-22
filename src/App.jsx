
import './App.css'
import img from './assets/img.jpg'
import studentCard from "./components/studentCard";
const etudiants =[
 {
  nom: "Zaineb",
  prenom: "Ben Rjab",
  age: "20",
  email: "zainebbenrja03@gmail.com",
  telephone: "24768870",
  Filière: "Génie Logiciel",
  Année: "2026/2027",
  Groupe: "GLSI A",
  Ville: "Kelibia",
  image: studentImage,
},
{
  nom: "sarra",
  prenom: "Trabelsi",
  age: "20",
  email: "sarra.trabelsi@gmail.com",
  telephone: "+216 22 345 678 ",
  Filière: "Génie Logiciel",
  Année: "2026/2027",
  Groupe: "GLSI A",
  Ville: "SOUSSE",
  

}
]
function App() {
  return (
    <div className='container'>
      {etudiants.map((etudiants)=> (
      <studentCard
        prenom={etudiants.prenom}
        nom={etudiants.nom}
        key={etudiants.email}
        telephone={etudiants.telephone}
        filiere={etudiants.filiere}
        anneeEtude={etudiants.anneeEtude}
        groupe={etudiants.groupe}
        image={etudiants.image}
        />
    
    
    ))}
    </div>
  )}
export default App
  
