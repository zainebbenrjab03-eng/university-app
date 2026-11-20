
import { useState } from 'react'
import './StudentForm.css'

function StudentForm({
    onAjouterEtudiant,
    etudiantModifier,
    onEnregistrerModification,
}) {

    const [nom, setNom] = useState(etudiantModifier?.nom || "");
    const [prenom, setPrenom] = useState(etudiantModifier?.prenom || "");
    const [email, setEmail] = useState(etudiantModifier?.email || "");
    const [telephone, setTelephone] = useState(etudiantModifier?.telephone || "");
    const [filiere, setFiliere] = useState(etudiantModifier?.filiere || "");
    const [anneeEtude, setAnneeEtude] = useState(etudiantModifier?.annee || "");
    const [groupe, setGroupe] = useState(etudiantModifier?.groupe || "");
    const [ville, setVille] = useState(etudiantModifier?.ville || "");
    const [image, setImage] = useState(etudiantModifier?.image || "");

    const [erreurs, setErreurs] = useState({});

    // Validation du formulaire
    function validerFormulaire() {
        const nouvellesErreurs = {};

        if (!nom.trim()) {
            nouvellesErreurs.nom = "Le nom est obligatoire";
        }

        if (!prenom.trim()) {
            nouvellesErreurs.prenom = "Le prénom est obligatoire";
        }

        if (!email.trim()) {
            nouvellesErreurs.email = "L'email est obligatoire";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            nouvellesErreurs.email = "Email invalide";
        }

        if (!telephone.trim()) {
            nouvellesErreurs.telephone = "Le téléphone est obligatoire";
        }

        setErreurs(nouvellesErreurs);

        return Object.keys(nouvellesErreurs).length === 0;
    }

    // Soumission du formulaire
    function handleSubmit(e) {
        e.preventDefault();

        if (!validerFormulaire()) {
            return;
        }

        const nouvelEtudiant = {
            nom: nom.trim(),
            prenom: prenom.trim(),
            email: email.trim(),
            telephone: telephone.trim(),
            filiere: filiere,
            annee: anneeEtude,
            groupe: groupe,
            ville: ville,
            image: image,
        };

        if (etudiantModifier) {
            onEnregistrerModification({
                ...nouvelEtudiant,
                id: etudiantModifier.id,
            });
        } else {
            onAjouterEtudiant(nouvelEtudiant);

            // Réinitialiser le formulaire
            setNom("");
            setPrenom("");
            setEmail("");
            setTelephone("");
            setFiliere("");
            setAnneeEtude("");
            setGroupe("");
            setVille("");
            setImage("");
        }

        setErreurs({});
    }

    return (
        <form className="student-form" onSubmit={handleSubmit}>

            <div className="form-group">

                <h2>
                    {etudiantModifier
                        ? "Modifier un étudiant"
                        : "Ajouter un étudiant"}
                </h2>

                <label htmlFor="nom">Nom :</label>
                <input
                    id="nom"
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
                {erreurs.nom && (
                    <p className="error-msg">{erreurs.nom}</p>
                )}

                <label htmlFor="prenom">Prénom :</label>
                <input
                    id="prenom"
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />
                {erreurs.prenom && (
                    <p className="error-msg">{erreurs.prenom}</p>
                )}

                <label htmlFor="email">Email :</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {erreurs.email && (
                    <p className="error-msg">{erreurs.email}</p>
                )}

                <label htmlFor="telephone">Téléphone :</label>
                <input
                    id="telephone"
                    type="text"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                />
                {erreurs.telephone && (
                    <p className="error-msg">{erreurs.telephone}</p>
                )}

                <label htmlFor="filiere">Filière :</label>
                <select
                    id="filiere"
                    value={filiere}
                    onChange={(e) => setFiliere(e.target.value)}
                >
                    <option value="">Choisir une filière</option>
                    <option value="GLSI">GLSI</option>
                    <option value="RSI">RSI</option>
                    <option value="DSI">DSI</option>
                </select>

                <label htmlFor="annee">Année d'étude :</label>
                <input
                    id="annee"
                    type="text"
                    value={anneeEtude}
                    onChange={(e) => setAnneeEtude(e.target.value)}
                />

                <label htmlFor="groupe">Groupe :</label>
                <input
                    id="groupe"
                    type="text"
                    value={groupe}
                    onChange={(e) => setGroupe(e.target.value)}
                />

                <label htmlFor="ville">Ville :</label>
                <input
                    id="ville"
                    type="text"
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                />

                <label htmlFor="image">Image :</label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const fichier = e.target.files[0];

                        if (fichier) {
                            setImage(URL.createObjectURL(fichier));
                        }
                    }}
                />

            </div>

            <button type="submit" className="btn-submit">
                {etudiantModifier ? "Enregistrer les modifications" : "Ajouter"}
            </button>

        </form>
    );
}

export default StudentForm;
