import React from 'react';
import Image from 'next/image';

function BigShow() {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 p-8">
        {/* Affichage du produit à gauche */}
        <Image src="/img/ecrangaming.jfif" alt="Produit" className="w-full rounded-lg" width={300} height={0}/>
      </div>
      <div className="w-3/5 p-8">
        {/* Nom du produit en haut de la page */}
        <h1 className="text-white font-bold mb-8">Ecran Gaming 165 Hz</h1>

        {/* Description de produit à droite */}
        <p className="text-white font-bold mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          lacus ex. Curabitur vel bibendum magna, ut efficitur neque. Sed
          tristique diam lectus, nec bibendum nunc lacinia sed. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Quisque hendrerit purus nec ligula facilisis, eget
          dignissim dolor dignissim. Etiam venenatis lobortis semper. Fusce
          iaculis quam in fringilla lacinia. Nullam et mauris eu lacus blandit
          pharetra. Aliquam et neque vulputate, pretium leo vel, ultrices diam.
          Proin eget sapien aliquet, malesuada neque eget, accumsan odio. Duis
          dapibus, risus et venenatis lacinia, ipsum mi congue metus, at
          pellentesque nisl nunc id felis. Suspendisse non varius ex. Duis
          commodo feugiat augue, eget ultrices lectus ultricies vel. Fusce
          sollicitudin condimentum quam id malesuada. Vestibulum in ante nec
          ipsum rutrum consectetur.
        </p>
      </div>
    </div>
  );
}

export default BigShow;