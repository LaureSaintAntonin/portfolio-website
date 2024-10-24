"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// Importation du composant `TypeAnimation` et 'motion' qui permet d'afficher un texte avec un effet de machine à écrire.

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				{/* Utilisation de `grid` pour créer une grille avec une seule colonne par défaut et 12 colonnes pour les écrans de taille "small" et plus. */}
				{/* Première colonne contenant le titre et la description */}
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-5 place-self-center text-center sm:text-left justify-self-start"
				>
					{/* La colonne occupe 5 colonnes sur 12 pour les écrans larges. Le texte est centré sur les petits écrans et aligné à gauche sur les écrans plus grands. */}
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
						<div className>
							<Image
								src={"/images/Zoe.png"}
								alt="Zoé l'araignée"
								width={90}
								height={90}
							/>
						</div>
						{/* Titre principal avec une taille de texte adaptative (4xl à 6xl), et une police extra-gras. */}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
							Hello there, I&apos;m{" "}
						</span>
						{/* Texte "Hello there, I'm" avec un effet de texte transparent, et un dégradé de couleur appliqué en arrière-plan (via `bg-clip-text`). */}
						<br></br>
						<TypeAnimation
							sequence={[
								"Laure", // Animation pour afficher successivement différents titres.
								1000, // Temps d'attente (1000ms = 1 seconde) avant de changer.
								"Web/Mobile",
								1000,
								"FullStack",
								1000,
								"Developper",
								1000,
							]}
							wrapper="span"
							// `wrapper="span"` spécifie que le texte sera entouré d'un élément `span`.
							speed={10} // Vitesse d'animation.
							repeat={Infinity} // Animation répétée indéfiniment.
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						{/* Paragraphe de description avec une taille de texte adaptative. Le texte est stylisé avec une couleur personnalisée (#ABD7BE). */}
						Bonjour et bienvenue sur mon portfolio.<br></br> En 2023, j&apos;ai
						décidé de quitter mon travail et de me reconvertir. Maintenant je
						recherche une entreprise qui me permettra de continuer à progresser
						dans ce métier passionnant.
					</p>
				</motion.div>
				{/* Deuxième colonne contenant les boutons */}
				<div className="col-span-3 place-self-center mt-4 lg:mt-0">
					{/* La colonne occupe 5 colonnes sur 12 pour les écrans larges et centre ses éléments. */}
					{/* Bouton "Hire Me" */}
					<Link href="#contact">
						<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-500 to bg-pink-500 text-white">
							Recrutez Moi
							{/* Bouton avec un gradient de couleur bleu-violet-rose, du padding, et un texte blanc. Pour les petits écrans, il occupe toute la largeur, mais s'ajuste sur les plus grands. */}
						</button>
					</Link>

					{/* Bouton "Download CV" */}
					<button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-500 to bg-pink-500 hover:bg-slate-800 text-white mt-3">
						<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
							<a href="/LaureSaintAntonin2.pdf" download>
								Download CV
							</a>
							{/* Ce bouton contient un `span` interne avec des bordures arrondies et un effet de survol qui change la couleur de fond. */}
						</span>
					</button>
				</div>

				{/* Troisième colonne contenant l'image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-auto mt-4 lg:mt-0"
				>
					{/* La colonne occupe 4 colonnes sur 12 pour les écrans larges. */}

					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
						{/* Conteneur circulaire (bordures arrondies) avec une taille variable selon la taille de l'écran. Le fond est de couleur gris foncé. */}

						<Image
							src="/images/Pink_me1.png"
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
							/* Image du héros, centrée dans son conteneur circulaire grâce à `transform` et des positionnements relatifs. */
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
// Export du composant `HeroSection` pour qu'il puisse être utilisé dans d'autres parties de l'application.
