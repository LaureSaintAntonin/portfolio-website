import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
	// Déclaration du composant fonctionnel `MenuOverlay` qui prend `links` comme prop.
	// `links` est un tableau d'objets représentant les différents liens à afficher dans le menu.

	return (
		<ul className="flex flex-col py-4 items-center">
			{/* Élément `ul` représentant une liste non ordonnée. */}
			{/* La liste est stylisée pour être affichée en colonne avec `flex-col`. */}
			{/* `items-center` aligne les éléments enfants (les `li`) au centre. */}

			{links.map((link, index) => (
				// Boucle à travers le tableau `links` et crée un élément de liste `li` pour chaque lien.
				// `index` est utilisé comme clé unique pour chaque élément de liste.

				<li key={index}>
					{/* Élément `li` contenant le lien de navigation pour chaque entrée de `links`. */}
					<NavLink href={link.path} title={link.title} />
					{/* Utilisation du composant `NavLink` pour afficher chaque lien. */}
					{/* Le chemin (`path`) et le titre du lien sont passés via les props `href` et `title`. */}
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
// Export du composant `MenuOverlay` pour qu'il puisse être utilisé dans d'autres parties de l'application.
