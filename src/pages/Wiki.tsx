import { useLoaderData, Link } from "react-router-dom";
import data from "../../data/chemicals.json" assert { type: "JSON" };
interface Substance {
	id: number;
	name: string;
	description: string;
	category: string;
	url: string;
}

export default function Home() {
	const substances: Substance[] = useLoaderData() as Substance[];
	console.log(substances);
	return (
		<div className="mt-5">
			<h3>Carcinogens</h3>

			{substances.map((substance: Substance) => (
				<h4>{substance.name}</h4>
			))}
		</div>
	);
}

// loader function
export const wikiLoader = async () => {
	// const res = await fetch("http://localhost:5173/data/substances.json");

	return data.chemicals;
};
