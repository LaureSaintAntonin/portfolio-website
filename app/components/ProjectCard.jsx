import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// Importation des icônes `CodeBracketIcon` (pour le lien vers le code) et `EyeIcon` (pour la prévisualisation) depuis Heroicons.
// Heroicons est une librairie d'icônes utilisée dans des projets React.
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
	// Déclaration du composant fonctionnel `ProjectCard` qui prend en paramètres les props suivantes :
	// `imgUrl` : URL de l'image d'aperçu du projet.
	// `title` : Titre du projet.
	// `description` : Brève description du projet.
	// `gitUrl` : Lien vers le dépôt GitHub du projet.
	// `previewUrl` : Lien vers la prévisualisation du projet.

	return (
		<div>
			{/* Conteneur principal pour la carte du projet */}
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				// Définition de la hauteur de l'image du projet. `rounded-t-xl` arrondit les coins supérieurs.
				// `relative group` permet de positionner le contenu relatif à cet élément et de gérer les interactions de groupe.

				style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
				// `background`: image de fond à partir de `imgUrl`, avec `backgroundSize: "cover"` pour s'assurer que l'image couvre bien tout l'espace disponible.
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
					{/* Overlay (couche de superposition) qui apparaît lors du survol de la carte (`group-hover`).
                    Cette couche recouvre l'image avec une légère opacité et rend les boutons (icônes) visibles. */}

					<Link
						href={gitUrl}
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						{/* Lien vers le dépôt GitHub. Les icônes ont une bordure arrondie et changent de couleur au survol. */}
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
						{/* Icône représentant le code source, centrée à l'intérieur du bouton circulaire, avec un effet de survol pour changer la couleur. */}
					</Link>

					<Link
						href={previewUrl}
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						{/* Lien vers la prévisualisation du projet. Similaire au lien GitHub mais pointe vers l'URL de prévisualisation. */}
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
						{/* Icône en forme d'œil pour symboliser la prévisualisation, avec un effet de changement de couleur au survol. */}
					</Link>
				</div>
			</div>

			<div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
				{/* Conteneur pour le texte, le titre et la description du projet. `rounded-b-xl` arrondit les coins inférieurs. */}
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				{/* Titre du projet, affiché avec une taille de texte plus grande et gras. */}
				<p className="text-[#adb7be]">{description}</p>
				{/* Description du projet, en texte gris clair. */}
			</div>
		</div>
	);
};

export default ProjectCard;
