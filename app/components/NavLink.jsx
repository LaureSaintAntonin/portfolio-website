import Link from "next/link";

const NavLink = ({ href, title }) => {
	// Déclaration du composant fonctionnel `NavLink` qui prend deux props :
	// `href` (l'URL cible du lien) et `title` (le texte affiché pour ce lien).

	return (
		<Link
			href={href}
			// Le composant `Link` de Next.js est utilisé ici pour rendre la navigation fluide et éviter un rechargement complet de la page.

			className="block py-2 pl-3 pr-4 text-[#ADB7BE sm:text-xl rounder md:p-0 hover:text-white"
			// Classes de style utilisées pour personnaliser le lien :
			// - `block` : le lien occupe toute la largeur disponible (utile pour une disposition verticale).
			// - `py-2`, `pl-3`, `pr-4` : paddings (marges internes) pour espacer le texte.
			// - `text-[#ADB7BE]` : couleur du texte (gris clair par défaut).
			// - `sm:text-xl` : le texte a une taille plus grande sur les petits écrans (`sm:` signifie "small screens").
			// - `hover:text-white` : la couleur du texte devient blanche au survol.
		>
			{title}
		</Link>
	);
};

export default NavLink;
