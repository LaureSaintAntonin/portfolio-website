"user client";
import React from "react";

const WhatsAppButton = () => {
	const phoneNumber = "33664522116"; // Remplacez par votre numéro de téléphone
	const message = "Bonjour Laure !"; // Message pré-rempli (optionnel)

	const handleClick = () => {
		const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;
		window.open(url, "_blank");
	};

	return (
		<div className="socials flex flex-row gap-2">
			<button
				onClick={handleClick}
				className="bg-rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-500 to bg-pink-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
			>
				Contact me now !
			</button>
		</div>
	);
};

export default WhatsAppButton;
