import React from 'react';
import Link from 'next/link';

function Inscription() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-8">Inscription</h1>
      {/* Contenu de la page d'inscription */}
      <p className="mt-4">Remplissez le formulaire de inscription :</p>
      {/* Formulaire d'inscription */}
      {/* ... */}
      
      {/* Lien vers la page de connexion */}
      <p className="mt-4">
        Déjà inscrit ?{' '}
        <Link href="/InscriptionUser/inscription" >
          <p className="text-blue-500">Connectez-vous ici</p>
        </Link>
      </p>
    </div>
  );
}

export default Inscription;



