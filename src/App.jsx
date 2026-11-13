
import './App.css'
import img from './assets/img.jpg'
import img2 from './assets/img2.jpg'
import StudentCard from './components/studentCard'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useState } from 'react'
function App() {
  
const [etudiants,setEtudiants] =useState( [
  { 
    id:1,
    nom: "Zaineb",
    prenom: "Ben Rjab",
    age: "20",
    email: "zainebbenrja03@gmail.com",
    telephone: "24768870",
    filiere: "Génie Logiciel",
    annee: "2026/2027",
    groupe: "GLSI A",
    ville: "Kelibia",
    image: img,
  },
  {
    id:2,
    nom: "Sarra",
    prenom: "Trabelsi",
    age: "20",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel",
    annee: "2026/2027",
    groupe: "GLSI A",
    ville: "Sousse",
    image: img2,
  },
]

)
const [recherche, setRecherche] = useState("")
function ajouterEtudiant(){
    const nouvelEtudiant={
      id: Date.now(),
      nom:"ben salem",
      prenom:"yassine",
      email:"yassine.bensalem@gmail.com",
      telephone:"+216 44 444 444",
      filiere:"genie logiciel et sys d'inform",
      annee:"2eme année",
      groupe:"GLSI 1",
      ville:"sfax",
      image:img,
    }
    setEtudiants([...etudiants,nouvelEtudiant])
  }
  
  function supprimeretudiant(id) {
    setEtudiants(etudiants.filter((etudiant)=>etudiant.id!=id))
  
}
function modifieretudiant(id){
  let v1=prompt("donner le nom")
  
 if (v1 === null || v1.trim() === "") {
    alert("Nom invalide");
    return;
  }

  v1 = v1.trim();

  setEtudiants(etudiants.map((etudiant)=>etudiant.id==id ?{...etudiant,nom:v1}:etudiant))
}


  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    etudiant.prenom.toLowerCase().includes(recherche.toLowerCase()) ||
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
)
  return (
    <div className="page">
      <Header />
      <Navbar />
    <div className="actions">
  <button onClick={ajouterEtudiant}>ajouter un etudiant</button>
<input
  type="text"
  placeholder="Rechercher un étudiant..."
  value={recherche}
  onChange={(e) => setRecherche(e.target.value)}
/>

</div>
      <main className="container" id="etudiants">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            id={etudiant.id}
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            annee={etudiant.annee}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            supprimeretudiant={supprimeretudiant}
            modifieretudiant={modifieretudiant}
          />
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default App
