import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import CodeShowcase from "../components/CodeShowcase";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-gray-800">
			<Head>
				<title>Sagar - Full Stack Developer</title>
				<meta name="description" content="Full Stack Developer Portfolio" />
			</Head>

			<main className="max-w-4xl mx-auto px-4 py-8">
				<Header />
				<About />
				<Skills />
				<CodeShowcase />

				<Education />
			</main>

			<Footer />
		</div>
	);
}
