"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
	{
		title: "A propos",
		path: "#about",
	},
	{
		title: "Zoé l'Araignée",
		path: "#zoe",
	},
	{
		title: "Mes Projets",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] opacity-90">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
				{/* Logo SVG inséré ici */}
				{/* <div>
					<Image
						src={"/images/Zoe4.png"}
						alt="Zoé l'araignée"
						width={100}
						height={100}
					/>
				</div> */}
				<svg viewBox="0 0 300 100" width="150" height="50">
					<defs>
						<linearGradient
							id="blueVioletPink"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop
								offset="0%"
								style={{ stopColor: "#2563eb", stopOpacity: 1 }}
							/>
							<stop
								offset="50%"
								style={{ stopColor: "#9333ea", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#db2777", stopOpacity: 1 }}
							/>
						</linearGradient>
					</defs>

					{/* Version dégradée sur fond transparent */}
					<g transform="translate(0,0)">
						{/* Toile orbitale */}
						<ellipse
							cx="40"
							cy="50"
							rx="30"
							ry="35"
							stroke="url(#blueVioletPink)"
							fill="none"
							strokeWidth="1.5"
						/>
						<ellipse
							cx="40"
							cy="50"
							rx="22"
							ry="26"
							stroke="url(#blueVioletPink)"
							fill="none"
							strokeWidth="1"
						/>
						<ellipse
							cx="40"
							cy="50"
							rx="14"
							ry="17"
							stroke="url(#blueVioletPink)"
							fill="none"
							strokeWidth="0.75"
						/>
						<line
							x1="10"
							y1="50"
							x2="70"
							y2="50"
							stroke="url(#blueVioletPink)"
							strokeWidth="1"
						/>
						<line
							x1="40"
							y1="15"
							x2="40"
							y2="85"
							stroke="url(#blueVioletPink)"
							strokeWidth="1"
						/>
						<line
							x1="16"
							y1="26"
							x2="64"
							y2="74"
							stroke="url(#blueVioletPink)"
							strokeWidth="1"
						/>
						<line
							x1="64"
							y1="26"
							x2="16"
							y2="74"
							stroke="url(#blueVioletPink)"
							strokeWidth="1"
						/>

						{/* Araignée mignonne */}
						<circle cx="25" cy="30" r="6" fill="url(#blueVioletPink)" />
						<circle cx="23" cy="28" r="2" fill="black" />
						<circle cx="27" cy="28" r="2" fill="black" />
						<circle cx="23" cy="28" r="0.8" fill="url(#blueVioletPink)" />
						<circle cx="27" cy="28" r="0.8" fill="url(#blueVioletPink)" />
						<path
							d="M22 32 Q25 34 28 32"
							stroke="black"
							fill="none"
							strokeWidth="1.2"
						/>

						{/* Pattes de l'araignée */}
						<path
							d="M20 27 Q17 24 15 22 M30 27 Q33 24 35 22"
							stroke="url(#blueVioletPink)"
							fill="none"
							strokeWidth="0.8"
						/>
						<path
							d="M20 33 Q17 36 15 38 M30 33 Q33 36 35 38"
							stroke="url(#blueVioletPink)"
							fill="none"
							strokeWidth="0.8"
						/>
						<path
							d="M21 26 Q18 21 16 19 M29 26 Q32 21 34 19"
							stroke="url(#blueVioletPink)"
							fill="none"
							strokeWidth="0.8"
						/>
						<path
							d="M21 34 Q18 39 16 41 M29 34 Q32 39 34 41"
							stroke="url(#blueVioletPink)"
							fill="none"
							strokeWidth="0.8"
						/>
					</g>
					{/* Texte "LSA Web Vision"  */}
					<g
						transform="translate(80, 60) scale(0.2)"
						fill="none"
						stroke="url(#blueVioletPink)"
						strokeWidth="8"
					>
						<path d="M0 0 V80 H40" />
						<path d="M60 0 H100 V35 H60 V80 H100" />
						<path d="M120 80 L140 0 L160 80 M125 40 H155" />
						<path d="M200 0 L215 80 L230 20 L245 80 L260 0" />
						<path d="M280 0 H320 M280 40 H310 M280 80 H320 M280 0 V80" />
						<path d="M340 0 V80 H370 A20 20 0 0 0 370 40 H340 H370 A20 20 0 0 0 370 0 Z" />
						<path d="M420 0 L440 80 L460 0" />
						<path d="M480 0 V80" />
						<path d="M500 0 H540 V35 H500 V80 H540" />
						<path d="M560 0 V80" />
						<ellipse cx="600" cy="40" rx="20" ry="40" />
						<path d="M640 80 V0 L680 80 V0" />
					</g>
				</svg>

				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>

				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;
