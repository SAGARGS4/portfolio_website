import React from "react";
import { motion } from "framer-motion";

const skills = {
	"Programming Languages": [
		{
			name: "Java",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
		},
		{
			name: "JavaScript",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
		},
		{
			name: "Python",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
		},
		{
			name: "C++",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
		},
	],
	"Front End": [
		{
			name: "React.js",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
		},
		{
			name: "Next.js",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
		},
		{
			name: "HTML",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
		},
		{
			name: "CSS",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
		},
		{
			name: "Bootstrap",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
		},
		{
			name: "Tailwind CSS",
			icon: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tailwindcss-icon.svg",
		},
	],
	Databases: [
		{
			name: "MongoDB",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
		},
		{
			name: "MySQL",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
		},
	],
	"Tools & Platforms": [
		{
			name: "Git",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
		},
		{
			name: "GitHub",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
		},
		{
			name: "VS Code",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
		},
		{
			name: "Figma",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
		},
		{
			name: "Vercel",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
		},
		{
			name: "Ubuntu",
			icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg",
		},
		{
			name: "Postman",
			icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
		},
	],
};

export default function Skills() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section id="skills" className="py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<motion.h2
					className="text-3xl font-bold mb-6"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					My Skills
				</motion.h2>
				<motion.p
					className="text-muted-foreground mb-10"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					Technologies and tools I’ve worked with throughout my projects and
					experience
				</motion.p>

				<motion.div
					className="grid gap-10"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
				>
					{Object.entries(skills).map(([section, items], index) => (
						<motion.div key={index} variants={item}>
							<motion.h3
								className="text-xl font-semibold mb-4"
								whileHover={{
									x: 5,
									transition: { type: "spring", stiffness: 300 },
								}}
							>
								{section}
							</motion.h3>
							<div className="flex flex-wrap gap-4">
								{items.map((skill, idx) => (
									<motion.div
										key={idx}
										className="flex flex-col items-center gap-2 group"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.3, delay: 0.1 * idx }}
									>
										<motion.div
											className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
											whileHover={{
												y: -5,
												transition: { type: "spring", stiffness: 300 },
											}}
										>
											<img
												src={skill.icon}
												alt={skill.name}
												className="w-8 h-8"
											/>
										</motion.div>
										<motion.span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
											{skill.name}
										</motion.span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
			<div className="mt-10 border-t border-black w-full" />
		</section>
	);
}
