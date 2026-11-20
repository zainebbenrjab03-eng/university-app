
import './StudentCard.css'
import { useState } from "react";

function StudentCard(props) {
  const [cordonneesVisibles, setCordonneesVisibles] = useState(false);

  function basculerCordonnees() {
    setCordonneesVisibles(!cordonneesVisibles);
  }

  return (
    <div className="StudentCard">
      <img src={props.image} alt="student" />

      <h1>{props.prenom} {props.nom}</h1>

      {cordonneesVisibles && (
        <>
          <p>email :{props.email}</p>
          <p>telephone : {props.telephone}</p>
        </>
      )}

      <p>Année : {props.annee}</p>
      <p>Groupe : {props.groupe}</p>
      <p>Ville : {props.ville}</p>

      <button>Contacter</button>

      <button onClick={basculerCordonnees}>
        {cordonneesVisibles
          ? "Masquer les coordonnées"
          : "Afficher les coordonnées"
        }
      </button>
      <button onClick={() => props.supprimeretudiant(props.id)}>
  Supprimer
</button>
<button onClick={()=>onModifier(etudiant)}>
  modifier
</button>

    </div>
  )
}

export default StudentCard
