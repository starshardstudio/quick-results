import { default as Link } from "next/link";
import React, { Suspense } from "react";

import "@steffo/bluelib/dist/base.root.css";
import "@steffo/bluelib/dist/layouts-center.root.css";
import "@steffo/bluelib/dist/layouts-flex.root.css";
import "@steffo/bluelib/dist/classic.root.css";
import "@steffo/bluelib/dist/glass.root.css";
import "@steffo/bluelib/dist/colors-purplestar.root.css";
import "@steffo/bluelib/dist/fonts-fira-ghpages.root.css";


export default function RootLayout({ children }) {
	return <>
		<html lang={"en"}>
			<head>
				<title>Shards of Middle-Earth</title>
			</head>
			<body className={"layout-center"}>
				<Suspense>
					{children}
				</Suspense>
				<footer>
					© {new Date().getFullYear()} Stefano Pigozzi | <Link href={"https://github.com/starshardstudio/quick-results"}>Codice sorgente</Link>
				</footer>
			</body>
		</html>
	</>;
}