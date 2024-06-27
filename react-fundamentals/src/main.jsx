import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

//React.createElement
const cubos = [];
const cubo = React.createElement("div", { className: "cubo", key: i });
const titulo = React.createElement(
	"h2",
	{ className: "titulo" },
	"Hello Edit!"
);

for (var i = 0; i < 5; i++) {
	cubos.push(cubo);
}

const div = React.createElement(
	"div",
	{
		className: "main-container",
	},
	titulo,
	cubos
);

//React.createRoot
const container = document.getElementById("root");
ReactDOM.createRoot(container).render(div);