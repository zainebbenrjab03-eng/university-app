
import './App.css'
import img from './assets/img.jpg'
import img2 from './assets/img2.jpg'
import StudentCard from './components/studentCard'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import StudentForm from './components/StudentForm'
import { useState, useEffect } from 'react'

function App() {

    const [etudiants, setEtudiants] = useState([
        {
            id: 1,
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
            id: 2,
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
    ]);

    const [recherche, setRecherche] = useState("");
    const [etudiantModifier, setEtudiantModifer] = useState(null);

    useEffect(() => {
        localStorage.setItem("etudiants", JSON.stringify(etudiants));
    }, [etudiants]);

    function ajouterEtudiant(nouvelEtudiant) {
        const etudiantAvecId = {
            ...nouvelEtudiant,
            id: Date.now(),
        };

        setEtudiants((anciensEtudiants) => [
            ...anciensEtudiants,
            etudiantAvecId
        ]);
    }

    function supprimeretudiant(id) {
        setEtudiants((anciensEtudiants) =>
            anciensEtudiants.filter((etudiant) => etudiant.id !== id)
        );
    }

    function modifierEtudiant(etudiant) {
        setEtudiantModifer(etudiant);
    }

    function enregistrerModification(etudiantModifie) {
        setEtudiants((anciensEtudiants) =>
            anciensEtudiants.map((etudiant) =>
                etudiant.id === etudiantModifie.id
                    ? etudiantModifie
                    : etudiant
            )
        );

        setEtudiantModifer(null);
    }

    const etudiantsFiltres = etudiants.filter((etudiant) =>
        etudiant.nom.toLowerCase().includes(recherche.toLowerCase()) ||
        etudiant.prenom.toLowerCase().includes(recherche.toLowerCase()) ||
        etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
    );

    return (
        <div className="page">
            <Header />

            <Navbar />

            <StudentForm
                key={etudiantModifier ? etudiantModifier.id : "nouveau"}
                onAjouterEtudiant={ajouterEtudiant}
                etudiantModifier={etudiantModifier}
                onEnregistrerModification={enregistrerModification}
            />

            <div className="actions">
                <input
                    type="text"
                    placeholder="Rechercher un étudiant..."
                    value={recherche}
                    onChange={(e) => setRecherche(e.target.value)}
                />
            </div>

            <main className="container" id="etudiants">
                {etudiantsFiltres.length > 0 ? (
                    etudiantsFiltres.map((etudiant) => (
                        <StudentCard
                            id={etudiant.id}
                            key={etudiant.id}
                            prenom={etudiant.prenom}
                            nom={etudiant.nom}
                            email={etudiant.email}
                            telephone={etudiant.telephone}
                            annee={etudiant.annee}
                            groupe={etudiant.groupe}
                            ville={etudiant.ville}
                            image={etudiant.image}
                            supprimeretudiant={supprimeretudiant}
                            onModifier={modifierEtudiant}
                        />
                    ))
                ) : (
                    <p>Aucun étudiant trouvé.</p>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default App;
