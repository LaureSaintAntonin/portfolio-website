"use client";
import HeroSection from "./components/HeroSection"; // Importation de la section Hero (présentation principale de la page).
import Navbar from "./components/Navbar"; // Importation de la barre de navigation (header).
import AboutSection from "./components/AboutSection"; // Importation de la section À propos.
import ProjectsSection from "./components/ProjectsSection"; // Importation de la section Projets.
import EmailSection from "./components/EmailSection"; // Importation de la section pour le formulaire de contact par email.
import Footer from "./components/Footer"; // Importation du pied de page.
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
	// Exportation par défaut de la fonction `Home`, qui définit la page d'accueil du site.
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			{/* Élément principal de la page avec un design en flexbox, une hauteur minimale de l'écran et un fond sombre. */}
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				{/* Conteneur central pour les différentes sections de la page. 
				`mt-24` pour une marge en haut (espace sous la navigation), `mx-auto` pour centrer horizontalement. 
				`px-12` et `py-4` ajoutent du padding (espacement interne) pour la mise en page. */}
				<HeroSection />
				<AchievementsSection />
				<AboutSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
