"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// Importation de deux icônes, `Bars3Icon` et `XMarkIcon`, depuis `@heroicons/react`, pour l'icône du menu hamburger et de fermeture.
import MenuOverlay from "./MenuOverlay";
// Importation du composant `MenuOverlay` qui sera utilisé pour afficher le menu dans un format overlay lorsque la navigation est ouverte.

const navLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];
// Tableau `navLinks` qui contient les objets de configuration pour chaque lien du menu de navigation.
// Chaque objet contient un `title` (titre du lien) et un `path` (chemin de redirection).

const Navbar = () => {
	// Déclaration du composant `Navbar` qui représente la barre de navigation.

	const [navbarOpen, setNavbarOpen] = useState(false);
	// Utilisation du hook `useState` pour créer une variable d'état `navbarOpen` avec `false` comme valeur initiale.
	// `navbarOpen` indique si le menu de navigation est ouvert (true) ou fermé (false).
	// `setNavbarOpen` est la fonction qui permet de modifier cet état.

	return (
		<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] opacity-90">
			{/* Élément de navigation `nav` fixé en haut de la page. */}
			{/* La barre a un fond sombre (#121212) avec une opacité de 90% et est positionnée au-dessus du contenu grâce à `z-10`. */}

			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
				{/* Conteneur flex qui permet de répartir les éléments de la navigation. 
				Les éléments sont centrés verticalement (`items-center`) et distribués avec `justify-between`. */}

				<Link
					href={"/"}
					className="text-2xl md:text-5xl text-white font-semibold"
				>
					WebVision
				</Link>
				{/* Lien vers la page d'accueil avec le texte "WebVision", stylisé en blanc avec une taille de police ajustable (2xl sur mobile, 5xl sur écrans plus grands). */}

				<div className="mobile-menu block md:hidden">
					{/* Cette div contient le bouton pour afficher ou masquer le menu sur mobile. Elle est visible uniquement sur mobile (`block md:hidden`). */}

					{!navbarOpen ? (
						// Si le menu n'est pas ouvert (`navbarOpen` est false), afficher le bouton pour ouvrir le menu (menu hamburger).
						<button
							onClick={() => setNavbarOpen(true)}
							// Lors du clic, le menu s'ouvre en changeant l'état de `navbarOpen` à `true`.
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<Bars3Icon className="h-5 w-5" />
							{/* Icône du menu hamburger provenant de Heroicons. */}
						</button>
					) : (
						// Si le menu est ouvert (`navbarOpen` est true), afficher le bouton pour fermer le menu (croix).
						<button
							onClick={() => setNavbarOpen(false)}
							// Lors du clic, le menu se ferme en changeant l'état de `navbarOpen` à `false`.
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5" />
							{/* Icône de la croix pour fermer le menu. */}
						</button>
					)}
				</div>

				<div className="menu hidden md:block md:w-auto" id="navbar">
					{/* La div du menu de navigation qui est masquée sur mobile (`hidden`) et visible sur les écrans md+ (`md:block`). */}

					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{/* Liste des liens de navigation disposée en ligne (`md:flex-row`) avec des espacements entre les éléments (`md:space-x-8`). */}
						{navLinks.map((link, index) => (
							<li key={index}>
								{/* Chaque élément de navigation reçoit un `key` unique basé sur l'index. */}
								<NavLink href={link.path} title={link.title} />
								{/* Utilisation du composant `NavLink` pour afficher chaque lien. */}
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
			{/* Si le menu est ouvert (`navbarOpen` est true), afficher le composant `MenuOverlay` avec la liste des liens. */}
		</nav>
	);
};

export default Navbar;
// Exportation du composant `Navbar` pour qu'il puisse être utilisé dans d'autres parties de l'application.
