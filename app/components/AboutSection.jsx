"use client";
// Directive de Next.js qui indique que ce composant est un composant client, signifiant qu'il sera exécuté côté navigateur.
import React, { useTransition, useState } from "react";
// Importation de React et des hooks `useTransition` et `useState`.
// `useState` est utilisé pour gérer l'état local, et `useTransition` pour gérer les transitions asynchrones entre états.
import Image from "next/image";
// Importation du composant `Image` de Next.js pour une gestion optimisée des images.
import TabButton from "./TabButton";
// Importation du composant `TabButton`, qui est probablement un bouton stylisé pour la navigation entre les onglets.

// Déclaration de la constante TAB_DATA qui contient les données des différents onglets (Skills, Education, Experiences).
const TAB_DATA = [
	{
		title: "Hard Skills", // Titre de l'onglet.
		id: "Hskills", // Identifiant unique pour cet onglet.
		// Contenu qui sera affiché quand l'onglet "Skills" sera actif.
		content: (
			<ul className="list-disc pl-2">
				<li>React.js // Nodes.js</li>
				<li>Python // Django</li>
				<li>SQL</li>
				<li>MySQL // PostgreSQL // SQLite</li>
				<li>Kotlin</li>
				<li>PHP // Laravel</li>
				<li>Curiosité technique, technologique</li>
				<li>Formation continue, veille technique</li>
			</ul>
		),
	},
	{
		title: "Soft Skills", // Titre de l'onglet.
		id: "Sskills", // Identifiant unique pour cet onglet.
		// Contenu qui sera affiché quand l'onglet "Skills" sera actif.
		content: (
			<ul className="list-disc pl-2">
				<li>Travail en équipe</li>
				<li>Résolution de problèmes</li>
				<li>Gestion des priorités</li>
				<li>Prise de décision rapide</li>
				<li>Capacité d&apos;adaptation</li>
				<li>Polyvalence, réactivité, autonomie</li>
				<li>Aime être challengée</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>
					<a href="https://adatechschool.fr/" className="text-pink-500">
						Ada Tech School
					</a>
					, mon centre de formation
				</li>
				<li>AFGSU 2</li>
				<li>DP Organisateur Transport Multimodal International</li>
				<li>BTS Force de Vente</li>
			</ul>
		),
	},
	{
		title: "Experiences & Certifications",
		id: "experiences & certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>DTek Learn</li>
				<li>OpenClassRoom</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	// Utilisation du hook useState pour gérer l'état de l'onglet sélectionné.
	// Par défaut, l'onglet sélectionné est "skills".
	const [tab, setTab] = useState("Hskills");

	// Utilisation de `useTransition` pour marquer les changements d'état comme "transition".
	// Cela permet à React de différer les mises à jour non urgentes pour améliorer la réactivité.
	const [isPending, startTransition] = useTransition();

	// Fonction appelée lors du changement d'onglet.
	// `startTransition` est utilisé pour rendre la transition asynchrone, améliorant la réactivité.
	const handleTabChange = id => {
		startTransition(() => {
			setTab(id); // Mise à jour de l'état avec l'ID de l'onglet sélectionné.
		});
	};

	return (
		<section className="text-white" id="about">
			{/* Section principale avec une grille pour afficher l'image et le texte côte à côte. */}
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about-image2.png" // Chemin de l'image.
					alt="représentation de mon bureau" // Texte alternatif pour l'image.
					width={400} // Largeur de l'image en pixels.
					height={400} // Hauteur de l'image en pixels.
				/>

				{/* Section texte, contenant le titre et la description "About Me" */}
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">A propos</h2>
					<p className="text-base lg:text-lg">
						Après de nombreuses années dans le secteur médical, j&apos;ai décidé
						de changer de direction et de faire une reconversion pour devenir
						développeuse web/logiciel.<br></br>Ici, vous trouverez mes
						compétences techniques, mes compétences humaines, mes expériences,
						ainsi que mes projets personnels et de groupe.
					</p>

					{/* Zone de sélection des onglets avec les boutons */}
					<div className="flex flex-row mt-8">
						{/* Bouton pour l'onglet "HSkills" */}
						<TabButton
							selectTab={() => handleTabChange("Hskills")} // Déclenche la fonction de changement d'onglet.
							active={tab === "Hskills"} // Le bouton est actif si l'onglet actuel est "skills".
						>
							{" "}
							Hard Skills{" "}
						</TabButton>
						{/* Bouton pour l'onglet "Sskills" */}
						<TabButton
							selectTab={() => handleTabChange("Sskills")} // Déclenche la fonction de changement d'onglet.
							active={tab === "Sskills"} // Le bouton est actif si l'onglet actuel est "skills".
						>
							{" "}
							Soft Skills{" "}
						</TabButton>

						{/* Bouton pour l'onglet "Education" */}
						<TabButton
							selectTab={() => handleTabChange("education")} // Idem pour l'onglet "Education".
							active={tab === "education"} // Bouton actif si l'onglet est "education".
						>
							{" "}
							Formations{" "}
						</TabButton>

						{/* Bouton pour l'onglet "Experiences & Certifications" */}
						<TabButton
							selectTab={() => handleTabChange("experiences & certifications")} // Idem pour "Experiences & Certifications".
							active={tab === "experiences & certifications"} // Bouton actif si l'onglet est "experiences & certifications".
						>
							{" "}
							Certifications{" "}
						</TabButton>
					</div>

					{/* Affichage du contenu en fonction de l'onglet sélectionné */}
					<div className="mt-8">
						{/* Recherche dans `TAB_DATA` de l'onglet actuellement sélectionné grâce à l'ID et affichage de son contenu. */}
						{TAB_DATA.find(t => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
// Export du composant `AboutSection` pour être utilisé dans d'autres parties de l'application.
