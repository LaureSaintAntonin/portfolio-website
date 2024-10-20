"use client";
import React from "react";
import Image from "next/image";

const Zoe = () => {
	return (
		<section className="text-white" id="zoe">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				{/* Texte à gauche sur les grands écrans et au-dessus sur mobile */}
				<div className="md:order-1 mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">
						Zoé l&apos;Araignée
					</h2>
					<p className="text-base lg:text-lg mb-8">
						Bonjour à vous cher visiteurs. Je suis Zoé l&apos;Araignée.<br></br>
						Vous me trouverez un peu partout sur le site de Laure.<br></br>
						Quelque chose se prépare et j&apos;en suis l&apos;instigatrice.
					</p>
					<div className="text-2xl font-bold text-white mt-4">A suivre...</div>
				</div>

				{/* Image à droite sur les grands écrans et en-dessous sur mobile */}
				<Image
					className="md:order-2"
					src={"/images/Zoe4.png"}
					alt="Zoé l'araignée"
					width={400}
					height={400}
				/>
			</div>
		</section>
	);
};

export default Zoe;
