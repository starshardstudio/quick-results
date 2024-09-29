import classNames from "classnames";
import { useState } from "react";


const RESULT = {
	"victory": "Vittoria",
	"tie": "Pareggio",
	"defeat": "Sconfitta",
}

const EMOJI = {
	"victory": "🔵",
	"tie": "🟨",
	"defeat": "❌",
}


export function Matchbox({number, player}) {
	const [result, setResult] = useState("")
	const [submitted, setSubmitted] = useState(false)
	const [opponent, setOpponent] = useState("")
	
	return (
		<form
			className={classNames({
				"panel": true,
				"box": true,
				"form-flex": true,
				"fade": submitted,
				"red": result === "defeat",
				"yellow": result === "tie",
				"green": result === "victory",
			})}
			style={{maxWidth: "480px"}}
			onSubmit={e => {
				e.preventDefault()
				if(submitted || result === "" || opponent === "") {
					return
				}
				fetch(`https://ntfy.steffo.eu/webhook_some?title=${EMOJI[result]} ${player}&message=${RESULT[result]} nella partita ${number} contro ${opponent}&tags=${result},${player},${opponent}`, {method: "POST"})
					.then(() => setSubmitted(true))
			}}
		>
			<h3>
				Partita {number}
			</h3>
			<label>
				<span>Avversario</span>
				<input type={"text"} placeholder={"Gandalf"} value={opponent} onChange={e => setOpponent(e.target.value)}/>
				<span/>
			</label>
			<div className={"form-flex-choice"}>
				<span>
					Risultato
				</span>
				<div>
					<label>
						<input type={"radio"} name={"result"} disabled={submitted} onChange={e => e.target.checked && !submitted && setResult("defeat")}/> Sconfitta
					</label>
					<label>
						<input type={"radio"} name={"result"} disabled={submitted} onChange={e => e.target.checked && !submitted && setResult("tie")}/> Pareggio
					</label>
					<label>
						<input type={"radio"} name={"result"} disabled={submitted} onChange={e => e.target.checked && !submitted && setResult("victory")}/> Vittoria
					</label>
				</div>
				<span/>
			</div>
			<label>
				<span/>
				<input type={"submit"} value={"Invia"} disabled={submitted || result === "" || opponent === ""}/>
				<span/>
			</label>
		</form>
	)
}