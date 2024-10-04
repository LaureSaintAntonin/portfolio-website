import React from "react";
import { motion } from "framer-motion";

// Définition des animations pour la barre de soulignement (ligne animée sous le texte).
const variants = {
	// Par défaut, la largeur est à 0, donc la ligne est invisible.
	default: { width: 0 },
	// Si l'onglet est actif, la ligne s'étend à presque 100% de la largeur du texte (moins un petit espace).
	active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
	// Détermine la classe CSS du texte en fonction de l'état `active`.
	const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

	return (
		// Le bouton entier est un élément cliquable, et `selectTab` est exécuté lorsqu'on clique dessus.
		<button onClick={selectTab}>
			{/* Le texte du bouton change de couleur selon si l'onglet est actif ou non */}
			<p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
				{children}
			</p>
			{/* Barre animée sous le texte, sa largeur change en fonction de l'état `active`. */}
			<motion.div
				animate={active ? "active" : "default"} // Déclenche l'animation en fonction de l'état actif
				variants={variants} // Utilise les variantes d'animation définies plus haut
				className="h-0.5 bg-gradient-to-br from-blue-600 via-purple-500 to bg-pink-500 text-whit mt-1 mr-3" // Classe CSS de la barre (hauteur et couleur de la ligne)
			></motion.div>
		</button>
	);
};

export default TabButton;
