"use client";

import { Matchbox } from "@/components/matchbox.jsx";
import { Base64 } from "js-base64";


export default function Home() {
	const player = Base64.decode(window.location.hash)
	
	return player && <>
		<h1>
			{player}
		</h1>
		<main className={"chapter-1"}>
			<h2>Gironi</h2>
			<Matchbox number={"1"} player={player}/>
			<Matchbox number={"2"} player={player}/>
			<Matchbox number={"3"} player={player}/>
			<Matchbox number={"4"} player={player}/>
			<Matchbox number={"5"} player={player}/>
			<h2>Playoff</h2>
			<Matchbox number={"6"} player={player}/>
			<Matchbox number={"7"} player={player}/>
		</main>
	</>
}
