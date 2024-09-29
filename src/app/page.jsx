"use client";

import { Matchbox } from "@/components/matchbox.jsx";
import { Base64 } from "js-base64";


export default function Home() {
	const player = Base64.decode(window.location.hash)
	
	return player && <>
		<h2>
			{player}
		</h2>
		<div className={"chapter-1"}>
			<Matchbox number={"1"} player={player}/>
			<Matchbox number={"2"} player={player}/>
			<Matchbox number={"3"} player={player}/>
			<Matchbox number={"4"} player={player}/>
			<Matchbox number={"5"} player={player}/>
		</div>
	</>
}
