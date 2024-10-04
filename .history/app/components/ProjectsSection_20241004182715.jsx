"use client"; // Utilise cette directive car ce code s'exécute côté client.
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
// Importation de composants externes et de bibliothèques :
// `useInView` et `motion` viennent de Framer Motion, utilisé pour ajouter des animations fluides aux composants React.

const projectsData = [
	// Données des projets stockées dans un tableau `projectsData`. Chaque projet a un `id`, un `title`, une `description`, une `image` (URL), des `tags`, ainsi que des liens vers GitHub (`gitUrl`) et une prévisualisation (`previewUrl`).
	{
		id: 1,
		title: "React Portfolio Website",
		description:
			"Mon Portfolio réalisé avec React.js, TailwindCSS, Vercel pour le déploiement.",
		image: "/images/projects/1.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/LaureSaintAntonin/portfolio-website",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Loventoutou",
		description:
			"Mon application de rencontre pour éleveurs canins 2.0 réalisé en Django 5(python)",
		image: "/images/projects/tinderToutouLogo_v2.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/LaureSaintAntonin/LovenToutou",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "Consonea",
		description: "Création d'un site e-commerce de mobilier d'occasion",
		image: "/images/projects/Consonea_1.png",
		tag: ["All", "Web"],
		gitUrl:
			"https://github.com/LaureSaintAntonin/plateforme-de-meubles-consonea",
		previewUrl: "/",
	},
	{
		id: 4,
		title: "Surf & Chill",
		description:
			"Mon application qui recense les meilleurs spots de surf du monde !",
		image: "/images/projects/maquettesurf_chill.png",
		tag: ["All", "Mobile"],
		gitUrl: "https://github.com/LaureSaintAntonin/Surf-Chill",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "SweetWeb",
		description:
			"L'Extension de navigateur cross-plateforme (Firefox et Chrome) pour rendre le web plus doux",
		image: "/images/projects/renduApp.png",
		tag: ["All", "Web"],
		gitUrl:
			"https://github.com/LaureSaintAntonin/extension-navigateur-sweetweb",
		previewUrl: "/",
	},
	{
		id: 6,
		title: "The Alop's Adventure",
		description:
			"Le jeu vidéo regroupant aventure et space-invader codé en LUA.",
		image: "/images/projects/6.png",
		tag: ["All", "Web"],
		gitUrl:
			"https://github.com/LaureSaintAntonin/projet-collectif---pico-8-alop-s-crew",
		previewUrl: "/",
	},
];
// Ces données sont ensuite utilisées pour générer dynamiquement les cartes de projet.

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	// `tag` stocke le filtre de catégorie de projet actif (par défaut : "All").
	// `setTag` permet de mettre à jour ce filtre lorsqu'un utilisateur sélectionne une catégorie spécifique.

	const ref = useRef(null);
	// `ref` est utilisé pour référencer l'élément de la grille des projets et surveiller son apparition à l'écran (utilisé avec `useInView`).
	const isInView = useInView(ref, { once: true });
	// `useInView` est utilisé ici pour vérifier si la grille de projets est visible à l'écran.
	// `once: true` signifie que l'animation ne se déclenche qu'une seule fois, au moment où l'élément devient visible.

	const handleTagChange = newTag => {
		setTag(newTag);
	};
	// Cette fonction met à jour le filtre `tag` lorsque l'utilisateur clique sur une nouvelle catégorie de projet.

	const filteredProjects = projectsData.filter(project =>
		project.tag.includes(tag)
	);
	// Les projets sont filtrés selon le `tag` sélectionné par l'utilisateur. Les projets contenant ce `tag` sont affichés.

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	// Variants d'animation pour les cartes des projets. Initialement, les cartes apparaissent décalées vers le bas avec une opacité 0. Elles se déplacent vers leur position d'origine avec une opacité 1.

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			{/* Titre principal de la section projets. */}
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
				/>
				{/* Composants `ProjectTag` affichant les différentes catégories de projets ("All", "Web", "Mobile").
				`isSelected` gère la mise en surbrillance de la catégorie active. */}
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{/* Grille de cartes de projet avec des colonnes responsives. */}
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						{/* Utilisation de Framer Motion pour animer l'apparition des cartes de projet.
						L'animation s'active seulement si la grille est visible à l'écran (`isInView`). */}
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
						{/* Chaque projet utilise un composant `ProjectCard` pour afficher ses détails. */}
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
// Exportation du composant `ProjectsSection` pour l'utiliser dans d'autres parties du projet.
