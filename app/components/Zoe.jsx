import React from "react";
import Image from "next/image";

const Zoe = () => {
	return (
		<div>
			<p>
				<Image
					src={"/images/Zoe3.png"}
					alt="Zoé l'araignée"
					width={150}
					height={150}
				/>
				Bonjour à vous visiteurs. Je suis Zoé l&apos;Araignée. Vous me trouverez
				un peu partout sur le site de Laure. Quelque chose se prépare et
				j&apos;en suis l&apos;instigatrice.
			</p>
		</div>
	);
};

export default Zoe;
