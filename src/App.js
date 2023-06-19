// import './App.css';
import Card from './Card';
import data from "./data";
import React from "react"

function App() {

	// async function getJsonData() {
	// 	const response = await fetch("https://api.jsonbin.io/v3/b/649074778e4aa6225eb0f0ae");
	// 	const jsonData = await response.json();
	// 	return jsonData;
	// }
	const [cardList, setCardList] = React.useState(data)
	const cards = cardList.map(card => 
		<Card key={card.id} {...card} />
	);

	return (
		<>
		<h1>"Reshef of Destruction"<br />Card Gallery</h1>
		<div className="card-grid">
			{cards}
		</div>
		</>
	)
}

export default App;
