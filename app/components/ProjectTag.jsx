import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
	// `name` : le nom du tag à afficher.
	// `onClick` : fonction callback qui est appelée lorsque le bouton est cliqué.
	// `isSelected` : un booléen qui indique si ce tag est actuellement sélectionné.

	// Détermination des styles du bouton selon l'état `isSelected`.
	const buttonStyles = isSelected
		? "bg-gradient-to-br from-blue-600 via-purple-500 to bg-pink-500" // Si le tag est sélectionné, le fond est violet.
		: "text-[#ADB7BE] border-slate-600 hover:border-white"; // Sinon, il a une bordure grise qui devient blanche au survol.

	return (
		// Bouton stylisé avec des classes conditionnelles définies dans `buttonStyles`.
		<button
			className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
			// Lorsque l'utilisateur clique sur le bouton, la fonction `onClick` est appelée avec le `name` du tag.
			onClick={() => onClick(name)}
		>
			{name}
			{/* Affichage du nom du tag à l'intérieur du bouton. */}
		</button>
	);
};

export default ProjectTag;
