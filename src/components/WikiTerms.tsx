import React from "react";

interface Props {
	name: string;
	description: string;
}

export default function WikiTerm(props: Props) {
	return (
		<div className="purple-color text-dark p-3 rounded mb-4">
			<h3 className="libre-baskerville-font green-color mb-3">{props.name}</h3>
			<p className="mb-5">{props.description}</p>
		</div>
	);
}
