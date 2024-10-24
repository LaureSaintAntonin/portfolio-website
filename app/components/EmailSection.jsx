"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const form = useRef();

	const handleSubmit = async e => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_w0u396u",
				"template_1apcnqo",
				form.current,
				"o8cDDD-rS2JDwfPe6"
			)
			.then(
				result => {
					console.log("Message sent", result.text);
					setEmailSubmitted(true);
				},
				error => {
					console.log("Erreur", error.text);
				}
			);
	};

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div>
				<h5 className="text-xl font-bold text-white my-2">
					Faisons connaissance !
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					{" "}
					Je suis à l&apos;écoute de nouvelles opportunités !<br></br> Contactez
					moi sur LinkedIn, WhatsApp ou par Email !
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://www.linkedin.com/in/lauresaintantonin/">
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
					<Link href="https://github.com/LaureSaintAntonin">
						<Image src={GithubIcon} alt="Github Icon" />
					</Link>
					<WhatsAppButton />
				</div>
				<Image
					src={"/images/Zoe.png"}
					alt="Zoé l'araignée"
					width={100}
					height={100}
				/>
			</div>
			<div>
				{emailSubmitted ? (
					<p className="text-green-500 text-sm mt-2">
						Email sent successfully!
					</p>
				) : (
					<form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="text-white block mb-2 text-sm font-medium"
							>
								Votre email
							</label>
							<input
								name="user_email"
								type="email"
								id="email"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="recruter@google.com"
								autoComplete="email"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="text-white block text-sm mb-2 font-medium"
							>
								Sujet
							</label>
							<input
								name="subject"
								type="text"
								id="subject"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Juste dire 'Bonjour'"
								autoComplete="off"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="text-white block text-sm mb-2 font-medium"
							>
								Message
							</label>
							<textarea
								name="message"
								id="message"
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder="Salut Laure, parlons de..."
								autoComplete="off"
							/>
						</div>
						<button
							type="submit"
							className="bg-rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-500 to bg-pink-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
						>
							Envoyer
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default EmailSection;
