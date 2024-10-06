import React from "react";

const Footer = () => {
	// Déclaration du composant fonctionnel `Footer`, qui représente le pied de page du site.
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			{/* Élément `footer` contenant des styles pour la bordure et la couleur du texte */}
			{/* La bordure supérieure est d'une couleur personnalisée (#33353F) et les bordures gauche et droite sont transparentes */}

			<div className="container p-12 flex justify-between">
				{/* Conteneur avec du padding (espace intérieur) de 12 unités. */}
				{/* Utilisation de `flex` pour disposer les éléments horizontalement et `justify-between` pour les espacer également entre eux. */}

				<span>WebVision</span>
				{/* Placeholder pour un logo ou un texte représentant le logo du site. */}

				<p className="text-slate-700">All rights reserved.</p>
				{/* Texte affichant les droits réservés, avec une couleur de texte gris ardoise. */}
			</div>
		</footer>
	);
};

export default Footer;
