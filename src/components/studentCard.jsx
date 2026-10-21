import './App.css'
import img from './assets/img.jpg'

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

function studentCard() {
  return (
    <div className='container'>
        <div className='card'>
      

      <img src={etudiant.image} alt="Photo de Zaineb" />

      <h1>Fiche étudiant</h1>
      <strong>Nom & Prénom :</strong> {etudiant.nom} {etudiant.prenom} <br />
      <strong>Email :</strong> {etudiant.email}<br/>
        <strong>Téléphone :</strong> {etudiant.telephone}<br/>
        <strong>Filière :</strong> {etudiant.Filière}<br/>
        <strong>Année d'étude :</strong> {etudiant.Année}<br/>
        <strong>Groupe :</strong> {etudiant.Groupe}<br/>
        <strong>Ville :</strong> {etudiant.Ville}<br/>
      <button ><a href="main.jsx">contacter</a></button>
    </div>
    </div>
  )
}

export default App
