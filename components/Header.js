import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdHome, MdWbSunny } from "react-icons/md";

const nameLetters = ["S", "A", "G", "A", "R"];

export default function Header() {
	const iconVariants = {
		hover: {
			scale: 1.2,
			transition: { type: "spring", stiffness: 300 },
		},
	};

	return (
		<header className="mb-12">
			{/* Top Section: Name, Links, Profile */}
			<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
				{/* Left: Name + Links */}
				<div className="flex flex-col items-start text-center md:text-left gap-4 md:order-1">
					<h1 className="text-2xl sm:text-3xl md:text-5xl font-bold flex flex-wrap gap-[8px] justify-start">
						Hi, I'm{" "}
						{nameLetters.map((char, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.3 + index * 0.15,
									duration: 0.4,
									type: "spring",
								}}
								className="inline-block"
							>
								{char}
							</motion.span>
						))}
					</h1>

					<div className="flex flex-col gap-2 text-sm sm:text-base">
						<a
							href="https://www.linkedin.com/in/sagargs04"
							className="flex items-center gap-2 hover:text-blue-600 transition"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="text-lg" />
							sagar-gs
						</a>
						<a
							href="https://github.com/SAGARGS4"
							className="flex items-center gap-2 hover:text-gray-800 transition"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub className="text-lg" />
							sagarGS
						</a>
						<a
							href="mailto:sagugs492003@gmail.com"
							className="flex items-center gap-2 hover:text-red-500 transition"
						>
							<MdEmail className="text-lg" />
							sagugs492003@gmail.com
						</a>
						<a
							href="/Sagar_Resume.pdf"
							download
							className="flex items-center gap-2 text-sm sm:text-base text-gray-800 hover:text-gray-900 transition"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4.5v15m0 0l-6.75-6.75M12 19.5l6.75-6.75"
								/>
							</svg>
							Download Resume
						</a>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
					className="w-30 h-56 sm:w-44 sm:h-64 md:w-56 md:h-72 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg md:order-2"
				>
					<img
						src="/profile.png"
						alt="Profile"
						className="w-full h-full object-cover"
					/>
				</motion.div>
			</div>

			<nav
				className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 flex w-fit max-w-[260px] overflow-x-auto bg-white dark:bg-gray-900 
		border border-gray-200 dark:border-gray-700 rounded-full p-1 shadow-md items-center justify-between space-x-2"
				aria-label="Bottom Icon Navigation"
			>
				{[
					{
						href: "#home",
						icon: <MdHome className="w-4 h-4" />,
						label: "Home",
					},
					{
						href: "https://github.com/SAGARGS4",
						icon: <FaGithub className="w-4 h-4" />,
						label: "GitHub",
					},
					{
						href: "https://www.linkedin.com/in/sagargs04",
						icon: <FaLinkedin className="w-4 h-4" />,
						label: "LinkedIn",
					},
					{
						href: "mailto:sagugs492003@gmail.com",
						icon: <MdEmail className="w-4 h-4" />,
						label: "Email",
					},
					{
						href: "#theme",
						icon: <MdWbSunny className="w-4 h-4" />,
						label: "Toggle Theme",
					},
				].map(({ href, icon, label }, index) => (
					<motion.a
						key={index}
						href={href}
						whileHover={{ scale: 1.15 }}
						className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 p-1"
						aria-label={label}
					>
						{icon}
					</motion.a>
				))}
			</nav>
		</header>
	);
}
